import { View, Text, Image } from "react-native";
import React from "react";
import { style } from "./Profilestyle";
import { EditCustom } from "../../Components/EditCustom";
import Imagepath from "../../Constants/Imagepath";
import Strings from "../../Constants/Strings";
import { datasend } from "../../redux/action/addStack";
import { AsyncRemoveData } from "../../utilis/asyndata";
export const Profile = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.profilestyle}>
        <Text style={style.profile}>{Strings.Profile}</Text>
      </View>
      <View style={style.editicon}>
        <EditCustom
          onPress={() => {
            navigation.navigate("EditProfile");
          }}
          titles="Edit Profile"
          img={Imagepath.icuser}
        />
        <EditCustom
          onPress={() => {
            navigation.navigate("ChangeProfile");
          }}
          titles={Strings.Change_Password}
          img={Imagepath.ickey}
        />
        <EditCustom
          onPress={() =>AsyncRemoveData("Suggestions")}
      
          titles={Strings.Signout}
          img={Imagepath.iclogout}
        />
      </View>
    </View>
  );
};
