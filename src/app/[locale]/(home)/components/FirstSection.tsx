import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Define the component
export default function FirstSection() {
  const t = useTranslations("HomePage");

  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      {/* Main grid container for two-column layout */}
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* Left Column: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-gradient-primary text-4xl font-bold sm:text-5xl">
            {t("heroTitle")}
          </h1>

          {/* Professional blue line */}
          <div className="mx-auto mb-6 mt-3 h-1 w-32 rounded bg-blue-600 md:mx-0" />

          <p className="mt-4 text-lg text-muted-foreground">
            {t("heroDescription")}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <Link
              href="/results"
              className="inline-block rounded-md bg-blue-600 px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
            >
              {t("resultsButton")}
            </Link>
            <Link
              href="/warnings"
              className="inline-block rounded-md bg-red-600 px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-red-700"
            >
              {t("warningsButton")}
            </Link>
          </div>
        </div>

        {/* Right Column: Image Placeholder */}
        <div className="flex items-center justify-center">
          {/* Replace this div with your Next.js Image component */}
          <div className="flex h-80 w-full items-center justify-center rounded-lg bg-card shadow-lg">
            <span className="text-muted-foreground">Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
