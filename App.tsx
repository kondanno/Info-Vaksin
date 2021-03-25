import React from 'react';
import HomeScreen from './components/HomeScreen'
import PertanyaanVaksin from './components/PertanyaanVaksin'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  StyleSheet,
} from 'react-native';

const Stack = createStackNavigator();
 const App = () => {
   
   return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name = "Home" component = {HomeScreen} options={{headerShown: false}}/>
       <Stack.Screen name = "Pertanyaan" component = {PertanyaanVaksin} />
     </Stack.Navigator>
   </NavigationContainer>
   );
 };

 const styles = StyleSheet.create({

 });

 export default App;
