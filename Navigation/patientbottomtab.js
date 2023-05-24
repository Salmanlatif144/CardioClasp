// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Patientdashboard from '../Screens/Dashboard/patientdashboard';
import PatientNotification from '../Screens/Notifications/patientNotification';
import PatientSettings from '../Screens/Settings/patientSettings';
import Doctorslist from '../Screens/doctorslist';
import Editpatient from '../Screens/Profile/editpatient';

import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  function DashboardStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Psetting"
          component={PatientSettings}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Pdashboard') {
            iconName = require('../assets/dashboard.png');
          } else if (route.name === 'dlist') {
            iconName = require('../assets/calendar.png');
          } else if (route.name === 'Pnotifications') {
            iconName = require('../assets/bell.png');
          } else if (route.name === 'settings') {
            iconName = require('../assets/settings.png');
          }

          return (
            <Image
              source={iconName}
              style={{tintColor: color, width: size, height: size}}
            />
          );
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveBackgroundColor: '#94b2f7',
        activeBackgroundColor: '#3b74f7',
        inactiveTintColor: 'black',
        showLabel: false,
      }}>
      <Tab.Screen name="Pdashboard" component={Patientdashboard} />
      <Tab.Screen name="dlist" component={Doctorslist} />
      <Tab.Screen name="Pnotifications" component={PatientNotification} />
      <Tab.Screen name="settings" component={DashboardStack} />
    </Tab.Navigator>
  );
}
