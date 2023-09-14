import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const GroupChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const messagesCollection = firestore().collection('GroupChats');
  let unsubscribe;

  useEffect(() => {
    // Attach a listener to fetch and display messages
    unsubscribe = messagesCollection.onSnapshot((querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setMessages(messages);
    });

    return () => {
      // Unsubscribe from Firestore listener when the component unmounts
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const sendMessage = () => {
    if (message) {
      // Add a new message to Firestore
      messagesCollection
        .add({
          text: message,
          timestamp: firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          setMessage('');
        })
        .catch((error) => {
          console.error('Error sending message: ', error);
        });
    }
  };

  return (
    <View>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <>
            <Text>{item.text}</Text>
            {/* <Text>{item.timestamp}</Text> */}
          </>
        )}
        keyExtractor={(item) => item.id}
      />
      <TextInput
        placeholder="Type your message..."
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export default GroupChat;
