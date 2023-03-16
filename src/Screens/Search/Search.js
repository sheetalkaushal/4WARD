import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { style } from "./SearchStyle";
import Imagepath from "../../Constants/Imagepath";
import Signcustom from "../../Components/Signcustom";
export const Search = () => {
  const locationsend = [
    {
      id: 1,
      address: "Sector 55, Chandigarh",
      imagepath: Imagepath.icgreytick,
    },
    {
      id: 2,
      address: "Sector 55, Chandigarh",
      imagepath: Imagepath.icgreytick,
    },
    {
      id: 3,
      address: "Sector 55, Chandigarh",
      imagepath: Imagepath.icgreytick,
    },
    {
      id: 4,
      address: "Sector 55, Chandigarh",
      imagepath: Imagepath.icgreytick,
    },
    {
      id: 5,
      address: "Sector 55, Chandigarh",
      imagepath: Imagepath.icgreytick,
    },
  ];
  const [locState, SetLocState] = useState({ locationsend });
  onPressvalue = (id) => {
    const newloc = locationsend.map((value) => {
      if (value.id == id) {
        return { ...value, imagepath: Imagepath.icbluetick };
      } else {
        return value;
      }
    });
    SetLocState({ locationsend: newloc });
  };
  return (
    <View style={style.container}>
      <View style={style.enterlocation}>
        <Signcustom placeholder="Enter location manually" />
      </View>
      <View style={style.textsuggest}>
        <Text style={style.suggest}>Suggestions</Text>
      </View>
      <FlatList
        data={locState.locationsend}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={style.sectorcheck}
            onPress={() => onPressvalue(item.id)}
          >
            <Text style={style.sector}>{item.address}</Text>
            <Image source={item.imagepath} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
