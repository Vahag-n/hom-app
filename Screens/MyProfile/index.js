import React, { Component } from 'react';
import { View, Text, ScrollView, StatusBar, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Icon as VectorIcon } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';


import { TabMore } from '../../Components/Other'
import { Icon } from '../../Components/Elemets'

const { width, height } = Dimensions.get('window')


class MyProfileScreen extends Component {
  constructor(props) {
    super(props)
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={s.topicItem}>
        <View style={s.topicImgMainCont}>
          <Image style={{ width: 32, height: 32, borderRadius: 50 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRyhKvToc8AIunkWXIsVovdgQqbgnty9eEjFM4Dp9XuFHonrcn&usqp=CAU' }} />
          <Text style={s.topicTitle}>How do I invite others to join my projects?</Text>
        </View>
        <View style={s.topicDescription}>
          <Text style={s.topicData}>19 December 2019</Text>
          <View style={{ flexDirection: 'row' }}><Text style={s.topicReplyTitle}>Reply:</Text><Text style={s.topicReplyTxt}>24</Text></View>
          <View style={{ flexDirection: 'row' }}><Text style={s.topicReplyTitle}>Views:</Text><Text style={s.topicReplyTxt}>105</Text></View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <>
        <StatusBar barStyle="default" backgroundColor='#0000' translucent={true} />
        <TabMore routeName='My profile' navigation={this.props.navigation} />
        <ScrollView style={s.scrollView} contentContainerStyle={s.scrollViewContainer}>
          <View style={s.headerCont}>
            <View style={s.profEditCont}>
              <View style={s.profEditContLeftBlock}>
                <Text style={s.myProfileText}>My Profile</Text>
                <View style={s.isOnlineCont}>
                  <View style={s.isOnline}></View>
                  <Text style={s.publicText}>Public</Text>
                </View>
              </View>
              <View style={s.profEditContRightBlock}>
                <TouchableOpacity activeOpacity={.6} style={s.editBtn}>
                  <Text style={s.editBtnText}>Edit</Text>
                </TouchableOpacity>
                <Icon type='simple-line-icon' name='logout' size={20} color='white' />
              </View>
            </View>
            <View style={s.imgNameCont}>
              <View style={s.imgCont}>
                <Image
                  resizeMode='contain'
                  style={{ flex: 1 }}
                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRyhKvToc8AIunkWXIsVovdgQqbgnty9eEjFM4Dp9XuFHonrcn&usqp=CAU' }}
                />
              </View>
              <View style={s.nameEmailCont}>
                <Text style={s.nameText}>Samanta Pushkash</Text>
                <View style={s.mailCont}>
                  <VectorIcon type='evilicon' name='envelope' size={24} color='#5AC284' />
                  <Text style={s.emailTitle}>E-mail:</Text>
                  <Text style={s.mailText}>Jessicaal@gmail.com</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={s.contentCont}>
            <View style={s.personalInformation}>
              <Text style={s.persInfoTitle}>Personal information</Text>
              {
                personalInformation.map(({ prop, value }, idx) => {
                  return (
                    <View key={idx + prop} style={s.infoBox}>
                      <Text style={s.infoText}>{prop}</Text>
                      <Text style={s.infoText}>{value}</Text>
                    </View>
                  )
                })
              }
            </View>
            <View style={s.myTopics}>
              <Text style={[s.topicsTitle]}>My Topics</Text>
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
          </View>
        </ScrollView>
      </>
    )
  }
}

export default MyProfileScreen;

const s = StyleSheet.create({
  scrollView: {
    marginBottom: 90,
    // backgroundColor: 'red',
  },
  scrollViewContainer: {
    flexGrow: 1,
    // paddingHorizontal: 16,
    // backgroundColor: 'blue'
  },
  headerCont: {
    flex: .7,
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#B12137'
  },
  contentCont: {
    flex: 3,
    paddingHorizontal: 24,
    paddingBottom: 20
  },
  profEditCont: {
    paddingTop: 30,
    paddingBottom: 30,
    minHeight: 140,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    // backgroundColor: 'rgba(0, 0, 0, .3)'
  },
  profEditContLeftBlock: {

  },
  myProfileText: {
    marginBottom: 8,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: .7
  },
  isOnlineCont: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  isOnline: {
    width: 10,
    height: 10,
    marginRight: 8,
    borderRadius: 50,
    backgroundColor: '#5AC284'
  },
  publicText: {
    fontSize: 13,
    letterSpacing: .6,
    color: 'white'
  },
  profEditContRightBlock: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  editBtn: {
    marginRight: 12,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'white'
  },
  editBtnText: {
    fontSize: 13,
    letterSpacing: .5,
    color: 'white'
  },
  imgNameCont: {
    left: 0, right: 0, bottom: -42,
    position: 'absolute',
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'pink'
  },
  imgCont: {
    width: 88,
    height: 88,
    marginRight: 16,
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: '#3B3B3B'
  },
  mailCont: {
    flexDirection: 'row',
    alignItems: 'center'

  },
  nameEmailCont: {
    flex: 1
  },
  nameText: {
    maxWidth: '90%',
    marginBottom: 24,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: .4,
    color: 'white',
    // backgroundColor: 'red',
  },
  mailText: {
    marginLeft: 3,
    maxWidth: '90%',
    color: '#3B3B3B'
  },
  emailTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5AC284',
  },
  personalInformation: {
    marginTop: 60
  },
  persInfoTitle: {
    marginVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: .6,
    color: '#5AC284'
  },
  infoBox: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1, borderBottomWidth: 1,
    borderColor: '#E9E9E9',
  },
  infoText: {
    fontSize: 14,
    color: '#3B3B3B',
    letterSpacing: .4,
  },
  topicsTitle: {
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: .6,
    borderBottomWidth: 1,
    borderColor: '#E9E9E9',
    color: '#5AC284'
  },
  myTopics: {
    marginTop: 10
  },
  topicImgMainCont: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  topicTitle: {
    maxWidth: '80%',
    marginLeft: 16,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#535254',
    // backgroundColor:'red',
  },
  topicItem: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 4,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: '#DEDEDE',
    backgroundColor: 'white',
  },
  topicDescription: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  topicReplyTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: .4,
    color: '#535254'
  },
  topicReplyTxt: {
    color: '#535254'
  },
  topicData: {
    fontSize: 11
  }
})


const personalInformation = [
  { prop: 'residence', value: 'Hadid' },
  { prop: 'apartment', value: 'A3' },
  { prop: 'familyMember', value: 4 },
  { prop: 'interests', value: 'Sport, lofeStyle' },
  { prop: 'language', value: 'English' },
  { prop: 'nationality', value: 'Englishwoman' },
]


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