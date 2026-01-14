import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ar", "zh", "fr", "es"], // 👈 ar MUST be here
  defaultLocale: "en",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
