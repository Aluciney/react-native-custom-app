import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';

const AuthLayout: React.FC = () => {
  return (
    <Navigator 
      screenOptions={{ headerShown: false }}
      initialRouteName="SignIn"
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}

export default AuthLayout;