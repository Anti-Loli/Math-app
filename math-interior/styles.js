import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  startImage: {
    height: 750,
    width: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  image:{
    height: 900,
    width: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    marginTop: 200,
    width: 200,
    height: 100,
  },
  text: {
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  question: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
