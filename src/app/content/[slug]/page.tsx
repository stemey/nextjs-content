import React from 'react';

import { contentStore } from '@/lib/content-store';
import { typeComponentMapping } from '@/lib/type-component-mapping';
import { Interactivity } from '@/lib/interactivity';

export default function ComponentPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log('slug', params.slug);

  const sections = contentStore.fetchContent(params.slug);
  if (!sections || sections.length == 0) {
    return (
      <main>
        <section>404</section>
      </main>
    );
  }
  const children = sections.map((s, idx) => {
    const component = typeComponentMapping[s.type];

    const comp = React.createElement(component, { key: idx, ...s.props });

    return <Interactivity path={params.slug} index={idx} key={idx}>{comp}</Interactivity>;
  });

  return (
    <main>
      <section>{children}</section>
    </main>
  );
}
