import { Icon } from '@ui-kitten/components';
import { TabBarIcon } from '../../types';

const SettingsIcon: TabBarIcon = ({ color }) => (
  <Icon
    name="settings"
    fill={color}
    style={{
      width: 26,
      height: 26
    }}
  />
);

export default SettingsIcon;
