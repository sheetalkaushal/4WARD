import React, { useState } from "react";
import { Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import Imagepath from "../Constants/Imagepath";
import ColorStyle from "../Screens/StyleColor/ColorStyle";
export function ImagePickers() {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      alert("image Not select");
    }
  };
  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.pickimg} />}
      <TouchableOpacity style={styles.pickimg} onPress={pickImage}>
        <Image source={Imagepath.icPlus} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: moderateScale(16),
  },
  pickimg: {
    backgroundColor: ColorStyle.LIGHT_BACKGROUND_GREY,
    width: moderateScale(64),
    height: moderateVerticalScale(64),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
