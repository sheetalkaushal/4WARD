import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
const Stack = createNativeStackNavigator();
export default function Routes() {
  const checkStatus = useSelector((state) => state.status.checkStatus);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
        {checkStatus ? HomeStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
