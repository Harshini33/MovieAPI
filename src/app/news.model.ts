import {Loadable, createDefaultLoadable} from './loadable';
import { NewsActionsTypes } from './news.actions';

export interface News extends Loadable {
    // loading: boolean;
    // success: boolean;
    // error: boolean;
    title: string;
    entities: string[];
    image: string;
    Type: string;
    year: string;
    imdbId: string;
}
export function createDefaultNews(): News {
  return {
    ...createDefaultLoadable(),
    entities: [],
    title: '',
    image: '',
    Type: '',
    year: '',
    imdbId: '',
  };
}