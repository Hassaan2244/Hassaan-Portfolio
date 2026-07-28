"use client";

import { useEffect, useState } from "react";
import { featuredProjects } from "@/content/featured";

const navItems = [
  { id: "hero", label: "Top" },
  { id: "featured", label: "Work" },
  ...featuredProjects.map((p, i) => ({
    id: p.slug,
    label: `${String(i + 1).padStart(2, "0")} ${p.title.split(" ")[0]}`,
  })),
  { id: "personal", label: "AI" },
  { id: "experience", label: "Exp" },
  { id: "connect", label: "Contact" },
];

/**
 * Desktop signature: sticky vertical index that tracks the active band.
 * mix-blend-difference keeps it legible on ink and paper.
 */
export function WorkIndex() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const ids = navItems.map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.2, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="pointer-events-none fixed top-1/2 right-3 z-[60] hidden -translate-y-1/2 mix-blend-difference xl:block 2xl:right-6"
    >
      <ul className="pointer-events-auto flex flex-col items-end gap-2.5 text-white">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`group flex items-center gap-3 text-right transition-opacity duration-200 ${
                  isActive ? "opacity-100" : "opacity-40 hover:opacity-85"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="font-display text-[0.7rem] tracking-[0.14em] uppercase">
                  {item.label}
                </span>
                <span
                  aria-hidden="true"
                  className={`block h-px bg-current transition-all duration-300 ${
                    isActive ? "w-6" : "w-2.5 group-hover:w-4"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
