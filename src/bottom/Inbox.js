import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { allImages } from '../utils/images';
import { useNavigation } from '@react-navigation/native';

const Inbox = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-whiteC">
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <View
          className="mx-5 my-5 flex-row items-center"
          style={{resizeMode: 'contain'}}>
          <Image
            className="w-[34px] h-[34px] mr-5"
            source={allImages.MenuIcon}
          />
          <Text className="text-blackC2 text-lg font-semibold">Inbox</Text>
        </View>
      </TouchableOpacity>
      <View className="flex-1 justify-center items-center">
        <Text className="text-blackC2 font-medium">No Results</Text>
      </View>
    </View>
  );
};

export default Inbox;
