import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { Rating, AirbnbRating } from 'react-native-ratings'

import { SearchInput, Icon } from '../../Components/Elemets'
import { TabMore, ForumBox, ScrollSelectItem } from '../../Components/Other'

class DirectoryScreen extends Component {
  constructor (props) {
    super(props)
  }

  handleSelectItem = val => {
    console.log(val)
  }

  ratingCompleted = val => {
    console.log(val)
  }

  _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 4,
          overflow: 'hidden'
        }}
      >
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            style={{ width: '100%', height: 172 }}
            source={{ uri: item.image }}
          />
        </TouchableOpacity>
        <View style={{ paddingHorizontal: 8, paddingVertical: 5 }}>
          <Text style={styles.sliderInfoName}>{item.name}</Text>
          <Text style={styles.sliderInfoText}>{`${item.text.slice(
            0,
            45
          )}...`}</Text>
          <View style={styles.ratingBlock}>
            <Rating
              type='star'
              ratingCount={5}
              imageSize={20}
              showRating={false}
              fractions={5}
              style={{ backgroundColor: 'red' }}
              onFinishRating={this.ratingCompleted}
            />
          </View>
        </View>
      </View>
    )
  }

  render () {
    let { height, width } = Dimensions.get('window')

    return (
      <>
        <TabMore routeName='Directory' navigation={this.props.navigation} />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <SearchInput mainContainerStyle={styles.serachInput} />
          <ScrollSelectItem
            onChange={this.handleSelectItem}
            items={items}
            initialValue='all'
          />
          <View style={styles.topView}>
            <Text style={styles.titleSlides}>Restaurants</Text>
            <Carousel
              layout={'default'}
              ref={c => {
                this._carousel = c
              }}
              data={coruselData1}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width - 70}
              activeSlideAlignment='start'
              loop
            />
          </View>
          <View style={styles.centerView}>
            <Text style={styles.titleSlides}>Resort areas</Text>
            <Carousel
              layout={'default'}
              ref={c => {
                this._carousel = c
              }}
              data={coruselData2}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width - 70}
              activeSlideAlignment='start'
              loop
            />
          </View>

          <View style={styles.bottomView}>
            <Text style={styles.titleSlides}>Nightlife</Text>
            <Carousel
              layout={'default'}
              ref={c => {
                this._carousel = c
              }}
              data={coruselData3}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width - 70}
              activeSlideAlignment='start'
              loop
            />
          </View>
        </ScrollView>
      </>
    )
  }
}

export default DirectoryScreen

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 90
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingHorizontal: 16
  },
  serachInput: {
    marginTop: 16
  },
  sliderInfoName: {
    paddingTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3B3B3B'
  },
  sliderInfoText: {
    paddingVertical: 5,
    fontSize: 12,
    color: '#3B3B3B'
  },
  ratingBlock: {
    paddingBottom: 5,
    alignItems: 'flex-start'
  },
  titleSlides: {
    marginTop: 24,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3B3B3B'
  },
  topView: {
    flex: 1
  },
  centerView: {
    flex: 1,
    // marginVertical: 10
  },
  bottomView: {
    flex: 1
  }
})

const items = [
  {
    label: 'All',
    value: 'all'
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
    label: 'Meetupss',
    value: 'meetupss'
  },
  {
    label: 'Meetups',
    value: 'meetups'
  }
]

const coruselData1 = [
  {
    name: 'Veneto Secrets',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg'
  },
  {
    name: 'Excellent Experience',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image:
      'https://operasuitehotel.com/uploads/dining/gallery/kojr09q1g7q54tl2kxqrtxl4n.jpg'
  },
  {
    name: 'Napkin Know How',
    text: 'Lorem ipsum dolor sit amet, coasfcsda ljhns elitr, sed ...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6u9RYZuIfgWALBsQIGwSJ4BUPH-A67uzNI9w0HkqqTf6VbhoD&usqp=CAU'
  },
  {
    name: 'Perfect Place',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtx07sKAOQ-Jo59SqHcV3ND9n2x3cmseW5YiC7aOyJ5WaiLirD&usqp=CAU'
  },
  {
    name: 'Service Supplied',
    text: 'Lorem ipsum dolor si onsetetur sadipscing elitr, sed ...',
    image:
      'https://www.conradmaldives.com/wp-content/uploads/2019/04/ithaa-undersea-restaurant-1920x800-500x268.jpg'
  }
]

const coruselData2 = [
  {
    name: 'Cala di Volpe',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image:
      'https://pix10.agoda.net/hotelImages/91259/-1/f7c0ba117baf62dbe79307216204808d.jpg?s=1024x768'
  },
  {
    name: 'Excellent Experience',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image: 'https://www.icstrvl.ru/data/2018/07/17/3123496236/17.jpg'
  },
  {
    name: 'Napkin Know How',
    text: 'Lorem ipsum dolor sit amet, coasfcsda ljhns elitr, sed ...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSvATbP-jmLlrbLjumBT7YybPoCFl-bfN-NeZPLaNPd_X-kU57&usqp=CAU'
  },
  {
    name: 'Perfect Place',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBJmLdHqbb19KXLu5axzgcvMgCzFKGHtVBQn2tSrPxxCcSq0Hk&usqp=CAU'
  },
  {
    name: 'Service Supplied',
    text: 'Lorem ipsum dolor si onsetetur sadipscing elitr, sed ...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQK7TIl5EI90_CIEwI5AbRWiLiwqJZiUsmPBrwCjfDQ50NGYfFo&usqp=CAU'
  }
]

const coruselData3 = [
  {
    name: 'Therpooler Pub',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSctuFc8sfwxaynq4MANWeCe0zgdkoWCl_qMkpLjloXj1oava7A&usqp=CAU'
  },
  {
    name: 'Excellent Experience',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRt1jN_hRPna8RTe5HzdwDSDauceHO7Dlc7c2sMYwyKxEMk6rRF&usqp=CAU'
  },
  {
    name: 'Napkin Know How',
    text: 'Lorem ipsum dolor sit amet, coasfcsda ljhns elitr, sed ...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtxeknZVEaFCbMknIP2I4TwWy1BASqrQb3tZeVmRZbEUsAhNPp&usqp=CAU'
  },
  {
    name: 'Perfect Place',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrzuB6IO5hd4uiD5BWQ7F6oUmRxpTD6dKrtFZmrcxbXL1_YTpB&usqp=CAU'
  },
  {
    name: 'Service Supplied',
    text: 'Lorem ipsum dolor si onsetetur sadipscing elitr, sed ...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7F5zSkgd47mHE4x6Lu1E0FyzlehKYvqy2gHURIeI7Hg2GN0ne&usqp=CAU'
  }
]
