import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, Input, Image, Text } from '@rneui/themed'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const RegisterScreen = ({ navigation }) => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [imgUrl, setimgUrl] = useState("")

    const auth = getAuth();

    const register = () => {
        createUserWithEmailAndPassword(auth, email, password, name, imgUrl)
            .then((userCredential) => {
                const user = userCredential.user
                updateProfile(user, {
                    displayName: name,
                    photoURL: imgUrl || "https://www.pngitem.com/pimgs/m/514-5149286_profile-logo-hd-png-download.png"
                })

            }).catch((error) => console.log(error))
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "login",
        })
    }, [navigation])
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>
                Create a New Account
            </Text>
            <View style={styles.inputContainer}>
                <Input placeholder='Full Name' autoFocus type="text" value={name} onChangeText={(text) => setname(text)} />
                <Input placeholder='Email' type="Email" value={email} onChangeText={(text) => setemail(text)} />
                <Input placeholder='Password' type="Password" secureTextEntry value={password} onChangeText={(text) => setpassword(text)} />
                <Input placeholder='Profile Picture URL (optional)' type="text" value={imgUrl} onChangeText={(text) => setimgUrl(text)} onSubmitEditing={register} />

            </View>
            <TouchableOpacity style={styles.Btn} onPress={register}>
                <Text style={styles.BtnText}>Register</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    inputContainer: {
        width: 300
    },
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
})