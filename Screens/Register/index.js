import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Image, Picker as P, Switch, Platform } from 'react-native';

import ImagePicker from 'react-native-image-picker';

import { Icon, Input, Button, Picker, ChooseAddress } from '../../Components/Elemets';


class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        userImg: '',
        familyMembers: [],
        privateProfile: { value: false, valid: null },
        firstName: { value: '', valid: null },
        lastName: { value: '', valid: null },
        email: { value: '', valid: null },
        password: { value: '', valid: null },
        confirmPassword: { value: '', valid: null },
        residence: { value: '', valid: null },
        apartment: { value: '', valid: null },
        interests: { value: '', valid: null },
        language: { value: '', valid: null },
        nationality: { value: '', valid: null },
        occupation: { value: '', valid: null },
      },
      familyMember: { familyMembersName: '', familyMembersKinship: '' }
    }
  }

  static navigationOptions = ({ navigation }) => {
    const goBack = () => {
      navigation.goBack()
    }
    return ({
      title: 'Back',
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
        marginLeft: -10
      },
    })
  };

  handleUploadImage = () => {
    ImagePicker.showImagePicker({}, response => {
      const { formData } = this.state
      formData.userImg = response.uri
      this.setState({ formData });
    })
  }
  hanleInputFormChange = (name, value) => {
    const { formData } = this.state;
    formData[name].value = value;
    this.setState({ formData })
  }

  handleMemberChange = (name, value) => {
    const { familyMember } = this.state
    familyMember[name] = value;
    this.setState({ familyMember })
  }

  handleAddMember = () => {
    const { formData, familyMember } = this.state;
    formData.familyMembers.push(familyMember)
    this.setState({ formData, familyMember: { familyMembersName: '', familyMembersKinship: '' } })
  }

  handleRegister = () => {
    console.log('register submit');
    this.props.navigation.navigate('Login')
  }

  render() {
    const { formData } = this.state
    const { familyMember } = this.state

    return (
      <>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 24, flexGrow: 1 }}>
          <StatusBar barStyle='dark-content' backgroundColor='#0000' translucent={true} />
          <View style={styles.mainView}>
            <Text style={styles.titleText} >Register</Text>

            <View style={styles.uploadImageMainView}>
              <View style={styles.uploadImageView}>
                {
                  this.state.formData.userImg ?
                    <Image
                      style={{ width: '100%', height: '100%' }}
                      source={{ uri: this.state.formData.userImg }}
                    /> :
                    <Text style={styles.uploadImageText}>Upload Image</Text>

                }
              </View>
              <Icon
                onPress={this.handleUploadImage}
                style={styles.uploadImageBtn}
                name='ios-add'
                type='ionicon'
                color='white'
                size={30}
              />
            </View>
            <Input
              name='firstName'
              label='Your name'
              placeholder='First Name'
              iconName='user'
              iconType='font-awesome'
              iconColor='#5AC284'
              iconSize={20}
              mainContainerStyles={styles.inputMainContainerStyles}
              onChangeText={this.hanleInputFormChange}
            />
            <Input
              withoutLabel
              name='lastName'
              placeholder='Last Name'
              onChangeText={this.hanleInputFormChange}
            />
            <Input
              name='email'
              label='Your E-mail*'
              placeholder='Email'
              iconName='envelope'
              iconType='font-awesome'
              iconColor='#5AC284'
              iconSize={18}
              mainContainerStyles={styles.inputMainContainerStyles}
              onChangeText={this.hanleInputFormChange}
            />
            <Input
              name='password'
              label='Your password*'
              placeholder='Password'
              iconName='lock'
              iconType='font-awesome'
              iconColor='#5AC284'
              iconSize={18}
              mainContainerStyles={styles.inputMainContainerStyles}
              onChangeText={this.hanleInputFormChange}
            />
            <Input
              withoutLabel
              name='confirmPassword'
              placeholder='Confirm password'
              onChangeText={this.hanleInputFormChange}
            />
            <Picker
              selectedValue={formData.residence.value}
              name='residence'
              label='Residence*'
              iconName='lock'
              iconType='font-awesome'
              iconColor='#5AC284'
              iconSize={18}
              mainContainerStyles={styles.inputMainContainerStyles}
              onValueChange={this.hanleInputFormChange}
            >
              <P.Item label="Choose residence" value="" />
              <P.Item label="JavaScript" value="javascript" />
              <P.Item label="HTML" value="html" />
              <P.Item label="CSS" value="css" />
              <P.Item label="REACT" value="react" />
            </Picker>
            <Input
              name='apartment'
              label='Apartment*'
              placeholder='Apartment'
              iconName='address-book'
              iconType='font-awesome'
              iconColor='#5AC284'
              iconSize={18}
              mainContainerStyles={styles.inputMainContainerStyles}
              onChangeText={this.hanleInputFormChange}
            />
            <Input
              value={familyMember.familyMembersName}
              name='familyMembersName'
              label='Add family members'
              placeholder='Name'
              iconName='users'
              iconType='font-awesome'
              iconColor='#5AC284'
              iconSize={18}
              mainContainerStyles={styles.inputMainContainerStyles}
              onChangeText={this.handleMemberChange}
            />
            <Picker
              withoutLabel
              selectedValue={familyMember.familyMembersKinship}
              name='familyMembersKinship'
              onValueChange={this.handleMemberChange}
            >
              <P.Item label="kinship" value="" />
              <P.Item label="JavaScript" value="javascript" />
              <P.Item label="HTML" value="html" />
              <P.Item label="CSS" value="css" />
              <P.Item label="REACT" value="react" />
            </Picker>
            <Button onPress={this.handleAddMember} stylesBtn={styles.add_a_memberBtn} stylesText={styles.add_a_memberText}>Add a member</Button>
            <Picker
              selectedValue={formData.interests.value}
              name='interests'
              label='Interests*'
              iconName='star'
              iconType='font-awesome'
              iconColor='#5AC284'
              iconSize={18}
              mainContainerStyles={styles.inputMainContainerStyles}
              onValueChange={this.hanleInputFormChange}
            >
              <P.Item label="Select interests" value="" />
              <P.Item label="JavaScript" value="javascript" />
              <P.Item label="HTML" value="html" />
              <P.Item label="CSS" value="css" />
              <P.Item label="REACT" value="react" />
            </Picker>
            <Picker
              selectedValue={formData.language.value}
              name='language'
              label='Language*'
              iconName='wordpress'
              iconType='font-awesome'
              iconColor='#5AC284'
              iconSize={18}
              mainContainerStyles={styles.inputMainContainerStyles}
              onValueChange={this.hanleInputFormChange}
            >
              <P.Item label="English" value="english" />
              <P.Item label="Italian" value="italian" />
            </Picker>
            <Picker
              selectedValue={formData.nationality.value}
              name='nationality'
              label='Nationality*'
              iconName='globe'
              iconType='font-awesome'
              iconColor='#5AC284'
              iconSize={18}
              mainContainerStyles={styles.inputMainContainerStyles}
              onValueChange={this.hanleInputFormChange}
            >
              <P.Item label="Select nationality" value="" />
              <P.Item label="Java" value="java" />
              <P.Item label="HTML" value="html" />
              <P.Item label="CSS" value="css" />
              <P.Item label="REACT" value="react" />
            </Picker>
            <Picker
              selectedValue={formData.occupation.value}
              name='occupation'
              label='Occupation*'
              iconName='bullseye'
              iconType='font-awesome'
              iconColor='#5AC284'
              iconSize={18}
              mainContainerStyles={styles.inputMainContainerStyles}
              onValueChange={this.hanleInputFormChange}
            >
              <P.Item label="Select occupation" value="" />
              <P.Item label="JavaScript" value="javascript" />
              <P.Item label="HTML" value="html" />
              <P.Item label="CSS" value="css" />
              <P.Item label="REACT" value="react" />
            </Picker>
            <View style={styles.switchView}>
              <Text style={styles.switchText}>Make profile private</Text>
              <Switch /* disabled */ onValueChange={this.hanleInputFormChange.bind(this, 'privateProfile')} value={formData.privateProfile.value} thumbColor='#5AC284' />
            </View>
            <Button stylesBtn={{ marginTop: 40 }} onPress={this.handleRegister} >Register</Button>
          </View>
        </ScrollView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    marginVertical: 20
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#3B3B3B',
    textTransform: 'uppercase'
  },
  uploadImageMainView: {
    width: 90,
    height: 90,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  uploadImageView: {
    width: 90,
    height: 90,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#DEDEDE',
    // backgroundColor: 'red'
  },
  uploadImageBtn: {
    width: 32,
    height: 32,
    position: 'absolute',
    right: -3,
    bottom: -3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#5AC284'
  },
  uploadImageText: {
    width: 42,
    fontSize: 13,
    textAlign: 'center',
    color: '#3B3B3B'
  },
  inputMainContainerStyles: {
    marginTop: 15
  },
  add_a_memberBtn: {
    width: 145,
    height: 35,
    marginVertical: 20,
    backgroundColor: '#C5C5C5',
  },
  add_a_memberText: {
    color: 'white'
  },
  switchView: {
    marginTop: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  switchText: {
    fontSize: 14,
    color: '#3B3B3B'
  }
})

export default RegisterScreen;