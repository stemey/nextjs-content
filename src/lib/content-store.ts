import fs from 'fs';
import { join } from 'path';

export interface Section {
  type: string;
  props: Record<string, any>;
}

const listContents = (): string[] => {
  try {
    const fullPath = join(__dirname, '..', '..', '..', '..', '..', 'content');
    const stat = fs.readdirSync(fullPath);
    console.log('stat ', stat);
    return stat.map((s) => s.substring(0, s.length - '.json'.length));
  } catch (e) {
    return [];
  }
};

const fetchContent = (path: string): Section[] | undefined => {
  try {
    const fullPath = join(__dirname, '..', '..', '..', '..', '..', 'content');
    const file = fullPath + '/' + path + '.json';
    console.log('stat ', path, fullPath);
    const stat = fs.lstatSync(file);
    if (stat.isFile()) {
      const content = fs.readFileSync(file);
      return JSON.parse(content.toString());
    } else {
      console.log('stat is not a file ' + file);
      return undefined;
    }
  } catch (e) {
    console.error(e);
    return undefined;
  }
};
export const contentStore = {
  fetchContent,
  listContents,
};
