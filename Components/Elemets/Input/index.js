import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import Icon  from '../Icon';


const Input = (props) => {
  const { withoutLabel, placeholder, label, iconColor,multiline, iconSize, mainContainerStyles, inputStyle, iconType, iconName, onChangeText, name, value, onEndEditing } = props;
  return (
    <View style={{...styles.mainContainer, ...mainContainerStyles} || styles.mainContainer}>
      {
      !withoutLabel &&
        <View style={styles.iconAndTextContainer}>
          <Icon
            name={iconName}
            type={iconType}
            color={iconColor}
            activeOpacity={1}
            size={iconSize}
          />
          <Text style={styles.textLabel}>{label}</Text>
        </View>
      }
      <View style={styles.inputContainer}>
        <TextInput
          multiline={multiline}
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText && onChangeText.bind(this, name)}
          onEndEditing={onEndEditing}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 5,
  },
  iconAndTextContainer: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textLabel: {
    marginLeft: 6,
    color: '#3B3B3B',
    // fontWeight: 'bold'
  },
  inputContainer: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10
  }
})

export default Input;