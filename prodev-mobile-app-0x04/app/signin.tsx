import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import { styles } from '@/styles/_joinstyle'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

export default function Join() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.iconsection}>
          <Link href="/">
            <Ionicons name="arrow-back" size={25} />
          </Link>
          <Image source={require('@/assets/images/logo-green.png')} />
        </View>
        <Text style={styles.titleText}>Create Your</Text>
        <Text style={styles.titleText}>Account</Text>
        <Text style={styles.subText}>
          Enter your email and password to sign in.
        </Text>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.formControl}
            />
          </View>
          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput style={styles.passwordControl} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput style={styles.passwordControl} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity>
            <View style={styles.secondaryButton}>
              <Image source={require('@/assets/images/google.png')} />
              <Text style={styles.secondaryButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.secondaryButton}>
              <Image source={require('@/assets/images/facebook.png')} />
              <Text style={styles.secondaryButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.signupgroup}>
          <Text style={styles.subText}>Don't have an account?</Text>
          <Text style={styles.signupSubTitleText}>Join now</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}