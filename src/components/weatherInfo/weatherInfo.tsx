import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../assets/colors';
import {WeatherData} from '../../types/globalTypes';
import {currentLocationPermision} from '../getLocations/getLocation';

interface WeatherInfoProps {
  weather: WeatherData;
}

const WeatherInfo = ({weather}: WeatherInfoProps) => {
  return (
    <View
      style={[
        styles.box,
        {
          paddingHorizontal: 20,
          paddingVertical: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: colors.white,
        },
      ]}>
      <Text style={[styles.lightText, {textAlign: 'center'}]}>
        <Text style={{fontWeight: '700', color: colors.BlackFont}}>Wind</Text>
        {'\n'}
        <Text style={{fontSize: 12}}>{weather.wind.speed} km/h</Text>
      </Text>
      <Text style={[styles.lightText, {textAlign: 'center'}]}>
        <Text style={{fontWeight: '700', color: colors.BlackFont}}>
          Humidity
        </Text>
        {'\n'}
        <Text style={{fontSize: 12}}>{weather.main.humidity}%</Text>
      </Text>
      <Text style={[styles.lightText, {textAlign: 'center'}]}>
        <Text style={{fontWeight: '700', color: colors.BlackFont}}>
          Visibility
        </Text>
        {'\n'}
        <Text style={{fontSize: 12}}>{weather.visibility}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 310,
    borderRadius: 20,
    padding: 10,
  },
  lightText: {
    fontSize: 15,
  },
});

export default WeatherInfo;
