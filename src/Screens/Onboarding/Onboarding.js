import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Imagepath from "../../Constants/Imagepath";
import { style } from "./Onboradstyle";
import { ScrollView } from "react-native-gesture-handler";
import Strings from "../../Constants/Strings";
export const Onboarding = ({ navigation }) => {
  return (
    <View style={style.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={style.container}
        scrollEnabled={true}
      >
        <View style={style.cards}>
          <Image source={Imagepath.icOnward} style={style.imgward} />
          <Text style={style.hendtext1}>{Strings.Hendrerit_vulputate_sem}</Text>
          <Text style={style.donectext2}>{Strings.Aenean_et_aenean}</Text>
        </View>
        {/* cards2 */}
        <View style={style.cards2}>
          <Image source={Imagepath.icOnward} style={style.imgward} />
          <Text style={style.hendtext1}>{Strings.Hendrerit_vulputate_sem}</Text>
          <Text style={style.donectext2}>{Strings.Aenean_et_aenean}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Intially");
        }}
      >
        <Text style={style.getstart}>{Strings.Get_Started}</Text>
      </TouchableOpacity>
    </View>
  );
};
