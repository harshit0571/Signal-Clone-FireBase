import { StyleSheet, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Icon } from "@rneui/themed";
import { auth } from '../firebase'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { Text } from '@rneui/themed'

const HomeScreen = () => {

    const auth = getAuth();
    const name_ = auth.currentUser.displayName
    const img = auth.currentUser.photoURL

    return (
        <View>
            <View style={styles.TopBar}>

                <Image source={{ uri: img }} style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                <Text h4>Signal</Text>
                <View style={styles.icon_container}>
                    <Image source={{ uri: "https://img.icons8.com/material-outlined/344/camera--v2.png" }} style={{ width: "40px", height: "40px", marginRight: "10px" }} />
                    <Image source={{ uri: "https://img.icons8.com/material-sharp/344/search.png" }} style={{ width: "40px", height: "40px" }} />
                </View>

            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    TopBar: {
        display: 'flex',
        flexDirection: "row",
        height: "50px",
        marginTop: 10,
        justifyContent: "space-between"
    },
    TopText: {
        fontSize: "20px",
        padding: 10
    },
    icon_container: {
        display: "flex",
        flexDirection: "row"
    }
})