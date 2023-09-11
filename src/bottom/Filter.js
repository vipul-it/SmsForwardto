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
              onPress={onClose}
              style={{
                marginTop: 0,
                justifyContent: 'flex-end',
                flexDirection: 'row',
              }}>
              <Image
                style={{height: 24, width: 24, marginBottom: 8}}
                source={allImages.MenuCloseIcon}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: '#000',
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 8,
              }}>
              Add Filter
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AddSMSFilter');
              }}
              style={{marginTop: 10}}>
              <Text style={{color: '#000', fontSize: 18, marginVertical: 4}}>
                SMS Forward
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AddNotificationFilter');
              }}
              style={{marginTop: 10}}>
              <Text style={{color: '#000', fontSize: 18, marginVertical: 4}}>
                Notification Forword
              </Text>
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
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 20,
            flexDirection: 'row',
            alignItems: 'center',
            resizeMode: 'contain',
          }}>
          <Image
            style={{width: 34, height: 34, marginRight: 5}}
            source={allImages.MenuIcon}
          />
          <Text style={{color: '#000', fontSize: 18, fontWeight: 600}}>
            Filter
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          top: 80,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#000', fontWeight: 500}}>
          Touch the '+' button to add a filter
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginRight: 40,
          position: 'relative',
          top: 150,
        }}>
        <TouchableOpacity onPress={openModal}>
          <Image
            style={{resizeMode: 'contain', width: 95, height: 44}}
            source={allImages.FilterPlusButton}
          />
        </TouchableOpacity>
        <CustomModal visible={modalVisible} onClose={closeModal} />
      </View>
    </View>
  );
};

export default Filter;
