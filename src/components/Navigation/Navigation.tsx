import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HeaderOptions from './HeaderOptions';
import Home from '../../screens/Home';
import Menu from '../../screens/Menu';
import CommitList from '../../screens/CommitList';
import RepositoryDetails from '../../screens/CommitDetails';
import About from '../../screens/About';
import styles from './styles';
import {primaryColor} from '../../constants';

const Stack = createStackNavigator();
const screenOptions = {
  headerStyle: {shadowColor: primaryColor},
  headerTintColor: primaryColor,
};

const Navigation: React.FC = () => {
  const headerClose = ({navigation}: Navigation) => ({
    headerLeft: () => (
      <HeaderOptions
        changeScreen={() => navigation.navigate('Home')}
        isMenu={true}
      />
    ),
  });

  const headerMenu = ({navigation}: any) => ({
    headerLeft: () => (
      <HeaderOptions
        changeScreen={() => navigation.navigate('Menu')}
        isMenu={false}
      />
    ),
  });

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator headerMode="screen" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} options={headerMenu} />
          <Stack.Screen
            name="Commit List"
            component={CommitList}
            options={headerClose}
          />
          <Stack.Screen name="Details" component={RepositoryDetails} />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={({navigation}) => ({
              ...headerClose({navigation}),
              gestureDirection: 'horizontal-inverted',
            })}
          />
          <Stack.Screen name="About" component={About} options={headerClose} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Navigation;
