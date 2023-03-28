import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { style } from "./ChangeStyle";
import Imagepath from "../../Constants/Imagepath";
import Signcustom from "../../Components/Signcustom.js";
import Custbtn from "../../Components/Custbtn.js";
import Strings from "../../Constants/Strings";
export const ChangeProfile = ({ navigation }) => {
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
          style={style.addinfo}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image style={style.arrow} source={Imagepath.icBack}></Image>
          <Text style={style.info}>{Strings.Change_profile}</Text>
        </TouchableOpacity>
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
        <Custbtn onPress={gotologin} title={Strings.SAVE} />
      </View>
    </View>
  );
};
