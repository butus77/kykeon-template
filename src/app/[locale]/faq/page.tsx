import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import FaqClientPage from "./components/FaqClientPage";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "FaqPage" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default function FAQPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <FaqClientPage />
    </main>
  );
}
