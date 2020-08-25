// import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Alert } from 'react-native';
import React, { useEffect } from 'react';
import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import * as loginActions from 'app/actions/loginActions';
import Splash from 'app/screens/Splash';
import { useSelector, useDispatch } from 'react-redux';
import { AsyncStorage } from 'react-native';
import ignoreWarnings from 'react-native-ignore-warnings';

// import {
//   // configureFonts,
//   // DefaultTheme,
//   Provider as PaperProvider,
// } from 'react-native-paper';

ignoreWarnings('Setting a timer');

function AuthIsLoaded({ children }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loadingReducer.isLoginLoading);
  useEffect(() => {
    let token;
    dispatch(loginActions.enableLoader());
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('@userToken');
      } catch (e) {
        console.log(e);
        setTimeout(() => {
          Alert.alert('BoilerPlate', e.toString());
        }, 5000);
      }
      setTimeout(() => {
        dispatch(loginActions.onLoginResponse(userToken));
        dispatch(loginActions.disableLoader());
      }, 1500);
    };
    bootstrapAsync();
  }, [dispatch]);

  if (isLoading === true) {
    return <Splash />;
  }
  return children;
}

const Stack = createNativeStackNavigator();

export default function RNApp() {
  // get the token in asyncstorage once usertoken is not null load auth screens and home screens otherwise
  const userToken = useSelector(state => state.loginReducer.id);

  return (
    <AuthIsLoaded>
      <Stack.Navigator>
        {userToken == null ? (
          <Stack.Screen
            name="New Player"
            component={Login}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </AuthIsLoaded>
  );
}
