import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Provider } from "react-redux";
import Routes from "./src/Navigations/Routes";
import { getdata, postData } from "./src/redux/action/actionApi";
import { datasend } from "./src/redux/action/addStack";
import { store } from "./src/redux/store";
import { GetAsync } from "./src/utilis/asyndata";
export default function App() {
  useEffect(() => {
    GetAsync("Suggestions");
  });
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </View>
  );
}
