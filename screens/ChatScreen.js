import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Image } from '@rneui/themed'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { async } from '@firebase/util';
import { database } from '../firebase';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

const ChatScreen = ({ navigation }) => {

    const Chat_Icon = <Icon name="wechat" size={25} color="black" />;
    const [Value, setValue] = useState("")

    const createChat = async () => {
        await addDoc(collection(database, "chats"), {
            chatName: Value
        }).then(() => { navigation.goBack() }).catch((e) => console.log(e))
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a New Chat",
            headerBackTitle: "chats"
        })
    }, []);

    return (
        <View style={styles.container}>
            <Input placeholder='add chat' leftIcon={Chat_Icon} type="text" value={Value} onChangeText={(text) => setValue(text)} />
            <TouchableOpacity style={styles.btn} onPress={createChat}>
                <Text style={styles.btnText}>Add Chat</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        alignItems: "center"
    },
    btn: {
        paddingVertical: 20,
        backgroundColor: "#2089DC",
        paddingHorizontal: 40,
        width: "80%",
    },
    btnText: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
    }
})