import React from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";

export default function MagentaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.content}>
          <Image source={require("../assets/kids.png")} style={styles.image} />
          <Text style={styles.h1}>Your registration is successful!</Text>
          <Text style={styles.p}>
            Come on, create an account for your little one and let him have fun
          </Text>
          <View style={styles.buttons}>
            <Button
              mode="contained"
              style={styles.btns}
              labelStyle={styles.btnText}
            >
              Create a child account
            </Button>
            <Button
              mode="contained"
              style={styles.btns}
              labelStyle={styles.btnText}
              onPress={() => navigation.navigate("Main")}
            >
              Continue
            </Button>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  h1: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "bold",
  },
  p: {
    fontSize: 20,
    color: "#fff",
    maxWidth: 330,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  buttons: {
    marginTop: 30,
  },
  btns: {
    backgroundColor: "#FFFFFF",

    paddingHorizontal: 45,
    marginBottom: 10,
    borderRadius: 100,
    borderRadius: 5,
    borderWidth: 2, // Add border
    borderColor: "#7A20A0", // Border color
  },
  btnText: {
    color: "#7A20A0",
    fontWeight: "bold", // Make text bold
  },
});
