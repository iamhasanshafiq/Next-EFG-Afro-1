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
  Heart,
  Bookmark,
  Share2,
} from "lucide-react";

import { getBlogs } from "./api/blogs.api";
import { getCategories } from "./api/categories.api";

export default function RecentPostsSection() {
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
    let mounted = true;

    (async () => {
      const { categories } = await getCategories();
      if (!mounted) return;
      setCategoriesApi(Array.isArray(categories) ? categories : []);
    })();

    return () => {
      mounted = false;
    };
  }, []);

  /* ---------------- Fetch Blogs ---------------- */
  useEffect(() => {
    let mounted = true;

    (async () => {
      setLoading(true);

      const { blogs, error } = await getBlogs({
        category: active === "all" ? null : active,
      });

      if (!mounted) return;

      if (error) {
        setBlogsApi([]);
        setApiError(error);
      } else {
        setBlogsApi(Array.isArray(blogs) ? blogs : []);
        setApiError(null);
      }

      setVisibleCount(3);
      setLoading(false);
    })();

    return () => {
      mounted = false;
    };
  }, [active]);

  /* ---------------- Tabs ---------------- */
  const tabs = useMemo(() => {
    return [
      { label: "All Articles", value: "all" },
      ...categoriesApi.map((c) => ({
        label: c.title,
        value: c.slug,
      })),
    ];
  }, [categoriesApi]);

  /* ---------------- Map Blogs ---------------- */
  const allPosts = useMemo(() => {
    return blogsApi.map((b) => ({
      id: b.uuid || b.id,
      title: b.title,
      category: b?.category?.title || "Uncategorized",
      readTime: b.readingTime || "—",
      excerpt: makeExcerpt(b.content, 140),
      content: b.content,
      author: "Super Admin",
      date: formatDate(b.createdAt),
      views: b.views ?? 0,
      likes: b.likes ?? 0,
      image: b.coverImage || "/images/placeholder.jpg",
    }));
  }, [blogsApi]);

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
              Latest Articles
            </div>
          </div>

          <h2 className="mt-8 text-center text-4xl font-extrabold text-gray-800">
            Recent Posts
          </h2>

          {/* Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {tabs.map((t) => (
              <button
                key={t.value}
                onClick={() => setActive(t.value)}
                className={
                  active === t.value
                    ? "px-8 py-3 rounded-full bg-[#0B4E3C] text-white font-semibold"
                    : "px-8 py-3 rounded-full border text-gray-700"
                }
              >
                {t.label}
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
                  onRead={() => {
                    setActivePost(post);
                    setOpen(true);
                  }}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                {apiError || "No posts found"}
              </div>
            )}
          </div>

          {/* Load more */}
          {!loading && canLoadMore && (
            <div className="mt-16 flex justify-center">
              <button
                onClick={() =>
                  setVisibleCount((p) => Math.min(p + 3, allPosts.length))
                }
                className="px-10 py-4 rounded-full border-2 text-[#0B4E3C]"
              >
                <Plus className="inline w-5 h-5 mr-2" />
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Dialog */}
      <ArticleDialog open={open} post={activePost} onClose={() => setOpen(false)} />
    </>
  );
}

/* ---------------- Card ---------------- */
function PostCard({ post, onRead }) {
  return (
    <div className="bg-white rounded-xl shadow border overflow-hidden">
      <img src={post.image} className="h-40 w-full object-cover" />

      <div className="p-5">
        <div className="flex gap-2 text-xs">
          <span className="bg-green-600 text-white px-2 py-1 rounded">
            {post.category}
          </span>
          <span className="text-gray-500 flex items-center gap-1">
            <Clock3 size={12} /> {post.readTime}
          </span>
        </div>

        <h3 className="mt-3 font-bold">{post.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>

        <button
          onClick={onRead}
          className="mt-4 w-full bg-gradient-to-r from-[#0B4E3C] to-[#D67C2A] text-white py-2 rounded-full flex justify-center items-center gap-2"
        >
          Read Full Article
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}


/* ---------------- Dialog ---------------- */
function ArticleDialog({ open, post, onClose }) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open || !post) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Modal wrapper */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl">

          {/* ===== Header (fixed) ===== */}
          <div className="flex justify-between items-center px-6 py-4 border-b shrink-0">
            <h3 className="text-xl font-bold text-gray-900">
              {post.title}
            </h3>
            <button
              onClick={onClose}
              className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <X />
            </button>
          </div>

          {/* ===== Scrollable Content ===== */}
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
                {post.views} views
              </span>
            </div>

            <p className="mt-6 text-gray-700 leading-7 whitespace-pre-line">
              {post.content}
            </p>
          </div>

          {/* ===== Footer (fixed) ===== */}
          <div className="px-6 py-4 border-t flex gap-3 justify-between shrink-0">
            <div className="flex gap-3">
              <button className="border px-4 py-2 rounded-lg flex gap-2 items-center hover:bg-gray-50">
                <Bookmark size={14} />
                Bookmark
              </button>

              <button className="border px-4 py-2 rounded-lg flex gap-2 items-center hover:bg-gray-50">
                <Share2 size={14} />
                Share
              </button>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#0B4E3C] to-[#D67C2A] text-white font-semibold"
            >
              Close
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
  return text.length > max ? text.slice(0, max) + "…" : text;
}

function formatDate(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString();
}
