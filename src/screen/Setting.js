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
    <View className="flex-1 bg-whiteC">
      <View className="flex-row my-4 mx-5 items-center">
        <TouchableOpacity
          className="mr-[4%]"
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={{resizeMode: 'contain'}}
            className="w-[30px] h-[30px]"
            source={allImages.BackArrowButton}
          />
        </TouchableOpacity>
        <Text className="text-blackC2 text-lg font-semibold">Settings</Text>
      </View>
      <View className="mx-5">
        <Text className="text-primary font-semibold my-2">App Settings</Text>
        <View className="my-3 flex-row justify-between items-center">
          <Text className="text-blackC">Activate</Text>
          <ToggleSwitch
            isOn={status1}
            onColor="#726DA8"
            offColor="#DFDFF0"
            size="small"
            onToggle={() => SetStatus1(!status1)}
          />
        </View>
        <View className="my-3 flex-row justify-between items-center">
          <Text className="text-blackC">Show Result Notification</Text>
          <ToggleSwitch
            isOn={status1}
            onColor="#726DA8"
            offColor="#DFDFF0"
            size="small"
            onToggle={() => SetStatus1(!isOn2)}
          />
        </View>
        <View className="my-3 flex-row justify-between items-center">
          <Text className="text-blackC">Save Result</Text>
          <ToggleSwitch
            isOn={status2}
            onColor="#726DA8"
            offColor="#DFDFF0"
            size="small"
            onToggle={() => SetStatus2(!status2)}
          />
        </View>
        <View className="my-3 flex-row justify-between items-center">
          <Text className="text-blackC">Use Foreground Services</Text>
          <ToggleSwitch
            isOn={status2}
            onColor="#726DA8"
            offColor="#DFDFF0"
            size="small"
            onToggle={() => SetStatus1(!SetStatus2)}
          />
        </View>
      </View>
      <Text className="border-b-[1px] border-gray-300"></Text>
      <View className="mx-5 mt-4">
        <Text className="text-primary font-semibold my-2">
          Sending Settings
        </Text>
        <View className="my-3 flex-row justify-between items-center">
          <Text className="text-blackC">Send While Roaming</Text>
          <ToggleSwitch
            isOn={status1}
            onColor="#726DA8"
            offColor="#DFDFF0"
            size="small"
            onToggle={() => SetStatus1(!status1)}
          />
        </View>
        <View className="my-3 flex-row justify-between items-center">
          <Text className="text-blackC">Working Time</Text>
          <ToggleSwitch
            isOn={status2}
            onColor="#726DA8"
            offColor="#DFDFF0"
            size="small"
            onToggle={() => SetStatus2(!status2)}
          />
        </View>
        <View className="my-3 flex-row justify-between items-center">
          <Text className="text-blackC">Email Setting</Text>
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
