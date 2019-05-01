import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import styled from './style';

export default props =>

        <TouchableOpacity
            style={[styled.buttonFull]}
            onPress={
                props.onPress
            }
        >
            <Text style={{color: 'white'}}>{props.buttonText}</Text>
        </TouchableOpacity>