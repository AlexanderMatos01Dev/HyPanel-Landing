import React, { useEffect, useState } from 'react';

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%' }
    );

    headings.forEach((heading) => {
      const id = heading.slug;
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
      <h2 className="text-lg font-semibold text-white mb-4">Table of Contents</h2>
      <ul className="space-y-3 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.slug}
            style={{ paddingLeft: `${(heading.depth - 1) * 1}rem` }}
          >
            <a
              href={`#${heading.slug}`}
              className={`block transition-colors duration-200 ${
                activeId === heading.slug
                  ? 'text-[#4DA6FF] font-medium'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
