import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, borderRadius } from '../theme';
import { SurahInfo } from '../utils/surahNames';

interface SurahCardProps {
    surah: SurahInfo;
    onPress: () => void;
}

export const SurahCard: React.FC<SurahCardProps> = ({ surah, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <View style={styles.content}>
                {/* Number badge */}
                <View style={styles.numberContainer}>
                    <View style={styles.numberBadge}>
                        <Text style={styles.numberText}>{surah.number}</Text>
                    </View>
                </View>

                {/* Surah info */}
                <View style={styles.infoContainer}>
                    <Text style={styles.englishName}>{surah.englishName}</Text>
                    <Text style={styles.translation}>{surah.englishTranslation}</Text>
                    <View style={styles.metaRow}>
                        <Text style={styles.metaText}>
                            {surah.versesCount} Verses • {surah.revelationType}
                        </Text>
                    </View>
                </View>

                {/* Arabic name */}
                <View style={styles.arabicContainer}>
                    <Text style={styles.arabicName}>{surah.arabicName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: spacing.md,
        marginVertical: spacing.sm,
        borderRadius: borderRadius.lg,
        backgroundColor: colors.backgroundCard,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(212, 175, 55, 0.15)',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.md,
    },
    numberContainer: {
        marginRight: spacing.md,
    },
    numberBadge: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    numberText: {
        color: colors.background,
        fontSize: 16,
        fontWeight: '700',
    },
    infoContainer: {
        flex: 1,
    },
    englishName: {
        color: colors.textPrimary,
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 2,
    },
    translation: {
        color: colors.textSecondary,
        fontSize: 13,
        marginBottom: 4,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    metaText: {
        color: colors.textMuted,
        fontSize: 12,
    },
    arabicContainer: {
        marginLeft: spacing.sm,
    },
    arabicName: {
        fontFamily: 'KFGQPC',
        fontSize: 22,
        color: colors.primary,
        textAlign: 'right',
    },
});
