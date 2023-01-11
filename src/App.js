// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Record from './pages/Record';
import FlashMessage from "react-native-flash-message";

// function LoginScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="SingUp"
          component={SignUp}
          options={{
            title: 'SignUp',
            headerStyle: {
              backgroundColor: '#64b5f6',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Login}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#64b5f6',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Records"
          component={Record}
          options={{
            title: 'Records',
            headerStyle: {
              backgroundColor: '#64b5f6',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
      <FlashMessage position="top"/>
    </NavigationContainer>
  );
}

export default Router;
