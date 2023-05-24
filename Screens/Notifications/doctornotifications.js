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

export default function DoctorNotification(props) {
  const user = 'Doctor';
  return (
    <ScrollView>
      <View style={globalstyles.headercont}>
        <Text style={globalstyles.headertext}>Hello {user}</Text>
        <View style={{flexDirection: 'row', marginHorizontal: 10}}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/bell.png')}
              style={globalstyles.bell}
            />
          </TouchableOpacity>
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
      </View>
      <Text style={globalstyles.servicestext}>Notifications:</Text>
      <View style={globalstyles.notificationcont}>
        <Text style={globalstyles.notificationtext}>
          You have a meeting with Salman at 10'o clock.
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
