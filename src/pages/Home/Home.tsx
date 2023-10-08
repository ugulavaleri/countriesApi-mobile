import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../assets/colors';

const Home = ({navigation}: any) => {
  return (
    <View style={styles.homeContainer}>
      <View>
        <Text style={[styles.mainText, {marginLeft: -40}]}>The</Text>
        <Text style={styles.mainText}>Weather</Text>
      </View>
      <View>
        <Text style={styles.secondaryText}>
          Let’s figure out the weather together
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => navigation.navigate('CountrySelect')}>
        <Text
          style={[
            styles.secondaryText,
            {color: colors.primary, lineHeight: 60},
          ]}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  mainText: {
    fontSize: 40,
    fontWeight: '900',
    color: colors.white,
  },
  secondaryText: {
    fontSize: 20,
    color: colors.white,
    maxWidth: 271,
    textAlign: 'center',
  },
  buttonStyles: {
    marginTop: 100,
    width: 260,
    height: 65,
    backgroundColor: colors.white,
    textAlign: 'center',
    borderRadius: 20,
  },
});

export default Home;
