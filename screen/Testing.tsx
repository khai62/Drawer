import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const App = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    const handleAddTask = () => {
        if (newTask) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    return (
        <View>
            <TextInput
                placeholder="What needs to be done?"
                value={newTask}
                onChangeText={(text) => setNewTask(text)}
                style={{ width: 300 }}
            />
            <Button title="Add" onPress={handleAddTask} />
            {tasks.map((task, index) => (
                <Text key={index}>{task}</Text>
            ))}
        </View>
    );
};

export default App;


// besok kau pahami baginmana logikanya ? 
