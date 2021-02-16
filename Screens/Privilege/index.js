import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableWithoutFeedback, StatusBar } from 'react-native'

import { TabMore } from '../../Components/Other'
import { SearchInput } from '../../Components/Elemets'

class PrivilegeScreen extends Component {
  constructor(props) {
    super(props)
  }

  handleItemClick = (data) => {
    const { navigation } = this.props;
    navigation.push('PrivilegeDetails', data)
  }

  render() {
    return (
      <>
        <StatusBar barStyle="default" backgroundColor='#0000' translucent={true} />
        <TabMore routeName='Privilege' navigation={this.props.navigation} />
        <ScrollView style={s.scrollView} contentContainerStyle={s.scrollViewContainer}>
          <SearchInput mainContainerStyle={s.serachInput} />
          <View style={s.contentContainer}>
            {
              prvlData.map((val, idx) => (
                <TouchableWithoutFeedback key={val.id} onPress={this.handleItemClick.bind(this, val)}>
                  <View style={s.itemCont}>
                    <View style={s.imgCont}>
                      <Image style={{ width: '100%', height: '100%' }} source={{ uri: val.img }} />
                    </View>
                    <Text style={s.title}>{val.title}</Text>
                    <Text style={s.info}>{`${val.info.slice(0, 60)}...`}</Text>
                  </View>
                </TouchableWithoutFeedback>
              ))
            }
          </View>
        </ScrollView>
      </>
    )
  }
}


export default PrivilegeScreen;


const s = StyleSheet.create({
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
  contentContainer: {
    marginTop: 30,
    // marginBottom: 10,
  },
  itemCont: {
    marginBottom: 16
  },
  imgCont: {
    flex: 1,
    height: 175,
    overflow: 'hidden',
    borderRadius: 6
  },
  title: {
    marginTop: 8,
    marginBottom: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3B3B3B'
  },
  info: {
    fontSize: 13,
    color: '#3B3B3B'
  },
})


const prvlData = [
  {
    id: 1,
    title: 'Privilege 1',
    img: 'https://travelbulgarianews.ru/wp-content/uploads//2016/12/349910_15072115090032698876-1100x580.jpg',
    info: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  },
  {
    id: 2,
    title: 'Privilege 2',
    img: 'https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/3/6/9/2/1972963-1-eng-GB/711-drinks-led-pubs-closed-in-the-past-12-months_wrbm_large.jpg',
    info: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  },
  {
    id: 3,
    title: 'Privilege 3',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPvIDNoYmOgir1ZeIhngKN98LjKI4Sk6oLaj0nQt7UOvIJ14fV&usqp=CAU',
    info: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  },
  {
    id: 4,
    title: 'Privilege 4',
    img: 'https://img2.10bestmedia.com/Images/Photos/264953/p-NEBO-patio-hi_55_660x440.jpg',
    info: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  },
]