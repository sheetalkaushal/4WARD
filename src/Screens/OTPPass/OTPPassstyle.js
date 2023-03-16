import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import ColorStyle from "../StyleColor/ColorStyle";
export const style = StyleSheet.create({
  container: {
    backgroundColor: ColorStyle.DARK_GREY,
    flex: 1,
    paddingHorizontal: moderateScale(24),
  },
  enter: {
    height: moderateVerticalScale(64),
    fontSize: moderateScale(24),
    color: ColorStyle.WHITE,
    letterSpacing: 0,
    fontWeight: "600",
    marginTop: moderateScale(16),
  },
  arrow: {
    marginTop: moderateScale(56),
  },
  edit: {
    height: moderateVerticalScale(24),
    color: ColorStyle.LIGHT_BLUE,
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: "left",
    marginTop: moderateScale(8),
  },
  allotp: {
    flexDirection: "row",
    gap: 16,
    marginTop: moderateScale(32),
  },
  otp1: {
    flex: 0.2,
  },
  resend: {
    paddingVertical: moderateVerticalScale(24),
    color: ColorStyle.WHITE,
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: "left",
  },
  otptop: {
    flex: 0.8,
  },
  otpbotttom: {
    flex: 0.1,
  },
});
