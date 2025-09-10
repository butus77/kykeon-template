// src/components/navbar/index.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import LanguageSwitcher from "./LanguageSwitcher";
import { ThemeToggle } from "../theme-toggle"; // ha nincs ilyen komponensed, ezt kommentezd ki

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) setHidden(true);
      else setHidden(false);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((s) => !s);

  return (
    <nav
      className={cn(
        "sticky top-[15px] z-50 mx-4 my-4 rounded-[25px] bg-nav p-4 py-2 text-nav-foreground shadow-md transition-transform duration-300 ease-in-out",
        { "-translate-y-[150%] transform": hidden && !isMobileMenuOpen },
      )}
    >
      <div className="flex items-center justify-between">
        {/* Desktop */}
        <div className="hidden w-full md:flex">
          <DesktopNavbar />
        </div>

        {/* Opcionális témaváltó */}
        <ThemeToggle />

        {/* Mobile */}
        <div className="flex w-full items-center justify-between md:hidden">
          <div className="flex items-center">
            <Image src="/favicon.ico" alt="Project Logo" width={48} height={48} />
          </div>
          <div className="relative left-[20px] flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              aria-label="Toggle mobile menu"
              className="rounded-md p-2 text-primary transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
          >
            <MobileNavbar />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

