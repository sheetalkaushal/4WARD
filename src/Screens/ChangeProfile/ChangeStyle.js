import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
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
    marginBottom: moderateScale(42),
  },
  info: {
    color: ColorStyle.WHITE,
    fontSize: 16,
    fontWeight: "600",
  },
  setpasstop: {
    flex: 0.9,
  },
  setpassbottom: {
    flex: 0.1,
  },
});
