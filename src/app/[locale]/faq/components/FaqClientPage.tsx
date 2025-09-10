"use client";

import { useTranslations } from "next-intl";

export default function FaqClientPage() {
  const t = useTranslations("FaqPage");
  const faqs = ["q1", "q2", "q3"];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">{t("title")}</h1>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq} className="border-b pb-4">
            <h2 className="text-xl font-semibold">{t(`${faq}.question`)}</h2>
            <p className="text-muted-foreground mt-2">{t(`${faq}.answer`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
