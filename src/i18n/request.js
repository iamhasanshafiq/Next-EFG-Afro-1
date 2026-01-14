import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    locale = "en"; // ✅ SAFETY FALLBACK
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
