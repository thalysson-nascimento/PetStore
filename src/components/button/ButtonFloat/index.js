import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styled from './style';

export default props =>

        <TouchableOpacity
            style={[styled.buttonFloat]}
            onPress={
                props.onPress
            }
        >
            {/* <Text style={{color: 'white', fontSize: 30}}>+</Text> */}
            <Image
                style={{width: 27, height: 27}}
                source={require('../../../../assets/plus.png')}
            />
        </TouchableOpacity>