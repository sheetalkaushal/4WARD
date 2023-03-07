import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";
export const style = StyleSheet.create({
  container: {
    backgroundColor: "#2E2E2E",
    flex: 1,
    paddingHorizontal: moderateScale(24),
  },
  account: {
    height: moderateVerticalScale(40),
    fontSize: moderateScale(24),
    color: "#ffffff",
    letterSpacing: 0,
    fontWeight: 600,
    marginTop: moderateScale(16),
  },
  arrow: {
    height: moderateVerticalScale(24),
    width: moderateVerticalScale(24),
    marginTop: moderateScale(56),
  },
  continue: {
    height: moderateVerticalScale(40),
    fontSize: moderateScale(15),
    color: "#AFAFAF",
    letterSpacing: 0,
    fontWeight: 600,
  },
  token: {
    flexDirection: "row",
    gap: 16,
  },
  tokenpicker: {
    flex: 0.4,
  },
  mobile: {
    flex: 0.7,
  },
  forgetotp:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:moderateScale(16),
    marginBottom:moderateScale(88)
   
},
useotp:{
   height:moderateVerticalScale(32),
   color: '#ffff',
   fontFamily: 'Barlow',
   fontSize: 14,
   fontWeight: 600,
   letterSpacing: 0,
   lineHeight: 20,
   textAlign: 'center',
   
},
forward:{
   height:moderateVerticalScale(32),
   color: '#41CCFF',
   fontFamily: 'Barlow',
   fontSize: 14,
   fontWeight: 600,
   letterSpacing: 0,
   lineHeight: 20,
   textAlign: 'center',
   
},
})