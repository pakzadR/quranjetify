import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';
import { Verse } from '../utils/quranData';

interface VerseDisplayProps {
    verse: Verse;
    showVerseNumber?: boolean;
}

export const VerseDisplay: React.FC<VerseDisplayProps> = ({
    verse,
    showVerseNumber = true
}) => {
    // Combine all words into a single verse text
    const verseText = verse.words.map(w => w.text).join(' ');

    return (
        <View style={styles.container}>
            <View style={styles.verseContent}>
                {/* Arabic text - RTL flow */}
                <Text style={styles.arabicText}>
                    {verseText}
                </Text>
            </View>

            {showVerseNumber && (
                <View style={styles.verseNumberContainer}>
                    <View style={styles.verseNumberBadge}>
                        <Text style={styles.verseNumber}>{verse.ayah}</Text>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: colors.divider,
    },
    verseContent: {
        flex: 1,
    },
    arabicText: {
        fontFamily: 'KFGQPC',
        fontSize: 26,
        lineHeight: 52,
        color: colors.textArabic,
        textAlign: 'right',
    },
    verseNumberContainer: {
        alignItems: 'flex-end',
        marginTop: spacing.sm,
    },
    verseNumberBadge: {
        backgroundColor: colors.primary,
        paddingHorizontal: spacing.sm,
        paddingVertical: 4,
        borderRadius: 12,
        minWidth: 32,
        alignItems: 'center',
    },
    verseNumber: {
        color: colors.background,
        fontSize: 14,
        fontWeight: '600',
    },
});
