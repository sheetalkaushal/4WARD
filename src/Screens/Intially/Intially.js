import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {style} from './Intiallystyle'
import Imagepath from "../../Constants/Imagepath";
import Custbtn from '../../Components/Custbtn';
import Btnsocial from '../../Components/Btnsocial';
export const Intially = ({navigation}) => {
  return (
    <View style={style.container}>
    <View style={style.ward}>
          <Image source={Imagepath.icWard} style={style.imgward}/> 
    </View>
    <View>
    <Text  style={style.clicklog}>By clicking “Log In”, you agree with our Terms. 
    Learn how we process your data in our Privacy policy.</Text></View>
    <Custbtn title='Log In with Phone number'/>
    <View><Text style={style.or}>Or</Text></View>
    <Btnsocial socialimg={Imagepath.icGoogle} style={style.imgoogle}  title='Log In with Google'/>
    <Btnsocial socialimg={Imagepath.icFacebook} style={style.imgoogle}  title='Log In with  Facebook'/>
    <Btnsocial socialimg={Imagepath.icApple} style={style.imgoogle}  title='Log In with Apple'/>
    <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}} style={style.here}>
       <Text style={style.new}>New Here?</Text> 
       <Text style={style.sign}>Signup</Text>
       </TouchableOpacity>
    </View>
  )
}

