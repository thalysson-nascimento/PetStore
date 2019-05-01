import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import firebase from 'firebase';

import * as UserService from '../../service/UserService';
import styles from './style';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailLogin: '',
            passwordLogin: '',
        };
    }

    componentWillMount(){
        this.authState(this.props.navigation);
    }

    authState(navigation){
        firebase.auth().onAuthStateChanged(function(user){
            console.log('onAuthstateChange: ', user)
            if (user != null) {
                navigation.push('MainNavigation');
            // console.log("tela da tabnavigation")
            }
        })
    }

    userLogin() {
        UserService.userLogin(this.state.emailLogin, this.state.passwordLogin);
    }

    render() {
        return (
            <View style={styles.container}>

                <View>
                    <Text>Logo</Text>
                    <Text>PetsStore</Text>
                </View>

                <View>
                    <TextInput
                        placeholder="Digite seu email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.emailLogin}
                        onChangeText={emailLogin => this.setState({ emailLogin })}
                    />
                    <TextInput
                        placeholder="Digite seu password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        value={this.state.passwordLogin}
                        onChangeText={passwordLogin => this.setState({ passwordLogin })}
                    />
                    <TouchableOpacity
                        onPress={
                            () => this.userLogin()
                        }
                    >
                        <Text>ENTRAR</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity
                        onPress={
                            () => this.props.navigation.navigate('RegisterUser')
                        }
                    >
                        <Text>Ainda não é cadastrado? Toque aqui.</Text>
                    </TouchableOpacity>
                </View>

                {/* <Text> Tela de Login </Text>

                <TouchableOpacity
                    onPress={
                        () => this.userLogin()
                    }
                >
                    <Text>ENTRAR</Text>
                </TouchableOpacity>

                <View style={{marginTop: 20}}>
                    <TouchableOpacity
                        onPress={
                            () => this.createUser()
                        }
                    >
                        <Text>Registrar Usuário</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        );
    }
}

export default LoginScreen;
