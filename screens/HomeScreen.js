import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { Text } from '@rneui/themed'
import CustomListIcons from '../components/CustomListIcons';
import { Avatar } from '@rneui/base';
import LoginScreen from './LoginScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddChatPen from '../components/AddChatPen'

const HomeScreen = ({ navigation }) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const camera_Icon = <Icon name="camera" size={25} color="black" />;
    const pen_Icon = <Icon name="pencil" size={25} color="black" />;
    var img;
    if (user) {
        img = user.photoURL
    }

    const SignOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("login")
        })
    }
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => <View style={{ marginLeft: 5 }}>
                <TouchableOpacity onPress={SignOutUser}>
                    <Avatar source={{ uri: img }} rounded />
                </TouchableOpacity>
            </View>,
            headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('chatScreen')}>{pen_Icon}</TouchableOpacity>
        });
    }, [navigation]);



    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListIcons />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})