import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {globalstyles} from '../../Stylesheet';
import React, {useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function Patientdashboard(props) {
  const [fileName, setFileName] = useState('');
  const [drname, setdrname] = useState('Dr.Waince');
  const [drspeciality, setdrspeciality] = useState('Heart Specialist');
  const [time, setTime] = useState('12:00 PM');
  const [date, setDate] = useState('12');
  const [day, setDay] = useState('Tue');
  const user = 'Salman';

  const selectOneFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(JSON.stringify(res));
      const filename = res[0].name;

      console.log('File Name : ' + filename);

      setFileName(filename);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
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
            source={require('../../assets/share.png')}
            style={globalstyles.user}
          />
        </TouchableOpacity>
      </View>
      <Text style={globalstyles.servicestext}>Services</Text>

      <View style={globalstyles.servicescont}>
        <TouchableOpacity style={globalstyles.servicescard1}>
          <Image
            source={require('../../assets/medicine.png')}
            style={globalstyles.user}
          />
        </TouchableOpacity>
        <TouchableOpacity style={globalstyles.servicescard2}>
          <Image
            source={require('../../assets/band-aid.png')}
            style={globalstyles.user}
          />
        </TouchableOpacity>
        <TouchableOpacity style={globalstyles.servicescard3}>
          <Image
            source={require('../../assets/first.png')}
            style={globalstyles.user}
          />
        </TouchableOpacity>
        <TouchableOpacity style={globalstyles.servicescard4}>
          <Image
            source={require('../../assets/medical-insurance.png')}
            style={globalstyles.user}
          />
        </TouchableOpacity>
      </View>
      <View style={globalstyles.uploadcont}>
        <Text style={globalstyles.uploadtext}>Upload Your Reports:</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={selectOneFile}>
          <Text style={{fontSize: 15, color: 'grey'}}>
            {fileName ? fileName : 'Upload your medical certificate'}
          </Text>
          <Image
            source={{
              uri: 'https://img.icons8.com/offices/40/000000/attach.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
      </View>
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
      <Text style={globalstyles.servicestext}>Appointments:</Text>
      <ScrollView style={globalstyles.appointmentcont} horizontal={true}>
        <View style={globalstyles.appointmentcard}>
          <View style={globalstyles.appointmentcont2}>
            <Text style={globalstyles.appointmenttextb}>{date}</Text>
            <Text style={globalstyles.appointmenttextb}>{day}</Text>
          </View>
          <View>
            <Text style={globalstyles.appointmenttext}>{time}</Text>

            <Text style={globalstyles.appointmenttextb}>{drname}</Text>
            <Text style={globalstyles.appointmenttext}>{drspeciality}</Text>
          </View>
        </View>
        <View style={globalstyles.appointmentcard}>
          <View style={globalstyles.appointmentcont2}>
            <Text style={globalstyles.appointmenttextb}>{date}</Text>
            <Text style={globalstyles.appointmenttextb}>{day}</Text>
          </View>
          <View>
            <Text style={globalstyles.appointmenttext}>{time}</Text>

            <Text style={globalstyles.appointmenttextb}>{drname}</Text>
            <Text style={globalstyles.appointmenttext}>{drspeciality}</Text>
          </View>
        </View>
        <View style={globalstyles.appointmentcard}>
          <View style={globalstyles.appointmentcont2}>
            <Text style={globalstyles.appointmenttextb}>{date}</Text>
            <Text style={globalstyles.appointmenttextb}>{day}</Text>
          </View>
          <View>
            <Text style={globalstyles.appointmenttext}>{time}</Text>

            <Text style={globalstyles.appointmenttextb}>{drname}</Text>
            <Text style={globalstyles.appointmenttext}>{drspeciality}</Text>
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
