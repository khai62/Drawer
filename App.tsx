import React, { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./components/Navigation";


const Stack = createNativeStackNavigator();

const App: React.FC = () => {

  useEffect(() => {
    async function mulaiApp() {
      await SplashScreen.preventAutoHideAsync();
    }
    mulaiApp();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Navigation">
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
};

export default App;