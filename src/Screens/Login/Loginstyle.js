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
  account: {
    height: moderateVerticalScale(40),
    fontSize: moderateScale(24),
    color: ColorStyle.WHITE,
    letterSpacing: 0,
    fontWeight: "600",
    marginTop: moderateScale(16),
  },
  arrow: {
    marginTop: moderateScale(56),
  },
  continue: {
    height: moderateVerticalScale(40),
    fontSize: moderateScale(15),
    color: ColorStyle.INPUT_TEXT,
    fontWeight: "600",
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
  forgetotp: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: moderateScale(16),
  },
  useotp: {
    height: moderateVerticalScale(32),
    color: ColorStyle.WHITE,
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: "center",
  },
  forward: {
    height: moderateVerticalScale(32),
    color: ColorStyle.LIGHT_BLUE,
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: "center",
  },
  logintop: {
    flex: 0.9,
  },
  loginbottom: {
    flex: 0.1,
  },
});
