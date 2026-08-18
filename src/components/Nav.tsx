"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/home", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Nav(){
    const pathname = usePathname();

    return(
        <header className = "sticky top-0 z-40 border-b border-ink/8 bg-canvas/80 backdrop-blur-xl">
            <div className = "mx-auto flex max-w-5xl flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-4">
                <Link
                    href = "/home"
                    className = "group inline-flex items-baseline gap-2 text-base font-semibold tracking-tight"
                >
                    <span className = "relative">
                        Kamilla Mamatova
                        <span className = "absolute -bottom-1 left-0 h-[2px] w-0 bg-petal transition-all group-hover:w-full" />
                    </span>
                    <span className = "text-ink/45 text-xs font-medium">✿ SWE</span>
                </Link>

                <nav aria-label = "Primary">
                    <ul className = "flex items-center justify-between gap-1 rounded-full border border-ink/8 bg-white/35 p-1 sm:justify-start">
                        {links.map((l) => (
                            <li key = {l.href}>
                                <Link
                                    href = {l.href}
                                    aria-current={pathname === l.href ? "page" : undefined}
                                    className = {`block rounded-full px-3 py-1.5 text-xs transition sm:text-sm ${pathname === l.href ? "bg-petal/35 text-ink shadow-sm" : "text-ink/65 hover:bg-white/60 hover:text-ink"}`}
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
