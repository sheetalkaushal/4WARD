import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import ColorStyle from "../Screens/StyleColor/ColorStyle";
export default ({
  placeholder,
  icon,
  keyboard,
  hide,
  onPress,
  SHOW,
  ...props
}) => {
  return (
    <View style={style.inputstyle}>
      <TextInput
        style={style.settext}
        placeholder={placeholder}
        placeholderTextColor={ColorStyle.INPUT_TEXT}
        keyboardType={keyboard}
        secureTextEntry={hide}
        {...props}
      ></TextInput>
      {SHOW ? (
        <TouchableOpacity onPress={onPress}>
          <Text style={style.show}>{SHOW}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
const style = StyleSheet.create({
  inputstyle: {
    padding: moderateScale(10),
    marginTop: moderateScale(16),
    backgroundColor:ColorStyle.LIGHT_BACKGROUND_GREY,
    borderRadius: moderateScale(8),
    opacity: 0.8,
    fontSize: moderateScale(14),
    flexDirection: "row",
    justifyContent: "space-between",
    color:ColorStyle.WHITE,
    alignItems: "center",
  },
  show: {
    opacity: moderateScale(0.5),
    color: ColorStyle.WHITE,
  },
  settext: {
    flex: 1,
    color: ColorStyle.WHITE,
  },
});
