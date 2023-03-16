import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import ColorStyle from "../Screens/StyleColor/ColorStyle";
export default ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={style.btntouch}>
        <Text style={style.btntext}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  btntouch: {
    backgroundColor:ColorStyle.RED_BTN,
    borderRadius: 8,
    height: moderateVerticalScale(48),
    alignItems: "center",
    paddingVertical: moderateVerticalScale(14),
  },
  btntext: {
    fontSize: moderateVerticalScale(14),
    fontWeight: "bold",
    letterSpacing: moderateScale(0.88),
    textAlign: "center",
    color:ColorStyle.WHITE,
  },
});
