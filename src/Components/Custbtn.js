import { View, Text, Button,TouchableOpacity,StyleSheet  } from 'react-native'
import React from 'react'
import { moderateScale ,moderateVerticalScale} from 'react-native-size-matters'
export default({title,onPress})=>{
  const style = StyleSheet.create({
    btntouch:{
        backgroundColor:'rgba(244,55,56,1)',
            borderRadius:8,
            height:moderateVerticalScale(48),
             alignItems:'center',
             paddingVertical:moderateVerticalScale(14),
             marginTop:moderateScale(24),
    },
    btntext:{
        fontSize:moderateVerticalScale(14),
        fontWeight: 'bold',
        letterSpacing:moderateScale(0.88),
        lineHeight: 17,
        textAlign: 'center',
        color:'#fff'
    }
    });
  return (
    <View>
   <TouchableOpacity onPress={onPress} style={style.btntouch}><Text style={style.btntext}>{title}</Text></TouchableOpacity>
    </View>
  )
}

