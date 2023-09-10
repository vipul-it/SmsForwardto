import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {allImages} from '../utils/images';
import {useNavigation} from '@react-navigation/native';
import SwiperInputForm from '../common/SwiperInputForm';

const AddSMSFilter = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-whiteC">
      <View className="flex-row mt-4  mx-5 justify-between items-center">
        <View className="flex-row items-center">
        <TouchableOpacity
          className="mr-[4%]"
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={{resizeMode: 'contain'}}
            className="w-[28px] h-[28px]"
            source={allImages.BackArrowButton}
          />
        </TouchableOpacity>
        <Text className="text-blackC2 my-2 text-lg font-semibold">
          Add SMS Filter
        </Text>
        </View>
        <View className="">
          <TouchableOpacity >
        <Text className="text-primary my-2 text-lg font-bold">
          Save
        </Text>
        </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.container}>
        <SwiperInputForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddSMSFilter;
