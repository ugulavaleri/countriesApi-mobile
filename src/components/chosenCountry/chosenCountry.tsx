import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {colors} from '../../assets/colors';
import {countryType, WeatherData} from '../../types/globalTypes';

interface ChosenCountryProps {
  selectedItem: countryType;
  weather: WeatherData;
}

const ChosenCountry = ({selectedItem, weather}: ChosenCountryProps) => {
  return (
    <View
      style={[
        styles.box,
        {
          backgroundColor: colors.darkBlue,
          height: 250,
        },
      ]}>
      <Text style={[styles.mainText, {textAlign: 'center'}]}>
        {selectedItem.name.official}
        {'\n'}
        {weather.name && <Text style={{fontSize: 13}}>({weather.name})</Text>}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
            }}
            style={styles.icon}
          />
        </View>
        <View>
          <Text style={[styles.lightText, {color: colors.white}]}>
            Temperature - {weather?.main.temp}
          </Text>
          <Text
            style={[styles.lightText, {color: colors.white, marginTop: 10}]}>
            Feels like - {weather.main.feels_like}
          </Text>
          <Text
            style={[styles.lightText, {color: colors.white, marginTop: 10}]}>
            Wind speed - {weather.wind.speed}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 310,
    borderRadius: 20,
    padding: 10,
  },
  mainText: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 20,
  },
  lightText: {
    fontSize: 15,
  },
  icon: {
    width: 150,
    height: 150,
    objectFit: 'cover',
  },
});

export default ChosenCountry;
