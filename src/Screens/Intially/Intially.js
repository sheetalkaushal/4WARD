import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import React from "react";
import { style } from "./Intiallystyle";
import Imagepath from "../../Constants/Imagepath";
import Custbtn from "../../Components/Custbtn";
import Btnsocial from "../../Components/Btnsocial";
import Strings from "../../Constants/Strings";
export const Intially = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.ward}>
        <Image source={Imagepath.icWard} style={style.imgward} />
      </View>
      <View>
        <Text style={style.clicklog}>{Strings.By_clicking_privacy_policy}</Text>
      </View>
      <Custbtn
        onPress={() => navigation.navigate("Login")}
        title={Strings.LogIn_Phone_No}
      />
      <View>
        <Text style={style.or}>Or</Text>
      </View>
      <Btnsocial socialimg={Imagepath.icGoogle} title={Strings.LogIn_Google} />
      <Btnsocial
        socialimg={Imagepath.icFacebook}
        title={Strings.LogIn_Facebook}
      />
      {Platform.OS==='ios' ?<Btnsocial socialimg={Imagepath.icapple} title={Strings.LogIn_Apple} />:null}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Signup");
        }}
        style={style.here}
      >
        <Text style={style.new}>{Strings.New_here}</Text>
        <Text style={style.sign}>{Strings.Sign_Up}</Text>
      </TouchableOpacity>
    </View>
  );
};
