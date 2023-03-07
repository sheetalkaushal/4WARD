// import navigationString from "./navigationString";

import { OTPPass } from "../Screens/OTPPass/OTPPass";
import { Intially } from "../Screens/Intially/Intially";
import { Login } from "../Screens/Login/Login";
import { Onboarding } from "../Screens/Onboarding/Onboarding";
import { Signup } from "../Screens/Signup/Signup";
import { Setpass } from "../Screens/SetPass/Setpass";
// import * as Screens from "../Screens";
export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={'Onboarding'}
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Intially'}
        component={Intially}
        options={{ headerShown: false }}
      />
         <Stack.Screen
        name={'Login'}
        component={Login}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name={'Signup'}
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'OTPPass'}
        component={OTPPass}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name={'Setpass'}
        component={Setpass}
        options={{ headerShown: false }}
      />
    </>
  );
}