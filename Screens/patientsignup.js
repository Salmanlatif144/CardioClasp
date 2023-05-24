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
import axios from 'axios';

export default function PatientSignup(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [medicalhistory, setMedicalhistory] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleSignUp = () => {
    if (
      !name ||
      !age ||
      !location ||
      !medicalhistory ||
      !email ||
      !password ||
      !gender
    ) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    } else {
      let response = axios
        .post('https://cardio-scalp.vercel.app/patient/register/', {
          name,
          age,
          location,
          medicalhistory,
          email,
          password,
          gender,
        })
        .then(res => {
          // Alert.alert(JSON.stringify(response.data));
          Alert.alert('done');
        })
        .then(err => {
          Alert.alert(err.message);
        });
      console.log('hello');
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
        <TouchableOpacity style={globalstyles.activebtn}>
          <Text style={globalstyles.text}>Patient</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalstyles.inactivebtn}
          onPress={() => {
            props.navigation.navigate('DoctorSignup');
          }}>
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
          placeholder="Enter Your age"
          value={age}
          onChangeText={setAge}
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
        <TextInput
          style={globalstyles.input2}
          placeholder="Enter Your Medical History"
          value={medicalhistory}
          onChangeText={setMedicalhistory}
        />
        <TextInput
          style={globalstyles.input2}
          placeholder="Enter Your Location"
          value={location}
          onChangeText={setLocation}
        />
        <TextInput
          style={globalstyles.input2}
          placeholder="Enter Your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={globalstyles.btn2} onPress={handleSignUp}>
        <Text style={globalstyles.btntext}> Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Signin');
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

const styles = StyleSheet.create({});
