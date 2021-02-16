import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity
} from 'react-native'

const ForumBox = props => {
  const { topic, autor, reply, views, imageName, onPress } = props

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={[styles.mainContainer]}
      >
        <View style={styles.imageMainContainer}>
          <View style={styles.imageContaner}>
            <Image
              style={{ width: '100%', height: '100%' }}
              source={require(`../../../Asets/megan.jpg`)}
            />
          </View>
        </View>
        <View style={styles.mainInfoContainer}>
          <View style={styles.infoTitleContainer}>
            <Text style={styles.textTitle}>{topic}</Text>
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={[styles.subTitle, styles.leftP]}>
              Autor: <Text style={styles.subTitleAnswer}>{autor}</Text>
            </Text>
            <Text style={[styles.subTitle, styles.borderLeftRightStyle]}>
              Reply: <Text style={styles.subTitleAnswer}>{reply}</Text>
            </Text>
            <Text style={styles.subTitle}>
              Views: <Text style={styles.subTitleAnswer}>{views}</Text>
            </Text>
          </View>
          <View>
            <Text style={styles.textData}>01 Dec 2019</Text>
          </View>
        </View>
      </TouchableOpacity>
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
    marginRight: 15
    // backgroundColor: 'red'
  },
  imageContaner: {
    width: 64,
    height: 64,
    borderRadius: 50,
    overflow: 'hidden',
    // backgroundColor: 'red'
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
    color: '#535254',
    fontWeight: 'bold'
  },
  textData: {
    marginTop: 10,
    fontSize: 10,
    color: '#535254'
  },
  infoTextContainer: {
    marginTop: 7,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  subTitle: {
    paddingHorizontal: 10,
    fontSize: 12.5,
    fontWeight: 'bold',
    color: '#535254'
  },
  borderLeftRightStyle: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#DEDEDE'
  },
  leftP: {
    paddingLeft: 0
  },
  subTitleAnswer: {
    fontSize: 12,
    fontWeight: 'normal'
  }
})

export default ForumBox
