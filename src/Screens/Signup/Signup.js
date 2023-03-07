import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {style} from './Signupstyle.js'
import Imagepath from "../../Constants/Imagepath";
import Signcustom from '../../Components/Signcustom.js';
import Custbtn from '../../Components/Custbtn.js';
export const Signup = ({navigation}) => {
  return (
    <View style={style.container}>
   <TouchableOpacity onPress={()=>{navigation.goBack()}}><Image style={style.arrow} source={Imagepath.icBack}></Image></TouchableOpacity> 
    <View style={style.createnew}>
      <Text style={style.account}>Create new account</Text>
      <Text style={style.continue}>Create an account so you can continue.</Text>
      </View>
      <View  style={style.firstn}>
        <View style={style.fname}>
          <Signcustom placeholder='First name'/>
          </View>
        <View style={style.fname}>
          <Signcustom placeholder='Last name'/>
          </View>
      </View>
      <View>
        <Signcustom placeholder='Email'/> 
        </View>
        <View  style={style.token}>
        <View style={style.tokenpicker}>
          <Signcustom placeholder='+1'/>
          </View>
        <View style={style.mobile}>
          <Signcustom placeholder='Mobile number'/>
          </View>
      </View>
      <Custbtn onPress={()=>{navigation.navigate('OTPPass')}}  title='NEXT'/>
    </View>
  )
}



