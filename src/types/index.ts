import { NativeStackScreenProps } from '@react-navigation/native-stack';


export type RootStackParamList = {
    home: undefined;
    settings: undefined;
    'ability-test': undefined;
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "home">;
