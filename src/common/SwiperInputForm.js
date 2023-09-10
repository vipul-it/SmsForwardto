import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {allImages} from '../utils/images';
import CustomCheckbox from './CustomCheckbox';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const SwiperInputForm = () => {
  const navigation = useNavigation();

  const [inputValues, setInputValues] = useState(''); // Initialize with empty values

  const handleSubmit = () => {
    // Handle form submission using inputValues array
    console.log(inputValues);
  };

  // Handle for 2nd form submission
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(true);

  const handleCheckboxChange = newState => {
    setIsChecked(newState);
  };
  const handleCheckboxChange2 = newState => {
    setIsChecked2(newState);
  };

  // Handle for 3rd form submission
  const [isChecked3, setIsChecked3] = useState(true);

  const handleCheckboxChange3 = newState => {
    setIsChecked3(newState);
  };

  // Handle for 4th form submission
  const [inputValues4, setInputValues4] = useState('Filter 1');
  const [isChecked4, setIsChecked4] = useState(true);

  const handleCheckboxChange4 = newState => {
    setIsChecked3(newState);
  };

  return (
    <View>
      <Swiper
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        loop={false} // Set other props as needed
      >
        <View className="mx-5">
          <View className="flex-row items-center">
            <Text className="text-blackC2 text-xl font-bold">
              Set up recipients
            </Text>
            <Image
              style={{resizeMode: 'contain'}}
              className="w-[20px] h-[20px] ml-2"
              source={allImages.HelpCircle}
            />
          </View>
          <Text className="text-blackC2 my-1">
            Add the Number, Email or Emp ID which will receive the messages.
          </Text>
          <Text className="text-blackC2 mt-5">Email or Phone Number</Text>
          <View className=" my-2 border-[1px] border-primary rounded-lg flex-row items-center px-3">
            <TextInput
              className="w-full text-blackC"
              value={inputValues}
              onChangeText={setInputValues}
            />
          </View>
        </View>

        {/* Handle for 2nd form submission */}
        <View className="mx-5">
          <View className="flex-row items-center">
            <Text className="text-blackC2 text-xl font-bold">
              Forwarding conditions
            </Text>
            <Image
              style={{resizeMode: 'contain'}}
              className="w-[20px] h-[20px] ml-2"
              source={allImages.HelpCircle}
            />
          </View>
          <View className="flex-row items-center my-1 mt-2">
            <CustomCheckbox
              label="Allow sending Bank, Insurance OTP, PIN and Password."
              isChecked={isChecked}
              onChange={handleCheckboxChange}
            />
          </View>
          <View className="flex-row items-center my-1">
            <CustomCheckbox
              label="Forwording all Messages"
              isChecked={isChecked2}
              onChange={handleCheckboxChange2}
            />
          </View>
        </View>
        {/* Handle for 3rd form submission */}
        <View className="mx-5">
          <View className="">
            <Text className="text-blackC2 text-xl font-bold">
              Change the Content
            </Text>
            <Text className="text-blackC2 my-1">
              Change the content of the message, add the phone number of the
              initial sender of the message, a specific word etc, to the message
              you wish to forward.
            </Text>
          </View>

          <View className=" my-2 border-[1px] border-primary rounded px-3">
            <View className="flex-row justify-between items-center">
              <Text>{'       '}</Text>
              <Text className="text-blackC2 mt-5 text-lg font-semibold">
                Message Template
              </Text>
              <Image
                style={{resizeMode: 'contain', tintColor: '#726DA8'}}
                className="w-[20px] h-[20px] ml-2"
                source={allImages.EditIcon}
              />
            </View>
            <Text className=" border-b-[1px] border-primary "></Text>
            <Text className="text-blackC2 mt-5 font-bold">From: </Text>
            <Text className="text-primary  font-bold">
              "{'Incoming Number'}"
            </Text>
            <Text className="text-primary  font-bold">"{'Message Body'}"</Text>
            <Text>{''}</Text>
          </View>

          <View className=" my-2 border-[1px] border-primary rounded px-3">
            <View className="flex-row justify-between items-center ">
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image
                  style={{resizeMode: 'contain', tintColor: '#726DA8'}}
                  className="w-[20px] h-[20px] ml-2"
                  source={allImages.HelpCircle}
                />
              </TouchableOpacity>
              <Text className="text-blackC2 mt-5 text-lg font-semibold">
                Replace words
              </Text>
              <Text>{'         '}</Text>
            </View>
            <Text className=" border-b-[1px] border-primary mb-5"></Text>
            <CustomCheckbox
              label="Use regular expression"
              isChecked={isChecked3}
              onChange={handleCheckboxChange3}
            />
            <View className="mb-4 w-full flex-row items-center justify-between px-1">
              <View className="w-[40%] border-b-[1px] border-primary">
                <TextInput
                  className=" text-blackC"
                  value={inputValues}
                  onChangeText={setInputValues}
                  placeholder="Old Word"
                />
              </View>
              <View>
                <Image
                  style={{resizeMode: 'contain', tintColor: '#726DA8'}}
                  className="w-[20px] h-[20px] mx-1"
                  source={allImages.RightArrow}
                />
              </View>
              <View className="w-[40%] border-b-[1px] border-primary">
                <TextInput
                  className=" text-blackC"
                  value={inputValues}
                  onChangeText={setInputValues}
                  placeholder="New Word"
                />
              </View>
            </View>
            <View className="mb-4 w-full flex-row items-center justify-between px-1">
              <View className="w-[40%] border-b-[1px] border-primary">
                <TextInput
                  className=" text-blackC"
                  value={inputValues}
                  onChangeText={setInputValues}
                  placeholder="Old Word"
                />
              </View>
              <View>
                <Image
                  style={{resizeMode: 'contain', tintColor: '#726DA8'}}
                  className="w-[20px] h-[20px] mx-1"
                  source={allImages.RightArrow}
                />
              </View>
              <View className="w-[40%] border-b-[1px] border-primary">
                <TextInput
                  className=" text-blackC"
                  value={inputValues}
                  onChangeText={setInputValues}
                  placeholder="New Word"
                />
              </View>
            </View>
          </View>
        </View>
        <View className="mx-5">
          <View className="">
            <Text className="text-blackC2 text-xl font-bold">
              More settings
            </Text>
            <Text className="text-blackC2 my-1 font-semibold">Filter Name</Text>
          </View>

          <View className="w-full border-[1px] border-primary rounded px-3">
            <TextInput
              className=" text-blackC"
              value={inputValues4}
              onChangeText={setInputValues4}
            />
          </View>
          <View className="">
          

         

          <View className=" my-2 mt-5 border-[1px] border-primary rounded px-3">
            <View className="flex-row justify-between items-center ">
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image
                  style={{resizeMode: 'contain', tintColor: '#726DA8'}}
                  className="w-[20px] h-[20px] ml-2"
                  source={allImages.HelpCircle}
                />
              </TouchableOpacity>
              <Text className="text-blackC2 mt-5 text-lg font-semibold">
                Options
              </Text>
              <Text>{'         '}</Text>
            </View>
            <Text className=" border-b-[1px] border-primary mb-5"></Text>
            <CustomCheckbox
              label="Show result notification"
              isChecked={isChecked3}
              onChange={handleCheckboxChange3}
            />
             <CustomCheckbox
              label="Save Result"
              isChecked={isChecked3}
              onChange={handleCheckboxChange3}
            />
          
          </View>
        
         </View>
          
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dot: {
    backgroundColor: '#DFDFF0', // Customize the inactive dot color onColor="#726DA8"
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#726DA8', // Customize the active dot color
    width: 18,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default SwiperInputForm;
