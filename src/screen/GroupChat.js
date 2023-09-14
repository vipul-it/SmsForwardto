import React, { useState, useEffect } from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GroupChat = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Retrieve data from AsyncStorage when the component mounts
    const getData = async () => {
      try {
        const storedName = await AsyncStorage.getItem('NAME');
        const storedEmail = await AsyncStorage.getItem('EMAIL');
        const storedUserId = await AsyncStorage.getItem('USERID');

        if (storedName !== null && storedEmail !== null && storedUserId !== null) {
          setName(storedName);
          setEmail(storedEmail);
          setUserId(storedUserId);
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage: ', error);
      }
    };

    getData();
  }, []);

  const [messages, setMessages] = useState([]);
  const user = {
    _id: userId, // Replace with the user's unique ID
    name: name,   // Replace with the user's name
  };

  const messagesCollection = firestore().collection('messages');
  let unsubscribe;

  useEffect(() => {
    // Attach a listener to fetch and display messages
    unsubscribe = messagesCollection
      .orderBy('messageTime', 'desc') // Use your desired field name here
      .onSnapshot(querySnapshot => {
        const messageList = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          if (data && data.messageTime && data.user) { // Check if data is valid
            const { text, user, messageTime } = data;
            if (messageTime.seconds) { // Check if seconds exists
              messageList.push({
                _id: doc.id,
                text,
                createdAt: new Date(messageTime.seconds * 1000), // Convert Firestore Timestamp to Date
                user: {
                  _id: user._id,
                  name: user.name,
                },
              });
            }
          }
        });
        setMessages(messageList);
      });

    return () => {
      // Unsubscribe from Firestore listener when the component unmounts
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const onSend = (newMessages = []) => {
    const message = newMessages[0];
    messagesCollection.add({
      text: message.text,
      user,
      messageTime: firestore.FieldValue.serverTimestamp(), // Use your desired field name here
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={user}
      />
      {/* {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />} */}
    </View>
  );
};

export default GroupChat;
