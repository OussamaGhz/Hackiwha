import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import { Button } from "react-native-paper";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SignupScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [checked, setChecked] = useState(false);

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
      })
      .catch((error) => {
        // Handle signup error
        alert("Signup failed");
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
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
          keyboardType="numeric" // Add this line to make the input only accept numbers
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
        />

        <View style={styles.checkboxContainer}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => setChecked(!checked)}
          />
          <Text style={styles.checkboxLabel}>
            Agree to terms and conditions
          </Text>
        </View>

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

// Styles...




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
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
    padding: 8,
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
