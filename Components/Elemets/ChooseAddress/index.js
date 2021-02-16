import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';


import Icon  from '../Icon';

const adress1 = {
  letter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  number: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16]
}

const ChooseAddress = (props) => {
  const { withoutLabel, iconName, iconType, iconColor, iconSize, label, mainContainerStyles } = props
  const [adress, setadress] = useState({ value: '', complet: false });
  const [letterState, setLetterState] = useState([...adress1.letter]);
  const [numberState, setNumberState] = useState([...adress1.number]);

  const handleclick = (e) => {
    setadress({ ...adress, value: e._targetInst.child.pendingProps.children })
  }

  const handleclick1 = (e) => {
    setadress({ ...adress, value: adress.value + ' ' + e._targetInst.child.pendingProps.children, complet: true })
  }

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
      <View style={styles.adressBtnsView} >
        {!!adress.value && <View style={styles.choosedView}><Text style={styles.coosedViewText}>{adress.value}</Text></View>}
        {adress.complet && <Icon type='font-awesome' color='#DEDEDE' name='times' onPress={(e) => { setadress('') }}/>}
        {
          !adress.complet && <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              !adress.value ?
                letterState.map((v, i) => {
                  return (
                    <TouchableOpacity activeOpacity={.5} onPress={handleclick} key={i + 'string' + i} style={styles.buttons}>
                      <Text >{v}</Text>
                    </TouchableOpacity>
                  )
                })
                :
                numberState.map((v, i) => {
                  return (
                    <TouchableOpacity activeOpacity={.5} onPress={handleclick1} key={i + 'number' + i} style={styles.buttons}>
                      <Text>{v}</Text>
                    </TouchableOpacity>
                  )
                })
            }
          </ScrollView>
        }
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 5,
  },
  adressBtnsView: {
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  choosedView: {
    minWidth: 35,
    height: 35,
    marginRight: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: '#5AC284',
  },
  coosedViewText: {
    color: 'white'
  },
  buttons: {
    width: 35,
    height: 35,
    marginHorizontal: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
  },
})

export default ChooseAddress;