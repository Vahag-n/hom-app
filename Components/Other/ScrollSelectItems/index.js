import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';


const ScrollSelectItem = (props) => {
  const { onChange, items, initialValue } = props;
  const [selectedItem, setSelectedItem] = useState([initialValue])

  const handleClick = (value, idx) => {
    const cloneSelectedItem = [...selectedItem];
    if (cloneSelectedItem.includes(value)) { return }
    if (cloneSelectedItem.includes(initialValue)) {
      cloneSelectedItem.splice(0, 1, value);
    } else if (!cloneSelectedItem.includes(initialValue) && value === initialValue) {
      cloneSelectedItem.splice(0, cloneSelectedItem.length, initialValue);
    } else {
      cloneSelectedItem.push(value)
    }
    setSelectedItem(cloneSelectedItem);
    onChange && onChange(selectedItem)
  }

  // function getRandomColor() {
  //   var letters = '0123456789ABCDEF';
  //   var color = '#';
  //   for (var i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //     console.log(letters[Math.floor(Math.random() * 16)])
  //   }
  //   return color;
  // }

  return (
    <View style={s.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          items.map((val, idx) => {
            const isActive = selectedItem.includes(val.value);
            return (
              <TouchableOpacity
                key={val.label + idx} onPress={handleClick.bind(this, val.value, idx)}
                style={[s.slItemStl, { backgroundColor: isActive ? '#5A6BC2' : 'white' }]}
              >
                <Text style={[s.slText, { color: isActive ? 'white' : '#3B3B3B' }]}>{val.label}</Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default ScrollSelectItem;

const s = StyleSheet.create({
  container: {
    marginVertical: 25
    // marginTop: 30,
    // marginBottom: 10
  },
  slItemStl: {
    minWidth: 75,
    minHeight: 30,
    marginHorizontal: 10,
    paddingVertical: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 50,
    backgroundColor: 'white'
  },
  slText: {
    paddingHorizontal: 20,
    fontSize: 13,
    // fontWeight: 'bold',
    color: '#3B3B3B',
  }
})

