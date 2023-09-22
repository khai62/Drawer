import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Logic = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    const handleAddTask = () => {
        if (newTask) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    return (
        <View style={styles.page}>
            <View style={styles.subpage1}>
                <TextInput

                    placeholder="Nama"
                    value={newTask}
                    onChangeText={(text) => setNewTask(text)}
                    style={styles.input}
                />
                <TouchableOpacity
                    style={styles.tombol}
                    onPress={handleAddTask}
                ><Text style={styles.teks}>ADD</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.tek}>Kontak</Text>
            <ScrollView>
                <View>
                    {tasks.map((task, index) => (
                        <View key={index} style={styles.viewmap}>
                            <View style={styles.profile}></View>
                            <Text style={styles.teksmap} >{task}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 20,

    },
    subpage1: {
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: 'grey',
        borderRadius: 20,
        marginBottom: 30,

    },
    tombol: {
        backgroundColor: 'black',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 20,
    },
    teks: {
        color: 'white',
        alignSelf: 'center'

    },
    tek: {
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 23,
    },
    viewmap: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
    },
    profile: {
        width: 50,
        height: 50,
        backgroundColor: 'grey',
        borderRadius: 25,

    },
    teksmap: {
        alignSelf: 'center',
        flex: 1,
        fontWeight: 'bold',
        fontSize: 20,
    }

})

export default Logic;


