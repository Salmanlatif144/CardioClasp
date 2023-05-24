import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {globalstyles} from '../Stylesheet';

export default function DoctorSignin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <TouchableOpacity
          style={globalstyles.inactivebtn}
          onPress={() => {
            props.navigation.navigate('Signin');
          }}>
          <Text style={globalstyles.text}>Patiet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalstyles.activebtn}>
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
          props.navigation.navigate('Ddashboard');
        }}>
        <Text style={globalstyles.btntext}> Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('DoctorSignup');
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
