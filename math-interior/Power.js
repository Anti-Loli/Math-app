import React, {useState, useEffect } from "react";import {
  ImageBackground,
  View,
  Text,
  Button,
  StatusBar,
  TextInput,
} from "react-native";
import styles from "./styles";

export default function Power({ navigation, route }) {
    var score = route.params.score;
    const [pow1Answer, setPow1Answer] = useState("");
    const [pow2Answer, setPow2Answer] = useState("");
    const [sqr1Answer, setSqr1Answer] = useState("");
    const [sqr2Answer, setSqr2Answer] = useState("");
  
  
    const [powNum1, setPowNum] = useState("");
    const [powNum2, setPowNum2] = useState("");
    const [powNum3, setPowNum3] = useState("");
    const [powNum4, setPowNum4] = useState("");
    const [sqrNum1, setSqrNum] = useState("");
    const [sqrNum2, setSqrNum2] = useState("");
    
    //function used to check the inputted answers first four vars are the guessed answers the last four are the correct answers
  function checkAnswers(
    powNum1,
    powNum2,
    sqrNum1,
    sqrNum2,
  ) {
    if (powNum1 == pow1Correct) {
      score++;
    }
  
    if (powNum2 == pow2Correct) {
      score++;
    }
  
    if (sqrNum1 == sqr1Correct) {
      score++;
    }
  
    if (sqrNum2 == sqr2Correct) {
      score++;
    }
  
    navigation.navigate("Results", { score: score });
  }
  
    useEffect(() => {
      setPowNum(Math.floor(Math.random() * 10) + 1);
      setPowNum2(Math.floor(Math.random() * 4) + 1);
      setPowNum3(Math.floor(Math.random() * 10) + 1);
      setPowNum4(Math.floor(Math.random() * 4) + 1);
      setSqrNum(Math.floor(Math.random() * 100) + 1);
      setSqrNum2(Math.floor(Math.random() * 100) + 1);
    }, [])
  
    let pow1Correct = Math.pow(powNum1, powNum2);
    let pow2Correct = Math.pow(powNum3, powNum4);
    let sqr1Correct = Math.sqrt(sqrNum1).toFixed(2);
    let sqr2Correct = Math.sqrt(sqrNum2).toFixed(2);

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../math-interior/smart.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <StatusBar barStyle="dark-content" />
          <Text style={styles.text}>Exponents and square roots</Text>
          <Text style={styles.text}>Answer the questions below:</Text>
          <Text>Round to two decimal places for square roots (even if not needed)</Text>
  
          <View style={styles.question}>
            <Text>
              {powNum1} to the power of {powNum2} = 
            </Text>
            <TextInput
              value = {pow1Answer}
              onChangeText={setPow1Answer}
              style={styles.input}
              keyboardType={"numeric"}
            />
          </View>
  
           <View style={styles.question}>
            <Text>
            {powNum3} to the power of {powNum4} =
            </Text>
            <TextInput
              value = {pow2Answer}
              onChangeText={setPow2Answer}
              style={styles.input}
              keyboardType={"numeric"}
            />
          </View>
  
          <View style={styles.question}>
            <Text>
              The square root of {sqrNum1} =
            </Text>
            <TextInput
              value = {sqr1Answer}
              onChangeText={setSqr1Answer}
              style={styles.input}
              keyboardType={"numeric"}
            />
          </View>
  
          <View style={styles.question}>
            <Text>
            The square root of {sqrNum2} =
            </Text>
            <TextInput
              value = {sqr2Answer}
              onChangeText={setSqr2Answer}
              style={styles.input}
              keyboardType={"numeric"}
            />
          </View> 
  
          <View style={styles.button}>
            <Button
              style={styles.button}
              title="Next Page"
              onPress={() => checkAnswers(pow1Answer, pow2Answer, sqr1Answer, sqr2Answer)}
            />
          </View>
        </ImageBackground>
      </View>
  );
}

