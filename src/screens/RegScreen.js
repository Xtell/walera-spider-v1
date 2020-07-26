import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TextInput,
  Alert,
} from "react-native";
import { THEME } from "../theme";
import { makeRequest } from "../api";
export const RegScreen = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const regUser = () => {
    const data = {
      Name: name,
      LastName: lastName,
      NickName: nickName,
      Password: password,
    };
    console.log(JSON.stringify(data));
    makeRequest(
      "POST",
      "Users/create",
      { "Content-Type": "application/json" },
      data
    ).then((response) => {

      if (response.status == "409") {
        Alert.alert("Дурак", "Ты уже зареган здесь", [
          {
            text: "Прошу прощения",
          },
          {
            text: "Зря быканул",
          },
        ]);
      }
      else if (response.status == "400") {
          Alert.alert("ХЗ");
      }
      else if (response.status == "200") {
        
      }
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
      <Button
        title="Зарегистрироваться"
        disabled={disabledButton}
        onPress={regUser}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginBottom: 15,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: THEME.MAIN_COLOR,
    backgroundColor: "#FAF9F9",
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
