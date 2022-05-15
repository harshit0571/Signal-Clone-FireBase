import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItem, Avatar } from '@rneui/base'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native'


const CustomListIcons = ({ item }) => {
    const navigation = useNavigation()
    const enterChat = () => {
        navigation.navigate('Chats');

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

export default CustomListIcons

const styles = StyleSheet.create({})