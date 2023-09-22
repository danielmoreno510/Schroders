import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

import styles from './styles';

const HeaderOptions: React.FC<HeaderOptionsProps> = ({
  changeScreen,
  isMenu,
}) => (
  <TouchableOpacity onPress={changeScreen} style={styles.headerLeftContainer}>
    <Icon
      type="MaterialIcons"
      name={isMenu ? 'close' : 'menu'}
      style={styles.iconColor}
    />
  </TouchableOpacity>
);

export default HeaderOptions;
