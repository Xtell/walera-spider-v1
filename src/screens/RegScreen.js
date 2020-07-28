import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TextInput,
  Alert,
  BackHandler,
} from "react-native";
import { THEME } from "../theme";
import { regUser } from "../api";
import { AppButton } from "../components/appButton";
import { AppTextInput } from "../components/appTextInput";
import * as spiderApi from "../api/index";
export const RegScreen = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const regHandler = () => {
    spiderApi
      .createUser(name, lastName, nickName, password)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          if (response.status == 409) {
            Alert.alert("ТЫ УЖЕ ЗАРЕГИСТРИРОВАН", "Подумай", [
              {
                text: "ДА Я"
              },
            ]);
          }
        }
      })
      .catch((error) => {
        Alert.alert(
          "Конец",
          "Мои полномочия на этом все"[
            {
              text: "Уйти в одноклассники",
              onPress: () => BackHandler.exitApp(),
            }
          ]
        );
      });
  };
  let disabledButton = false;
  if (
    name.trim().length == 0 ||
    lastName.trim().length == 0 ||
    nickName.trim().length == 0 ||
    password.trim().length == 0
  ) {
    disabledButton = true;
  } else {
    disabledButton = false;
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Регистрация</Text>
      </View>

      <AppTextInput
        placeholder="Имя"
        placeholderTextColor="#000"
        autoFocus={true}
        onChange={setName}
      ></AppTextInput>
      <AppTextInput
        placeholder="Фамилия"
        placeholderTextColor="#000"
        onChange={setLastName}
      ></AppTextInput>
      <AppTextInput
        placeholder="Кличка"
        placeholderTextColor="#000"
        onChange={setNickName}
      ></AppTextInput>
      <AppTextInput
        placeholder="Пароль"
        placeholderTextColor="#000"
        secureTextEntry={true}
        onChange={setPassword}
      ></AppTextInput>
      <AppButton type="positive" onPress={regHandler} disabled={disabledButton}>
        Зарегистрироваться
      </AppButton>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  headerContainer: {},
});
