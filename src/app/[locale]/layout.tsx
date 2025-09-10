import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer/footer";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
// FONT: ideiglenesen kivéve, mert a fájl hiányzik
// import localFont from "next/font/local";
// import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata.Root" });

  return {
    title: {
      default: t("defaultTitle"),
      template: `%s | ${t("defaultTitle")}`,
    },
    description: t("description"),
    icons: { icon: "/favicon.ico" },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "en-US": "/en",
        es: "/es",
        "x-default": "/en",
      },
    },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      {/* FONT: ideiglenesen kivéve a geist className-t */}
      <body className="flex min-h-screen flex-col font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
