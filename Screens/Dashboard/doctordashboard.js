import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {globalstyles} from '../../Stylesheet';
export default function Doctordashboard(props) {
  const user = 'Doctor';
  const patient = 'Saad';
  const disease = 'Heart Disease';
  const date = '12/12/2021';
  const [patientname, setPatientname] = useState('Mustafa');
  const [pdisease, setPdisease] = useState('Diarhea');
  const [time, setTime] = useState('12:00 PM');
  const [pdate, setDate] = useState('12');
  const [day, setDay] = useState('Tue');
  const [appointdate, setAppointdate] = useState('');
  const [appointhour, setAppointhour] = useState(0);
  const [appointday, setAppointday] = useState(0);

  return (
    <ScrollView>
      <View style={globalstyles.headercont}>
        <Text style={globalstyles.headertext}>Hello {user}</Text>
        <View style={{flexDirection: 'row', marginHorizontal: 10}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Dnotifications');
            }}>
            <Image
              source={require('../../assets/bell.png')}
              style={globalstyles.bell}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Dedit');
            }}>
            <Image
              source={require('../../assets/user.png')}
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
      <Text style={globalstyles.servicestext}>Active Patients</Text>
      <ScrollView style={globalstyles.patientcont} horizontal={true}>
        <TouchableOpacity style={globalstyles.patientcard}>
          <Text style={globalstyles.appointmenttextb}>{patient} </Text>
          <Text style={globalstyles.appointmenttext}>{disease} </Text>
          <Text style={globalstyles.appointmenttext}>{date} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalstyles.patientcard}>
          <Text style={globalstyles.appointmenttextb}>{patient} </Text>
          <Text style={globalstyles.appointmenttext}>{disease} </Text>
          <Text style={globalstyles.appointmenttext}>{date} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalstyles.patientcard}>
          <Text style={globalstyles.appointmenttextb}>{patient} </Text>
          <Text style={globalstyles.appointmenttext}>{disease} </Text>
          <Text style={globalstyles.appointmenttext}>{date} </Text>
        </TouchableOpacity>
      </ScrollView>

      <Text style={globalstyles.servicestext}>Scheduled Appointments</Text>
      <ScrollView style={globalstyles.appointmentcont} horizontal={true}>
        <View style={globalstyles.appointmentcard}>
          <View style={globalstyles.appointmentcont2}>
            <Text style={globalstyles.appointmenttextb}>{pdate}</Text>
            <Text style={globalstyles.appointmenttextb}>{day}</Text>
          </View>
          <View>
            <Text style={globalstyles.appointmenttext}>{time}</Text>

            <Text style={globalstyles.appointmenttextb}>{patientname}</Text>
            <Text style={globalstyles.appointmenttext}>{pdisease}</Text>
          </View>
        </View>
        <View style={globalstyles.appointmentcard}>
          <View style={globalstyles.appointmentcont2}>
            <Text style={globalstyles.appointmenttextb}>{pdate}</Text>
            <Text style={globalstyles.appointmenttextb}>{day}</Text>
          </View>
          <View>
            <Text style={globalstyles.appointmenttext}>{time}</Text>

            <Text style={globalstyles.appointmenttextb}>{patientname}</Text>
            <Text style={globalstyles.appointmenttext}>{pdisease}</Text>
          </View>
        </View>
      </ScrollView>
      <Text style={globalstyles.servicestext}>Allot Time Slots:</Text>

      <View
        style={{
          marginVertical: 15,
          backgroundColor: '#c0e9fc',
          //   padding: 10,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 15,
        }}>
        <View style={globalstyles.inputcont2}>
          <Text style={globalstyles.appointmenttextb}>Enter Date:</Text>
          <TextInput
            style={globalstyles.input3}
            placeholder="Enter Date"
            value={appointdate}
            onChangeText={setAppointdate}
          />
        </View>
        <View style={globalstyles.inputcont2}>
          <Text style={globalstyles.appointmenttextb}>Enter Hour:</Text>
          <TextInput
            style={globalstyles.input3}
            placeholder="Enter Hour"
            value={appointhour}
            onChangeText={setAppointhour}
            keyboardType="numeric"
          />
        </View>
        <View style={globalstyles.inputcont2}>
          <Text style={globalstyles.appointmenttextb}>Enter Day:</Text>
          <TextInput
            style={globalstyles.input3}
            placeholder="Enter Day"
            value={appointday}
            onChangeText={setAppointday}
            keyboardType="numeric"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
