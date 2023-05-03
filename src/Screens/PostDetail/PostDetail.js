import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import Imagepath from "../../Constants/Imagepath";
import Custbtn from "../../Components/Custbtn";
import { style } from "./PostDetailstyle";
import { TouchableOpacity } from "react-native";
import open from "react-native-open-maps";
export const PostDetail = ({ navigation, route }) => {
  const item = route?.params?.item;
  console.log(("itemmnss",item))
  // console.log(item.imagehome)
  return (
    <ImageBackground style={style.container} source={Imagepath.ichomecar}>
      <View style={style.head}>
        <Image style={style.profile} source={item.personimg} />
        <View style={style.russellheader}>
          <Text style={style.gordon}>Russell Gordon</Text>
          <Text style={style.headersector}>Sector 28D, Chandigarh</Text>
        </View>
        <TouchableOpacity
          style={style.dots}
          onPress={() => navigation.goBack()}
        >
          <Image source={Imagepath.iccross} />
        </TouchableOpacity>
      </View>
      <View style={style.content}>
        <Text style={style.loremcontent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in
          turpis luctus.
        </Text>
        <Text style={style.ago}>1 hr ago</Text>
        <Custbtn
          onPress={() =>
            open({ latitude: 30.71923776993991, longitude: 76.81066575861746 })
          }
          title="VIEW MAP"
        />
      </View>
    </ImageBackground>
  );
};

export default PostDetail;
