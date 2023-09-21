// npm install react-native-reanimated 
import React from "react";
import { View, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Array, Objek, For, Testing } from "../screen";


const Drawer = createDrawerNavigator()

const Navigation: React.FC = () => {
    return (
        <View style={styles.page}>
            <Drawer.Navigator
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: 'pink',
                        width: 250,
                    },
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: "bold"
                    },
                    drawerLabelStyle: {
                        color: 'black',
                        fontWeight: 'bold'
                    }
                }}

            >
                <Drawer.Screen
                    name="Array"
                    component={Array}
                    options={{
                        drawerLabel: 'Array',
                        title: 'Array',
                        drawerIcon: () => (
                            <MaterialCommunityIcons name="home" size={20} color={'black'} />
                        )
                    }}
                />

                <Drawer.Screen
                    name="Objek"
                    component={Objek}
                    options={{
                        drawerLabel: 'Objek',
                        title: 'Objek',
                        drawerIcon: () => (
                            <MaterialCommunityIcons name="cloud" size={20} color={'black'} />
                        )
                    }}
                />
                <Drawer.Screen
                    name="For"
                    component={For}
                    options={{
                        drawerLabel: 'For',
                        title: 'For',
                        drawerIcon: () => (
                            <MaterialCommunityIcons name="cloud" size={20} color={'black'} />
                        )
                    }}
                />
                <Drawer.Screen
                    name="Testing"
                    component={Testing}
                    options={{
                        drawerLabel: 'Testing',
                        title: 'Testing',
                        drawerIcon: () => (
                            <MaterialCommunityIcons name="cloud" size={20} color={'black'} />
                        )
                    }}
                />
            </Drawer.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
})

export default Navigation;