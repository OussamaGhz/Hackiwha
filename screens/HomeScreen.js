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
          <Text style={styles.boldText}>
            Accusamus est porro rem odio sed doloremque voluptate mollitia.
          </Text>
          <Text style={styles.descriptionText}>
            Ipsam quibusdam deserunt illo voluptatem. Non et ipsam ducimus et.
            Adipisci et mollitia nesciunt autem repudiandae est et. Sit iusto
            aut vel laboriosam dolores fugit sed et eum. Pariatur praesentium
            omnis. Sint ut autem cumque.
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
    width: "80%",
  },
});

export default HomeScreen;
