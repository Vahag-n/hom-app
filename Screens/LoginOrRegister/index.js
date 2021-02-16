import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Image, } from 'react-native';

import { Button, Link } from '../../Components/Elemets'


class LoginOrRegisterScreen extends Component {
  constructor(props) {
    super(props);
  }


  handleLogin = () => {
    this.props.navigation.navigate('Login')
  }

  handleRegister = () => {
    this.props.navigation.navigate('Register')
  }

  render() {
    
    return (
      <>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
          <StatusBar barStyle="default" backgroundColor='#0000' translucent={true} />
          <View style={styles.imageView}>
            <Image
              style={{ width: '100%', height: 310, borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}
              source={require('../../Asets/logregimage.png')}
            />
          </View>
          <View style={styles.btnsView}>
            <Text style={styles.text}>Welcome to smart house app</Text>
            <Button onPress={this.handleLogin} stylesBtn={styles.btnLogin} >Login</Button>
            <Button onPress={this.handleRegister} light>Register</Button>
          </View>
          <Link stylesContainer={styles.link}>About app</Link>
        </ScrollView>
      </>
    );
  }

};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: 'red',
  },
  scrollViewContainer: {
    flexGrow: 1,
    // backgroundColor: 'blue'
  },
  imageView: {
    // flex: 1,
    // flexGrow: 1,
    // backgroundColor: 'brown'
  },
  btnsView: {
    flexGrow: 1,
    paddingHorizontal: 20,
    // backgroundColor: 'green'

  },
  text: {
    marginVertical: 24,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Nunito Sans',
    color: '#3B3B3B'
  },
  btnLogin: {
    marginTop: 0
  },
  link: {
    marginTop: 30,
    marginBottom: 20
  }

});

export default LoginOrRegisterScreen;
