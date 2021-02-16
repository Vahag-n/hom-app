import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';


const Link = ({ ...props }) => {
  const { onPress, children, stylesContainer, to, navigation } = props;
  
  const handleClick = () => {
    if(to) navigation.navigate(to)
  }

  return (
    <View style={{ ...styles.linkBlock, ...stylesContainer } || styles.linkBlock}>
      <TouchableOpacity
        onPress={onPress || handleClick}
        activeOpacity={.8}
      >
        <Text style={styles.text}>
          {children}
        </Text>
      </TouchableOpacity >
    </View>
  )
}

const styles = StyleSheet.create({
  linkBlock: {
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
    color: '#5A6BC2',
    textDecorationLine: 'underline',
    textDecorationColor: '#5A6BC2',
  }
})

export default Link;