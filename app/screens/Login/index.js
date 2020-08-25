/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Container, Content, H3, Button } from 'native-base';
import { TextInput } from 'react-native-paper';
import styles from './styles';
import LottieView from 'lottie-react-native';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import AsyncStorage from '@react-native-community/async-storage';

export default function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const onLogin = () => {
    if (name === '') {
      setTimeout(() => {
        Alert.alert('Application Error', 'Please input your name to continue');
      }, 200);
    } else {
      dispatch(loginActions.requestLogin(name));
      try {
        AsyncStorage.setItem('@userToken', 'dummy-token');
      } catch (error) {
        console.error('AsyncStorage#setItem error: ' + error.message);
      }
    }
  };

  return (
    <Container>
      <View style={styles.form}>
        <H3 style={{ fontWeight: 'bold' }}>
          {' '}
          Join the fight against the COVID-19 Monster{' '}
        </H3>
      </View>
      <Content style={{ flex: 1 }}>
        <View style={styles.image}>
          <LottieView
            source={require('./14916-prueba-doctores-freepik.json')}
            autoPlay
            loop
            speed={2.2}
            height={350}
            width={350}
          />
        </View>
        {/* <Content> */}
        <TextInput
          label="username"
          value={name}
          // eslint-disable-next-line no-shadow
          onChangeText={name => setName(name)}
          style={{ margin: 16 }}
          mode={'outlined'}
        />
        <View style={{ bottom: 0, flex: 1, margin: 16 }}>
          <Button block success large onPress={onLogin}>
            <Text
              style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}>
              CONTINUE
            </Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}
