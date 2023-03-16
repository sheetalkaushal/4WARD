import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import ColorStyle from "../StyleColor/ColorStyle";
export const style = StyleSheet.create({
  container: {
    backgroundColor: "#2E2E2E",
    flex: 1,
    paddingHorizontal: moderateScale(24),
  },
  ward: {
    alignItems: "center",
  },
  imgward: {
    height: moderateVerticalScale(178),
    width: moderateScale(121),
    marginTop: moderateScale(87),
  },
  clicklog: {
    color: ColorStyle.INPUT_TEXT,
    fontSize: 13,
    marginTop: moderateScale(54),
    textAlign: "center",
    marginBottom: moderateVerticalScale(24),
  },
  or: {
    height: moderateVerticalScale(32),
    color: ColorStyle.WHITE,
    fontSize: 16,
    marginVertical: moderateVerticalScale(16),
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: "center",
  },
  here: {
    flexDirection: "row",
    justifyContent: "center",
  },
  new: {
    height: moderateVerticalScale(32),
    color: ColorStyle.WHITE,
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: "center",
  },
  sign: {
    height: moderateVerticalScale(32),
    color: ColorStyle.LIGHT_BLUE,
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: "center",
  },
});
