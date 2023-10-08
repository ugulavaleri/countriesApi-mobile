import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../assets/colors';

const ReturnBackButton = ({navigation}: any) => {
  return (
    <Pressable>
      <Text onPress={() => navigation.goBack()} style={styles.button}>
        back
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 18,
    padding: 15,
    color: colors.darkBlue,
  },
});

export default ReturnBackButton;
