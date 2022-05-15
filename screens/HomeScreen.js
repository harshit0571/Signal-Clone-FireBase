import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { auth, database } from '../firebase'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { Text } from '@rneui/themed'
import { Avatar, ListItem } from '@rneui/base';
import LoginScreen from './LoginScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddChatPen from '../components/AddChatPen'
import { collection, getDoc, getDocs, onSnapshot } from 'firebase/firestore'
import { async } from '@firebase/util'
import { FlatList } from 'react-native'
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const [Chats, setChats] = React.useState([])
    const auth = getAuth();
    const user = auth.currentUser;
    const camera_Icon = <Icon name="camera" size={25} color="black" />;
    const pen_Icon = <Icon name="pencil" size={25} color="black" />;
    const navigation = useNavigation()


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

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            const unsubscribe = async () => {
                const chatData = await getDocs(collection(database, "chats"))
                console.log("one")
                chatData.forEach((doc) => {
                    setChats(
                        arr => [...arr, {
                            id: doc.id,
                            data: doc.data()
                        }]
                    )
                })
                console.log("worked")
            }
            unsubscribe();
        }
        else {
            setChats([])
        }
    }, [isFocused])




    const CustomListIcons = ({ item }) => {

        const enterChat = () => {
            navigation.navigate('Chats', {
                id: item.id,
                chatName: item.data.chatName
            });

        }
        return (
            <View>
                <ListItem bottomDivider onPress={enterChat}>
                    <Avatar rounded source={{ uri: "https://img.icons8.com/ios-glyphs/344/user--v1.png" }} />
                    <ListItem.Content>
                        <ListItem.Title style={{ fontWeight: "500" }}>{item.data.chatName}</ListItem.Title>
                        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">This is a room  to chat</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>

                <FlatList
                    data={Chats}
                    renderItem={CustomListIcons}
                    keyExtractor={item => item.id}
                    extraData={Chats}
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        height: "100%"
    }
})