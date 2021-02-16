import React, { Component } from 'react';
import { Dimensions, StyleSheet, ScrollView, View, Text, StatusBar, Image, } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { TabMore } from '../../Components/Other'

const allData = [
  {
    time: '20:00',
    day: 'Today',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image: 'https://img2.10bestmedia.com/Images/Photos/254833/p-The-Rock-Tucson-AZ_54_990x660_201406012148.jpg',
  },
  {
    time: '20:00',
    day: 'Friday',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image: 'https://hotelcongress.com/wp-content/uploads/2018/11/club.jpg'
  },
  {
    time: '20:00',
    day: 'Monday',
    text: 'Lorem ipsum dolor sit amet, coasfcsda ljhns elitr, sed ...',
    image: 'http://static.asiawebdirect.com/m/kl/portals/kuala-lumpur-ws/homepage/magazine/5-clubs/pagePropertiesImage/best-clubs-kuala-lumpur.jpg.jpg',
  },
  {
    time: '20:00',
    day: 'Today',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image: 'https://res.cloudinary.com/prismclubs/image/upload/v1578997695/krewella-at-prismturns1_il68pm.jpg',
  },
  {
    time: '20:00',
    day: 'Today',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/c3/5f/7a/excellemt-girls-in-da.jpg',
  },
]

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={{ backgroundColor: 'white', borderRadius: 4, overflow: 'hidden' }}>
        <View style={{ /* borderRadius: 4, overflow: 'hidden'  */ }}>
          <Image
            style={{ width: '100%', height: 172 }}
            source={{ uri: item.image }} />
        </View>
        <View style={{ paddingHorizontal: 1, paddingVertical: 5 }}>
          <Text style={styles.sliderDataText}>{item.day + ' ' + 'at' + ' ' + item.time}</Text>
          <Text style={styles.sliderInfoText}>{item.text}</Text>
        </View>
      </View>
    );
  }

  render() {
    let { height, width } = Dimensions.get('window');

    return (
      <>
        <TabMore navigation={this.props.navigation} />
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
          <StatusBar barStyle='dark-content' backgroundColor='#0000' translucent={true} />
          <View style={styles.topMainView}>
            <Text style={styles.titleSlides}>Upcoming event</Text>
            <Carousel
              layout={'default'}
              ref={(c) => { this._carousel = c; }}
              data={allData}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width - 70}
              activeSlideAlignment='start'
              loop
            />
          </View>
          <View style={styles.bottomMainView}>
            <Text style={styles.titleSlides}>Latest news</Text>
            <Carousel
              layout={'default'}
              ref={(c) => { this._carousel = c; }}
              data={allData}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width - 70}
              activeSlideAlignment='start'
              loop
            />
          </View>
        </ScrollView>
      </>
    );
  }

};

const styles = StyleSheet.create({
  topMainView: {
    flex: 1,
    flexGrow: 1,

  },
  scrollView: {
    marginBottom: 90,
  },
  scrollViewContainer: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    // backgroundColor: 'red'
  },
  bottomMainView: {
    flex: 1,
    flexGrow: 1,
  },
  titleSlides: {
    marginTop: 24,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3B3B3B'
  },
  sliderDataText: {
    fontSize: 10,
    color: '#3B3B3B'
  },
  sliderInfoText: {
    fontSize: 12,
    color: '#3B3B3B'
  }
});

export default HomeScreen;
