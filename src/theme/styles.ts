import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const typography = StyleSheet.create({
    // Arabic text styles
    arabicLarge: {
        fontFamily: 'KFGQPC',
        fontSize: 28,
        lineHeight: 56,
        color: colors.textArabic,
        textAlign: 'right',
    },
    arabicMedium: {
        fontFamily: 'KFGQPC',
        fontSize: 24,
        lineHeight: 48,
        color: colors.textArabic,
        textAlign: 'right',
    },
    arabicSmall: {
        fontFamily: 'KFGQPC',
        fontSize: 20,
        lineHeight: 40,
        color: colors.textArabic,
        textAlign: 'right',
    },

    // Latin text styles
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: colors.textPrimary,
        letterSpacing: 0.5,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.textPrimary,
    },
    body: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.textSecondary,
        lineHeight: 24,
    },
    caption: {
        fontSize: 12,
        fontWeight: '400',
        color: colors.textMuted,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.textSecondary,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});

export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
};

export const borderRadius = {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
};

export const shadows = StyleSheet.create({
    small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
    medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    large: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
        elevation: 8,
    },
    glow: {
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 6,
    },
});
