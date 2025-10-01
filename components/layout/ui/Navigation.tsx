"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigation = () => {
  return (
    <nav
      aria-label="Hauptnavigation"
      className="bg-blue-100 sticky top-0 z-30 shadow-xl"
    >
      <ul className="flex items-center justify-center gap-4 py-2 text-sm tracking-wide">
        <NavigationLink href="/" text="Start" />
        <NavigationLink href="/uberuns" text="Über uns" />
        <NavigationLink href="/dienstleistungen" text="Dienstleistungen" />
        <NavigationLink href="/kontakt" text="Kontakt" />
        <NavigationLink href="/agbs" text="Unsere AGB's" />
      </ul>
    </nav>
  );
};

export default Navigation;

const NavigationLink = ({ href, text }: { href: string; text: string }) => {
  const path = usePathname();
  const isLinkActive = path === href;
  return (
    <li>
      <Link className={`${isLinkActive && "text-[#134D99] font-semibold"}`} href={href}>
        {text}
      </Link>
    </li>
  );
};
