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
  enter: {
    height: moderateVerticalScale(64),
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
  edit:{
    height:moderateVerticalScale(24),
    color: '#32C5FF',
    fontFamily: 'Barlow',
    fontSize: 15,
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: 'left',
    marginTop:moderateScale(8)

  },
  allotp: {
    flexDirection: "row",
    gap: 16,
    marginTop:moderateScale(64)
  },
  otp1: {
    flex: 0.2,
  },
  resend:{
    height:moderateVerticalScale(24),
    color: '#ffffff',
    fontFamily: 'Barlow',
    fontSize: 15,
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: 'left',
    marginTop:moderateScale(120)
  }
})