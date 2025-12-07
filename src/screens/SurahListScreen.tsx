import React, { useCallback } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    StatusBar,
    Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { SurahCard } from '../components';
import { surahList, SurahInfo } from '../utils/surahNames';
import { colors, spacing } from '../theme';
import { SurahListNavigationProp } from '../navigation/types';

export const SurahListScreen: React.FC = () => {
    const navigation = useNavigation<SurahListNavigationProp>();

    const handleSurahPress = useCallback((surah: SurahInfo) => {
        navigation.navigate('SurahReading', {
            surahNumber: surah.number,
            surahName: surah.englishName,
            arabicName: surah.arabicName,
        });
    }, [navigation]);

    const renderItem = useCallback(({ item }: { item: SurahInfo }) => (
        <SurahCard surah={item} onPress={() => handleSurahPress(item)} />
    ), [handleSurahPress]);

    const keyExtractor = useCallback((item: SurahInfo) =>
        item.number.toString(),
        []);

    const ListHeader = () => (
        <View style={styles.header}>
            <View style={styles.headerGradient}>
                <Text style={styles.headerTitle}>Quranjetify</Text>
                <Text style={styles.headerSubtitle}>القرآن الكريم</Text>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>114</Text>
                    <Text style={styles.statLabel}>Surahs</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>30</Text>
                    <Text style={styles.statLabel}>Juz</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>6236</Text>
                    <Text style={styles.statLabel}>Ayat</Text>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <StatusBar barStyle="light-content" backgroundColor={colors.background} />
            <FlatList
                data={surahList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ListHeaderComponent={ListHeader}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                initialNumToRender={15}
                maxToRenderPerBatch={10}
                windowSize={10}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    listContent: {
        paddingBottom: spacing.xxl,
    },
    header: {
        paddingBottom: spacing.lg,
    },
    headerGradient: {
        paddingVertical: spacing.xl,
        paddingHorizontal: spacing.lg,
        alignItems: 'center',
        marginHorizontal: spacing.md,
        marginTop: spacing.md,
        borderRadius: 20,
        backgroundColor: colors.primary,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: '800',
        color: colors.background,
        letterSpacing: 1,
    },
    headerSubtitle: {
        fontFamily: 'KFGQPC',
        fontSize: 28,
        color: 'rgba(0, 0, 0, 0.7)',
        marginTop: spacing.xs,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacing.lg,
        paddingHorizontal: spacing.lg,
    },
    statItem: {
        alignItems: 'center',
        flex: 1,
    },
    statNumber: {
        fontSize: 24,
        fontWeight: '700',
        color: colors.primary,
    },
    statLabel: {
        fontSize: 12,
        color: colors.textMuted,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginTop: 2,
    },
    statDivider: {
        width: 1,
        height: 30,
        backgroundColor: colors.divider,
    },
});
