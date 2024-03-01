import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';

export default function MagentaScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/bg.png')} resizeMode="cover" style={styles.background}>
        <View style={styles.content}>
          <Image source={require('./img/kids.png')} style={styles.image} />
          <Text style={styles.h1}>Registrasi kamu berhasil!</Text>
          <Text style={styles.p}>Ayo buat akun untuk buah hati dan mulai belajar di KidsLand</Text>
          <View style={styles.buttons}>
            <Button mode="contained" style={styles.btns} labelStyle={styles.btnText}>
              Login
            </Button>
            <Button mode="contained" style={styles.btns} labelStyle={styles.btnText}>
              Signup
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
    paddingVertical: 15,
    paddingHorizontal: 45,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 2, // Add border
    borderColor: "#7A20A0", // Border color
  },
  btnText: {
    color: "#7A20A0",
    fontWeight: "bold", // Make text bold
  },
});
