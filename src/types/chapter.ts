export type Chapter = {
	mangaId: string;
	slug: string;
	pages: number;
	chapterNumber: number;
	chapterTitle: string;

	/**
	 * Refers to scanlation group, source name if the source is a scanlation group, etc.
	 */
	author: string;

	// Date type serializes to string
	date: string;
};
