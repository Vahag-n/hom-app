import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Image, } from 'react-native';

import { NotificationBox, TabMore } from '../../Components/Other'


class NotificationScreen extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <>
        <TabMore navigation={this.props.navigation} />
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
          <NotificationBox type='event' boxTitle='Event 1 Title' />
          <NotificationBox type='forum' boxTitle='Karina Orda' />
          <NotificationBox type='message' boxTitle='Edwin Sorenc' />
          <NotificationBox type='news' boxTitle='News' />
          <NotificationBox type='forum' boxTitle='Nikolas Kostamendi' />
          <NotificationBox type='message' boxTitle='Skarlet Smith' />
          <NotificationBox type='event' boxTitle='Event 2 Title' />

        </ScrollView>
      </>
    );
  }

};

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 90
  },
  scrollViewContainer: {
    // backgroundColor: 'red'
  }
});

export default NotificationScreen;
