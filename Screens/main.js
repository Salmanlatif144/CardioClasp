import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {globalstyles} from '../Stylesheet';

export default function Main(props) {
  return (
    <View style={globalstyles.maincont}>
      <Image source={require('../assets/blueheart.jpg')} />
      <Text style={styles.logotext}>Cardio Clasp</Text>
      <Text style={styles.text2}> Welcome to CardioClasp!</Text>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            props.navigation.navigate('PatientSignup');
          }}>
          <Text style={styles.btntext}> Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => {
            props.navigation.navigate('Signin');
          }}>
          <Text style={styles.btntext}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#3b74f7',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 92,
    marginTop: 20,
  },
  btn2: {
    backgroundColor: '#94b2f7',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 92,
    marginTop: 30,
  },
  btntext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  logotext: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#3b74f7',
    padding: 40,
  },
});
