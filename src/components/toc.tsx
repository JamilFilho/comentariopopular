'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { AlignLeft } from 'lucide-react';

interface TocProps {
  doc: {
    title: string;
    slug: string;
  };
}

type TocItem = {
  title: string;
  href: string;
  level: 2 | 3;
};

const Toc: React.FC<TocProps> = ({ doc }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentPath, setCurrentPath] = useState('');
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const updatePath = () => {
      setCurrentPath(`${pathname}${window.location.hash}`);
    };

    const updateItems = () => {
      const headings = Array.from(
        document.querySelectorAll('article h2[id], article h3[id]')
      ) as HTMLHeadingElement[];

      const nextItems: TocItem[] = headings.map((heading) => ({
        title: heading.textContent?.trim() || '',
        href: `${pathname}#${heading.id}`,
        level: heading.tagName === 'H3' ? 3 : 2,
      }));

      setItems(nextItems.filter((item) => item.title.length > 0));
    };

    updatePath(); // Set initial value
    updateItems();
    window.addEventListener('hashchange', updatePath);
    window.addEventListener('load', updateItems);

    return () => {
      window.removeEventListener('hashchange', updatePath);
      window.removeEventListener('load', updateItems);
    };
  }, [pathname, searchParams, doc.slug]); // Reacts to URL changes

  if (items.length === 0) return null;

  return (
    <aside className="fixed right-0 hidden xl:block w-64 p-6 top-16 border-l border-[var(--color-border)] h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="top-0 pb-2">
        <h2 className="flex flex-1 gap-2 item-center font-semibold text-[var(--color)]">
          <AlignLeft size={19} />
          Nesta página
        </h2>
      </div>
      <nav className="mt-4">
        <ul className="space-y-3">
          {items.map((item, index) => {
            const isActive = currentPath === item.href;

            return (
              <li
                key={index}
                className={`group ${item.level === 3 ? 'ml-4 text-sm' : ''}`}
              >
                <Link
                  href={item.href}
                  className={`transition-colors flex items-center ${
                    isActive
                      ? 'text-primary font-bold'
                      : 'text-gray-700 dark:text-gray-200 font-normal'
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Toc;
