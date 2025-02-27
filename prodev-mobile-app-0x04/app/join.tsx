 import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/index";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Join({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.navGroup}>
          <Ionicons name="arrow-back" size={25} onPress={() => navigation.goBack()} />
            <Image source={require('@assets/images/logo.png')} />
        </View>

        {/* Title */}
        <Text style={styles.largeText}>Create an</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your details to create an account.
        </Text>

        {/* Form Inputs */}
        <View style={styles.formGroup}>
          <InputField label="Full Name" />
          <InputField label="Email" keyboardType="email-address" />
          <InputField 
            label="Password"
            secureTextEntry={!passwordVisible}
            rightIcon={
              <FontAwesome 
                name={passwordVisible ? "eye" : "eye-slash"} 
                size={24} 
                color="#7E7B7B"
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            }
          />
          <InputField 
            label="Confirm Password"
            secureTextEntry={!confirmPasswordVisible}
            rightIcon={
              <FontAwesome 
                name={confirmPasswordVisible ? "eye" : "eye-slash"} 
                size={24} 
                color="#7E7B7B"
                onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              />
            }
          />
        </View>

        {/* Join Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join now</Text>
        </TouchableOpacity>

        {/* Divider */}
        <Divider />

        {/* Social Media Sign-up */}
        <View style={styles.socialMediaButtonGroup}>
          <SocialMediaButton source={require("@/assets/images/google.png")} text="Continue with Google" />
          <SocialMediaButton source={require("@/assets/images/facebook.png")} text="Continue with Facebook" />
        </View>

        {/* Sign In Option */}
        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.subTextJoin}>Sign in</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// Reusable Input Field Component
const InputField = ({ label, secureTextEntry = false, keyboardType, rightIcon }) => (
  <View style={{ marginTop: 20 }}>
    <Text style={styles.placeholderText}>{label}</Text>
    <View style={styles.passwordGroup}>
      <TextInput style={{ flex: 1 }} secureTextEntry={secureTextEntry} keyboardType={keyboardType} />
      {rightIcon}
    </View>
  </View>
);

// Reusable Social Media Button Component
const SocialMediaButton = ({ source, text }) => (
  <TouchableOpacity style={styles.socialMediaButton}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
      <Image source={source} />
      <Text style={styles.socialMediaButtonText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

// Reusable Divider Component
const Divider = () => (
  <View style={styles.dividerGroup}>
    <View style={styles.divider}></View>
    <Text style={styles.dividerText}>OR</Text>
    <View style={styles.divider}></View>
  </View>
);
