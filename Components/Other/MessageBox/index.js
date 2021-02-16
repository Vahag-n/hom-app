import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, Animated } from 'react-native';


const MessageBox = (props) => {
  const [fadeAnim] = useState(new Animated.Value(1))
  const { type, messageSenderName, messageCount, imageName } = props;

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

  return (
    <>
      <TouchableWithoutFeedback onPress={handleBoxClick}>
        <Animated.View style={[styles.mainContainer, { opacity: fadeAnim }]}>
          <View style={styles.imageMainContainer}>
            <View style={styles.imageContaner}>
              <Image
                style={{ width: '100%', height: '100%' }}
                source={require(`../../../Asets/scarlet.jpg`)}
              />
            </View>
            {messageCount && <View style={styles.messageCount}>
              <Text style={styles.messageCountText}>+{messageCount}</Text>
            </View>}
          </View>
          <View style={styles.mainInfoContainer}>
            <View style={styles.infoTitleContainer}>
              <Text style={styles.textTitle}>{messageSenderName}</Text>
              <Text style={styles.textData}>01 Dec 2019</Text>
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.lastMessageSendingName}>You:</Text>
              <Text style={styles.lastMessageText}>Andrew: I would like to know wh․․․</Text>
            </View>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // backgroundColor: 'green'

  },
  imageMainContainer: {
    width: 48,
    height: 48,
    marginRight: 15,
    // backgroundColor: 'red'
  },
  imageContaner: {
    width: 48,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: 'red'
  },
  mainInfoContainer: {
    flex: 1
  },
  infoTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textTitle: {
    fontSize: 14,
    color: '#3B3B3B',
    fontWeight: 'bold'
  },
  textData: {
    fontSize: 10,
    color: '#535254'
  },
  lastMessageText: {
    fontSize: 12,
    color: '#535254'
  },
  lastMessageSendingName: {
    fontSize: 13,
    color: '#3B3B3B',
    fontWeight: 'bold'

  },
  infoTextContainer: {
    marginTop: 7,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  
  messageCount: {
    width: 20, height: 20,
    position: 'absolute',
    bottom: 0,
    right: -4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C93146',
    borderRadius: 50,
  },
  messageCountText: {
    fontSize: 10,
    color: 'white'
  }
})

export default MessageBox;