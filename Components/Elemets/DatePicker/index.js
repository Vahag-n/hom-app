import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

const DatePicker = () => {
  const [date, setDate] = useState(new Date(1598051730000))
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)
  }

console.log(show)

  const showDatepicker = () => {
    setShow(true)
  }

  return (
    <View>
      <View>
        <Button onPress={showDatepicker} title='Show date picker!' />
      </View>
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={onChange}
          textColor='red'
        />
      )}
    </View>
  )
}

export default DatePicker
