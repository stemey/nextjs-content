import React from 'react';
import { contentStore } from '@/lib/content-store';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  const links = contentStore.listContents().map((key) => ({
    path: `/content/${key}`,
    label: key,
  }));

  return (
    <div>
      <ul>
        {links.map((l) => (
          <Link key={l.path} href={l.path}>
            {l.label}
          </Link>
        ))}
      </ul>
      {children}
    </div>
  );
}
