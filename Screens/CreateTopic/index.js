import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { Icon as VectorIcon } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'
import DocumentPicker from 'react-native-document-picker'

import { Input, Button, Icon } from '../../Components/Elemets'

class CreateTopicScreen extends Component {
  constructor (props) {
    super(props)
  }

  static navigationOptions = ({ navigation }) => {
    const goBack = () => {
      navigation.goBack()
    }
    return {
      title: 'Forums',
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
      }
    }
  }

  handleAddImage = () => {
    ImagePicker.showImagePicker({}, response => {
      console.log(response.uri)
    })
  }

  handleAddDocument = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles]
      })
      for (const res of results) {
        console.log('URI : ' + res.uri);
        console.log('Type : ' + res.type);
        console.log('File Name : ' + res.name);
        console.log('File Size : ' + res.size);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err
      }
    }
  }

  render () {
    return (
      <>
        <ScrollView
          style={s.scrollView}
          contentContainerStyle={s.scrollViewContainer}
        >
          <View style={[s.topCont]}>
            <TouchableOpacity
              onPress={this.handleAddImage}
              activeOpacity={0.7}
              style={[s.addItem, s.leftItem]}
            >
              <View style={s.iconAtextCont}>
                <View style={s.iconCont}>
                  <VectorIcon
                    iconStyle={s.plusIconStyle}
                    type='antdesign'
                    name='pluscircle'
                    size={18}
                    color='#8E8E8F'
                  />
                  <VectorIcon
                    type='font-awesome'
                    name='image'
                    size={28}
                    color='#8E8E8F'
                  />
                </View>
              </View>
              <Text style={s.addImgTxt}>Add image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.handleAddDocument}
              activeOpacity={0.7}
              style={[s.addItem, s.rightItem]}
            >
              <View style={s.iconAtextCont}>
                <View style={s.iconCont}>
                  <VectorIcon
                    iconStyle={{ position: 'absolute', left: -24, top: -8 }}
                    type='antdesign'
                    name='pluscircle'
                    size={18}
                    color='#8E8E8F'
                  />
                  <VectorIcon
                    type='entypo'
                    name='attachment'
                    size={28}
                    color='#8E8E8F'
                  />
                </View>
              </View>
              <Text style={s.addImgTxt}>Add image</Text>
            </TouchableOpacity>
          </View>
          <View style={s.centerCont}>
            <Input
              iconSize={18}
              label='Titile'
              iconColor='#5AC284'
              iconName='format-title'
              iconType='material-community'
              placeholder='Title'
              inputStyle={{ backgroundColor: 'white' }}
            />
            <Input
              multiline
              iconSize={18}
              label='Description'
              iconColor='#5AC284'
              iconType='entypo'
              iconName='text'
              placeholder='Description'
              inputStyle={{
                backgroundColor: 'white',
                minHeight: 90,
                maxHeight: 150,
                textAlignVertical: 'top'
              }}
            />
          </View>
          <View style={s.bottomCont}>
            <Button stylesBtn={{ marginBottom: 10 }}>Create Topic</Button>
          </View>
        </ScrollView>
      </>
    )
  }
}

export default CreateTopicScreen

const s = StyleSheet.create({
  topMainView: {
    flex: 1
  },
  scrollView: {
    flexGrow: 1,
    paddingTop: 16,
    paddingHorizontal: 16
    // marginBottom: 90
    // backgroundColor: 'red',
  },
  topCont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  centerCont: {
    flex: 1,
    marginVertical: 15
  },
  bottomCont: {
    flex: 1,
    paddingBottom: 15
    // backgroundColor: 'red'
  },
  addItem: {
    flex: 1,
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#ECECEC'
  },
  leftItem: {
    marginRight: 2.5
  },
  rightItem: {
    marginLeft: 2.5
  },
  iconCont: {
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor: 'red'
  },
  iconAtextCont: {},
  addImgTxt: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#535254'
  },
  plusIconStyle: {
    position: 'absolute',
    left: -24,
    top: -8
  }
})
