import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

// HomeScreen.js

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}></View>
        <Image source={require("../assets/image.png")} style={styles.image} />
      </View>
      <Text style={styles.boldText}>Bold Text</Text>
      <Text style={styles.descriptionText}>Description Text</Text>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />

        <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  imageContainer: {
    width: "90%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "90%",
    height: "100%",
    resizeMode: "contain",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 16,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "space-around",
    width: "80%",
  },
});

export default HomeScreen;
