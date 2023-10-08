import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {countryType, WeatherData} from '../../types/globalTypes';
import Loading from '../../assets/loading';
import {colors} from '../../assets/colors';
import ChosenCountry from '../../components/chosenCountry/chosenCountry';
import WeatherInfo from '../../components/weatherInfo/weatherInfo';
import ReturnBackButton from '../../components/returnBackButton/returnBackButton';

import Geolocation from '@react-native-community/geolocation';
import {currentLocationPermision} from '../../components/getLocations/getLocation';

const WeatherPage = ({navigation}: any) => {
  const {params} = useRoute();

  if (!params) {
    return <Loading />;
  }

  const {weather, selectedItem} = params as {
    weather: WeatherData;
    selectedItem: countryType;
  };

  useEffect(() => {
    currentLocationPermision();
  }, []);

  return (
    <View style={styles.container}>
      <ReturnBackButton navigation={navigation} />
      <View style={styles.weatherContainer}>
        <ChosenCountry weather={weather} selectedItem={selectedItem} />
        <WeatherInfo weather={weather} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  weatherContainer: {
    flex: 1,
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 18,
    padding: 15,
    color: colors.darkBlue,
  },
});

export default WeatherPage;
