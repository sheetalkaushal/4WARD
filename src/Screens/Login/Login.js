import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {style} from './Loginstyle'
import Imagepath from "../../Constants/Imagepath";
import Signcustom from '../../Components/Signcustom.js';
import Custbtn from '../../Components/Custbtn.js';
export const Login = ({navigation}) => {
  return (
    <View style={style.container}>
     <TouchableOpacity onPress={()=>{navigation.goBack()}}><Image  style={style.arrow} source={Imagepath.icBack}></Image></TouchableOpacity>
    <View style={style.createnew}>
      <Text style={style.account}>Welcome back!</Text>
      <Text style={style.continue}>We are happy to see. You can login to continue.</Text>
      </View>
        <View  style={style.token}>
        <View style={style.tokenpicker}>
          <Signcustom placeholder='+1'/>
          </View>
        <View style={style.mobile}>
          <Signcustom placeholder='Mobile number'/>
          </View>
      </View>
      <View>
        <Signcustom placeholder='Password' SHOW='Show'/> 
        </View>
        <TouchableOpacity style={style.forgetotp}>
       <Text style={style.useotp}>Use OTP</Text> 
       <Text style={style.forward}>Forget Password?</Text>
       </TouchableOpacity>
      <Custbtn title='LOGIN'/>
    </View>
  )
}



