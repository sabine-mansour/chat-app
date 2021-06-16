import React from 'react';
import { View, Platform, KeyboardAvoidingView, Text } from 'react-native'

//Gifted Chat library
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

//Firebase collection
const firebase = require('firebase');
require('firebase/firestore');


export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    const firebaseConfig = {
      apiKey: "AIzaSyAFtUXDT-rVbMXw0lASbyBGlwkAexTqMXI",
      authDomain: "chat-app-6a20b.firebaseapp.com",
      projectId: "chat-app-6a20b",
      storageBucket: "chat-app-6a20b.appspot.com",
      messagingSenderId: "457065219789",
      appId: "1:457065219789:web:6be5513dedcb311fab0b84"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    };
    this.referenceChatMessages = firebase.firestore().collection("messages");
    this.state = {
      messages: [],
      uid: 0,
      backColor: this.props.route.params.backColor
    };
  }

  componentDidMount() {
    let { name } = this.props.route.params;
    this.props.navigation.setOptions({ title: name });
    this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
      this.setState({
        uid: user.uid,
        messages: [],
      });
      this.unsubscribe = this.referenceChatMessages
        .orderBy("createdAt", "desc")
        .onSnapshot(this.onCollectionUpdate);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  addMessage() {
    const message = this.state.messages[0];
    this.referenceChatMessages.add({
      _id: message._id,
      createdAt: message.createdAt,
      text: message.text,
      user: message.user,
    });
  }

  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: data.user,
      });
    });
    this.setState({
      messages,
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }),
      () => {
        this.addMessage();
      }
    );
  }

  renderBubble(props) {
    let backColor = this.state.backColor;
    if (backColor === '#090C08' || backColor === '#474056') {
      return (
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              backgroundColor: '#bcb8b1'
            }
          }}
          textProps={{
            style: { color: 'black' }
          }}
          timeTextStyle={{ right: { color: 'black' } }}
        />
      )
    } else {
      return (
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              backgroundColor: 'black'
            }
          }}
        />
      )
    }
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: this.state.backColor }}>
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
      </View>
    )
  }
}