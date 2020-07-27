import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TextInput,
  Alert,
  BackHandler
} from "react-native";
import { THEME } from "../theme";
import { regUser } from "../api";
import { AppButton } from "../components/appButton";
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
          return response.json()
        }
        else {
          if (response.status == 409) {
            Alert.alert("ТЫ УЖЕ ЗАРЕГИСТРИРОВАН", "Подумай", [
              {
                text: "Уйти в одноклассники",
                onPress: () => (BackHandler.exitApp())
              }, 
              {
                text: "Прошу прощения, Зря быканул",
              },

            ])
          }
        }
      })
      .catch((error) => {
        Alert.alert("Конец", "Мои полномочия на этом все" [
          {
            text: "Уйти в одноклассники",
            onPress: () => (BackHandler.exitApp())
          }
        ]);
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

      <TextInput
        style={styles.input}
        placeholder="Имя"
        placeholderTextColor="#000"
        autoFocus={true}
        onChangeText={(text) => setName(text)}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Фамилия"
        placeholderTextColor="#000"
        onChangeText={(text) => setLastName(text)}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Ник"
        placeholderTextColor="#000"
        onChangeText={(text) => setNickName(text)}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        placeholderTextColor="#000"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      ></TextInput>
      <AppButton type="positive" onPress={regHandler} disabled={disabledButton}>
        Зарегистрироваться
      </AppButton>
      {/* <Button
        title="Зарегистрироваться"
        disabled={disabledButton}
        onPress={regUser}
      /> */}
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
  input: {
    marginBottom: 15,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#D4D8D8",
    backgroundColor: "#F4F5F5",
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
