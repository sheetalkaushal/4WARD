import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Imagepath from "../../Constants/Imagepath";
import { style } from "./Onboradstyle";
import { ScrollView } from "react-native-gesture-handler";
export const Onboarding = ({navigation}) => {
  return (
    <View style={style.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={style.container}
        scrollEnabled={false}>
        <View style={style.cards}>
          <Image source={Imagepath.icOnward} style={style.imgward} />
          <Text style={style.hendtext1}>Hendrerit vulputate sem</Text>
          <Text style={style.donectext2}>Aenean et convallis nulla. Donec in efficitur nisi, et vestibulum quam aenean.</Text>
        </View>
        {/* cards2 */}
        <View style={style.cards2}>
          <Image source={Imagepath.icOnward} style={style.imgward} />
          <Text style={style.hendtext1}>Hendrerit vulputate sem</Text>
          <Text style={style.donectext2}>Aenean et convallis nulla. Donec in efficitur nisi, et vestibulum quam aenean.</Text>
        </View>   
      </ScrollView>
      <TouchableOpacity onPress={()=>{navigation.navigate('Intially')}}><Text style={style.getstart} >GET STARTED</Text></TouchableOpacity>
    </View>
  );
};
