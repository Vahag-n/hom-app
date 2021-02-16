import React from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'

import { Icon } from 'react-native-elements';
import  IconButton from '../Icon'


const SearchInput = (props) => {
  const { value, onChangeText, clearValue, mainContainerStyle} = props;

  return (
    <View style={[styles.mainContainer, mainContainerStyle]}>
      <Icon name='search' type='evilicon' size={30} color='#343434' />
      <TextInput value={value} onChangeText={onChangeText} style={{ /* backgroundColor: 'red', */ flex: 1, height: '100%' }} />
      {
        !!value && <IconButton
          onPress={clearValue}
          style={{ paddingLeft: 5 }}
          name='close'
          type='antdesign'
          size={20}
          color='gray'
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    height: 36,
    paddingLeft: 16,
    paddingRight: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    // backgroundColor: 'green'
  }
})


export default SearchInput;