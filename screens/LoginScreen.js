import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    // Perform form validation
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Perform login logic
    // Example: Send login request to server
    // You can replace this with your own implementation
    fetch("https://api.example.com/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle login success
        alert("Login successful");
        // Reset form fields
        setUsername("");
        setPassword("");
      })
      .catch((error) => {
        // Handle login error
        alert("Login failed");
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
      <Text style={styles.boldText}>Login</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
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

        <Button mode="contained" onPress={handleLogin}>
          Login
        </Button>

        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.loginLink}>
            Don't have an account?{" "}
            <Text style={styles.loginButton}>Signup here</Text>
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

export default LoginScreen;
