import AlertDemo from '../ability-detail/components/Alert';
import AnimationDemo from '../ability-detail/components/Animation';
import AppearanceDemo from '../ability-detail/components/Appearance';

export enum TestCase {
  ACCESSBILITY_INFO = 'AccessibilityInfo',
  ALERT = 'Alert',
  ANIMATION = 'Animation',
  APPEARANCE = 'Appearance'
}

export const TEST_LIST = [
  {
    title: TestCase.ACCESSBILITY_INFO,
    disabled: true
  },
  {
    title: TestCase.ALERT
  },
  {
    title: TestCase.ANIMATION
  },
  {
    title: TestCase.APPEARANCE,
    disabled: true
  }
];

export const COMPONENT_MAP = {
  [TestCase.ACCESSBILITY_INFO]: null,
  [TestCase.ALERT]: AlertDemo,
  [TestCase.ANIMATION]: AnimationDemo,
  [TestCase.APPEARANCE]: AppearanceDemo
};
