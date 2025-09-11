import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold">{t("heroTitle")}</h1>
      <p className="text-muted-foreground">{t("heroDescription")}</p>
    </section>
  );
}
