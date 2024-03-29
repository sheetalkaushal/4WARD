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
    letterSpacing: 0,
    fontWeight: "600",
  },
  firstn: {
    flexDirection: "row",
    gap: 16,
  },
  fname: {
    flex: 0.5,
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
  signtop: {
    flex: 0.9,
  },
  signbotttom: {
    flex: 0.1,
  },
});
