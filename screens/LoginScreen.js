import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


import React, { useEffect, useState } from 'react'
import { Button, Input, Image } from '@rneui/themed'
import { StatusBar } from 'expo-status-bar'
import { auth } from '../firebase'


import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'


const LoginScreen = ({ navigation }) => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    var x = "Email"

    onAuthStateChanged(auth, (user) => {
        if (user != null) {
            navigation.replace("HomeScreen", {
                user_: "user"
            })
        }
        else {
            console.log("no user")
        }
    })


    const signIn = () => {
        signInWithEmailAndPassword(auth, Email, Password).then((user) => { navigation.navigate("HomeScreen", user) }).catch(error => alert(error))

    };
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <Image source={{ uri: "https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png" }} style={{ width: 200, height: 200, }} />

            <View style={styles.inputContainer}>
                <Input placeholder={x} autoFocus type="Email" value={Email} onChangeText={(text) => setEmail(text)} />
                <Input placeholder='Password' secureTextEntry autoFocus type="Password" onChangeText={(text) => setPassword(text)} />
            </View>
            <TouchableOpacity style={styles.Btn} onPress={signIn}>
                <Text style={styles.BtnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate("register")}>
                <Text style={styles.BtnText}>Register</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    Btn: {
        width: "80%",
        backgroundColor: "#2C6BED",
        color: "white",
        paddingVertical: 20,
        alignSelf: "center",
        marginBottom: 5,
    },
    BtnText: {
        color: "white",
        textAlign: "center"
    },
    inputContainer: {
        width: 300,
        marginTop: 10
    },
    container: {
        display: "flex",
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    }
})