import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {allImages} from '../utils/images';
import {useNavigation} from '@react-navigation/native';
import SwiperInputFormNotification from '../common/SwiperInputFormNotification';

const AddNotificationFilter = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 16,
          marginHorizontal: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{marginRight: '4%'}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              style={{resizeMode: 'contain', width: 28, height: 28}}
              source={allImages.BackArrowButton}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#1E1E1E',
              marginVertical: 8,
              fontSize: 18,
              fontWeight: 600,
            }}>
            Add Notification Filter
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text
              style={{
                color: '#726DA8',
                marginVertical: 8,
                fontSize: 18,
                fontWeight: 700,
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <SwiperInputFormNotification />
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

export default AddNotificationFilter;
