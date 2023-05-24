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
import {globalstyles} from '../../Stylesheet';
import {Picker} from '@react-native-picker/picker';

export default function Editdoctor(props) {
  const [name, setName] = useState('Salman');
  const [age, setAge] = useState('22');
  const [location, setLocation] = useState('Tramri');
  const [medicalhistory, setMedicalhistory] = useState('NO');
  const [email, setEmail] = useState('salmanwains463@gmail.com');
  const [password, setPassword] = useState('TARARARA');
  const [gender, setGender] = useState('');

  return (
    <View style={globalstyles.maincont}>
      <View style={globalstyles.logocont2}>
        <Image
          source={require('../../assets/logo.png')}
          style={globalstyles.logo}
        />
        <Text style={globalstyles.logotext}>Cardio Clasp</Text>
      </View>

      <Text style={globalstyles.appointmenttextb}>Edit Your Profile</Text>
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

      <TouchableOpacity style={globalstyles.btn2}>
        <Text style={globalstyles.btntext}> Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
