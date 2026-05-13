import React, {useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  Button,
  StatusBar,
  TextInput
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./styles";

export default function Arithmetic({ navigation }) {
  var score = 0;

  const [addAnswer, setAddAnswer] = useState("");
  const [subAnswer, setSubAnswer] = useState("");
  const [mulAnswer, setMulAnswer] = useState("");
  const [divAnswer, setDivAnswer] = useState("");


  const [addNum1, setAddNum] = useState("");
  const [addNum2, setAddNum2] = useState("");
  const [subNum1, setSubNum] = useState("");
  const [subNum2, setSubNum2] = useState("");
  const [mulNum1, setMulNum] = useState("");
  const [mulNum2, setMulNum2] = useState("");
  const [divNum1, setDivNum] = useState("");
  const [divNum2, setDivNum2] = useState("");
  
  //function used to check the inputted answers first four vars are the guessed answers the last four are the correct answers
function checkAnswers(
  addNum,
  subNum,
  mulNum,
  divNum,
) {
  if (addNum == addCorrect) {
    score++;
  }

  if (subNum == subCorrect) {
    score++;
  }

  if (mulNum == mulCorrect) {
    score++;
  }

  if (divNum == divCorrect) {
    score++;
  }

  console.log(score);

  navigation.navigate("Power", { score: score });
}

  useEffect(() => {
    setAddNum(Math.floor(Math.random() * 100) + 1);
    setAddNum2(Math.floor(Math.random() * 100) + 1);
    setSubNum(Math.floor(Math.random() * 100) + 1);
    setSubNum2(Math.floor(Math.random() * 100) + 1);
    setMulNum(Math.floor(Math.random() * 12) + 1);
    setMulNum2(Math.floor(Math.random() * 12) + 1);
    setDivNum(Math.floor(Math.random() * 12) + 1);
    setDivNum2(Math.floor(Math.random() * 4) + 1);
  }, [])


  let addCorrect = addNum1 + addNum2;
  let subCorrect = subNum1 - subNum2;
  let mulCorrect = mulNum1 * mulNum2;
  let divCorrect = (divNum1 / divNum2).toFixed(2);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../math-interior/smart.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>+ - * /</Text>
        <Text style={styles.text}>Answer the questions below:</Text>
        <Text>Round to two decimal places for division (even if not needed)</Text>

        <View style={styles.question}>
          <Text>
            {addNum1} + {addNum2} = 
          </Text>
          <TextInput
            value = {addAnswer}
            onChangeText={setAddAnswer}
            style={styles.input}
            keyboardType={"numeric"}
          />
        </View>

         <View style={styles.question}>
          <Text>
            {subNum1} - {subNum2} = 
          </Text>
          <TextInput
            value = {subAnswer}
            onChangeText={setSubAnswer}
            style={styles.input}
            keyboardType={"numeric"}
          />
        </View>

        <View style={styles.question}>
          <Text>
            {mulNum1} * {mulNum2} = 
          </Text>
          <TextInput
            value = {mulAnswer}
            onChangeText={setMulAnswer}
            style={styles.input}
            keyboardType={"numeric"}
          />
        </View>

        <View style={styles.question}>
          <Text>
            {divNum1} / {divNum2} = 
          </Text>
          <TextInput
            value = {divAnswer}
            onChangeText={setDivAnswer}
            style={styles.input}
            keyboardType={"numeric"}
          />
        </View> 

        <View style={styles.button}>
          <Button
            style={styles.button}
            title="Next Page"
            onPress={() => checkAnswers(addAnswer, subAnswer, mulAnswer, divAnswer)}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

