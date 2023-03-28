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
  },
  cards: {
    height: moderateVerticalScale(585),
    width: moderateScale(328),
    borderRadius: 16,
    marginTop: moderateScale(57),
    paddingHorizontal: moderateScale(24),
    marginLeft: moderateScale(24),
    alignItems: "center",
    borderRadius: moderateScale(16),
    backgroundColor: ColorStyle.LIGHT_BACKGROUND_GREY,
    marginRight: 8,
  },
  cards2: {
    height: moderateVerticalScale(585),
    width: moderateVerticalScale(328),
    borderRadius: moderateScale(16),
    flex: 1,
    marginTop: moderateScale(57),
    paddingHorizontal: moderateScale(24),
    alignItems: "center",
    borderRadius: moderateScale(16),
    backgroundColor: ColorStyle.LIGHT_BACKGROUND_GREY,
  },
  imgward: {
    width: moderateVerticalScale(245),
    height: moderateVerticalScale(267),
    marginTop: moderateScale(100),
    marginRight: moderateScale(30),
    marginLeft: moderateScale(31),
  },
  hendtext1: {
    height: moderateVerticalScale(40),
    color: ColorStyle.WHITE,
    fontSize: moderateScale(22),
    fontWeight: "500",
    textAlign: "center",
    marginTop: moderateScale(90),
  },
  donectext2: {
    height: moderateVerticalScale(40),
    color: ColorStyle.INPUT_TEXT,
    fontSize: moderateScale(13),
    textAlign: "center",
    marginTop: moderateScale(8),
  },
  getstart: {
    height: moderateVerticalScale(32),
    color: ColorStyle.WHITE,
    fontSize: moderateScale(15),
    fontWeight: "500",
    textAlign: "right",
    margin: moderateScale(24),
  },
});
