import type { ContentRating } from './content-rating';
import type { ContentStatus } from './content-status';

export type Manga = {
	/**
	 * Refers to ID defined by source
	 */
	sourceId: string;

	/**
	 * String used as identifier when fetching from source
	 */
	slug: string;

	/**
	 * Title of manga
	 */
	title: string;

	/**
	 * Array of alternative titles for manga
	 */
	alternativeTitles: Array<string>;

	/**
	 * Author of manga
	 */
	author: string;

	/**
	 * Artist of manga
	 */
	artist: string;

	/**
	 * Synopsis of manga
	 */
	synopsis: string;

	/**
	 * Last time the source for this manga was updated. Defaults to Date.now
	 */
	updatedAt: string;

	/**
	 * Creation date of this manga
	 */
	createdAt: string;

	/**
	 * Current state of the manga
	 */
	contentStatus: ContentStatus;

	/**
	 * Maturity rating of the manga
	 */
	contentRating: ContentRating;

	/**
	 * URL to the manga
	 */
	url: string;

	/**
	 * Cover URL of the manga
	 */
	coverUrl: string;
};
