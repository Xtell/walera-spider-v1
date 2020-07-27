import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WelcomeScreen } from "./src/screens/WelcomeScreen";
import { RegScreen } from "./src/screens/RegScreen";
import * as SecureStore from "expo-secure-store";
import "react-native-gesture-handler";
import { NavigationContainer} from "@react-navigation/native";
export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState(null);

  // const setToken = (token) => {
  //   console.log('');
  // }
  return (
    <View style={styles.container}>
      <RegScreen></RegScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
