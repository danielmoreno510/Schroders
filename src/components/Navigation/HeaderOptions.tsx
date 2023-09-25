import React from 'react';
import {TouchableOpacity} from 'react-native';
import {CloseIcon, HamburgerIcon, NativeBaseProvider} from 'native-base';

import styles from './styles';
import {primaryColor} from '../../constants';

const HeaderOptions: React.FC<HeaderOptionsProps> = ({
  changeScreen,
  isMenu,
}) => (
  <NativeBaseProvider>
    <TouchableOpacity onPress={changeScreen} style={styles.headerLeftContainer}>
      {isMenu ? (
        <CloseIcon size="5" color={primaryColor} />
      ) : (
        <HamburgerIcon size="6" color={primaryColor} />
      )}
    </TouchableOpacity>
  </NativeBaseProvider>
);

export default HeaderOptions;
