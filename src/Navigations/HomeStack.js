import { View, Text } from "react-native";
import React from "react";
import Bottomtab from "./Bottomtab";
import { EditProfile } from "../Screens/EditProfile/EditProfile";
import { ChangeProfile } from "../Screens/ChangeProfile/ChangeProfile";
import PostDetail from "../Screens/PostDetail/PostDetail";
export default function HomeStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={"Bottomtab"}
        component={Bottomtab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangeProfile"
        component={ChangeProfile}
        options={{ headerShown: false }}
      />
    </>
  );
}
