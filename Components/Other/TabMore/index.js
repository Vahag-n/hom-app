import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, BackHandler, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux'

import { showMoreAction } from '../../../Redux/Actions/ui'
import { Icon } from '../../Elemets'


const TabMore = (props) => {
  const { routeName } = props;

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => { backHandler.remove() }
  }, []);

  const handleBackPress = () => {
    props.showMoreAction(false)
    // return true;
  }

  const handleModalClose = () => {
    props.showMoreAction(false)
  }

  const handleBtnClick = (e) => {
    // console.log(e._targetInst.child.pendingProps[1].props.children.replace(/\s/g, ''));
    switch (e._targetInst.child.pendingProps[1].props.children) {
      case 'Events':
        props.navigation.navigate('Events');
        break;
      case 'News':
        props.navigation.navigate('News');
        break;
      case 'Forums':
        props.navigation.navigate('Forums');
        break;
      case 'Privilege':
        props.navigation.navigate('Privilege');
        break;
      case 'My profile':
        props.navigation.navigate('MyProfile');
        break;
      case 'Settings':
        props.navigation.navigate('Settings');
        break;
      default: break;
    }
    props.showMoreAction(false)
  }


  return (
    <>
      {
        props.showTabMore &&
        <View style={styles.backContainer}>
          <TouchableWithoutFeedback
            onPress={handleModalClose}
          ><View style={styles.backContainer2} /></TouchableWithoutFeedback>
          <View activeOpacity={1} style={styles.modalContainer}>
            <Icon
              onPress={handleBtnClick}
              name='calendar' type='font-awesome'
              size={20} color={routeName === 'Events' ? '#c93146' : '#535254'}
              style={styles.btns}
              textStyle={{ ...styles.btnsText, color: routeName === 'Events' ? '#c93146' : '#3B3B3B' }}>Events
            </Icon>
            <Icon
              onPress={handleBtnClick}
              name='news' type='entypo' size={20}
              color={routeName === 'News' ? '#c93146' : '#535254'}
              style={styles.btns}
              textStyle={{ ...styles.btnsText, color: routeName === 'News' ? '#c93146' : '#3B3B3B' }}>News
            </Icon>
            <Icon
              onPress={handleBtnClick}
              name='forum-outline' type='material-community'
              color={routeName === 'Forums' ? '#c93146' : '#535254'} size={20}
              style={styles.btns}
              textStyle={{ ...styles.btnsText, color: routeName === 'Forums' ? '#c93146' : '#3B3B3B' }}>Forums
            </Icon>
            <Icon
              onPress={handleBtnClick}
              name='checkcircleo' type='antdesign' size={20}
              color={routeName === 'Privilege' ? '#c93146' : '#535254'}
              style={styles.btns}
              textStyle={{ ...styles.btnsText, color: routeName === 'Privilege' ? '#c93146' : '#3B3B3B' }}>Privilege
            </Icon>
            <Icon
              onPress={handleBtnClick}
              name='user-circle-o' type='font-awesome' size={20}
              color={routeName === 'MyProfile' ? '#c93146' : '#535254'}
              style={styles.btns}
              textStyle={{ ...styles.btnsText, color: routeName === 'MyProfile' ? '#c93146' : '#3B3B3B' }}>My profile
             </Icon>
            <Icon
              onPress={handleBtnClick}
              name='settings' type='feather' size={20}
              color={routeName === 'Settings' ? '#c93146' : '#535254'}
              style={styles.btns}
              textStyle={{ ...styles.btnsText, color: routeName === 'Settings' ? '#c93146' : '#3B3B3B' }}>Settings
            </Icon>
          </View>
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  backContainer: {
    width: '100%',
    height: '120%',
    zIndex: 999,
    position: 'absolute',
    top: '-20%',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  backContainer2: {
    position: "absolute",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'transparent'
  },
  modalContainer: {
    width: 160,
    height: 280,
    paddingHorizontal: 2,
    paddingTop: 20,
    paddingBottom: 10,
    position: 'absolute',
    bottom: 55,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 3,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  btns: {
    paddingLeft: 30,
    height: 35,
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  btnsText: {
    marginLeft: 15,
    color: '#535254'
  }
})

const mapStateToProps = (state) => ({
  showTabMore: state.uiReducer.showMore
})

const mapDispatchToProps = {
  showMoreAction
}

export default connect(mapStateToProps, mapDispatchToProps)(TabMore);