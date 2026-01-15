"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ListOrdered,
  Clock3,
  Eye,
  Plus,
  ArrowRight,
  X,
  User2,
  Bookmark,
  Share2,
} from "lucide-react";

import { getBlogs } from "./api/blogs.api";
import { getCategories } from "./api/categories.api";
import { useTranslations } from "next-intl";

export default function RecentPostsSection() {
  const t = useTranslations("RecentPostsSection");

  const [categoriesApi, setCategoriesApi] = useState([]);
  const [blogsApi, setBlogsApi] = useState([]);

  const [active, setActive] = useState("all");
  const [visibleCount, setVisibleCount] = useState(3);

  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  // dialog state
  const [open, setOpen] = useState(false);
  const [activePost, setActivePost] = useState(null);

  /* ---------------- Fetch Categories ---------------- */
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await getCategories();
        const categories = res?.categories;

        if (cancelled) return;

        setCategoriesApi(Array.isArray(categories) ? categories : []);
      } catch {
        if (cancelled) return;
        setCategoriesApi([]);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  /* ---------------- Fetch Blogs ---------------- */
  useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoading(true);
      setApiError(null);

      try {
        const { blogs, error } = await getBlogs({
          category: active === "all" ? null : active,
        });

        if (cancelled) return;

        if (error) {
          setBlogsApi([]);
          setApiError(typeof error === "string" ? error : t("Error.Generic"));
        } else {
          setBlogsApi(Array.isArray(blogs) ? blogs : []);
        }
      } catch {
        if (cancelled) return;
        setBlogsApi([]);
        setApiError(t("Error.Generic"));
      } finally {
        if (!cancelled) {
          setVisibleCount(3);
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [active, t]);

  /* ---------------- Tabs ---------------- */
  const tabs = useMemo(() => {
    const categoryTabs = (categoriesApi || [])
      .map((c) => ({
        label: c?.title || t("Tabs.UntitledCategory"),
        value: c?.slug || "",
      }))
      .filter((x) => x.value);

    return [{ label: t("Tabs.All"), value: "all" }, ...categoryTabs];
  }, [categoriesApi, t]);

  /* ---------------- Map Blogs ---------------- */
  const allPosts = useMemo(() => {
    return (blogsApi || []).map((b) => {
      const idRaw = b?.uuid ?? b?.id ?? "";
      const id = String(idRaw || cryptoSafeId());

      const title = b?.title?.trim() || t("Post.Untitled");
      const content = b?.content || "";

      return {
        id,
        title,
        category: b?.category?.title || t("Post.Uncategorized"),
        readTime: b?.readingTime || t("Post.NotAvailable"),
        excerpt: makeExcerpt(stripHtml(content), 140),
        content: stripHtml(content),
        author: t("Post.Author"),
        date: formatDate(b?.createdAt, t),
        views: typeof b?.views === "number" ? b.views : 0,
        likes: typeof b?.likes === "number" ? b.likes : 0,
        image: b?.coverImage || "/images/placeholder.jpg",
      };
    });
  }, [blogsApi, t]);

  const visiblePosts = allPosts.slice(0, visibleCount);
  const canLoadMore = visibleCount < allPosts.length;

  return (
    <>
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border bg-green-900/10 text-green-900 font-semibold">
              <ListOrdered className="w-4 h-4 text-orange-500" />
              {t("Badge")}
            </div>
          </div>

          <h2 className="mt-8 text-center text-4xl font-extrabold text-gray-800">
            {t("Title")}
          </h2>

          {/* Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActive(tab.value)}
                className={
                  active === tab.value
                    ? "px-8 py-3 rounded-full bg-[#0B4E3C] text-white font-semibold"
                    : "px-8 py-3 rounded-full border text-gray-700 hover:bg-gray-50"
                }
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : visiblePosts.length > 0 ? (
              visiblePosts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  t={t}
                  onRead={() => {
                    setActivePost(post);
                    setOpen(true);
                  }}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                {apiError || t("EmptyState")}
              </div>
            )}
          </div>

          {/* Load more */}
          {!loading && canLoadMore && (
            <div className="mt-16 flex justify-center">
              <button
                type="button"
                onClick={() =>
                  setVisibleCount((p) => Math.min(p + 3, allPosts.length))
                }
                className="px-10 py-4 rounded-full border-2 text-[#0B4E3C] hover:bg-gray-50"
              >
                <Plus className="inline w-5 h-5 mr-2" />
                {t("LoadMore")}
              </button>
            </div>
          )}
        </div>
      </section>

      <ArticleDialog
        open={open}
        post={activePost}
        onClose={() => setOpen(false)}
        t={t}
      />
    </>
  );
}

/* ---------------- Card ---------------- */
function PostCard({ post, onRead, t }) {
  return (
    <div className="bg-white rounded-xl shadow border overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="h-40 w-full object-cover"
        loading="lazy"
      />

      <div className="p-5">
        <div className="flex gap-2 text-xs items-center">
          <span className="bg-green-600 text-white px-2 py-1 rounded">
            {post.category}
          </span>
          <span className="text-gray-500 flex items-center gap-1">
            <Clock3 size={12} /> {post.readTime}
          </span>
        </div>

        <h3 className="mt-3 font-bold text-gray-900">{post.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>

        <button
          type="button"
          onClick={onRead}
          className="mt-4 w-full bg-gradient-to-r from-[#0B4E3C] to-[#D67C2A] text-white py-2 rounded-full flex justify-center items-center gap-2"
        >
          {t("Post.ReadFull")}
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

/* ---------------- Dialog ---------------- */
function ArticleDialog({ open, post, onClose, t }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open || !post) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl">
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <button
              type="button"
              onClick={onClose}
              className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <X />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-5">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[320px] object-cover rounded-xl"
            />

            <div className="mt-4 flex justify-between text-sm text-gray-600">
              <span className="flex gap-2 items-center">
                <User2 size={14} />
                {post.author}
              </span>

              <span className="flex gap-2 items-center">
                <Eye size={14} />
                {post.views} {t("Post.Views")}
              </span>
            </div>

            <p className="mt-6 text-gray-700 leading-7 whitespace-pre-line">
              {post.content}
            </p>
          </div>

          <div className="px-6 py-4 border-t flex justify-between">
            <div className="flex gap-3">
              <button className="border px-4 py-2 rounded-lg flex gap-2 items-center hover:bg-gray-50">
                <Bookmark size={14} />
                {t("Dialog.Bookmark")}
              </button>

              <button className="border px-4 py-2 rounded-lg flex gap-2 items-center hover:bg-gray-50">
                <Share2 size={14} />
                {t("Dialog.Share")}
              </button>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#0B4E3C] to-[#D67C2A] text-white font-semibold"
            >
              {t("Dialog.Close")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Skeleton ---------------- */
function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl border animate-pulse h-[320px]" />
  );
}

/* ---------------- Helpers ---------------- */
function makeExcerpt(text = "", max = 140) {
  const cleaned = text.trim().replace(/\s+/g, " ");
  return cleaned.length > max ? cleaned.slice(0, max) + "…" : cleaned;
}

function formatDate(iso, t) {
  if (!iso) return t("Post.NotAvailable");
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return t("Post.NotAvailable");
  return d.toLocaleDateString();
}

function stripHtml(input = "") {
  return input.replace(/<[^>]*>/g, "");
}

function cryptoSafeId() {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
  } catch { }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
