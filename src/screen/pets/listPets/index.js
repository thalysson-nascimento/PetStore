import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import * as UserService from '../../../service/UserService';
import ButtonFloat from '../../../components/button/ButtonFloat'

class ListPetsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    logout(){
        UserService.logout();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text> List Pets </Text>

                {/* <TouchableOpacity
                    onPress={
                        () => this.logout()
                    }
                >
                    <Text>Sair</Text>
                </TouchableOpacity> */}

                <ButtonFloat
                    onPress={
                        () => this.props.navigation.navigate('AddPets')
                    }
                />
            </View>
        );
    }
}

export default ListPetsScreen;
