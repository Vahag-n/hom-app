import React from 'react';
import { View, Text, Picker as PickerNative, StyleSheet } from 'react-native';

import Icon from '../Icon';


const Picker = (props) => {
  const { withoutLabel, selectedValue, onValueChange, iconColor, iconSize, iconType, iconName, label, mode, children, mainContainerStyles, name } = props;
  return (
    <View style={{ ...styles.mainContainer, ...mainContainerStyles } || styles.mainContainer}>
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
      <View style={styles.pickerContainer}>
        <PickerNative
          style={{ width: '100%', color: '#3B3B3B' }}
          mode={'dialog' || mode}
          selectedValue={selectedValue}
          onValueChange={onValueChange && onValueChange.bind(this, name)}
        >
          {children}
        </PickerNative>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 5
  },
  iconAndTextContainer: {
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textLabel: {
    marginLeft: 6,
    color: '#3B3B3B',
    // fontWeight: 'bold'
  },
  pickerContainer: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10
  }
});


export default Picker;