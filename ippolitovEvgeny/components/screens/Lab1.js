import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";

const Lab1 = ({ navigation }) => {
  const [bgColor, setBgColor] = useState("");

  const colorButton = (color, text) => {
    const textColor = color === "white" ? "black" : "white";
    return (
      <TouchableOpacity
        style={[styles.colorChangeButton, { backgroundColor: color }]}
        onPress={() => setBgColor(color)}
      >
        <Text style={{ color: textColor }}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.buttonContainer}>
        {colorButton("white", "white")}
        {colorButton("#FF1717", "red")}
        {colorButton("#1E78FF", "blue")}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  colorChangeButton: {
    padding: 10,
    margin: 9,
    borderRadius: 5,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Lab1;
