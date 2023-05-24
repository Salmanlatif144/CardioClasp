import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Main from './Screens/main';
import Signup from './Screens/signup';
import PatientSignin from './Screens/signin';
import DoctorSignin from './Screens/doctorsignin';
import AdminSignin from './Screens/adminsignin';
import PatientSignup from './Screens/patientsignup';
import DoctorSignup from './Screens/doctorsignup';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import MyTabs from './Navigation/patientbottomtab';
import PatitentChat from './Screens/Chat/PatitentChat';
import Doctordashboard from './Screens/Dashboard/doctordashboard';
import DoctorNotification from './Screens/Notifications/doctornotifications';
import Admindashboard from './Screens/Dashboard/admindashboard';
import Editpatient from './Screens/Profile/editpatient';
import Editdoctor from './Screens/Profile/editdoctor';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={PatientSignin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DoctorSignin"
          component={DoctorSignin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AdminSignin"
          component={AdminSignin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PatientSignup"
          component={PatientSignup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DoctorSignup"
          component={DoctorSignup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Patientmain"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Patientchat"
          component={PatitentChat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Ddashboard"
          component={Doctordashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dnotifications"
          component={DoctorNotification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Adashboard"
          component={Admindashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pedit"
          component={Editpatient}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dedit"
          component={Editdoctor}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
