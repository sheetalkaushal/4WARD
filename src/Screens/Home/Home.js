import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React, { useEffect } from "react";
import { style } from "./Homestyle";
import Imagepath from "../../Constants/Imagepath";
import { TouchableOpacity } from "react-native";
import open from "react-native-open-maps";
import Strings from "../../Constants/Strings";
import { getdata, postData } from "../../redux/action/actionApi";
import { GET_STATIC_DATA, LOGIN_POST } from "../../config/urls";
export const Home = ({ navigation }) => {
  useEffect(() => {
    const postingdata = {
      username: "honey",
      password: "12345678",
      device_type: "android",
      device_token: "123456",
    };
    // getdata(GET_STATIC_DATA )
    //    .then((res) => console.log(res))
    //   .catch((er) => console.log(er));

    postData(LOGIN_POST, postingdata, {})
      .then((res) => console.log(res))
      .catch((er) => console.log(er));
  }, []);

  carddata = [
    {
      id: "1",
      personimg: Imagepath.icGoogle,
      personname: "Ressell gordon",
      personaddres: "Sector 28D, Chandigarh",
      imagehome: Imagepath.ichomecar,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
      timing: "2 hr ago",
      comments: "1,254",
      likes: "44,686",
    },
    {
      id: "2",
      personimg: Imagepath.icactiveheart,
      personname: "Ressell gordon",
      personaddres: "Sector 28D, Chandigarh",
      imagehome: Imagepath.icfireimage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
      timing: "3 hr ago",
      comments: "1,1M",
      likes: "44,686",
    },
    {
      id: "3",
      personimg: Imagepath.icapple,
      personname: "Ressell gordon",
      personaddres: "Sector 28D, Chandigarh",
      imagehome: Imagepath.ichomecar,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
      timing: "4 hr ago",
      comments: "1,254",
      likes: "44,686",
    },
  ];
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image style={style.imgwards} source={Imagepath.icHome} />
        <TouchableOpacity
          onPress={() =>
            open({ latitude: 30.71923776993991, longitude: 76.81066575861746 })
          }
        >
          <Image style={style.imgloc} source={Imagepath.icloc} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={carddata}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <>
            <View style={style.card}>
              <View style={style.head}>
                <Image style={style.profile} source={item.personimg} />
                <View style={style.russellheader}>
                  <Text style={style.gordon}>{item.personname} </Text>
                  <Text style={style.headersector}>{item.personaddres}</Text>
                </View>
                <Image style={style.dots} source={Imagepath.icdots} />
              </View>
              <View>
                <TouchableOpacity
                  onPress={(item) => navigation.navigate("PostDetail", { item })}
                >
                  <Image style={style.home} source={item.imagehome} />
                </TouchableOpacity>
              </View>
              <View style={style.content}>
                <Text style={style.loremcontent}>{item.description}</Text>
                <Text style={style.ago}>{item.timing}</Text>
              </View>
              <View style={style.cardsbottom}>
                <Text style={style.comments}>
                  {Strings.Comment} {item.comments}
                </Text>
                <Text style={style.likes}>
                  {Strings.Likes} {item.likes}
                </Text>
                <Image style={style.share} source={Imagepath.icdirection} />
              </View>
            </View>
          </>
        )}
      />
      <View style={{ height: 80 }}></View>
    </View>
  );
};
