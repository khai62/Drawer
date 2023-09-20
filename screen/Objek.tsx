import { View, Text } from 'react-native'
import React from 'react'

const Objek = () => {


    let s = '';
    for (let i = 10; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            s += '*';
        }
        s += '\n';
    }


    return (
        <View>
            <Text>{s}</Text>
        </View>
    )
}

export default Objek