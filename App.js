import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WelcomeScreen } from "./src/screens/welcomeScreen";
import { RegScreen } from "./src/screens/regScreen";
import * as SecureStore from "expo-secure-store";
import * as spiderApi from "./src/api/index";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "./src/screens/loginScreen";
import { HomeScreen } from "./src/screens/homeScreen";
const Stack = createStackNavigator();
export default function App() {
  SecureStore.deleteItemAsync('token');
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState(getTokenFromStorage());
  function getTokenFromStorage() {
    SecureStore.getItemAsync("token").then((token) => {
      console.log(token);
    }
    );
  }
  function saveTokenToStorage(token) {
    SecureStore.setItemAsync("token", token);
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token ? (
          <>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="RegScreen" component={RegScreen} />
            <Stack.Screen name="LoginScreen">
              {() => <LoginScreen saveToken={saveTokenToStorage} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
