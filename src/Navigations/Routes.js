import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {false? HomeStack(Stack):  AuthStack(Stack)}</Stack.Navigator>
    </NavigationContainer>
  );
}