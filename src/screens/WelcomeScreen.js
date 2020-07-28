import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import {AppButton} from '../components/appButton'

export const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/spider.png")}
        />
      </View>

      <View style={styles.buttons}>
        <View style={styles.button}>
        <AppButton type="positive" onPress={() => navigation.navigate("RegScreen")}>
          Зарегистрироваться
        </AppButton>
        </View>

        <AppButton type="default" onPress={() => navigation.navigate("LoginScreen")}>
          Войти
        </AppButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "#000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    alignSelf: "center",
    width: 70,
    height: 70,
  },
  buttons: {
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "#000",

    justifyContent: "flex-end",
    marginBottom: 40,
  },
  button: {
    marginBottom: 20,
  },
});
