// src/components/navbar/LanguageSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FlagIcon from "@/components/ui/FlagIcon";
import { useState } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
    setIsLangMenuOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
        className="nav-link nav-link-inactive"
      >
        <FlagIcon country={locale === "en" ? "GB" : "ES"} className="mr-2 h-[24px] w-[30px]" />
        {locale.toUpperCase()}
        <motion.div animate={{ rotate: isLangMenuOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isLangMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-34 absolute right-0 mt-2 rounded-md border border-dropdown-border bg-dropdown-bg text-foreground shadow-lg"
          >
            <button className="dropdown-item flex w-full items-center" onClick={() => switchLocale("en")}>
              <FlagIcon country="GB" className="mr-2 h-[22px] w-[33px]" /> English
            </button>
            <hr className="border-dropdown-separator" />
            <button className="dropdown-item flex w-full items-center" onClick={() => switchLocale("es")}>
              <FlagIcon country="ES" className="mr-2 h-[22px] w-[33px]" /> Spanish
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

