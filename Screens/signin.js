import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import {globalstyles} from '../Stylesheet';

export default function PatientSignin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all the fields');
      return false;
    } else {
      let response = await axios
        .post('https://cardio-scalp.vercel.app/patient/sign-in/', {
          email,
          password,
        })
        .then(res => {
          Alert.alert(JSON.stringify(res.data.token));
          // return true;
        });
      if (response.data.success) {
        Alert.alert('Success', response.data.message);
        return true;
      }
      // if (response.status == 409) {
      //   Alert.alert('Error', response.message);
      //   return false;
      // }
      console.log('hello');
      Alert.alert('Success', 'You have successfully logged in');
      return true;
    }
  };

  return (
    <View style={globalstyles.maincont}>
      <View style={globalstyles.logocont}>
        <Image
          source={require('../assets/logo.png')}
          style={globalstyles.logo}
        />
        <Text style={globalstyles.logotext}>Cardio Clasp</Text>
      </View>
      <View style={globalstyles.btncont}>
        <TouchableOpacity style={globalstyles.activebtn}>
          <Text style={globalstyles.text}>Patient</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalstyles.inactivebtn}
          onPress={() => {
            props.navigation.navigate('DoctorSignin');
          }}>
          <Text style={globalstyles.text}>Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalstyles.inactivebtn}
          onPress={() => {
            props.navigation.navigate('AdminSignin');
          }}>
          <Text style={globalstyles.text}>Admin</Text>
        </TouchableOpacity>
      </View>
      <View style={globalstyles.inputcont}>
        <TextInput
          style={globalstyles.input}
          placeholder="Enter Your Emaill"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={globalstyles.input}
          placeholder="Enter Your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity>
        <Text style={globalstyles.forgottext}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalstyles.btn}
        onPress={() => {
          const res = handleSignIn();
          if (res) {
            props.navigation.navigate('Patientmain');
          }
        }}>
        <Text style={globalstyles.btntext}> Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('PatientSignup');
        }}>
        <Text style={globalstyles.noaccounttext}>
          {' '}
          Don't have an account?{' '}
          <Text style={globalstyles.signuptext}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
