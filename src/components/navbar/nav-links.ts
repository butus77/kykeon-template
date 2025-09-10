// src/components/navbar/nav-links.ts

import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";

// This correctly infers the complete, complex type for the href prop,
type AppPath = ComponentProps<typeof Link>["href"];

export interface NavLink {
  titleKey: string;
  href: AppPath | string;
  isDropdown?: boolean;
  isActive?: boolean;
  sublinks?: NavLink[];
  isExternal?: boolean;
}

export const navLinks: NavLink[] = [
  { titleKey: "home", href: "/" },
  {
    titleKey: "servicesShop",
    href: "https://www.kykeonlabs.com/en-US",
    isActive: true,
    isExternal: true,
  },
  {
    titleKey: "more",
    href: "#",
    isDropdown: true,
    sublinks: [
      {
        titleKey: "aboutUs",
        href: "/about",
      },
      { titleKey: "faq", href: "/faq" },
    ],
  },
];
