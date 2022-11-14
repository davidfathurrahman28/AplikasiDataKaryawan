import *as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Navigasi/Home';
import Detail from './Navigasi/Detail';
const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}
                    options={{
                        title:'Data Karyawan',
                        headerStyle:{backgroundColor:'blue'},
                        headerTintColor: 'black'
                    }} />
                    <Stack.Screen name='Detail' component={Detail}
                    options={{
                        title:'Detail Karyawan',
                        headerStyle:{backgroundColor:'blue'},
                        headerTintColor: 'black'
                    }}/>               
            </Stack.Navigator>
        </NavigationContainer>
    );
} 

export default App;