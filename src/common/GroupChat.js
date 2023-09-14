import React, {Component} from 'react';
import {View, Text, TextInput, Button, FlatList, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

class GroupChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messages: [],
    };

    // Reference to the Firestore collection for messages
    this.messagesCollection = firestore().collection('GroupChats');
  }

  componentDidMount() {
    // Attach a listener to fetch and display messages
    this.unsubscribe = this.messagesCollection.onSnapshot(querySnapshot => {
      const messages = [];
      querySnapshot.forEach(doc => {
        messages.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      this.setState({messages});
    });
  }

  componentWillUnmount() {
    // Unsubscribe from Firestore listener when the component unmounts
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  sendMessage() {
    const {message} = this.state;
    if (message) {
      // Add a new message to Firestore
      this.messagesCollection.add({
        text: message,
        timestamp: firestore.FieldValue.serverTimestamp(),
      });
      this.setState({message: ''});
    }
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.messages}
          renderItem={({item}) => (
            <>
             
              <Text>{item.text}</Text>
              {/* <Text>{item.timestamp}</Text> */}
            </>
          )}
          keyExtractor={item => item.id}
        />
        <TextInput
          placeholder="Type your message..."
          value={this.state.message}
          onChangeText={text => this.setState({message: text})}
        />
        <Button title="Send" onPress={() => this.sendMessage()} />
      </View>
    );
  }
}

export default GroupChat;
