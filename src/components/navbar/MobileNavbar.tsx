// src/components/navbar/MobileNavbar.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, NavLink } from "./nav-links";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";

const baseLinkClasses =
  "block w-full text-center py-4 px-3 border-b border-dropdown-separator text-lg";

const MobileNavbar = () => {
  const t = useTranslations("Navbar");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleAccordionToggle = (titleKey: string) => {
    setOpenAccordion(openAccordion === titleKey ? null : titleKey);
  };

  const handleLinkClick = () => setOpenAccordion(null);

  const renderAccordionItems = (links: NavLink[]): JSX.Element[] =>
    links.map((link) => {
      if (link.isExternal) {
        return (
          <a
            key={link.titleKey}
            href={link.href as string}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(baseLinkClasses, link.isActive ? "nav-link-active" : "nav-link-inactive")}
            onClick={handleLinkClick}
          >
            {t(link.titleKey)}
          </a>
        );
      }
      if (link.isDropdown) {
        const isOpen = openAccordion === link.titleKey;
        return (
          <div key={link.titleKey} className="border-none">
            <button
              onClick={() => handleAccordionToggle(link.titleKey)}
              className={cn(baseLinkClasses, "flex items-center justify-center gap-2 hover:text-nav-link-hover-text")}
            >
              {t(link.titleKey)}
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-nav-background overflow-hidden"
                >
                  {link.sublinks && renderAccordionItems(link.sublinks)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      }
      return (
        <Link
          key={link.titleKey}
          href={link.href}
          className={cn(baseLinkClasses, link.isActive ? "nav-link-active" : "nav-link-inactive")}
          onClick={handleLinkClick}
        >
          {t(link.titleKey)}
        </Link>
      );
    });

  return (
    <div className="mt-4 text-lg md:hidden">
      <div className="w-full">{renderAccordionItems(navLinks)}</div>
    </div>
  );
};

export default MobileNavbar;

