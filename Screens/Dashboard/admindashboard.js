import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import {globalstyles} from '../../Stylesheet';
import React, {useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function Admindashboard(props) {
  const [drname, setdrname] = useState('Dr.Waince');
  const [drspeciality, setdrspeciality] = useState('Heart Specialist');
  const [drexperience, setdrexperience] = useState('5 Years');
  const [location, setLocation] = useState('Karachi');
  const user = 'Salman';
  const patient = 'Saad';
  const disease = 'Heart Disease';
  const date2 = '12/12/2021';
  const [doctorname, setDoctorname] = useState('Dr. Saad');
  const [doctorspeciality, setDoctorspeciality] = useState('Heart Specialist');
  const [doctorexperience, setDoctorexperience] = useState('5 Years');

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
      <Text style={globalstyles.servicestext}>Active Patients</Text>
      <ScrollView style={globalstyles.patientcont} horizontal={true}>
        <TouchableOpacity style={globalstyles.patientcard}>
          <Text style={globalstyles.appointmenttextb}>{patient} </Text>
          <Text style={globalstyles.appointmenttext}>{disease} </Text>
          <Text style={globalstyles.appointmenttext}>{date2} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalstyles.patientcard}>
          <Text style={globalstyles.appointmenttextb}>{patient} </Text>
          <Text style={globalstyles.appointmenttext}>{disease} </Text>
          <Text style={globalstyles.appointmenttext}>{date2} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalstyles.patientcard}>
          <Text style={globalstyles.appointmenttextb}>{patient} </Text>
          <Text style={globalstyles.appointmenttext}>{disease} </Text>
          <Text style={globalstyles.appointmenttext}>{date2} </Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={globalstyles.minicont}>
        <View style={globalstyles.textcont}>
          <Text style={globalstyles.servicestext}>
            Get The Best Medical Servives
          </Text>
          <Text style={globalstyles.smalltext}>
            From The Best and reknown Doctors
          </Text>
        </View>
        <Image
          source={require('../../assets/doctor.png')}
          style={globalstyles.doctor}
        />
      </View>
      <Text style={globalstyles.servicestext}>Pending Aprovals:</Text>
      <ScrollView style={globalstyles.appointmentcont} horizontal={true}>
        <View style={globalstyles.appointmentcard}>
          <View>
            <Text style={globalstyles.appointmenttextb}>{drname}</Text>
            <Text style={globalstyles.appointmenttext}>{drspeciality}</Text>
            <Text style={globalstyles.appointmenttext}>{drexperience}</Text>
            <Text style={globalstyles.appointmenttext}>{location}</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../../assets/tick.png')}
                style={globalstyles.approval}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/cross.png')}
                style={globalstyles.approval}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={globalstyles.appointmentcard}>
          <View>
            <Text style={globalstyles.appointmenttextb}>{drname}</Text>
            <Text style={globalstyles.appointmenttext}>{drspeciality}</Text>
            <Text style={globalstyles.appointmenttext}>{drexperience}</Text>
            <Text style={globalstyles.appointmenttext}>{location}</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../../assets/tick.png')}
                style={globalstyles.approval}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/cross.png')}
                style={globalstyles.approval}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Text style={globalstyles.servicestext}>Current Doctors </Text>
      <ScrollView style={globalstyles.patientcont} horizontal={true}>
        <View style={globalstyles.doctorcard}>
          <Text style={globalstyles.appointmenttextb}>{doctorname} </Text>
          <Text style={globalstyles.appointmenttext}>{doctorspeciality} </Text>
          <Text style={globalstyles.appointmenttext}>{doctorexperience} </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={globalstyles.greenbtn}
              onPress={() => {
                props.navigation.navigate('Dedit');
              }}>
              <Text style={globalstyles.appointmenttext}>Edit </Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalstyles.rdbtn}>
              <Text style={globalstyles.appointmenttext}>Delete </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
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
    width: responsiveWidth(80),
    borderRadius: 10,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 5,
  },
});
