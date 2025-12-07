// Quran data utilities for parsing the word-by-word JSON data
import quranData from '../../assets/data/quran.json';

export interface Word {
    id: number;
    surah: string;
    ayah: string;
    word: string;
    location: string;
    text: string;
}

export interface Verse {
    surah: number;
    ayah: number;
    words: Word[];
}

// The raw JSON has keys like "1:1:1" with Word values
const quranMap = quranData as Record<string, Word>;

/**
 * Get all words for a specific verse
 */
export const getVerseWords = (surah: number, ayah: number): Word[] => {
    const words: Word[] = [];
    let wordIndex = 1;

    while (true) {
        const key = `${surah}:${ayah}:${wordIndex}`;
        const word = quranMap[key];

        if (!word) break;

        words.push(word);
        wordIndex++;
    }

    return words;
};

/**
 * Get a complete verse object with all its words
 */
export const getVerse = (surah: number, ayah: number): Verse | null => {
    const words = getVerseWords(surah, ayah);

    if (words.length === 0) return null;

    return {
        surah,
        ayah,
        words,
    };
};

/**
 * Get all verses for a specific Surah
 */
export const getSurahVerses = (surah: number): Verse[] => {
    const verses: Verse[] = [];
    let ayahNumber = 1;

    while (true) {
        const verse = getVerse(surah, ayahNumber);

        if (!verse) break;

        verses.push(verse);
        ayahNumber++;
    }

    return verses;
};

/**
 * Get the text of a complete verse (all words joined)
 */
export const getVerseText = (surah: number, ayah: number): string => {
    const words = getVerseWords(surah, ayah);
    return words.map(w => w.text).join(' ');
};

/**
 * Count total verses in a Surah
 */
export const countVersesInSurah = (surah: number): number => {
    let count = 0;
    let ayah = 1;

    while (getVerse(surah, ayah)) {
        count++;
        ayah++;
    }

    return count;
};
