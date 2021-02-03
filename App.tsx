import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  Roboto_400Regular,
  Roboto_900Black,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import App from './src';

export default function Index() {

  let [fontsLoaded] = useFonts({
    Roboto_Regular: Roboto_400Regular,
    Roboto_Black: Roboto_900Black,
    Roboto_Bold: Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <App />
  );
}