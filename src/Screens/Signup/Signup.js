import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { style } from "./Signupstyle";
import Imagepath from "../../Constants/Imagepath";
import Signcustom from "../../Components/Signcustom.js";
import Custbtn from "../../Components/Custbtn.js";
import Strings from "../../Constants/Strings";
export const Signup = ({ navigation }) => {
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
      navigation.navigate("OTPPass", { Mobile });
    }
  }
  return (
    <View style={style.container}>
      <View style={style.signtop}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image style={style.arrow} source={Imagepath.icBack}></Image>
        </TouchableOpacity>
        <View style={style.createnew}>
          <Text style={style.account}>{Strings.Create_a_new_account}</Text>
          <Text style={style.continue}>
            {Strings.Create_an_account_so_you_can_continue}
          </Text>
        </View>
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
      </View>
      <View style={style.signbotttom}>
        <Custbtn onPress={gotosetpass} title={Strings.NEXT} />
      </View>
    </View>
  );
};
