import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Animated
} from 'react-native'
import { Icon as VectorIcon } from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker'
import ImagePicker from 'react-native-image-picker'

import { Input, Button } from '../../Components/Elemets'


const currDate = new Date()

class AddEventScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      btnAnim: new Animated.Value(0),
      showPicker: false,
      pickerMode: 'date',
      whichPick: '',
      formData: {
        startDate: { value: currDate },
        endDate: { value: currDate }
      }
    }
  }

  _keyboardDidShow = () => {
    Animated.timing(this.state.btnAnim, {
      toValue: -100,
      duration: 300
    }).start()
  }

  _keyboardDidHide = () => {
    Animated.timing(this.state.btnAnim, {
      toValue: 0,
      duration: 300
    }).start()
  }

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow
    )
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide
    )
  }

  handleDatePickerShow = (modeData, whichPick) => {
    this.setState({ showPicker: true, whichPick, pickerMode: modeData })
  }

  handleAddImage = () => {
    ImagePicker.showImagePicker({}, response => {
      console.log(response.uri)
    })
  }

  handleDateChange = (e, selectedDate) => {
    const currentDate = selectedDate || currDate
    this.setState(state => {
      if (state.whichPick === 'start') {
        return {
          showPicker: false,
          formData: { ...state.formData, startDate: { value: currentDate } }
        }
      } else if (state.whichPick === 'end') {
        return {
          showPicker: false,
          formData: { ...state.formData, endDate: { value: currentDate } }
        }
      }
    })
  }

  render () {
    const { formData, showPicker, pickerMode } = this.state
    const [, smo, sda, sye, stime] = formData.startDate.value.toString().split(' ')
    const [sho, smi] = stime.split(':');
    const [, emo, eda, eye, etime] = formData.endDate.value.toString().split(' ')
    const [eho, emi] = etime.split(':');

    return (
      <>
        <ScrollView contentContainerStyle={s.scrollCont}>
          <View style={s.topCont}>
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
          </View>
          <View style={s.centerCont}>
            <Input
              iconSize={18}
              label='Event name'
              iconColor='#5AC284'
              iconName='format-title'
              iconType='material-community'
              placeholder='Event name'
              inputStyle={{ backgroundColor: 'white' }}
            />
            <View style={s.datePicMainCont}>
              <View style={s.iconAlabel}>
                <VectorIcon
                  size={18}
                  type='material-community'
                  name='calendar-month'
                  color='#5AC284'
                />
                <Text style={s.textLabel}>Start date & time</Text>
              </View>
              <View style={s.datePickCont}>
                <TouchableOpacity
                  onPress={this.handleDatePickerShow.bind(
                    null,
                    'date',
                    'start'
                  )}
                  style={[s.datePickCommon, { marginRight: 10 }]}
                >
                  <Text style={s.dateValue}>{`${sda} ${smo} ${sye}`}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.handleDatePickerShow.bind(
                    null,
                    'time',
                    'start'
                  )}
                  style={s.datePickCommon}
                >
                  <Text style={s.dateValue}>{`${sho} : ${smi}`}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={s.datePicMainCont}>
              <View style={s.iconAlabel}>
                <VectorIcon
                  size={18}
                  type='material-community'
                  name='calendar-month'
                  color='#5AC284'
                />
                <Text style={s.textLabel}>End date & time</Text>
              </View>
              <View style={s.datePickCont}>
                <TouchableOpacity
                  onPress={this.handleDatePickerShow.bind(null, 'date', 'end')}
                  style={[s.datePickCommon, { marginRight: 10 }]}
                >
                  <Text style={s.dateValue}>{`${eda} ${emo} ${eye}`}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.handleDatePickerShow.bind(null, 'time', 'end')}
                  style={s.datePickCommon}
                >
                  <Text style={s.dateValue}>{`${eho} : ${emi}`}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Input
              iconSize={18}
              label='Location'
              iconColor='#5AC284'
              iconName='location-pin'
              iconType='entypo'
              placeholder='Location'
              inputStyle={{ backgroundColor: 'white' }}
              mainContainerStyles={{ marginTop: 20 }}
            />
            <Input
              multiline
              iconSize={18}
              label='Description'
              iconColor='#5AC284'
              iconType='entypo'
              iconName='text'
              placeholder='Description'
              inputStyle={s.descripInput}
              mainContainerStyles={{ marginTop: 20 }}
            />
          </View>
        </ScrollView>
        <Animated.View style={[s.bottomBtn, { bottom: this.state.btnAnim }]}>
          <Button>Create event</Button>
        </Animated.View>
        {showPicker && (
          <DateTimePicker
            testID='dateTimePicker'
            timeZoneOffsetInMinutes={0}
            value={formData.startDate.value}
            mode={pickerMode}
            is24Hour={true}
            display='spinner'
            onChange={this.handleDateChange}
            textColor='red'
          />
        )}
      </>
    )
  }
}

export default AddEventScreen

const s = StyleSheet.create({
  scrollCont: {
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  topCont: {
    flex: 1,
    minHeight: 150,
    maxHeight: 200
  },
  addItem: {
    flex: 1,
    height: 170,
    // paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#ECECEC'
  },
  iconCont: {
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor: 'red'
  },
  plusIconStyle: {
    position: 'absolute',
    left: -24,
    top: -8
  },
  addImgTxt: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#535254'
  },
  centerCont: {
    flex: 1,
    marginTop: 20
    // backgroundColor: 'red'
  },
  bottomBtn: {
    position: 'absolute',
    left: 0,
    right: 0,
    minHeight: 80,
    paddingHorizontal: 24,
    justifyContent: 'center',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18
  },
  datePicMainCont: {
    marginTop: 20
  },
  datePickCont: {
    flex: 1,
    maxHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  datePickCommon: {
    flex: 1,
    height: 45,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    backgroundColor: 'white'
  },
  iconAlabel: {
    flexDirection: 'row'
    // backgroundColor: 'red'
  },
  textLabel: {
    marginLeft: 6,
    marginBottom: 8,
    color: '#3B3B3B'
    // fontWeight: 'bold'
  },
  dateValue: {
    color: '#3B3B3B'
  },
  descripInput: {
    backgroundColor: 'white',
    minHeight: 90,
    maxHeight: 150,
    textAlignVertical: 'top'
  }
})
