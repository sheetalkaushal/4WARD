import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {style} from './SetPasStyle'
import Imagepath from "../../Constants/Imagepath";
import Signcustom from '../../Components/Signcustom.js';
import Custbtn from '../../Components/Custbtn.js';
import { moderateScale } from 'react-native-size-matters';
export const Setpass = ({navigation}) => {
  return (
    <View style={style.container}>
     <TouchableOpacity onPress={()=>{navigation.goBack()}}><Image  style={style.arrow} source={Imagepath.icBack}></Image></TouchableOpacity>
    <View style={style.createnew}>
      <Text style={style.account}>Set password</Text>
      <Text style={style.continue}>Create secure and unique password.</Text>
      </View>
      <View>
        <Signcustom placeholder='Password' SHOW='Show'/> 
        </View>
        <View>
        <Signcustom  placeholder='ConfirmPassword' SHOW='Show'/> 
        </View>
        <View style={style.get}>
      <Custbtn  onPress={()=>{navigation.navigate('Login')}}  title='GET STARTED'/>
      </View>
    </View>
  )
}



