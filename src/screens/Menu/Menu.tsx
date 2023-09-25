import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import styles from './styles';
import {INSET, menuOptions} from '../../constants';
import {NativeBaseProvider} from 'native-base';

const Menu: React.FC<Navigation> = ({navigation}) => {
  const changeScreeen = (screen: Page) => () => navigation.navigate(screen);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <NativeBaseProvider initialWindowMetrics={INSET}>
          {menuOptions.map(option => (
            <View key={option.name} style={styles.optionContainer}>
              <TouchableOpacity
                testID={option.name}
                style={styles.option}
                onPress={changeScreeen(option.name)}>
                <View style={styles.rowContainer}>
                  <option.icon />
                  <Text style={styles.textOption}>{option.name}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </NativeBaseProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;
