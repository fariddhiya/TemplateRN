import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Splash} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <View style={styles.ancestor}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  ancestor: {
    backgroundColor: 'black',
    flex: 1,
  },
});

const forFade = ({current, closing}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default Router;
