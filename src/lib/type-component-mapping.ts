import { Teaser } from '@/lib/Teaser';
import { Text } from '@/lib/Text';

export const typeComponentMapping: Record<
  string,
  React.FunctionComponent<any>
> = {
  text: Text,
  teaser: Teaser,
};
