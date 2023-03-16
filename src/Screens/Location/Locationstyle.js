import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";
import ColorStyle from "../StyleColor/ColorStyle";
export const style = StyleSheet.create({
  container: {
    backgroundColor: ColorStyle.DARK_GREY,
    flex: 1,
    paddingHorizontal: moderateScale(24),
  },
  loactioncontainer: {
    marginTop: moderateScale(56),
    flexDirection: "row",
    justifyContent: "center",
    height: moderateVerticalScale(40),
  },
  devicelocation: {
    color: ColorStyle.WHITE,
    height: moderateVerticalScale(40),
    fontSize: moderateVerticalScale(24),
  },
  turnonbtn: {
    backgroundColor: ColorStyle.RED_BTN,
    borderRadius: moderateScale(8),
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(8),
    marginLeft: moderateScale(16),
    height: moderateVerticalScale(32),
    width: moderateVerticalScale(80),
  },
  btntext: {
    color: ColorStyle.WHITE,
    fontWeight: "bold",
    fontSize: moderateScale(12),
    letterSpacing: 0.75,
  },
  turning: {
    height: moderateVerticalScale(40),
    width: moderateVerticalScale(248),
    fontSize: moderateScale(14),
    color: ColorStyle.INPUT_TEXT,
    letterSpacing: 0,
  },
  or: {
    height: moderateVerticalScale(32),
    color: ColorStyle.WHITE,

    fontSize: 16,
    marginTop: moderateScale(16),
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: "center",
  },
  suggest: {
    height: moderateVerticalScale(24),
    color: ColorStyle.WHITE,
    fonStize: moderateScale(15),
    fontWeight: "600",
    letterSpacing: 0,
    marginVertical: moderateScale(16),
  },
  sectorcheck: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: moderateVerticalScale(24),
    marginBottom: moderateScale(24),
  },
  sector: {
    color: ColorStyle.INPUT_TEXT,
    fontSize: 15,
    letterSpacing: 0,
    opacity: 0.9,
  },
  enterlocation: {
    color: ColorStyle.INPUT_TEXT,

    fontSize: moderateScale(14),
    opacity: 0.5,
  },
  locationtop: {
    flex: 0.99,
  },
  locationbottom: {
    flex: 0.1,
  },
});
