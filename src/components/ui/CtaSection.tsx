"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check, Copy } from "lucide-react";

interface CtaSectionProps {
  title: string;
  text: string;
  email: string;
}

export default function CtaSection({ title, text, email }: CtaSectionProps) {
  const t = useTranslations("CtaSection");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <section className="mt-16 rounded-lg border border-border bg-card p-8 text-center">
      <h2 className="mb-4 text-3xl font-bold text-primary">{title}</h2>

      <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
        {text}
      </p>

      <div className="mx-auto inline-flex max-w-full items-center justify-center rounded-md border border-border bg-background p-2">
        <span className="truncate px-4 font-mono text-lg text-foreground">
          {email}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Copy email to clipboard"
        >
          {isCopied ? (
            <Check className="h-5 w-5" />
          ) : (
            <Copy className="h-5 w-5" />
          )}
          <span className="hidden sm:inline">
            {isCopied ? t("copied") : t("copy")}
          </span>
        </button>
      </div>
    </section>
  );
}
