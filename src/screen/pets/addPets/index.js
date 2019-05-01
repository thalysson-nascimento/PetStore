import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import styled from './style';
import ButtonFull from '../../../components/button/ButtonFull'

class AddPetsScreeen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> Add Pets </Text>

                <TextInput
                    placeholder='Nome de estimação do seu pet'
                />
                <TextInput
                    placeholder='Raça'
                />
                <TextInput
                    placeholder='Idade do pet'
                />

                <ButtonFull
                    buttonText='PUBLICAR PET'
                />

            </View>
        );
    }
}

export default AddPetsScreeen;
