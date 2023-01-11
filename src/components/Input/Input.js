import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './Input.style'

const Input = ({placeholder,onType,value}) => {
  return (
    <View style={styles.container} >
      <TextInput autoCapitalize='none' placeholder={placeholder} onChangeText={onType} value={value}></TextInput>
    </View>
  );
};


export default Input;