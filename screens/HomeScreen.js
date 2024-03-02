import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

// HomeScreen.js

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/image.png")} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.boldText}>Oh hi! Welcome to SYPLIFY</Text>
          <Text style={styles.descriptionText}>
            oh hi! welcome to SYPLIFY SIMPLIFY is an AAC app. It's a type of
            mobile application designed to help individuals who have difficulty
            speaking or communicating effectively use alternative methods to
            express themselves and interact with others. These apps typically
            utilize various features to facilitate communication/
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={() => navigation.navigate("Login")}>
            Login
          </Button>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
            <View>
              <Text style={{ width: 50, textAlign: "center" }}>or</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          </View>
          <Button mode="outlined" onPress={() => navigation.navigate("Signup")}>
            Signup
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  imageContainer: {
    width: "90%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "90%",
    height: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    marginVertical: 30,
  },
  boldText: {
    color: "#7A1FA0",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
  },
  descriptionText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    gap: 10,
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "space-around",
    width: "90%",
  },
});

export default HomeScreen;
