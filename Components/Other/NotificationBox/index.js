import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, Animated } from 'react-native';
import { Icon } from 'react-native-elements';

import { Button } from '../../Elemets'

const NotificationBox = (props) => {
  const [fadeAnim] = useState(new Animated.Value(1))
  const { type, boxTitle } = props;
  let typeTitle, iconName, iconType, iconFonColor;
  
  const handleBoxClick = () => {
    Animated.timing(
      fadeAnim,
      {
        toValue: .2,
        duration: 200
      }
    ).start(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 200
        }
      ).start()
    })
  }

  switch (type) {
    case 'event':
      typeTitle = 'Event near you';
      iconType = 'material-community'
      iconName = 'calendar-month'
      iconFonColor = '#C25A76'
      break;
    case 'forum':
      typeTitle = 'Forum';
      iconType = 'antdesign'
      iconName = 'message1'
      iconFonColor = '#925AC2'
      break;
    case 'message':
      typeTitle = 'Message';
      iconType = 'material-community'
      iconName = 'forum-outline'
      iconFonColor = '#5A87C2'
      break;
    case 'news':
      typeTitle = '';
      iconType = 'entypo'
      iconName = 'news'
      iconFonColor = '#C2C25A'
      break;
    default: typeTitle = ''
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={handleBoxClick}>
        <Animated.View style={[styles.mainContainer, {opacity: fadeAnim}]}>
          <View style={styles.imageMainContainer}>
            <View style={styles.imageContaner}>
              <Image
                style={{ width: '100%', height: '100%' }}
                source={require('../../../Asets/logregimage.png')}
              />
            </View>
            <Icon 
              iconStyle={{ fontSize: 16 }} 
              containerStyle={styles.iconStyle} 
              type={iconType} name={iconName}
              color={iconFonColor} reverse reverseColor='white' size={12} 
            />
          </View>
          <View style={styles.mainInfoContainer}>
            <View style={styles.infoTitleContainer}>
              <Text style={styles.textTitle}>{boxTitle}</Text>
              <Text style={styles.textData}>01 Dec 2019</Text>
            </View>
            <View style={styles.infoTextContainer}>
              {!(type === 'news') && <Text style={styles.textTitle}>{typeTitle}:</Text>}
              <Text style={styles.textData}> Fort Myers, FL 33907</Text>
            </View>
            {
              (type === 'event') &&
              <View style={styles.btnContainer}>
                <Button light stylesBtn={styles.btnStyles} stylesText={styles.btnTextStyles}>I will go</Button>
                <Button light stylesBtn={styles.btnStyles} stylesText={styles.btnTextStyles}>Interested</Button>
              </View>
            }
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 10,
    paddingVertical: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    borderTopColor: '#DEDEDE'
    // backgroundColor: 'green'

  },
  imageMainContainer: {
    width: 64,
    height: 64,
    marginRight: 15,
    // backgroundColor: 'red'
  },
  imageContaner: {
    width: 64,
    height: 64,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: 'red'
  },
  mainInfoContainer: {
    flex: 1
  },
  iconStyle: {
    position: 'absolute', 
    right: -12, 
    bottom: -7
  },
  infoTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textTitle: {
    fontSize: 14,
    color: '#303030'
  },
  textData: {
    fontSize: 12,
    color: '#535254'
  },
  infoTextContainer: {
    marginTop: 7,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  btnContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: 'red'
  },
  btnStyles: {
    width: 86,
    height: 28,
    marginTop: 12,
    marginRight: 10,
    marginBottom: 0,
    marginLeft: 0,
    borderRadius: 4,
    borderColor: '#5A6BC2'
  },
  btnTextStyles: {
    fontSize: 12,
    color: '#5A6BC2'
  }
})

export default NotificationBox;