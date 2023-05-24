import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {globalstyles} from '../Stylesheet';
import {Picker} from '@react-native-picker/picker';
import DocumentPicker from 'react-native-document-picker';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function DoctorSignup(props) {
  const [name, setName] = useState('');
  const [experience, setexperience] = useState('');
  const [location, setLocation] = useState('');
  const [medicalcert, setMedicalcert] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileName2, setFileName2] = useState('');

  const selectOneFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(JSON.stringify(res));
      const filename = res[0].name;

      console.log('File Name : ' + filename);

      setFileName(filename);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  const selectOneFile2 = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(JSON.stringify(res));
      const filename2 = res[0].name;

      console.log('File Name : ' + fileName2);

      setFileName2(filename2);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const handleSignUp = () => {
    if (
      !name ||
      !experience ||
      !location ||
      !fileName ||
      !fileName2 ||
      !email ||
      !password ||
      !gender
    ) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Error', 'Password should be at least 8 characters long');
      return;
    }
  };

  return (
    <View style={globalstyles.maincont}>
      <View style={globalstyles.logocont2}>
        <Image
          source={require('../assets/logo.png')}
          style={globalstyles.logo}
        />
        <Text style={globalstyles.logotext}>Cardio Clasp</Text>
      </View>
      <View style={globalstyles.btncont2}>
        <TouchableOpacity
          style={globalstyles.inactivebtn}
          onPress={() => {
            props.navigation.navigate('PatientSignup');
          }}>
          <Text style={globalstyles.text}>Patient</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalstyles.activebtn}>
          <Text style={globalstyles.text}>Doctor</Text>
        </TouchableOpacity>
      </View>

      <View style={globalstyles.inputcont}>
        <TextInput
          style={globalstyles.input2}
          placeholder="Enter Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={globalstyles.input2}
          placeholder="Enter Your Emaill"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={globalstyles.input2}
          placeholder="Enter Your experience"
          value={experience}
          onChangeText={setexperience}
        />
        <View style={globalstyles.input2}>
          <Picker
            selectedValue={gender}
            style={globalstyles.picker}
            onValueChange={itemValue => setGender(itemValue)}>
            <Picker.Item label="Choose Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Not Specified" value="not_specified" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={selectOneFile}>
          <Text style={{fontSize: 15, color: 'grey'}}>
            {fileName ? fileName : 'Upload your medical certificate'}
          </Text>
          <Image
            source={{
              uri: 'https://img.icons8.com/offices/40/000000/attach.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>

        <TextInput
          style={globalstyles.input2}
          placeholder="Enter Your Location"
          value={location}
          onChangeText={setLocation}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={selectOneFile}>
          <Text style={{fontSize: 15, color: 'grey'}}>
            {fileName2 ? fileName2 : 'Upload your Profile Picure'}
          </Text>
          <Image
            source={{
              uri: 'https://img.icons8.com/offices/40/000000/attach.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        <TextInput
          style={globalstyles.input2}
          placeholder="Enter Your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={globalstyles.btn2} onPress={handleSignUp}>
        <Text style={globalstyles.btntext}> Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('DoctorSignin');
        }}>
        <Text style={globalstyles.noaccounttext}>
          {' '}
          Already have an account?{' '}
          <Text style={globalstyles.signuptext}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 5,
    borderColor: 'grey',
    borderWidth: 1,
    height: 45,
    justifyContent: 'space-around',

    borderRadius: 10,
  },
});
