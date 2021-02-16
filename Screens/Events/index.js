import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Text,
  Dimensions,
  Image
} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { connect } from 'react-redux'

import { TabMore, ScrollSelectItem } from '../../Components/Other'
import { Icon, SearchInput, Link } from '../../Components/Elemets'

class EventsScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
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
        <View
          style={
            {
              /* borderRadius: 4, overflow: 'hidden'  */
            }
          }
        >
          <Image
            style={{ width: '100%', height: 172 }}
            source={{ uri: item.image }}
          />
        </View>
        <View style={{ paddingHorizontal: 1, paddingVertical: 5 }}>
          <Text style={styles.sliderDataText}>
            {item.day + ' ' + 'at' + ' ' + item.time}
          </Text>
          <Text style={styles.sliderInfoText}>{item.text}</Text>
        </View>
      </View>
    )
  }

  handleSelectItem = val => {
    console.log(val)
  }

  handleAddEvent = () => {
    this.props.navigation.navigate('AddEvent')
  }

  render () {
    let { height, width } = Dimensions.get('window')

    return (
      <>
        <TabMore routeName='Events' navigation={this.props.navigation} />
        <View
          style={{ /* backgroundColor: 'green', */ flex: 1, marginBottom: 90 }}
        >
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <StatusBar
              barStyle='dark-content'
              backgroundColor='#0000'
              translucent={true}
            />
            <SearchInput mainContainerStyle={styles.serachInput} />
            <ScrollSelectItem
              onChange={this.handleSelectItem}
              items={items}
              initialValue='all'
            />
            <View style={{ paddingBottom: 20 }}>
              <Text style={styles.titleSlides}>Suggested for You</Text>
              <Carousel
                layout={'default'}
                ref={c => {
                  this._carousel = c
                }}
                data={allData1}
                renderItem={this._renderItem}
                sliderWidth={width}
                itemWidth={width - 70}
                activeSlideAlignment='start'
                loop
                autoplay
              />
              <Link>
                <Text>View All ></Text>
              </Link>
            </View>
            <View style={{ paddingBottom: 20 }}>
              <Text style={styles.titleSlides}>Events you may like</Text>
              <Carousel
                layout={'default'}
                ref={c => {
                  this._carousel = c
                }}
                data={allData}
                renderItem={this._renderItem}
                sliderWidth={width}
                itemWidth={width - 70}
                activeSlideAlignment='start'
                loop
                autoplay
              />
              <Link>
                <Text>View All ></Text>
              </Link>
            </View>
            <View style={{ paddingBottom: 20 }}>
              <Text style={styles.titleSlides}>Popular</Text>
              <Carousel
                layout={'default'}
                ref={c => {
                  this._carousel = c
                }}
                data={allData2}
                renderItem={this._renderItem}
                sliderWidth={width}
                itemWidth={width - 70}
                activeSlideAlignment='start'
                loop
                autoplay
              />
              <Link>
                <Text>View All ></Text>
              </Link>
            </View>
          </ScrollView>
          {!this.props.showTabMore && (
            <Icon
              onPress={this.handleAddEvent}
              style={styles.addIcon}
              name='plus'
              type='antdesign'
              size={22}
              color='white'
            />
          )}
        </View>
      </>
    )
  }
}

const mapStateToProps = state => ({
  showTabMore: state.uiReducer.showMore
})

export default connect(mapStateToProps)(EventsScreen)

const styles = StyleSheet.create({
  topMainView: {
    flex: 1,
    flexGrow: 1
  },
  scrollView: {
    // marginBottom: 90,
  },
  scrollViewContainer: {
    paddingHorizontal: 15,
    paddingBottom: 10
    // backgroundColor: 'red'
  },
  addIcon: {
    width: 44,
    height: 44,
    position: 'absolute',
    bottom: 16,
    right: 16,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#C93146',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15
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
})

const items = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'This month',
    value: 'this month'
  },
  {
    label: 'This week',
    value: 'this week'
  },
  {
    label: 'Today',
    value: 'today'
  },
  {
    label: 'Tomorrow',
    value: 'tomorrow'
  },
  {
    label: 'Last week',
    value: 'last week'
  }
]

const allData = [
  {
    time: '20:00',
    day: 'Today',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image:
      'https://img2.10bestmedia.com/Images/Photos/254833/p-The-Rock-Tucson-AZ_54_990x660_201406012148.jpg'
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
    image:
      'http://static.asiawebdirect.com/m/kl/portals/kuala-lumpur-ws/homepage/magazine/5-clubs/pagePropertiesImage/best-clubs-kuala-lumpur.jpg.jpg'
  },
  {
    time: '20:00',
    day: 'Today',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image:
      'https://res.cloudinary.com/prismclubs/image/upload/v1578997695/krewella-at-prismturns1_il68pm.jpg'
  },
  {
    time: '20:00',
    day: 'Today',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/10/c3/5f/7a/excellemt-girls-in-da.jpg'
  }
]
const allData1 = [
  {
    time: '20:00',
    day: 'Today',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image: 'https://sound2kill4.com/wp-content/uploads/2016/11/events.jpg'
  },
  {
    time: '20:00',
    day: 'Friday',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image:
      'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1519627962%2Fvltlogy23k1iid9pjffx.jpg'
  },
  {
    time: '20:00',
    day: 'Monday',
    text: 'Lorem ipsum dolor sit amet, coasfcsda ljhns elitr, sed ...',
    image:
      'https://static.adweek.com/adweek.com-prod/wp-content/uploads/2018/03/event-season-content-2018.jpg'
  },
  {
    time: '20:00',
    day: 'Today',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGn1TbTO00aZMKDMM7FcVDHtp-3r_A-r4_KH0eGXVm_t4uCyV1&s'
  },
  {
    time: '20:00',
    day: 'Today',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image:
      'http://topcargo.com.ua/wp-content/uploads/2016/11/china_new-year.jpg'
  }
]
const allData2 = [
  {
    time: '20:00',
    day: 'Today',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image:
      'http://www.events-vietnam.com/wp-content/uploads/2013/05/Regional-conference.jpg'
  },
  {
    time: '20:00',
    day: 'Friday',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image:
      'http://www.eventelephant.com/wp-content/uploads/2019/01/EventElephant.jpg'
  },
  {
    time: '20:00',
    day: 'Monday',
    text: 'Lorem ipsum dolor sit amet, coasfcsda ljhns elitr, sed ...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnLuNSn62QuLyHxGgUAzP-uPUgXSsZWLxg3p5jR8E8sgMVWwlp&s'
  },
  {
    time: '20:00',
    day: 'Today',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image: 'https://agsun.co/wp-content/uploads/2018/09/EVENTS-2.png'
  },
  {
    time: '20:00',
    day: 'Today',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...',
    image:
      'https://static.tildacdn.com/tild3061-6233-4764-a161-303763383162/2_3.JPG'
  }
]
