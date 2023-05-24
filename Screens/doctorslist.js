import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {globalstyles} from '../Stylesheet';
import Modal from 'react-native-modal';

export default function Doctorslist(props) {
  const user = 'Salman';
  const img = require('../assets/111.jpg');
  const [name, setName] = useState('Dr. Salman');
  const [speciality, setSpeciality] = useState('Heart Specialist');
  const [isModalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState('');
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView>
      <View style={globalstyles.headercont}>
        <Text style={globalstyles.headertext}>Hello {user}</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Patientchat');
          }}>
          <Image
            source={require('../assets/share.png')}
            style={globalstyles.user}
          />
        </TouchableOpacity>
      </View>
      <Text style={globalstyles.servicestext}>Book an Appointment</Text>
      <View>
        <View style={globalstyles.doctorcont1}>
          <View style={globalstyles.doctorcont2}>
            <Image source={img} style={globalstyles.doctorimg} />
            <Text style={globalstyles.appointmenttextb}>{name}</Text>
            <Text style={globalstyles.appointmenttext}>{speciality}</Text>
            <TouchableOpacity
              style={globalstyles.dotorbtn}
              onPress={toggleModal}>
              <Text style={globalstyles.appointmenttext}>Book Now</Text>
            </TouchableOpacity>
          </View>
          <View style={globalstyles.doctorcont2}>
            <Image source={img} style={globalstyles.doctorimg} />
            <Text style={globalstyles.appointmenttextb}>{name}</Text>
            <Text style={globalstyles.appointmenttext}>{speciality}</Text>
            <TouchableOpacity
              style={globalstyles.dotorbtn}
              onPress={toggleModal}>
              <Text style={globalstyles.appointmenttext}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={globalstyles.doctorcont1}>
          <View style={globalstyles.doctorcont2}>
            <Image source={img} style={globalstyles.doctorimg} />
            <Text style={globalstyles.appointmenttextb}>{name}</Text>
            <Text style={globalstyles.appointmenttext}>{speciality}</Text>
            <TouchableOpacity
              style={globalstyles.dotorbtn}
              onPress={toggleModal}>
              <Text style={globalstyles.appointmenttext}>Book Now</Text>
            </TouchableOpacity>
          </View>
          <View style={globalstyles.doctorcont2}>
            <Image source={img} style={globalstyles.doctorimg} />
            <Text style={globalstyles.appointmenttextb}>{name}</Text>
            <Text style={globalstyles.appointmenttext}>{speciality}</Text>
            <TouchableOpacity
              style={globalstyles.dotorbtn}
              onPress={toggleModal}>
              <Text style={globalstyles.appointmenttext}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={globalstyles.modal}>
          <Text style={globalstyles.modaltextmain}>Choose further</Text>
          <View style={globalstyles.inputcont}>
            <Text style={globalstyles.simpletext}>Enter Date</Text>
            <TextInput
              placeholder="Enter Date"
              placeholderTextColor="#626262"
              style={globalstyles.input}
              value={date}
              onChangeText={setDate}
            />
          </View>
          <View style={globalstyles.inputcont}>
            <Text style={globalstyles.simpletext}>Enter Date</Text>
            <TextInput
              placeholder="Enter Day"
              placeholderTextColor="#626262"
              style={globalstyles.input}
              value={day}
              onChangeText={setDay}
              keyboardType="numeric"
            />
          </View>
          <View style={globalstyles.inputcont}>
            <Text style={globalstyles.simpletext}>Enter Date</Text>
            <TextInput
              placeholder="Enter hour"
              placeholderTextColor="#626262"
              style={globalstyles.input}
              value={hour}
              onChangeText={setHour}
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity style={globalstyles.modalbtn} onPress={toggleModal}>
            <Text style={globalstyles.simpletext}>Book</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
