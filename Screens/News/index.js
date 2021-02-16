import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { TabMore, ScrollSelectItems } from '../../Components/Other'
import { SearchInput, Link } from '../../Components/Elemets'



class NewsScreen extends Component {
  constructor(props) {
    super(props)
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
        <TabMore routeName='News' navigation={this.props.navigation} />
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
          <SearchInput mainContainerStyle={styles.serachInput} />
          <ScrollSelectItems
            items={items}
            initialValue='all'
          />
          <View style={{ paddingBottom: 20 }}>
            <Text style={styles.titleSlides}>Latest news</Text>
            <Carousel
              layout={'default'}
              ref={(c) => { this._carousel = c; }}
              data={allData1}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width - 70}
              activeSlideAlignment='start'
              loop
              autoplay
            />
            <Link><Text>View All ></Text></Link>
          </View>
          <View style={{paddingBottom: 20}}>
            <Text style={styles.titleSlides}>Family</Text>
            <Carousel
              layout={'default'}
              ref={(c) => { this._carousel = c; }}
              data={allData1}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width - 70}
              activeSlideAlignment='start'
              loop
              autoplay
            />
            <Link><Text>View All ></Text></Link>
          </View>
          <View style={{paddingBottom: 20}}>
            <Text style={styles.titleSlides}>Sport</Text>
            <Carousel
              layout={'default'}
              ref={(c) => { this._carousel = c; }}
              data={allData1}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width - 70}
              activeSlideAlignment='start'
              loop
              autoplay
            />
            <Link><Text>View All ></Text></Link>
          </View>
          <View style={{paddingBottom: 20}}>
            <Text style={styles.titleSlides}>Lifestile</Text>
            <Carousel
              layout={'default'}
              ref={(c) => { this._carousel = c; }}
              data={allData1}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width - 70}
              activeSlideAlignment='start'
              loop
              autoplay
            />
            <Link><Text>View All ></Text></Link>
          </View>
          <View style={{paddingBottom: 20}}>
            <Text style={styles.titleSlides}>Meetup</Text>
            <Carousel
              layout={'default'}
              ref={(c) => { this._carousel = c; }}
              data={allData1}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width - 70}
              activeSlideAlignment='start'
              loop
              autoplay
            />
            <Link><Text>View All ></Text></Link>
          </View>
          <View style={{paddingBottom: 20}}>
            <Text style={styles.titleSlides}>Milan</Text>
            <Carousel
              layout={'default'}
              ref={(c) => { this._carousel = c; }}
              data={allData1}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width - 70}
              activeSlideAlignment='start'
              loop
              autoplay
            />
            <Link><Text>View All ></Text></Link>
          </View>
        </ScrollView>
      </>
    );
  }

};


export default NewsScreen;

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
  titleSlides: {
    // marginTop: 24,
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


const items = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Family',
    value: 'family'
  },
  {
    label: 'Sport',
    value: 'sport'
  },
  {
    label: 'Lifestyle',
    value: 'lifestyle'
  },
  {
    label: 'Meetup',
    value: 'meetup'
  },
  {
    label: 'Last week',
    value: 'last week',
  }
]

const allData1 = [
  {
    time: '20:00',
    day: 'Today',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image: 'https://thumbs.dreamstime.com/b/news-background-breaking-news-vector-infographic-news-theme-map-world-illustration-91706901.jpg',
  },
  {
    time: '20:00',
    day: 'Friday',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnsXlWY3gCAcBG-Z7OpQKtU9IvUwH-Xi1Kqiwu0JavwwrPqOnd&s'
  },
  {
    time: '20:00',
    day: 'Monday',
    text: 'Lorem ipsum dolor sit amet, coasfcsda ljhns elitr, sed ...',
    image: 'https://nforeningen.no/wp-content/uploads/2015/06/subseabilde-750x730.jpg',
  },
  {
    time: '20:00',
    day: 'Today',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image: 'https://img.manoramaonline.com/content/dam/mm/en/news/world/images/2020/1/3/iran-attack.jpg.image.845.440.jpg',
  },
  {
    time: '20:00',
    day: 'Today',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image: 'https://www.kcet.org/sites/kl/files/styles/kl_image_hero/public/thumbnails/image/kk-bbc.jpg?itok=PjdHoWdv',
  },
]