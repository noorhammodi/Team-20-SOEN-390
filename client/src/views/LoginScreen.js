import React, { useState } from 'react';
import {
  ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput,
} from 'react-native';
import { useNavigate } from 'react-router-dom'; //  useLocation??
import loginService from '../services/login';

const imageBackground = require('../public/images/login-background.png');

function LoginScreen() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (event) => {
    // for <form>s
    event.preventDefault();
    try {
      const payload = {
        email,
        password,
      };

      // Get response from axios
      const response = await loginService.login(payload);
      if (response.status === 200) {
        setIsError(false);
        navigate('/dashboard', { state: { name: response.data.firstName, role: response.data.role } });
      }
    } catch (exception) {
      setIsError(true);
      setMessage('Error: Wrong Credentials');
    }
  };

  const onChange = () => {
    navigate('/');
  };

  const getMessage = () => message;

  const styles = StyleSheet.create({
    image: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      paddingBottom: '10%',
    },
    card: {
      flex: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      width: '80%',
      marginTop: '10%',
      borderRadius: 20,
      paddingBottom: '10%',
    },
    heading: {
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: '10%',
      marginTop: '5%',
      color: 'black',
    },
    form: {
      flex: 1,
      justifyContent: 'space-between',
      paddingBottom: '5%',
    },
    inputs: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '10%',
    },
    input: {
      width: '80%',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      paddingLeft: '1%',
      fontSize: 16,
      minHeight: 40,
      borderRadius: 5,
    },
    button: {
      width: '80%',
      backgroundColor: 'black',
      height: 40,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '400',
    },
    buttonAlt: {
      width: '80%',
      borderWidth: 1,
      height: 40,
      borderRadius: 50,
      borderColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5,
    },
    buttonAltText: {
      color: 'black',
      fontSize: 16,
      fontWeight: '400',
    },
    message: {
      fontSize: 16,
    },
  });

  return (
    <ImageBackground source={imageBackground} style={styles.image}>
      <View style={styles.card}>
        <Text style={styles.heading}>Login</Text>
        <View style={styles.form}>
          <View style={styles.inputs}>
            <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={setEmail} />
            <TextInput secureTextEntry style={styles.input} placeholder="Password" onChangeText={setPassword} />
            <Text style={[styles.message, { color: isError ? 'red' : 'green' }]}>{message ? getMessage() : null}</Text>
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonAlt} onPress={onChange}>
              <Text style={styles.buttonAltText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default LoginScreen;
