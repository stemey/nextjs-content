import clsx from 'clsx';

import React from 'react';

import ArrowLink from '@/components/links/ArrowLink';

export default function ComponentPage() {
  return (
    <main>
      <section>
        <div className={clsx('layout min-h-screen py-20', 'text-black')}>
          <h1>My Server page</h1>
          <ArrowLink direction='left' className='mt-2' href='/'>
            Back to Home
          </ArrowLink>
        </div>
      </section>
    </main>
  );
}
