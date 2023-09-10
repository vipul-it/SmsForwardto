import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import {allImages} from '../utils/images';
import {useNavigation} from '@react-navigation/native';

const Filter = () => {
  const navigation = useNavigation();
  const CustomModal = ({visible, onClose}) => {
    return (
      <Modal
        animationType="slide" // You can customize animation type
        transparent={true}
        visible={visible}
        onRequestClose={onClose}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          {/* Content of the modal */}
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 5,
              width: 220,
            }}>
            <TouchableOpacity
              className="justify-end flex-row"
              onPress={onClose}
              style={{marginTop: 0}}>
              <Image
                className="h-6 w-6 mb-2"
                source={allImages.MenuCloseIcon}
              />
            </TouchableOpacity>
            <Text className="text-blackC text-xl font-bold mb-2">
              Add Filter
            </Text>
            <TouchableOpacity
              className=""
              onPress={()=>{
                navigation.navigate('AddSMSFilter');
              }}
              style={{marginTop: 10}}>
              <Text className="text-blackC text-lg my-1">SMS Forward</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className=""
              onPress={()=>{
                navigation.navigate('AddNotificationFilter');
              }}
              style={{marginTop: 10}}>
              <Text className="text-blackC text-lg my-1">Notification Forword</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
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
          <Text className="text-blackC2 text-lg font-semibold">Filter</Text>
        </View>
      </TouchableOpacity>
      <View className="flex-1 justify-center items-center">
        <Text className="text-blackC2 font-medium">
          Touch the '+' button to add a filter
        </Text>
      </View>
      <View className="flex-row justify-end mb-24 mr-10">
        <TouchableOpacity onPress={openModal}>
          <Image
            className="w-[95px] h-[44px]"
            style={{resizeMode: 'contain'}}
            source={allImages.FilterPlusButton}
          />
        </TouchableOpacity>
        <CustomModal visible={modalVisible} onClose={closeModal} />
      </View>
    </View>
  );
};

export default Filter;
