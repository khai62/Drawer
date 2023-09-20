import { View, Text, StyleSheet } from 'react-native'
import React from 'react'



const array = [
    1,
    2,
    3
]





const Array = () => {
    return (
        <View style={styles.page}>
            <Text>{array}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    array: {
        flexDirection: 'column',

    }
})

export default Array