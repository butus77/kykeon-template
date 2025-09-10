"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, NavLink as NavLinkType } from "./nav-links";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";

const DesktopNavbar = () => {
  const t = useTranslations("Navbar");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null); // Create a ref for the nav container

  const handleDropdownToggle = (titleKey: string) => {
    setOpenDropdown(openDropdown === titleKey ? null : titleKey);
    setOpenSubDropdown(null);
  };

  const handleSubDropdownToggle = (titleKey: string) => {
    setOpenSubDropdown(openSubDropdown === titleKey ? null : titleKey);
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  // Effect to handle clicks outside the navigation
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        handleLinkClick(); // Close dropdowns if click is outside
      }
    };

    // Add event listener only when a dropdown is open
    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]); // Rerun effect when openDropdown changes

  const renderNavLinks = (links: NavLinkType[]) => {
    return links.map((link) => {
      if (link.isExternal) {
        return (
          <a
            key={link.titleKey}
            href={link.href as string}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "nav-link",
              link.isActive ? "nav-link-active" : "nav-link-inactive",
            )}
          >
            {t(link.titleKey)}
          </a>
        );
      }
      if (link.isDropdown) {
        const isOpen = openDropdown === link.titleKey;
        return (
          <div key={link.titleKey} className="relative">
            <button
              onClick={() => handleDropdownToggle(link.titleKey)}
              className="nav-link nav-link-inactive"
            >
              {t(link.titleKey)}{" "}
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-48 rounded-md border border-dropdown-border bg-dropdown-bg shadow-lg"
                >
                  {link.sublinks && renderDropdownItems(link.sublinks)}
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
          className={cn(
            "nav-link",
            link.isActive ? "nav-link-active" : "nav-link-inactive",
          )}
        >
          {t(link.titleKey)}
        </Link>
      );
    });
  };

  const renderDropdownItems = (links: NavLinkType[]) => {
    return links.map((link) => {
      if (link.isExternal) {
        return (
          <a
            key={link.titleKey}
            href={link.href as string}
            target="_blank"
            rel="noopener noreferrer"
            className="dropdown-item"
            onClick={handleLinkClick}
          >
            {t(link.titleKey)}
          </a>
        );
      }
      if (link.isDropdown) {
        const isSubOpen = openSubDropdown === link.titleKey;
        return (
          <div key={link.titleKey} className="relative">
            <button
              onClick={() => handleSubDropdownToggle(link.titleKey)}
              className="dropdown-item flex w-full items-center justify-between"
            >
              {t(link.titleKey)}
              <motion.div
                animate={{ rotate: isSubOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="h-4 w-4" />
              </motion.div>
            </button>
            <AnimatePresence>
              {isSubOpen && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="absolute left-full top-0 ml-1 w-48 rounded-md border border-dropdown-border bg-dropdown-bg shadow-lg"
                >
                  {link.sublinks && renderDropdownItems(link.sublinks)}
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
          className="dropdown-item"
          onClick={handleLinkClick}
        >
          {t(link.titleKey)}
        </Link>
      );
    });
  };

  return (
    <div className="hidden w-full items-center justify-between md:flex">
      {/* Left Section */}
      <div className="flex items-center">
        <Link href="/" className="ml-4">
          <Image
            src="/favicon.ico"
            alt="Kykeon Analytics Logo"
            width={58}
            height={58}
          />
        </Link>
      </div>
      {/* Middle Navigation Links (Desktop) */}
      <div ref={navRef} className="flex items-center space-x-2">
        {" "}
        {/* Attach ref here */}
        {renderNavLinks(navLinks)}
      </div>
      {/* Right Section (Desktop) */}
      <div className="flex items-center">
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default DesktopNavbar;
