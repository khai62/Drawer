import { View, Text, StyleSheet } from 'react-native'
import React from 'react'



const array = [
    'aku',
    'kamu',
    'dia',
]

array.push('mereka')

const Sort = [2, 1, 6, 3, 4, 5]




const cetak = Sort.map((coba, i) => {
    return (
        <Text key={i}>{coba * 2}</Text>
    )
})




const Array = () => {

    const buat = []


    for (let i = 0; i < array.length; i++) {
        buat.push(
            <Text>{(i + 1) + ' : ' + array[i]}</Text>
        )
    }


    return (
        <View style={styles.page}>
            <Text style={styles.array}>{array.join('_')}</Text>
            <Text style={styles.array}>{Sort.sort((a, b) => a - b)}</Text>
            <View style={styles.array}>{cetak}</View>
            <Text style={styles.array}>{Sort.filter((x) => x > 3)}</Text>
            <Text style={styles.array}>{Sort.find((x) => x > 3)}</Text>
            <View style={styles.array}>{buat}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    array: {
        padding: 20,
    }
})

export default Array