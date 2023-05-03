import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { style } from "./Loginstyle";
import Imagepath from "../../Constants/Imagepath";
import Signcustom from "../../Components/Signcustom.js";
import Custbtn from "../../Components/Custbtn.js";
import Strings from "../../Constants/Strings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncSendData } from "../../utilis/asyndata";
export const Login = ({ navigation }) => {
  const [mobile, SetMobile] = useState("");
  const [password, SetPassword] = useState("");
  const [enterpass, SetEnterPass] = useState(true);
  const [Hide, SetHide] = useState("Show");
  async function gotolocation() {
    if (!mobile.trim()) {
      alert("enter mobile number");
    } else if (!password.trim()) {
      alert("enter password");
    } else {
      AsyncSendData("Suggestions", { Mobile: mobile, Password: password });
      navigation.navigate(Strings.Set_location);
    }
  }
  function Hidepassword() {
    if (enterpass == false) {
      SetEnterPass(true);
      SetHide("hide");
      return;
    }
    if (enterpass == true) {
      SetEnterPass(false);
      SetHide("Show");
      return;
    }
  }
  return (
    <View style={style.container}>
      <View style={style.logintop}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image style={style.arrow} source={Imagepath.icBack}></Image>
        </TouchableOpacity>
        <View style={style.createnew}>
          <Text style={style.account}>{Strings.Welcome}</Text>
          <Text style={style.continue}>{Strings.We_are_Happy}</Text>
        </View>
        <View style={style.token}>
          <View style={style.tokenpicker}>
            <Signcustom placeholder="+1" />
          </View>
          <View style={style.mobile}>
            <Signcustom
              placeholder={Strings.Mobile_No}
              value={mobile}
              onChangeText={(val) => SetMobile(val)}
              maxLength={10}
              keyboard="numeric"
            />
          </View>
        </View>
        <View>
          <Signcustom
            onPress={Hidepassword}
            placeholder={Strings.Password}
            SHOW={Hide}
            hide={enterpass}
            onChangeText={(val) => SetPassword(val)}
            maxLength={8}
          />
        </View>
        <TouchableOpacity style={style.forgetotp}>
          <Text style={style.useotp}>{Strings.UseOTP}</Text>
          <Text style={style.forward}>{Strings.Forgot_password}</Text>
        </TouchableOpacity>
      </View>
      <View style={style.loginbottom}>
        <Custbtn onPress={gotolocation} title={Strings.LOGIN} />
      </View>
    </View>
  );
};
