import React from "react";
import { View, StyleSheet, ScrollView, Text, Image } from "react-native";

const Moduls = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.boldText}>Hello there body</Text>

        <View style={styles.imageContainer}>
          <View style={styles.row}>
            <Image
              // fellings image
              source={require("../assets/home-images/feelings.png")}
              style={styles.image}
            />
            <Image
              source={require("../assets/home-images/food.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.row}>
            <Image
              source={require("../assets/home-images/toys.png")}
              style={styles.image}
            />
            <Image
              source={require("../assets/home-images/numbers.png")}
              F
              style={styles.image}
            />
          </View>
          <View style={styles.row}>
            <Image
              source={require("../assets/home-images/wishes.png")}
              style={styles.image}
            />
            <Image
              source={require("../assets/home-images/school.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.row}>
            <Image
              source={require("../assets/home-images/wishes.png")}
              style={styles.image}
            />
            <Image
              source={require("../assets/home-images/school.png")}
              F
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 20,
    marginTop: 60,
    overflow: "hidden",
  },
  textContainer: {
    marginBottom: 20,
  },
  imageContainer: {
    width: "100%",
    height: "80%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 100,
    gap: 120,
  },
  image: {
    width: "45%",
    height: "100%",
    resizeMode: "contain",
  },
  boldText: {
    color: "#7A1FA0",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 40,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",

    width: "100%",
    height: "100%",
  },
});

export default Moduls;
