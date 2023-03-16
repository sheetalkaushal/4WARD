import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import ColorStyle from "../StyleColor/ColorStyle";
export const style = StyleSheet.create({
  container: {
    backgroundColor: ColorStyle.DARK_GREY,
    flex: 1,
    paddingHorizontal: moderateScale(24),
  },
  profilestyle: {
    marginTop: moderateScale(56),
  },
  profile: {
    color: ColorStyle.WHITE,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: moderateScale(34),
  },
});
