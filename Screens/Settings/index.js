import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Share
} from 'react-native'

class SettingsScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSwitchEnabled: false
    }
  }

  handleToggleSwitch = () => {
    this.setState((state) => {return{isSwitchEnabled: !state.isSwitchEnabled}})
  }

  handleShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render () {
    const {isSwitchEnabled} = this.state
    return (
      <ScrollView contentContainerStyle={s.scrollCont}>
        <TouchableOpacity onPress={this.handleShare} style={s.buttons}>
          <Text style={s.btnTitle}>Share CLhub</Text>
          <Text style={s.arrow}>&#8227;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.buttons}>
          <Text style={s.btnTitle}>Contact Us</Text>
          <Text style={s.arrow}>&#8227;</Text>
        </TouchableOpacity>
        <View style={s.switchMainBlock}>
          <Text style={s.btnTitle}>Notification Sound</Text>
          <Switch
            thumbColor='#5AC284' 
            ios_backgroundColor='#3e3e3e'
            onValueChange={this.handleToggleSwitch}
            value={isSwitchEnabled}
          />
        </View>
      </ScrollView>
    )
  }
}

export default SettingsScreen

const s = StyleSheet.create({
  scrollCont: {
    flexGrow: 1
  },
  buttons: {
    height: 70,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'white'
  },
  arrow: {
    fontSize: 16
  },
  btnTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3B3B3B'
  },
  switchMainBlock: {
    height: 70,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})
