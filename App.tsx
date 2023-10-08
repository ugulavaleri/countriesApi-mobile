import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WeatherPage from './src/pages/weatherPage/weatherPage';
import CountrySelect from './src/pages/countrySelect/CountrySelect';
import Home from './src/pages/Home/Home';

type SectionProps = PropsWithChildren<{
  title?: string;
}>;

function Section({children}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.sectionContainer}>{children}</SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Section>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CountrySelect"
            component={CountrySelect}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="WeatherPage"
            component={WeatherPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </Section>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
