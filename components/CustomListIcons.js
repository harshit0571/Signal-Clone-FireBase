import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItem, Avatar } from '@rneui/base'

const CustomListIcons = () => {
    return (
        <View>
            <ListItem>
                <Avatar rounded source={{ uri: "https://img.icons8.com/ios-glyphs/344/user--v1.png" }} />
                <ListItem.Content>
                    <ListItem.Title style={{ fontWeight: "500" }}>Youtube Group</ListItem.Title>
                    <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">This is a room  to chat</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </View>
    )
}

export default CustomListIcons

const styles = StyleSheet.create({})