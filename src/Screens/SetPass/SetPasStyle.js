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
  arrow: {
    marginTop: moderateScale(56),
  },
  account: {
    height: moderateVerticalScale(40),
    fontSize: moderateScale(24),
    color: ColorStyle.WHITE,
    letterSpacing: 0,
    fontWeight: "600",
    marginTop: moderateScale(16),
  },
  continue: {
    height: moderateVerticalScale(40),
    fontSize: moderateScale(15),
    color: ColorStyle.INPUT_TEXT,
    fontWeight: "600",
  },
  setpasstop: {
    flex: 0.9,
  },
  setpassbottom: {
    flex: 0.1,
  },
});
