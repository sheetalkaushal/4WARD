import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import ColorStyle from "../StyleColor/ColorStyle";
export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: moderateScale(56),
  },
  profile: {
    borderRadius: moderateScale(24),
    width: moderateScale(40),
    height: moderateScale(40),
    alignItems: "center",
  },
  russellheader: {
    marginLeft: moderateScale(16),
  },
  gordon: {
    color: ColorStyle.WHITE,
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0,
  },
  headersector: {
    color: ColorStyle.INPUT_TEXT,
    fontSize: 13,
    letterSpacing: 0,
  },
  dots: {
    marginLeft: "auto",
  },
  home: {
    height: moderateScale(312),
    width: moderateScale(312),
    alignSelf: "center",
    marginHorizontal: moderateScale(6),
    marginBottom: moderateScale(16),
  },
  content: {
    marginTop: "auto",
    marginBottom: moderateScale(44),
  },
  loremcontent: {
    color: ColorStyle.WHITE,
    fontSize: 15,
    opacity: 0.7,
  },
  ago: {
    color: ColorStyle.INPUT_TEXT,
    fontSize: 13,
    marginVertical: moderateScale(8),
  },
  cardsbottom: {
    flexDirection: "row",
    alignItems: "center",
    margin: moderateScale(16),
  },
  comments: {
    color: ColorStyle.WHITE,
    fontSize: 15,
    opacity: 0.7,
  },
  likes: {
    color: ColorStyle.WHITE,
    marginLeft: moderateScale(16),
    fontSize: 15,
    opacity: 0.7,
  },
  share: {
    marginLeft: "auto",
  },
});
