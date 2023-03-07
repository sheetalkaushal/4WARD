import { View, Text ,TouchableOpacity,StyleSheet,TextInput,Image } from 'react-native'
import React from 'react'
import { moderateScale ,moderateVerticalScale} from 'react-native-size-matters'
export default({placeholder,icon,keywordtype,hide,SHOW})=>{
 const style =StyleSheet.create({
      inputstyle:{
         padding:moderateScale(16),
         marginTop:moderateScale(16),
         backgroundColor:'#4C4C4C',
         height:moderateVerticalScale(48),
         borderRadius:moderateScale(8), 
         opacity: 0.5,
         fontSize:moderateScale(14),  
         flexDirection:"row" ,
         justifyContent:'space-between'
        },
        show:{
          opacity:moderateScale(0.5), 
          color:'white'
        }
 });
  return(
    <View style={style.inputstyle}>
    <TextInput  placeholder={placeholder} placeholderTextColor='#ffffff'kewywordType={keywordtype} secureTextEntry={hide}></TextInput>
    <Text style={style.show}>{SHOW}</Text>
      </View>
  )
 
}
