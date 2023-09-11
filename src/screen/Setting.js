import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {allImages} from '../utils/images';
import ToggleSwitch from 'toggle-switch-react-native';
import {useNavigation} from '@react-navigation/native';

const Setting = () => {
  const navigation = useNavigation();
  const [status1, SetStatus1] = useState(true);
  const [status2, SetStatus2] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 16,
          marginVertical: 20,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{marginRight: '4%'}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={{resizeMode: 'contain', width: 30, height: 30}}
            source={allImages.BackArrowButton}
          />
        </TouchableOpacity>
        <Text style={{color: '#1E1E1E', fontSize: 18, fontWeight: 600}}>
          Settings
        </Text>
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text style={{color: '#726DA8', fontWeight: 600, marginVertical: 8}}>
          App Settings
        </Text>
        <View
          style={{
            marginVertical: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#000'}}>Activate</Text>
          <ToggleSwitch
            isOn={status1}
            onColor="#726DA8"
            offColor="#DFDFF0"
            size="small"
            onToggle={() => SetStatus1(!status1)}
          />
        </View>
        <View
          style={{
            marginVertical: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#000'}}>Show Result Notification</Text>
          <ToggleSwitch
            isOn={status1}
            onColor="#726DA8"
            offColor="#DFDFF0"
            size="small"
            onToggle={() => SetStatus1(!isOn2)}
          />
        </View>
        <View
          style={{
            marginVertical: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#000'}}>Save Result</Text>
          <ToggleSwitch
            isOn={status2}
            onColor="#726DA8"
            offColor="#DFDFF0"
            size="small"
            onToggle={() => SetStatus2(!status2)}
          />
        </View>
        <View
          style={{
            marginVertical: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#000'}}>Use Foreground Services</Text>
          <ToggleSwitch
            isOn={status2}
            onColor="#726DA8"
            offColor="#DFDFF0"
            size="small"
            onToggle={() => SetStatus1(!SetStatus2)}
          />
        </View>
      </View>
      <Text style={{borderBottomWidth: 1, borderColor: '#E0E0E0'}}></Text>
      <View style={{marginHorizontal: 20, marginTop: 16}}>
        <Text style={{color: '#726DA8', fontWeight: 600, marginVertical: 8}}>
          Sending Settings
        </Text>
        <View
          style={{
            marginVertical: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#000'}}>Send While Roaming</Text>
          <ToggleSwitch
            isOn={status1}
            onColor="#726DA8"
            offColor="#DFDFF0"
            size="small"
            onToggle={() => SetStatus1(!status1)}
          />
        </View>
        <View
          style={{
            marginVertical: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#000'}}>Working Time</Text>
          <ToggleSwitch
            isOn={status2}
            onColor="#726DA8"
            offColor="#DFDFF0"
            size="small"
            onToggle={() => SetStatus2(!status2)}
          />
        </View>
        <View
          style={{
            marginVertical: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#000'}}>Email Setting</Text>
          <ToggleSwitch
            isOn={status1}
            onColor="#726DA8"
            offColor="#DFDFF0"
            size="small"
            onToggle={() => SetStatus1(!status1)}
          />
        </View>
      </View>
    </View>
  );
};

export default Setting;
