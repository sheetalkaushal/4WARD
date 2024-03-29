import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { style } from "./SetPasStyle";
import Imagepath from "../../Constants/Imagepath";
import Signcustom from "../../Components/Signcustom.js";
import Custbtn from "../../Components/Custbtn.js";
import Strings from "../../Constants/Strings";
export const Setpass = ({ navigation }) => {
  const [pass, SetPass] = useState("");
  const [confirmpass, SetConfirmPass] = useState("");
  const [enterpass, SetEnterPass] = useState(true);
  const [Showconfirmpass, SetShowConfirmPass] = useState(true);
  const [Hide, SetHide] = useState("Show");
  const [ConfirmHide, SetConfirmHide] = useState("Show");
  function gotologin() {
    if (!pass.trim()) {
      alert("enter password");
    } else if (!confirmpass.trim()) {
      alert("enter confirm password");
    } else if (pass.trim() != confirmpass.trim()) {
      alert("Password Not Same");
    } else {
      navigation.navigate("Login");
    }
  }
  function password() {
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
  function Confirmpassword() {
    if (Showconfirmpass == false) {
      SetShowConfirmPass(true);
      SetConfirmHide("hide");
      return;
    }
    if (Showconfirmpass == true) {
      SetShowConfirmPass(false);
      SetConfirmHide("Show");
      return;
    }
  }
  return (
    <View style={style.container}>
      <View style={style.setpasstop}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image style={style.arrow} source={Imagepath.icBack}></Image>
        </TouchableOpacity>
        <View style={style.createnew}>
          <Text style={style.account}>Set password</Text>
          <Text style={style.continue}>Create secure and unique password.</Text>
        </View>
        <View>
          <Signcustom
            onPress={password}
            placeholder={Strings.Password}
            SHOW={Hide}
            hide={enterpass}
            onChangeText={(val) => SetPass(val)}
            maxLength={8}
          />
        </View>
        <View>
          <Signcustom
            onPress={Confirmpassword}
            placeholder={Strings.Confirm_password}
            SHOW={ConfirmHide}
            hide={Showconfirmpass}
            onChangeText={(val) => SetConfirmPass(val)}
            maxLength={8}
          />
        </View>
      </View>
      <View style={style.setpassbottom}>
        <Custbtn onPress={gotologin} title={Strings.Get_Started} />
      </View>
    </View>
  );
};
