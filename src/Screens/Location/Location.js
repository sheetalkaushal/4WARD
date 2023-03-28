import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { style } from "./Locationstyle";
import Imagepath from "../../Constants/Imagepath";
import Custbtn from "../../Components/Custbtn";
import Signcustom from "../../Components/Signcustom";
import Strings from "../../Constants/Strings";
import { datasend } from "../../redux/action/addStack";
export const Location = ({ navigation }) => {
  const locationsend = [
    {
      id: "1",
      address: "Sector 55, Chandigarh",
      imagepath: Imagepath.icgreytick,
    },
    {
      id: "2",
      address: "Sector 55, Chandigarh",
      imagepath: Imagepath.icgreytick,
    },
    {
      id: "3",
      address: "Sector 55, Chandigarh",
      imagepath: Imagepath.icgreytick,
    },
    {
      id: "4",
      address: "Sector 55, Chandigarh",
      imagepath: Imagepath.icgreytick,
    },
    {
      id: "5",
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
      <View style={style.locationtop}>
        <View style={style.loactioncontainer}>
          <Text style={style.devicelocation}>
            {Strings.Device_location_is_off}
          </Text>
          <TouchableOpacity style={style.turnonbtn}>
            <Text style={style.btntext}>{Strings.TURN_ON}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={style.turning}>
            {
              Strings.Turning_on_device_location_will_ensure_accurate_road_alerts
            }
          </Text>
        </View>
        <View>
          <Text style={style.or}>{Strings.Or}</Text>
        </View>
        <View style={style.enterlocation}>
          <Signcustom placeholder={Strings.Enter_Loc_Manually} />
        </View>
        <View style={style.textsuggest}>
          <Text style={style.suggest}>{Strings.Suggestions}</Text>
          <FlatList
            data={locState.locationsend}
            keyExtractor={item=>item.id.toString()}
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
      </View>
      <View style={style.locationbottom}>
        <Custbtn
          onPress={() => 
          datasend(true)
          }
          socialimg
          style={style.imgoogle}
          title={Strings.SELECT_PROCEED}
        />
      </View>
    </View>
  );
};
