import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {globalstyles} from '../../Stylesheet';

export default function PatientSettings(props) {
  const user = 'Salman';
  return (
    <ScrollView>
      <View style={globalstyles.headercont}>
        <Text style={globalstyles.headertext}>Hello {user}</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Patientchat');
          }}>
          <Image
            source={require('../../assets/share.png')}
            style={globalstyles.user}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={globalstyles.settingcont}
          onPress={() => {
            props.navigation.navigate('Pedit');
          }}>
          <Text style={globalstyles.text}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalstyles.settingcont}>
          <Text style={globalstyles.text}>View Uploads</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalstyles.settingcont}>
          <Text style={globalstyles.text}>Edit Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalstyles.settingcont}>
          <Text style={globalstyles.text}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
