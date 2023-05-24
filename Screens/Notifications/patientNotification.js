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

export default function PatientNotification(props) {
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
      <Text style={globalstyles.servicestext}>Notifications:</Text>
      <View style={globalstyles.notificationcont}>
        <Text style={globalstyles.notificationtext}>
          Dr. Salman has accepted your appointment request.
        </Text>
      </View>
      <View style={globalstyles.notificationcont}>
        <Text style={globalstyles.notificationtext}>
          Dr. Salman has accepted your appointment request.
        </Text>
      </View>
      <View style={globalstyles.notificationcont}>
        <Text style={globalstyles.notificationtext}>
          Dr. Salman has accepted your appointment request.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
