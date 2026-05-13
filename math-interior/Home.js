import React from "react";
import { ImageBackground, View, Text, Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../math-interior/background.png")}
        resizeMode="cover"
        style={styles.startImage}
      >
        <StatusBar barStyle="dark-content" />
        <Text style={styles.titleText}>
          Baldi's Basic's in Learning and Education: Math Edition
        </Text>
        <View style={styles.button}>
          <Button
            style={styles.button}
            title="Start Learning"
            onPress={() => navigation.navigate("Arithmetic")}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

