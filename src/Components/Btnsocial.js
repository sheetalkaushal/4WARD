import { View, Text, Button,TouchableOpacity,StyleSheet,Image  } from 'react-native'
import React from 'react'
import { moderateScale ,moderateVerticalScale} from 'react-native-size-matters'
export default({title,socialimg})=>{
  const style = StyleSheet.create({
    btnsocial:{
        backgroundColor:'#FFFFFF',
            borderRadius:8,
            height:moderateVerticalScale(48),
             alignItems:'center',
             paddingHorizontal:moderateVerticalScale(16),
             marginBottom:moderateScale(16),
             flexDirection:'row',
             
    },
    textsocial:{
        fontSize:moderateVerticalScale(14),
        fontWeight: 'bold',
        letterSpacing:moderateScale(0.88),
        lineHeight: 17,
        textAlign: 'center',
        color:'#17171A',
        flex:1
    },
    socialimg:{
      alignSelf:'center',
      marginLeft:moderateScale(16),
      
    }
    });
  return (
    <View>
   <TouchableOpacity style={style. btnsocial}>
    <Image source={socialimg}></Image>
    <Text style={style.textsocial}>{title}</Text>
    </TouchableOpacity>
    </View>
  )
}

