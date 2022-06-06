/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

export default porps => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: porps.corFundo || '#000',
    }}>
    <Text
      style={{
        fontSize: 50,
        color: porps.corTexto || '#FFF',
      }}>
      {porps.children}
    </Text>
  </View>
);
