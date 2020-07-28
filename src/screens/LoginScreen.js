import React, { useState } from 'react'
import {View, StyleSheet, Alert} from 'react-native'
import {AppButton} from '../components/appButton'
import {AppTextInput} from '../components/appTextInput'
import * as spiderApi from '../api/index'

export const LoginScreen = ({saveToken}) => {
    console.log(saveToken);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    let disabled = (login.trim() && password.trim())? false : true;
    const authHandler = () => {
        spiderApi.getUserToken(login, password).then((response) => {
            if (response.ok) {
                return response.json();
            }
            else if(response.status == 400) {
                Alert.alert("ТЫ МНЕ ЛЖЕШЬ!", "Извинись пожалуйста", [
                    {
                        text: "Простите пожайлуста, зря быканул"
                    }
                ])
            }
            else {
                Alert.alert("ПРОБЛЕМА", "Я НЕ ЗНАЮ В ЧЕМ ПРОБЛЕМА");
            }

        }).then((response) => {
            saveToken(response.token);
        })
    }
    return (
        <View style={styles.container}>
            <AppTextInput placeholder="Кличка" placeholderTextColor="#000" autoFocus={true}
            onChange={setLogin}/>
            <AppTextInput placeholder="Пароль" placeholderTextColor="#000" onChange={setPassword} />
            <AppButton type="positive" onPress={authHandler} disabled={disabled}>
                Войти
            </AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "flex-end",
        marginBottom: 20,
    }
})