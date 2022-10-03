import { View, Text, Appearance } from 'react-native';

const AppearanceDemo = () => {
  const scheme = Appearance.getColorScheme();
  if (scheme === 'dark') {
    console.log('theme dark');
  } else {
    console.log('theme light');
  }
  return (
    <View>
      <Text className="text-2xl font-bold mb-5 text-black">Appearance</Text>
    </View>
  );
};

export default AppearanceDemo;
