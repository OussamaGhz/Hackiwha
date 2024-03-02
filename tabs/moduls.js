import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Moduls = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>Hello there, User</Text>
          <Text style={styles.descreptionText}>Come learn and have fun</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/communication-assets/image1.png")}
          />
          <Image
            style={styles.image}
            source={require("../assets/communication-assets/image2.png")}
          />
          <Image
            style={styles.image}
            source={require("../assets/communication-assets/image3.png")}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 60,
  },
  textContainer: {
    marginBottom: 20,
  },
  imageContainer: {
    width: "100%",
    height: "80%",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  boldText: {
    color: "#7A1FA0",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 40,
  },
  descreptionText: {
    textAlign: "left",
    fontSize: 20,
    marginTop: 10,
  },
  buttonContainer: {
    gap: 10,
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "space-around",
    width: "90%",
  },
});

export default Moduls;
