import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000'; // TODO figure out what port

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const onChange = () => {
        setIsLogin(!isLogin);
        setMessage('');
    }

    const onLogin = token => {
        fetch(`${API_URL}/homepage`, {  //TODO
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }).then(async response => {
            try {
                const jsonResponse = await response.json();
                if (response.status === 200) {
                    setMessage(jsonResponse.message);
                }
            } catch (e) {
                console.log(e);
            };
        }).catch(e => {
            console.log(e);
        });
    }

    const onSubmit = () => {
        const payload = {
            email,
            name,
            password,
        };
        fetch(`${API_URL}/${isLogin ? 'login' : 'signup'}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        }).then(async response => {
            try {
                const jsonResponse = await response.json();
                if (response.status !== 200) {
                    setIsError(true);
                    setMessage(jsonResponse.message);
                } else {
                    onLogin(jsonResponse.token);
                    setIsError(false);
                    setMessage(jsonResponse.message);
                }
            } catch (e) {
                console.log(e);
            };
        }).catch(e => {
            console.log(e);
        });
    };

    const getMessage = () => {
        const status = isError ? `Error: ` : `Succuess: `;
        return status + message;
    }

    return (
        <ImageBackground source={require('../public/images/login-background.png')} style={styles.image}>
            <View style={styles.card}>
                <Text style={styles.heading}>{isLogin ? 'Login' : 'Signup'}</Text>
                <View style={styles.form}>
                    <View style={styles.inputs}>
                        <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={setEmail}></TextInput>
                        {!isLogin && <TextInput style={styles.input} placeholder="Name" onChangeText={setName}></TextInput>}
                        <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" onChangeText={setPassword}></TextInput>
                        <Text style={[styles.message, {color: isError ? 'red' : 'green'}]}>{message ? getMessage() : null}</Text>
                        <TouchableOpacity style={styles.button} onPress={onSubmit}>
                            <Text style={styles.buttonText}>Done</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAlt} onPress={onChange}>
                            <Text style={styles.buttonAltText}>{isLogin ? 'Sign Up' : 'Log In'}</Text>
                        </TouchableOpacity>
                    </View>    
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = require('../public/styles/LoginScreen.css');

export default LoginScreen;