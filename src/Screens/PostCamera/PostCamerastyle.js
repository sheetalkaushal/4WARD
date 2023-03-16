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
  addinfo: {
    flexDirection: "row",
    marginTop: moderateScale(56),
    gap: moderateScale(16),
    alignItems: "center",
    marginBottom: moderateScale(16),
  },
  info: {
    color: ColorStyle.WHITE,
    fontSize: moderateScale(16),
    fontWeight: "600",
  },
  addpic: {
    flexDirection: "row",
    gap: moderateScale(16),
    marginVertical: moderateScale(16),
  },
  description: {
    opacity: 0.5,
    color: ColorStyle.WHITE,
    fontSize: moderateScale(14),
  },
  Cameratop: {
    flex: 0.9,
  },
  Camerabottom: {
    flex: 0.1,
  },
});
