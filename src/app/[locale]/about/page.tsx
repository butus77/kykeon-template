import { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

// Generate dynamic, translated metadata
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

// Render the page using translated content
export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-16 text-center">
          <h1 className="text-gradient-primary mb-4 text-5xl font-bold">
            {t("mainTitle")}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {t("mainSubtitle")}
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 border-b border-border pb-2 text-3xl font-semibold">
            {t("teamTitle")}
          </h2>
          <p className="text-lg leading-relaxed">{t("teamText")}</p>
        </section>

        <section>
          <h2 className="mb-10 border-b border-border pb-2 text-3xl font-semibold">
            {t("techTitle")}
          </h2>
          <div className="grid gap-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-primary">
                  {t("nmrTitle")}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {t("nmrText")}
                </p>
              </div>
              <Image
                src="https://via.placeholder.com/600x400"
                alt={t("nmrAlt")}
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>

            <div className="grid items-center gap-8 md:grid-cols-2">
              <Image
                src="https://via.placeholder.com/600x400"
                alt={t("lcmsAlt")}
                width={600}
                height={400}
                className="rounded-lg shadow-md md:order-last"
              />
              <div>
                <h3 className="mb-4 text-2xl font-bold text-primary">
                  {t("lcmsTitle")}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {t("lcmsText")}
                </p>
              </div>
            </div>

            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-primary">
                  {t("ftirTitle")}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {t("ftirText")}
                </p>
              </div>
              <Image
                src="https://via.placeholder.com/600x400"
                alt={t("ftirAlt")}
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>

            <div className="grid items-center gap-8 md:grid-cols-2">
              <Image
                src="https://via.placeholder.com/600x400"
                alt={t("focusAlt")}
                width={600}
                height={400}
                className="rounded-lg shadow-md md:order-last"
              />
              <div>
                <h3 className="mb-4 text-2xl font-bold text-primary">
                  {t("focusTitle")}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {t("focusText")}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-16 rounded-lg border border-border bg-card p-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary">
            {t("serviceTitle")}
          </h2>
          <p className="mx-auto max-w-4xl text-lg text-muted-foreground">
            {t("serviceText")}
          </p>
        </section>
      </main>
    </div>
  );
}
