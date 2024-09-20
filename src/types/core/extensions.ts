import type { Chapter } from './chapter';
import type { Manga } from './manga';

/**
 * Type used to return a list of manga with minimal details
 */
export type CollectionManga = Pick<Manga, 'sourceId' | 'slug' | 'title' | 'coverUrl'>;

/**
 * Type that defines a whole manga and its chapters
 */
export type DisplayManga = Manga & {
	chapters: Array<Chapter>;
	tags: Array<string>;
};
