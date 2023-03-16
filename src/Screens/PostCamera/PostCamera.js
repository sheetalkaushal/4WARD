import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { style } from "./PostCamerastyle";
import Imagepath from "../../Constants/Imagepath";
import Signcustom from "../../Components/Signcustom";
import Custbtn from "../../Components/Custbtn";
import { ImagePickers } from "../../Components/ImagePicker";
import Strings from "../../Constants/Strings";
export const PostCamera = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.Cameratop}>
        <TouchableOpacity
          style={style.addinfo}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image style={style.arrow} source={Imagepath.icBack}></Image>
          <Text style={style.info}>{Strings.Add_info}</Text>
        </TouchableOpacity>
        <ImagePickers />
        <View style={style.description}>
          <Signcustom placeholder={Strings.Write_description} />
        </View>
        <View style={style.description}>
          <Signcustom placeholder={Strings.Add_location} />
        </View>
      </View>
      <View style={style.Camerabottom}>
        <Custbtn title={Strings.Post} />
      </View>
    </View>
  );
};
