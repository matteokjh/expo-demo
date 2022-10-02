import { Icon } from '@ui-kitten/components';
import { TabBarIcon } from '../../types';

const HomeIcon: TabBarIcon = ({ color }) => (
  <Icon
    name="home"
    fill={color}
    style={{
      width: 26,
      height: 26
    }}
  />
);

export default HomeIcon;
