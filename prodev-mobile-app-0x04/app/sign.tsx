import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { 
  Text, TextInput, View, TouchableOpacity, Image 
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles";

// Create Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// SignIn Component
function SignIn({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
        {/* Header */}
        <View style={styles.navGroup}>
          <Ionicons name="arrow-back" size={25} onPress={() => navigation.goBack()} />
          <Image source={require('@/assets/images/logo.png')} />
        </View>

        {/* Title */}
        <Text style={styles.largeText}>Sign in to your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your email and password to sign in.
        </Text>

        {/* Form Inputs */}
        <View style={styles.formGroup}>
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
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        {/* Divider */}
        <Divider />

        {/* Social Media Sign-in */}
        <View style={styles.socialMediaButtonGroup}>
          <SocialMediaButton source={require("@/assets/images/google.png")} text="Continue with Google" />
          <SocialMediaButton source={require("@/assets/images/facebook.png")} text="Continue with Facebook" />
        </View>

        {/* Join Now Option */}
        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Join")}>
            <Text style={styles.subTextJoin}>Join now</Text>
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
