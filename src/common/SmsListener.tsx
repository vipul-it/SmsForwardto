import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import {
  getHash, requestHint,
  startOtpListener,
  useOtpVerify,
} from 'react-native-otp-verify';

export default function SmsListener() {
  const [hashFromMethod, setHashFromMethod] = React.useState<string[]>();
  const [otpFromMethod, setOtpFromMethod] = React.useState<string>();
  const [hint, setHint] = React.useState<string>();

  // using hook - you can use the startListener and stopListener to manually trigger listeners again.
  const { hash, otp, timeoutError, stopListener, startListener } = useOtpVerify();

  // using methods
  React.useEffect(() => {
    getHash().then(setHashFromMethod).catch(console.log);
    requestHint().then(setHint).catch(console.log);
    startOtpListener(setOtpFromMethod);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.resultView}>
        <Text style={styles.resultHeader}>Using Methods</Text>
        <Text>Your Hash is: {hashFromMethod}</Text>
        <Text>Your message is: {otpFromMethod}</Text>
        <Text>Selected Mobile Number is: {hint}</Text>
      </View>
      <View style={styles.resultView}>
        <Text style={styles.resultHeader}>Using Hook</Text>
        <Text>Your Hash is: {hash}</Text>
        <Text>Your otp is: {otp}</Text>
        <Text>Timeout Error: {String(timeoutError)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultView: {
    margin: 10,
  },
  resultHeader: {
    fontSize: 18,
    marginBottom: 5,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});