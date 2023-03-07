import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, scale } from "react-native-size-matters";
export const style = StyleSheet.create({
    container:{
        backgroundColor: "#2E2E2E",
        flex: 1,
        paddingHorizontal:moderateScale(24),
    },
    ward:{
      alignItems:'center',
    },
    imgward:{
        height: moderateVerticalScale(178),
        width:  moderateVerticalScale(121),
       marginTop:moderateScale(120),
       
},
   clicklog:{
            height:moderateVerticalScale (48),
            // width:moderateVerticalScale (328),
            color: 'rgba(156,156,156,1)',
            fontFamily: 'Barlow',
            fontSize: 13,
            letterSpacing: 0,
            lineHeight: 20,
            marginTop:moderateScale(54),
            textAlign:'center',
            },
    or:{
        height:moderateVerticalScale (32),
        // width:moderateVerticalScale (328),
            color:' rgba(255,255,255,1)',
            fontFamily: 'Barlow',
            fontSize: 16,
            marginTop:moderateScale(16),
            letterSpacing: 0,
            lineHeight: 20,
            textAlign:'center',
    },
    here:{
         flexDirection:'row',
         justifyContent:'center',
    },
    new:{
        height:moderateVerticalScale(32),
        color: '#ffff',
        fontFamily: 'Barlow',
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: 0,
        lineHeight: 20,
        textAlign: 'center',
    },
    sign:{
        height:moderateVerticalScale(32),
        color: '#41CCFF',
        fontFamily: 'Barlow',
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: 0,
        lineHeight: 20,
        textAlign: 'center',
    },
});