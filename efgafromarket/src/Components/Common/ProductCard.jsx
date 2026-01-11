"use client";
import { useEffect, useState } from "react";
import { Mail, X } from "lucide-react";
import { createGuestInquiry } from "../products/api/inquiries.api";

function ProductCard({ product }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="group relative bg-white rounded-2xl border border-gray-100 hover:ring-2 hover:ring-[#055440] hover:border-transparent shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* BADGES */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-[#28a745] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-md">
            Organic
          </span>
          <span className="bg-[#e67e22] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-md">
            Premium
          </span>
        </div>

        {/* IMAGE */}
        <div className="relative h-40 w-full bg-[#f3f5f4] overflow-hidden flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-500 scale-125"
          />
        </div>

        {/* CONTENT */}
        <div className="px-3 pb-4 pt-3">
          <h3 className="text-sm font-bold text-gray-900 mb-1 leading-tight">
            {product.name}
          </h3>

          <p className="text-[11px] text-gray-500 italic mb-4">
            Origin: {product.origin}
          </p>

          <button
            onClick={() => setOpen(true)}
            className="w-full flex items-center justify-center gap-2 bg-[#055440] hover:bg-[#033C31] text-white py-2 rounded-full text-xs font-semibold transition-colors duration-300 cursor-pointer"
          >
            <Mail size={14} />
            Inquiry
          </button>
        </div>
      </div>

      {/* Dialog */}
      <InquiryDialog
        open={open}
        onClose={() => setOpen(false)}
        product={product}
      />
    </>
  );
}

export default ProductCard;

/* --------------------- Dialog --------------------- */
function InquiryDialog({ open, onClose, product }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    qty: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);

  useEffect(() => {
    if (!open) return;

    setFormError(null);
    setFormSuccess(null);

    // Prefill message with product name
    setForm((prev) => ({
      ...prev,
      message: `I am interested in ${
        product?.name || "this product"
      }. Please send me more information about pricing, availability, and shipping options.`,
    }));

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose, product?.name]);

  if (!open) return null;

  const update = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError(null);
    setFormSuccess(null);

    // ✅ productId must exist (prefer numeric id)
    const rawId = product?.id ?? product?.productId ?? null;
    const productId = rawId != null ? Number(rawId) : null;

    if (!productId || Number.isNaN(productId)) {
      setFormError("Product ID is missing or invalid.");
      return;
    }

    if (!form.name || !form.email || !form.phone || !form.qty || !form.message) {
      setFormError("Please fill all fields.");
      return;
    }

    // ✅ quantity must be number
    const quantity = Number(String(form.qty).replace(/[^\d.]/g, ""));
    if (!quantity || Number.isNaN(quantity)) {
      setFormError("Quantity must be a number (example: 100).");
      return;
    }

    setSubmitting(true);

    const payload = {
      productId,
      inquirerName: form.name.trim(),
      inquirerEmail: form.email.trim(),
      inquirerPhone: form.phone.trim(),
      inquirerCompany: "",
      inquirerCountry: "",
      quantity,
      unit: "pcs",
      currency: "USD",
      message: form.message.trim(),
    };

    const { inquiry, error } = await createGuestInquiry(payload);

    if (error) {
      setSubmitting(false);
      setFormError(error);
      return;
    }

    setSubmitting(false);
    setFormSuccess("Enquiry sent successfully!");

    // close after small delay (optional)
    setTimeout(() => {
      onClose();
      setForm({
        name: "",
        email: "",
        phone: "",
        qty: "",
        message: "",
      });
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={submitting ? undefined : onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h3 className="text-2xl font-extrabold text-gray-900">
            Product Enquiry
          </h3>

          <button
            onClick={submitting ? undefined : onClose}
            className="h-10 w-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
            aria-label="Close"
            disabled={submitting}
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="px-6 py-5">
          {/* status */}
          {(formError || formSuccess) && (
            <div
              className={`mb-5 rounded-xl px-4 py-3 text-sm font-semibold ${
                formError
                  ? "bg-red-50 text-red-700 border border-red-200"
                  : "bg-green-50 text-green-700 border border-green-200"
              }`}
            >
              {formError || formSuccess}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Your Name
              </label>
              <input
                value={form.name}
                onChange={update("name")}
                type="text"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#055440]/30 focus:border-[#055440]"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Email Address
              </label>
              <input
                value={form.email}
                onChange={update("email")}
                type="email"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#055440]/30 focus:border-[#055440]"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Phone Number
              </label>
              <input
                value={form.phone}
                onChange={update("phone")}
                type="tel"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#055440]/30 focus:border-[#055440]"
                placeholder="Enter phone number"
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Quantity Required
              </label>
              <input
                value={form.qty}
                onChange={update("qty")}
                type="text"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#055440]/30 focus:border-[#055440]"
                placeholder="e.g., 100"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={update("message")}
                rows={6}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#055440]/30 focus:border-[#055440] resize-none"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-5 border-t border-gray-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={submitting}
              className="px-6 py-2.5 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition disabled:opacity-60"
            >
              Close
            </button>

            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2.5 rounded-full bg-[#055440] hover:bg-[#033C31] text-white font-semibold transition disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Enquiry"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
