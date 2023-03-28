import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import Imagepath from "../Constants/Imagepath";
import { Home } from "../Screens/Home/Home";
import { Notification } from "../Screens/Notification/Notification";
import { PostCamera } from "../Screens/PostCamera/PostCamera";
import { Profile } from "../Screens/Profile/Profile";
import { Search } from "../Screens/Search/Search";
import ColorStyle from "../Screens/StyleColor/ColorStyle";
const Tab = createBottomTabNavigator();
export default function Bottomtab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={Imagepath.icActiveHome} />
            ) : (
              <Image source={Imagepath.icHomes} />
            );
          },
          tabBarStyle: {
            backgroundColor: ColorStyle.LIGHT_BACKGROUND_GREY,
            height: 80,
            borderRadius: 8,
            borderTopWidth: 0,
            position: "absolute",
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image style={{ tintColor: "red" }} source={Imagepath.icSrch} />
            ) : (
              <Image source={Imagepath.icSrch} />
            );
          },
          tabBarStyle: {
            backgroundColor: ColorStyle.LIGHT_BACKGROUND_GREY,
            height: 80,
            borderRadius: 8,
            position: "absolute",
            borderTopWidth: 0,
          },
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={PostCamera}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image style={{ tintColor: "red" }} source={Imagepath.icAdd} />
            ) : (
              <Image source={Imagepath.icAdd} />
            );
          },
          tabBarStyle: {
            backgroundColor: ColorStyle.LIGHT_BACKGROUND_GREY,
            height: 80,
            borderRadius: 8,
            position: "absolute",
            borderTopWidth: 0,
            display: "none",
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image style={{ tintColor: "red" }} source={Imagepath.icNotify} />
            ) : (
              <Image source={Imagepath.icNotify} />
            );
          },
          tabBarStyle: {
            backgroundColor: ColorStyle.LIGHT_BACKGROUND_GREY,
            height: 80,
            borderRadius: 8,
            position: "absolute",
            borderTopWidth: 0,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image style={{ tintColor: "red" }} source={Imagepath.icuser} />
            ) : (
              <Image source={Imagepath.icuser} />
            );
          },
          tabBarStyle: {
            backgroundColor: ColorStyle.LIGHT_BACKGROUND_GREY,
            height: 80,
            borderRadius: 8,
            position: "absolute",
            borderTopWidth: 0,
          },
        }}
      />
    </Tab.Navigator>
  );
}
