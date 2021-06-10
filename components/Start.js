import React from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      backColor: '#FFF'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imgBackground}
          source={require('../assets/Background-Image.png')}
        >
          <View style={styles.main}>
            <Text style={styles.title}>Let's Chat</Text>
          </View>
          <View style={styles.chatOptions}>
            <TextInput
              style={styles.nameInput}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
              placeholder='Your name'
            />
            <View style={styles.box}>
              <Text
                style={styles.backgroundColorText}>
                Choose Background Color:
              </Text>
              <View style={styles.backColor}>
                <TouchableOpacity
                  style={styles.backColor1}
                  onPress={() => this.setState({ backColor: '#090C08' })}
                />
                <TouchableOpacity
                  style={styles.backColor2}
                  onPress={() => this.setState({ backColor: '#474056' })}
                />
                <TouchableOpacity
                  style={styles.backColor3}
                  onPress={() => this.setState({ backColor: '#8A95A5' })}
                />
                <TouchableOpacity
                  style={styles.backColor4}
                  onPress={() => this.setState({ backColor: '#B9C6AE' })}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name, backColor: this.state.backColor })}
            >
              <Text style={styles.startText}>Start Chatting</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
  title: {
    fontSize: 45,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    top: 30,
    height: 50,
  },
  main: {
    flex: 0.50,
  },
  chatOptions: {
    flex: 0.40,
    backgroundColor: 'white',
    width: '88%',
    paddingLeft: '5%',
    paddingRight: '5%',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  nameInput: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderColor: '#757083',
    borderRadius: 2,
    fontSize: 16,
    fontWeight: "300",
    color: '#757083',
    paddingLeft: '3%',
  },
  backgroundColorText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#757083',
    marginBottom: 10,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    backgroundColor: '#757083',
    height: 60,
  },
  startText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 60,
  },
  box: {
    flexDirection: 'column'
  },
  backColor: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  backColor1: {
    backgroundColor: '#090C08',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  backColor2: {
    backgroundColor: '#474056',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  backColor3: {
    backgroundColor: '#8A95A5',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  backColor4: {
    backgroundColor: '#B9C6AE',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
})