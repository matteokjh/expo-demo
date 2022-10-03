import { useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import { COMPONENT_MAP, TestCase } from '../ability-test/constants';

const AbilityDetail = () => {
  const route = useRoute<any>();
  const title = route.params.title as TestCase;

  const Component = COMPONENT_MAP[title];

  return (
    <View className="min-h-full bg-white p-5">
      {Component && <Component />}
    </View>
  );
};

export default AbilityDetail;
