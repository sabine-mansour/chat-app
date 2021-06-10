import React from 'react';
import { View, Text } from 'react-native';


export default class Chat extends React.Component {
  render() {
    let { name, backColor } = this.props.route.params;
    this.props.navigation.setOptions({ title: name });

    let textColor = 'black';
    if (backColor === '#090C08' || backColor === '#474056') {
      textColor = 'white'
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: backColor }}>
        <Text style={{ color: textColor }}>
          Welcome to the chat!
          </Text>
      </View>
    )
  }
}