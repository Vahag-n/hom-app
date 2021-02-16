import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'

import { Icon, Input, Button } from '../../Components/Elemets'

class ForfotPasswordScreen extends Component {
  constructor (props) {
    super(props)
  }

  static navigationOptions = ({ navigation }) => {
    const goBack = () => {
      navigation.goBack()
    }
    return {
      title: 'Back',
      headerLeft: () => (
        <Icon
          name='chevron-left'
          type='evilicon'
          color='black'
          size={60}
          onPress={goBack}
        />
      ),
      headerTitleContainerStyle: {
        marginLeft: -20
      }
    }
  }

  render () {
    return (
      <>
        <ScrollView
          style={s.scrollView}
          contentContainerStyle={s.scrollViewContainer}
        >
          <Text style={s.titleText}>FORGOT PASSWORD</Text>
          <Text style={s.description}>Please enter your email address</Text>
          <Input
            name='email'
            // value={email.value}
            // onChangeText={this.handleFormChange}
            withoutLabel
            placeholder='Email'
          />
          <Button stylesBtn={{ marginTop: 20 }}>Submit</Button>
        </ScrollView>
      </>
    )
  }
}

export default ForfotPasswordScreen

const s = StyleSheet.create({
  scrollView: {
    flex: 1
    // marginBottom: 90,
  },
  scrollViewContainer: {
    minWidth: '100%',
    minHeight: '100%',
    paddingBottom: 10,
    paddingHorizontal: 24,
    justifyContent: 'center'
    // backgroundColor: 'red'
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#3B3B3B',
    textTransform: 'uppercase'
  },
  description: {
    marginTop: 20,
    paddingVertical: 3,
    fontSize: 14,
    color: '#3B3B3B'
  }
})
