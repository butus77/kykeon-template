import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import FirstSection from "@/app/[locale]/(home)/components/FirstSection";
import AnimatedBackground from "@/components/AnimatedBackground";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "HomePage" });
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function Home() {
  return (
    <main>
      <AnimatedBackground />
      <FirstSection />
    </main>
  );
}