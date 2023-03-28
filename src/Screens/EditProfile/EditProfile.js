import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { style } from "./EditProfileStyle";
import Imagepath from "../../Constants/Imagepath";
import Signcustom from "../../Components/Signcustom.js";
import Custbtn from "../../Components/Custbtn.js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Strings from "../../Constants/Strings";
export const EditProfile = ({ navigation }) => {
  const [first, Setfirst] = useState("");
  const [Last, SetLast] = useState("");
  const [Email, SetEmail] = useState("");
  const [Mobile, SetMobile] = useState("");
  function gotosetpass() {
    if (!first.trim()) {
      alert("Enter your first name");
    } else if (!Last.trim()) {
      alert("Enter your Last name");
    } else if (!Email.trim()) {
      alert("Enter your Email");
    } else if (!Mobile.trim()) {
      alert("Enter your Mobile number");
    } else {
      navigation.navigate("OTPPass");
    }
  }
  return (
    <View style={style.container}>
      <KeyboardAwareScrollView style={style.EditProfiletop}>
        <TouchableOpacity
          style={style.addinfo}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image style={style.arrow} source={Imagepath.icBack}></Image>
          <Text style={style.info}>{Strings.Edit_Profile}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.changeProfile}>
          <Image style={style.change} source={Imagepath.icprofile}></Image>
        </TouchableOpacity>
        <View style={style.firstn}>
          <View style={style.fname}>
            <Signcustom
              placeholder={Strings.First_Name}
              value={first}
              onChangeText={(val) => Setfirst(val)}
              maxLength={15}
            />
          </View>
          <View style={style.fname}>
            <Signcustom
              placeholder={Strings.Last_Name}
              value={Last}
              onChangeText={(val) => SetLast(val)}
              maxLength={15}
            />
          </View>
        </View>
        <View>
          <Signcustom
            placeholder={Strings.Email}
            value={Email}
            onChangeText={(val) => SetEmail(val)}
          />
        </View>
        <View style={style.token}>
          <View style={style.tokenpicker}>
            <Signcustom placeholder="+1" />
          </View>
          <View style={style.mobile}>
            <Signcustom
              placeholder={Strings.Mobile_No}
              value={Mobile}
              onChangeText={(val) => SetMobile(val)}
              maxLength={10}
              keyboard="numeric"
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={style.EditProfilebotttom}>
        <Custbtn onPress={gotosetpass} title={Strings.SAVE_CHANGES} />
      </View>
    </View>
  );
};
