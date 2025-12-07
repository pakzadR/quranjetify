import React, { useMemo, useCallback } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { VerseDisplay } from '../components';
import { getSurahVerses, Verse } from '../utils/quranData';
import { colors, spacing, borderRadius } from '../theme';
import { SurahReadingRouteProp } from '../navigation/types';

export const SurahReadingScreen: React.FC = () => {
    const route = useRoute<SurahReadingRouteProp>();
    const { surahNumber, surahName, arabicName } = route.params;

    // Get all verses for this Surah
    const verses = useMemo(() => {
        return getSurahVerses(surahNumber);
    }, [surahNumber]);

    const renderItem = useCallback(({ item }: { item: Verse }) => (
        <VerseDisplay verse={item} />
    ), []);

    const keyExtractor = useCallback((item: Verse) =>
        `${item.surah}-${item.ayah}`,
        []);

    // Show Bismillah for all Surahs except At-Tawba (9)
    const showBismillah = surahNumber !== 9 && surahNumber !== 1;

    const ListHeader = () => (
        <View style={styles.header}>
            <View style={styles.headerGradient}>
                <Text style={styles.surahNumber}>{surahNumber}</Text>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.arabicName}>{arabicName}</Text>
                    <Text style={styles.englishName}>{surahName}</Text>
                </View>
                <Text style={styles.verseCount}>{verses.length} verses</Text>
            </View>

            {showBismillah && (
                <View style={styles.bismillahContainer}>
                    <Text style={styles.bismillah}>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</Text>
                </View>
            )}
        </View>
    );

    if (verses.length === 0) {
        return (
            <SafeAreaView style={[styles.container, styles.centered]}>
                <ActivityIndicator size="large" color={colors.primary} />
                <Text style={styles.loadingText}>Loading Surah...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container} edges={['bottom']}>
            <FlatList
                data={verses}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ListHeaderComponent={ListHeader}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContent: {
        paddingBottom: spacing.xxl,
    },
    header: {
        paddingBottom: spacing.md,
    },
    headerGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing.lg,
        marginHorizontal: spacing.md,
        marginTop: spacing.md,
        borderRadius: borderRadius.lg,
        backgroundColor: colors.primary,
    },
    surahNumber: {
        fontSize: 32,
        fontWeight: '800',
        color: 'rgba(0, 0, 0, 0.6)',
    },
    headerTextContainer: {
        alignItems: 'center',
        flex: 1,
    },
    arabicName: {
        fontFamily: 'KFGQPC',
        fontSize: 28,
        color: colors.background,
    },
    englishName: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.6)',
        marginTop: 4,
    },
    verseCount: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.5)',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    bismillahContainer: {
        paddingVertical: spacing.xl,
        paddingHorizontal: spacing.lg,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.divider,
    },
    bismillah: {
        fontFamily: 'KFGQPC',
        fontSize: 28,
        color: colors.primary,
        textAlign: 'center',
    },
    loadingText: {
        marginTop: spacing.md,
        color: colors.textSecondary,
        fontSize: 16,
    },
});
