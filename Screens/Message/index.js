import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Image, } from 'react-native';

import { TabMore, MessageBox } from '../../Components/Other'
import { SearchInput } from '../../Components/Elemets'


class MessageScreen extends Component {
  constructor(props) {
    super(props);
   
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Messages'
    };
  };

  render() {

    return (
      <>
        <TabMore navigation={this.props.navigation}/>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
          <SearchInput mainContainerStyle={styles.serachInput} clearValue={() => {}} onChangeText={() => {}} value={''}/>
          <View style={styles.messagesContainer}>
            <MessageBox messageSenderName='Andrew Smith' messageCount={3} imageName='jason'/>
            <MessageBox messageSenderName='Margot Robbie' messageCount={7}/>
            <MessageBox messageSenderName='Emilia Clarke'/>
            <MessageBox messageSenderName='Dwayne Johnson (The rocke)' messageCount={2}/>
            <MessageBox messageSenderName='Marion Cotillard'/>
            <MessageBox messageSenderName='Jason Statem'/>
            <MessageBox messageSenderName='Jessica Alba '/>
            <MessageBox messageSenderName='Megan Fox'/>
         
          </View>
        </ScrollView>
      </>
    );
  }

};

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 90,
    // backgroundColor: 'red',
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    // backgroundColor: 'blue'
  },
  serachInput: {
    marginTop: 16
  },
  messagesContainer: {
    marginTop: 28,
    paddingBottom: 12
  }
});

export default MessageScreen;
