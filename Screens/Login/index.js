import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';

import { Icon, Input, Link, Button, } from '../../Components/Elemets';


class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: { value: '', valid: null },
        password: { value: '', valid: null }
      }
    }
  }

  static navigationOptions = ({ navigation }) => {
    const goBack = () => {
      navigation.goBack()
    }
    return ({
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
        marginLeft: -10
      },

    })
  };

  handleFormChange = (name, value) => {
    const formData = { ...this.state.formData };
    formData[name].value = value;

    this.setState({ formData })
  }

  handleLogin = () => {
    this.props.navigation.replace('TabNavigation')

  }

  render() {
    const { email, password } = this.state.formData
    const { navigation } = this.props

    return (
      <>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 24, flexGrow: 1 }}>
          <StatusBar barStyle='dark-content' backgroundColor='#0000' translucent={true} />
          <View style={{ /* backgroundColor: 'red', */ flexGrow: 1, paddingTop: '10%', justifyContent: 'space-between' }}>
            <Text style={styles.titleText}>LOG IN</Text>
            <Input
              name='email'
              value={email.value}
              onChangeText={this.handleFormChange}
              withoutLabel
              placeholder='Email'
            />
            <Input
              name='password'
              value={password.value}
              onChangeText={this.handleFormChange}
              withoutLabel
              placeholder='Password'
            />
            <Link to='ForgotPassword' navigation={navigation} stylesContainer={{ marginLeft: 'auto' }}>Forgot password?</Link>
            <Button onPress={this.handleLogin} >Log in</Button>
            <View style={styles.textAndRegistrLink}>
              <Text style={styles.textProvilla}>New in Provilla?</Text>
              <Link to='Register' navigation={this.props.navigation}>Register</Link>
            </View>
          </View>
          <Text style={styles.textOr}>or</Text>
          <View style={{ flexGrow: 1, /* backgroundColor: 'green' */ }}>
            <TouchableOpacity activeOpacity={.6} style={styles.linkedinBtn}>
              <Icon
                name='sc-linkedin'
                type='evilicon'
                color='blue'
                size={35}
              />
              <Text style={styles.linkedinBtnText}>Linkedin</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.6} style={styles.linkedinBtn} >
              <Icon
                name='sc-facebook'
                type='evilicon'
                color='blue'
                size={35}
              />
              <Text style={styles.linkedinBtnText} >Facebook</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#3B3B3B',
    textTransform: 'uppercase'
  },
  textAndRegistrLink: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textProvilla: {
    marginRight: 8,
  },
  textOr: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
    color: '#575757',
    opacity: .3,
  },
  linkedinBtn: {
    height: 44,
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderColor: '#DEDEDE',
    borderWidth: 1.5,
  },
  linkedinBtnText: {
    color: '#535254'
  }
})

export default LoginScreen;