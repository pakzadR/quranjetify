import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
    SurahList: undefined;
    SurahReading: {
        surahNumber: number;
        surahName: string;
        arabicName: string;
    };
};

export type SurahListNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SurahList'>;
export type SurahReadingNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SurahReading'>;

export type SurahReadingRouteProp = RouteProp<RootStackParamList, 'SurahReading'>;
