import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const Button = ({ ...props }) => {
  const { onPress, children, light } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        light ?
          { ...styles.defaultBtnStylesLight, ...props.stylesBtn } || styles.defaultBtnStylesLight
          :
          { ...styles.defaultBtnStylesDark, ...props.stylesBtn } || styles.defaultBtnStylesDark
      } 
      activeOpacity={.6}
    >
      <Text
        style={
          light ?
            { ...styles.defaultTextBtnStylesLight, ...props.stylesText } || styles.defaultTextBtnStylesLight
            :
            { ...styles.defaultTextBtnStylesDark, ...props.stylesText } || styles.defaultTextBtnStylesDark
        }
      >
        {children}
      </Text>
    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  defaultBtnStylesDark: {
    width: '100%',
    height: 44,
    marginVertical: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#B12137',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  defaultTextBtnStylesDark: {
    fontSize: 14,
    color: 'white'
  },
  defaultBtnStylesLight: {
    width: '100%',
    height: 44,
    marginVertical: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#B12137',
    borderWidth: 1.5,
    borderRadius: 50
    
  },
  defaultTextBtnStylesLight: {
    fontSize: 14,
    color: '#575757'
  },
})

export default Button;