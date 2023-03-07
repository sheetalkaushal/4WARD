import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {style} from './OTPPassstyle'
import Imagepath from "../../Constants/Imagepath";
import Signcustom from '../../Components/Signcustom.js';
import Custbtn from '../../Components/Custbtn.js';
export const OTPPass = ({navigation}) => {
  return (
    <View style={style.container}>
   <TouchableOpacity onPress={()=>{navigation.goBack()}}><Image style={style.arrow} source={Imagepath.icBack}></Image></TouchableOpacity> 
    <View style={style.createnew}>
      <Text style={style.enter}>Enter the 4-digit code sent to you at 875 364 8947</Text>
     <TouchableOpacity><Text style={style.edit}>Edit my mobile number</Text></TouchableOpacity> 
      </View>
        <View  style={style.allotp}>
        <View style={style.otp1}>
          <Signcustom placeholder=''/>
          </View>
        <View style={style.otp1}>
          <Signcustom placeholder=''/>
          </View>
          <View style={style.otp1}>
          <Signcustom placeholder=''/>
          </View>
          <View style={style.otp1}>
          <Signcustom placeholder=''/>
          </View>
      </View>
      <View><Text style={style.resend}>Resend code in 0:14</Text></View>
      <Custbtn onPress={()=>{navigation.navigate('Setpass')}}  title='VERIFY'/>
    </View>
  )
}



