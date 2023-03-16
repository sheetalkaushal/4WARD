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
  addinfo: {
    flexDirection: "row",
    marginTop: moderateScale(56),
    gap: moderateScale(16),
    alignItems: "center",
  },
  info: {
    color: ColorStyle.WHITE,
    fontSize: moderateScale(16),
    fontWeight: "600",
  },
  change: {
    alignSelf: "center",
    height: moderateVerticalScale(100),
    width: moderateVerticalScale(100),
  },
  changeProfile: {
    marginTop: moderateScale(42),
    marginBottom: moderateScale(52),
    borderRadius: 85.71,
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
  top: {
    flex: 0.9,
  },

  EditProfiletop: {
    flex: 0.9,
  },
  EditProfilebotttom: {
    flex: 0.1,
  },
});
