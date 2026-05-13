import React from "react";
import { ImageBackground, View, Text, Button, StatusBar } from "react-native";
import styles from "./styles";

export default function Results({ navigation, route}) {
  
    var score = route.params.score;
    return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../math-interior/background.png")}
        resizeMode="cover"
        style={styles.startImage}
      >
        <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Your score is...</Text>
      <Text style={styles.titleText}>{score} /8</Text>

      <View style={styles.button}>
          <Button
            style={styles.button}
            title="Try Again"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </ImageBackground>

    </View>
  );
}

