import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checked, setChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSignup = () => {
    // Perform form validation
    if (!name || !password || !phoneNumber) {
      alert("Please fill in all fields");
      return;
    }

    // Perform signup logic
    // Example: Send signup request to server
    // You can replace this with your own implementation
    fetch("https://api.example.com/signup", {
      method: "POST",
      body: JSON.stringify({ name, password, phoneNumber }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle signup success
        alert("Signup successful");
        // Reset form fields
        setName("");
        setPassword("");
        setPhoneNumber("");
        setChecked(false);
        navigation.navigate("MagentaScreen");
      })
      .catch((error) => {
        alert("Signup failed");
        console.error(error);
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.returnButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.returnButtonText}>Return</Text>
      </TouchableOpacity>
      <Text style={styles.boldText}>Signup</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />

        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter your phone number"
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={!passwordVisible}
          right={
            <TextInput.Icon
              rippleColor={"#7A1FA0"}
              name={passwordVisible ? "eye-off" : "eye"}
              color={"#7A1FA0"} // Change the color of the icon here
              onPress={togglePasswordVisibility}
            />
          }
        />

        <Button mode="contained" onPress={handleSignup}>
          Signup
        </Button>

        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginLink}>
            Already have an account?{" "}
            <Text style={styles.loginButton}>Login here</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  returnButton: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 1,
  },
  returnButtonText: {
    color: "#7A1FA0",
    fontSize: 16,
  },
  boldText: {
    color: "#7A1FA0",
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 3,
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
  formContainer: {
    marginVertical: 20,
  },
  loginLink: {
    textAlign: "center",
    marginTop: 16,
    color: "black",
  },
  loginButton: { color: "#7A1FA0" },
});

export default SignupScreen;
