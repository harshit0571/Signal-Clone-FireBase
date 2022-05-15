import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Chats = ({ navigation, route }) => {
    return (
        <View>
            <Text>{route.params.chatName}</Text>
        </View>
    )
}

export default Chats

const styles = StyleSheet.create({})