import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

const stack = createNativeStackNavigator();
const GlobalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED", alignItems: "center" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
  headerTitleAlign: "center"
};


export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="login" screenOptions={GlobalScreenOptions}>
        <stack.Screen name="login" component={LoginScreen} />
        <stack.Screen name="register" component={RegisterScreen} />
        <stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      </stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
