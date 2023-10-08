import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {colors} from './colors';

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
      }}>
      <Text>
        <ActivityIndicator size={'large'} color="black" />
      </Text>
    </View>
  );
};

export default Loading;
