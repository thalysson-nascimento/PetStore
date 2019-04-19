import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> Tela de Login </Text>

                <TouchableOpacity
                    onPress={
                        () => this.props.navigation.navigate('RegisterUser')
                    }
                >
                    <Text>Registrar usuário</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default LoginScreen;
