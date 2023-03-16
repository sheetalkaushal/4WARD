import { StyleSheet } from "react-native";
import {
  moderateVerticalScale,
  moderateScale,
} from "react-native-size-matters";
import ColorStyle from "../StyleColor/ColorStyle";
export const style = StyleSheet.create({
  container: {
    backgroundColor:ColorStyle.DARK_GREY,
    flex: 1,
    paddingLeft: moderateScale(24),
  },
  notifiy: {
    color:ColorStyle.WHITE,
    fontSize: moderateScale(16),
    fontWeight: "600",
    marginTop: moderateScale(56),
    marginBottom: moderateScale(24),
  },
  txtcontent: {
    borderBottomColor:ColorStyle.INPUT_TEXT,
    borderBottomWidth: 1,
    width: moderateScale(398),
    paddingBottom: moderateScale(17),
  },
  user: {
    width: moderateVerticalScale(40),
    height: moderateVerticalScale(40),
    borderRadius: 24,
    backgroundColor: "red",
  },
  username: {
    color:ColorStyle.RED_BTN,
    fontSize: 16,
    fontWeight: "500",
  },
  datatext: {
    color:ColorStyle.WHITE,
    fontSize: 16,
    fontWeight: "500",
  },
  notificationpop: {
    flexDirection: "row",
    gap: 16,
    flex: 1,
    borderBottomColor: 2,
    marginBottom: moderateScale(16),
  },
  txttime: {
    opacity: 0.4,
    color:ColorStyle.WHITE,
    fontSize: 12,
    fontWeight: 500,
  },
});
