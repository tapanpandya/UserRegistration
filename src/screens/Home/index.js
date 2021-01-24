import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login from '../../components/Login';
import Signup from '../../components/Signup';

export default function HomeScreen() {
  return (
    <View>
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({});
