import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { style } from "./NotificationStyle";
import Imagepath from "../../Constants/Imagepath";
import { TouchableOpacity } from "react-native";
import Strings from "../../Constants/Strings";

export const Notification = () => {
  dataNotify = [
    {
      id:"1",
      userimg: Imagepath.icuser,
      username: "Russell Gordon",
      datatext: " added a new post.",
      txttime: "20 min ago",
    },

    {
      id:"2",
      userimg: Imagepath.icGoogle,
      username: "Sara",
      datatext: " added a new post.",
      txttime: "20 min ago",
    },

    {
      id:"3",
      userimg: Imagepath.icfireimage,
      username: "Raphl",
      datatext: " added a new post.",
      txttime: "20 min ago",
    },

    {
      id:"4",
      userimg: Imagepath.icFlag,
      username: "Raphl",
      datatext: " added a new post.",
      txttime: "20 min ago",
    },
  ];
  return (
    <View style={style.container}>
      <Text style={style.notifiy}>{Strings.Notification}</Text>
      <FlatList
        data={dataNotify}
        keyExtractor={item=>item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={style.notificationpop}>
            <Image style={style.user} source={item.userimg}></Image>
            <View style={style.txtcontent}>
              <Text style={style.username}>
                {item.username}
                <Text style={style.datatext}>{item.datatext}</Text>
              </Text>
              <Text style={style.txttime}>{item.txttime}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
