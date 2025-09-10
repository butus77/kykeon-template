import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Copyright } from "lucide-react";

// A custom SVG for the Reddit icon as it's not in lucide-react by default
const RedditIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 20.9999C16.9706 20.9999 21 16.9705 21 11.9999C21 7.02938 16.9706 2.99994 12 2.99994C7.02944 2.99994 3 7.02938 3 11.9999C3 16.9705 7.02944 20.9999 12 20.9999Z" />
    <path d="M12 8.99994C12.5523 8.99994 13 8.55223 13 7.99994C13 7.44765 12.5523 6.99994 12 6.99994C11.4477 6.99994 11 7.44765 11 7.99994C11 8.55223 11.4477 8.99994 12 8.99994Z" />
    <path d="M16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12V15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15V12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12" />
    <path d="M16 12C16 13.6569 14.6569 15 13 15H11C9.34315 15 8 13.6569 8 12" />
  </svg>
);

// A custom SVG for Bluesky
const BskyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 12c-2.4 0-4.6-1-6.2-2.9-1.2-1.4-1.5-3.4-.8-5.1C5.7 2.4 7.3 1.2 9.1.5 11-.2 13-.2 14.9.5c1.8.7 3.4 1.9 4.1 3.5.7 1.7.4 3.7-.8 5.1-1.6 1.9-3.8 2.9-6.2 2.9Z" />
    <path d="M12 22c-2.4 0-4.6-1-6.2-2.9-1.2-1.4-1.5-3.4-.8-5.1C5.7 12.4 7.3 11.2 9.1 10.5c1.8-.7 3.8-.7 5.7 0 1.8.7 3.4 1.9 4.1 3.5.7 1.7.4 3.7-.8 5.1-1.6 1.9-3.8 2.9-6.2 2.9Z" />
  </svg>
);

export default function Footer() {
  const footerLinks = [
    { href: "/cookie-policy", text: "Cookie Policy" },
    { href: "/legal-notice", text: "Legal Notice" },
    { href: "/privacy-policy", text: "Privacy Policy" },
    { href: "/faq", text: "FAQ" },
    { href: "/drug-policy", text: "Drug Policy" },
  ];

  const socialLinks = [
    { href: "#", icon: BskyIcon, label: "Bluesky" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Youtube, label: "YouTube" },
    { href: "#", icon: RedditIcon, label: "Reddit" },
  ];
  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Left: Logo and Links */}
          <div className="flex flex-col items-center gap-6 md:items-start">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <Image
                src="/favicon.ico"
                alt="Kykeon Analytics Logo"
                width={32}
                height={32}
              />
              <span>Kykeon Analytics</span>
            </Link>

            {/* Footer Links */}
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

          {/* Right: Social Icons */}
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

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Copyright className="h-4 w-4" />
            <span>2021 Kykeon Analytics. All rights reserved.</span>
          </div>
          <button className="text-sm text-muted-foreground transition-colors hover:text-primary">
            Cookie Settings
          </button>
        </div>
      </div>
    </footer>
  );
}
