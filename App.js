import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Intially} from './src/Screens/Intially/Intially';
import { Onboarding } from './src/Screens/Onboarding/Onboarding';
import { Signup } from './src/Screens/Signup/Signup';
import {Login} from './src/Screens/Login/Login';
import Routes from './src/Navigations/Routes';
import { OTPPass } from './src/Screens/OTPPass/OTPPass';
import { Setpass } from './src/Screens/SetPass/Setpass';
export default function App() {
  return (
    <View style={{flex:1}}>
      {/* <Onboarding/>
      <Intially/>
      <Signup/>
     <Login/> */}
     <Routes/>
     {/* <OTPPass/>
     <Setpass/> */}
    </View>
  );
}

