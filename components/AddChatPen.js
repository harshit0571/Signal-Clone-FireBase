import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import { TouchableOpacity } from 'react-native-web';

const AddChatPen = () => {
    const pen_Icon = <Icon name="pencil" size={25} color="black" />;
    return (
        <View>
            <TouchableOpacity style={styles.pen}>
                {pen_Icon}
            </TouchableOpacity>
        </View>
    )
}

export default AddChatPen

const styles = StyleSheet.create({
    pen: {
        position: "absolute",
        top: 10,
        right: 5,

    }
})