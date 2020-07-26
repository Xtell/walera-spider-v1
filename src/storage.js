import * as SecureStore from 'expo-secure-store';

export const getTokenFromStorage = () => {
    let token = SecureStore.getItemAsync('token').then((token) => {return token});
    return token;
}
export const setTokenToStorage = (token) => (
    SecureStore.setItemAsync('token', token)
)