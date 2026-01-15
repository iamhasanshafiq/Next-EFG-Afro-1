import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/app/[locale]/components";

const SUPPORTED_LOCALES = ["en", "ur", "ar", "fr", "es", "zh"];

export default async function LocaleLayout({ children, params }) {
  // ✅ Next.js 16: params async hain
  const { locale } = await params;

  if (!SUPPORTED_LOCALES.includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === "ur" || locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider
          key={locale}          // 🔥 MOST IMPORTANT
          locale={locale}
          messages={messages}   // 🔥 REQUIRED
        >
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
