import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Copyright } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { href: "/about", text: "About" },
    { href: "/privacy-policy", text: "Privacy Policy" },
    { href: "/terms", text: "Terms of Service" },
    { href: "/contact", text: "Contact" },
  ];

  const socialLinks = [
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Youtube, label: "YouTube" },
  ];

  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center gap-6 md:items-start">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <Image src="/favicon.ico" alt="Project Logo" width={32} height={32} />
              <span>Project Name</span>
            </Link>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center md:justify-start">
              {footerLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Copyright className="h-4 w-4" />
            <span>© 2024 Project Name. All rights reserved.</span>
          </div>
          <button className="text-sm text-muted-foreground transition-colors hover:text-primary">
            Cookie Settings
          </button>
        </div>
      </div>
    </footer>
  );
}
