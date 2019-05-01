import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import * as UserService from '../../service/UserService';
import styles from './style';

class RegisterUserScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    signUpUser() {
        UserService.createUser(this.state.email, this.state.password);
    }

    render() {
        return (
            <View style={styles.container}>

                <View
                    style={{ alignItems: 'flex-end' }}
                >
                    <TouchableOpacity
                        onPress={
                            () => this.props.navigation.goBack()
                        }
                    >
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text>Faça seu cadastro</Text>
                </View>

                <View>
                    <TextInput
                        placeholder="Digite seu email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TextInput
                        placeholder="Digite seu password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <TextInput
                        placeholder="Confirmar senha"
                    />
                    <TouchableOpacity
                        onPress={
                            () => this.signUpUser()
                        }
                    >
                        <Text>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default RegisterUserScreen;
