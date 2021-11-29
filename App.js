import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from "./src/screens/home";
import UserHistoryScreen from "./src/screens/user-history";
import AddNewTransactionScreen from "./src/screens/add-new-transaction";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="AddNewTransactionScreen" component={AddNewTransactionScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="UserHistory" component={UserHistoryScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;