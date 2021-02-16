import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Icon as VectorIcon } from 'react-native-elements';

const Icon = (props) => {
  const { size, color, name, type, raised, onPress, activeOpacity, children, textStyle } = props;
  
  return (
    <TouchableOpacity
      style={props.style}
      activeOpacity={activeOpacity || .5}
      onPress={onPress}
    >
      <VectorIcon
        type={type}
        name={name}
        size={size}
        color={color}
        raised={raised}
      />
     { children && <Text style={textStyle}>{children}</Text>}
    </TouchableOpacity>
  )
}

export default Icon;
