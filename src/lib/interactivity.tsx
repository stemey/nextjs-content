'use client';

import { getComponent, hasComponent } from '@/lib/get-component';
import React from 'react';

interface Personalization {
  path: string;
  idx: number;
  type: string;
  props: any;
}

const personalizations: Personalization[] = [];
(window as any).perso = personalizations;

export const Interactivity = (props: {
  path: string;
  index: number;
  children: React.ReactNode;
}) => {
  const current = personalizations.find((p) => {
    const found =
      p.path === props.path && p.idx === props.index && hasComponent(p.type);
    return found;
  });

  if (current) {
    return React.createElement(getComponent(current.type), current.props);
  }
  return <>{props.children}</>;
};
