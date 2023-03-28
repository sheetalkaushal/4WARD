import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import ColorStyle from "../Screens/StyleColor/ColorStyle";
export const EditCustom = ({ titles, img, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.input}>
      <Image style={style.imgedit} source={img} />
      <Text style={style.edittext}>{titles}</Text>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  input: {
    borderRadius: moderateScale(8),
    height: moderateVerticalScale(20),
    fontSize: 15,
    flexDirection: "row",
    gap: moderateScale(20),
    color: ColorStyle.WHITE,
    alignItems: "center",
    marginBottom: moderateScale(32),
  },
  edittext: {
    flex: 1,
    color: ColorStyle.INPUT_TEXT,
    fontSize: 15,
  },
});
