import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { style } from "./OTPPassstyle";
import Imagepath from "../../Constants/Imagepath";
import Signcustom from "../../Components/Signcustom.js";
import Custbtn from "../../Components/Custbtn.js";
import Strings from "../../Constants/Strings";
export const OTPPass = ({ navigation, route }) => {
  const Mobile = route.params.Mobile;
  return (
    <View style={style.container}>
      <View style={style.otptop}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image style={style.arrow} source={Imagepath.icBack}></Image>
        </TouchableOpacity>
        <View style={style.createnew}>
          <Text style={style.enter}>
            {Strings.Enter_4_Digit}
            {Mobile}
          </Text>
          <TouchableOpacity>
            <Text style={style.edit}>{Strings.Edit_My_Number}</Text>
          </TouchableOpacity>
        </View>
        <View style={style.allotp}>
          <View style={style.otp1}>
            <Signcustom placeholder="" />
          </View>
          <View style={style.otp1}>
            <Signcustom placeholder="" />
          </View>
          <View style={style.otp1}>
            <Signcustom placeholder="" />
          </View>
          <View style={style.otp1}>
            <Signcustom placeholder="" />
          </View>
        </View>
      </View>
      <View style={style.otpbotttom}>
        <View>
          <Text style={style.resend}>{Strings.Resend_Otp_in}</Text>
        </View>
        <Custbtn
          onPress={() => {
            navigation.navigate("Setpass");
          }}
          title={Strings.Verify}
        />
      </View>
    </View>
  );
};
