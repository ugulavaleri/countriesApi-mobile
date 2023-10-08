import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  InputAccessoryView,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Api from '../../api/api';
import {countryType} from '../../types/globalTypes';
import {colors} from '../../assets/colors';
import {TextInput} from 'react-native';
import Loading from '../../assets/loading';

const CountrySelect = ({navigation}: any) => {
  const [allCountry, setAllCountry] = useState<countryType[]>();
  const [filterText, setFilterText] = useState<string>('');
  const [isInputFocused, setInputFocused] = useState(false);

  const getAllCounty = async () => {
    await Api.sendCountryRequest('GET', setAllCountry);
  };

  useEffect(() => {
    getAllCounty();
  }, []);

  const handleWeatherRequest = async (selectedItem: countryType) => {
    try {
      const weatherData = await Api.sendWeatherRequest(
        'GET',
        selectedItem.latlng,
      );
      navigation.navigate('WeatherPage', {weather: weatherData, selectedItem});
    } catch (error) {
      throw Error('Something Wents wrong');
    }
  };

  if (!allCountry) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.selectContainer}>
        <TextInput
          onChangeText={e => setFilterText(e)}
          style={styles.inputStyles}
          placeholder="Search your location"
          inputAccessoryViewID="countryFilterId"
          onFocus={() => setInputFocused(true)}
          value={filterText}
        />
        <InputAccessoryView nativeID="countryFilterId">
          <Text
            onPress={() => setFilterText('')}
            style={styles.InputAccessoryViewStyle}>
            Clear Text
          </Text>
        </InputAccessoryView>
      </View>
      <View style={{height: 220}}>
        <ScrollView style={{height: 100}}>
          {isInputFocused &&
            allCountry
              .filter(item =>
                item.name.official
                  .toLowerCase()
                  .includes(filterText.toLowerCase()),
              )
              .map(filteredItem => (
                <View style={styles.listStyle} key={filteredItem.name.official}>
                  <Text onPress={() => handleWeatherRequest(filteredItem)}>
                    {filteredItem.name.official}
                  </Text>
                </View>
              ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 20,
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyles: {
    backgroundColor: colors.white,
    flex: 1,
    height: 50,
    borderRadius: 20,
    paddingLeft: 20,
  },
  listStyle: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingLeft: 15,
    marginTop: 5,
    borderRadius: 20,
  },
  InputAccessoryViewStyle: {
    fontSize: 20,
    color: '#f70d1a',
    textAlign: 'center',
    paddingBottom: 20,
  },
});

export default CountrySelect;
