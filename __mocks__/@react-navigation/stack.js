const {View} = require('react-native');

module.exports = {
  createStackNavigator: () => ({
    Navigator(props) {
      return props.children;
    },
    Screen: ({...props}) => {
      return <View testID={props.name} {...props}></View>;
    },
  }),
};
