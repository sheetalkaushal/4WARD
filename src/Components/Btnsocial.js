import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import ColorStyle from "../Screens/StyleColor/ColorStyle";
export default ({ title, socialimg }) => {
  return (
    <TouchableOpacity style={style.btnsocial}>
      <Image source={socialimg}></Image>
      <Text style={style.textsocial}>{title}</Text>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  btnsocial: {
    backgroundColor: ColorStyle.WHITE,
    borderRadius: 8,
    height: moderateVerticalScale(48),
    alignItems: "center",
    paddingHorizontal: moderateVerticalScale(16),
    marginBottom: moderateScale(16),
    flexDirection: "row",
  },
  textsocial: {
    fontSize: moderateVerticalScale(14),
    fontWeight: "bold",
    letterSpacing: moderateScale(0.88),
    textAlign: "center",
    color: ColorStyle.BLACK_TXT,
    flex: 1,
  },
  socialimg: {
    alignSelf: "center",
    marginLeft: moderateScale(16),
  },
});
