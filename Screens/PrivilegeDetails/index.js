import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'

import { TabMore } from '../../Components/Other'
import { Icon, } from '../../Components/Elemets';

class PrivilegeDetailsScreen extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = ({ navigation }) => {
    const goBack = () => {
      navigation.goBack()
    }
    return ({
      title: 'Privilege',
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
        marginLeft: -20
      },
    })
  };


  render() {
    const { params } = this.props.navigation.state;
    return (
      <>
        <TabMore routeName='Privilege' navigation={this.props.navigation} />
        <ScrollView style={s.scrollView} contentContainerStyle={s.scrollViewContainer}>
          <View style={s.dataMainCont}>
            <View style={s.imgCont}>
              <Image style={{ width: '100%', height: '100%' }} source={{ uri: params.img }} />
            </View>
            <Text style={s.title}>{params.title}</Text>
            <Text style={s.info}>{params.info}</Text>
          </View>
          <View style={s.shareMainCont}>
            <View style={s.shareTextCont}>
              <View style={s.lineDecor}></View>
              <Text style={s.shareText}>Share</Text>
              <View style={s.lineDecor}></View>
            </View>
            <View style={s.iconsCont}>
              <Icon style={s.socIcons} name='facebook-with-circle' type='entypo' size={40} color='#3578e5' />
              <Icon style={s.socIcons} name='linkedin-with-circle' type='entypo' size={40} color='#1DA1F2' />
              <Icon style={s.socIcons} name='twitter-with-circle' type='entypo' size={40} color='#0077B5' />
            </View>
          </View>
        </ScrollView>
      </>
    )
  }
}

export default PrivilegeDetailsScreen


const s = StyleSheet.create({
  scrollView: {
    marginBottom: 90,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  dataMainCont: {
    flex: 2,
    marginTop: 24
  },
  imgCont: {
    flex: 1,
    height: 175,
    overflow: 'hidden',
    borderRadius: 5
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
    lineHeight: 17,
    color: '#3B3B3B'
  },
  shareMainCont: {
    flex: 1,
    marginTop: 30
  },
  shareTextCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareText: {
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 14,
    color: '#3B3B3B'
  },
  lineDecor: {
    flex: 1,
    height: 1,
    backgroundColor: '#E9E9E9'
  },
  iconsCont: {
    marginTop: 12,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  socIcons: {
    marginHorizontal: 8
  },
})