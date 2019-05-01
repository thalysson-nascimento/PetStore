import React, { Component } from 'react';
import { View, Text } from 'react-native';

import firebase from 'firebase';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> {firebase.auth().currentUser.email} </Text>
      </View>
    );
  }
}

export default ProfileScreen;
