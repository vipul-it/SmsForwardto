import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import SmsRetriever from 'react-native-sms-retriever';

const SmsListener = () => {
  useEffect(() => {
    const startSmsRetriever = async () => {
      try {
        const result = await SmsRetriever.startSmsRetriever();
        if (result === 'TIMEOUT') {
          console.error('SMS Retrieval Timeout');
        } else {
          console.log('Received SMS: ', result);
          // Process the retrieved SMS message
        }
      } catch (error) {
        console.error('Error starting SMS retriever: ', error);
      }
    };

    startSmsRetriever();

    return () => {
      SmsRetriever.removeSmsListener();
    };
  }, []);

  return (
    <View>
      <Text>My SMS App</Text>
    </View>
  );
};

export default SmsListener;
