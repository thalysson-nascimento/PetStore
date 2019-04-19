import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from './style';

export default props =>

    <View>
        <TouchableOpacity
            // style={[styled.conyainerButton]}
            // onPress={
            //     props.onPress
            // }
        >
            <Text style={[styled.textButtonClean]}>{props.text}</Text>
        </TouchableOpacity>
    </View>