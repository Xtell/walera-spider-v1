import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import {THEME} from "../theme"
export const AppButton = ({ type, onPress, disabled, children }) => (
  <TouchableHighlight style={{borderRadius: styles.button.borderRadius}} onPress={() =>(onPress()) } disabled={disabled}>
    <View style={[styles.button, (!disabled) ? styles[type] : styles.disabled]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({

  button: {
    padding: 10,
    borderRadius: 10,
  },
  positive: {
    backgroundColor: THEME.POSITIVE_COLOR,
  },
  default: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  disabled: {
    backgroundColor: THEME.GRAY_COLOR
  }
});
