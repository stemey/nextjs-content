import { LazyText } from '@/lib/LazyText';
import React from 'react';

const mapping: Record<string, React.LazyExoticComponent<any>> = {
  text: LazyText,
};

export const getComponent = (id: string): React.LazyExoticComponent<any> => {
  return mapping[id];
};

export const hasComponent = (id: string) => {
  return id in mapping;
};
