import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {allImages} from '../utils/images';
import CustomCheckbox from './CustomCheckbox';
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
    <View style={{flex: 1}}>
      <Swiper
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        loop={false} // Set other props as needed
      >
        <View style={{marginHorizontal: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#1E1E1E', fontSize: 20, fontWeight: 700}}>
              Set up recipients
            </Text>
            <Image
              style={{
                resizeMode: 'contain',
                width: 20,
                height: 20,
                marginLeft: 6,
              }}
              source={allImages.HelpCircle}
            />
          </View>
          <Text style={{color: '#1E1E1E', marginVertical: 4}}>
            Add the Number, Email or Emp ID which will receive the messages.
          </Text>
          <Text style={{color: '#1E1E1E', marginTop: 20}}>
            Email or Phone Number
          </Text>
          <View
            style={{
              marginVertical: 8,
              borderWidth: 1,
              borderColor: '#726DA8',
              borderRadius: 8,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 12,
            }}>
            <TextInput
              style={{width: '100%', color: '#1E1E1E'}}
              value={inputValues}
              onChangeText={setInputValues}
            />
          </View>
        </View>

        {/* Handle for 2nd form submission */}
        <View style={{marginHorizontal: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#1E1E1E', fontSize: 20, fontWeight: 700}}>
              Forwarding conditions
            </Text>
            <Image
              style={{
                resizeMode: 'contain',
                width: 20,
                height: 20,
                marginLeft: 8,
              }}
              source={allImages.HelpCircle}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 8,
            }}>
            <CustomCheckbox
              label="Allow sending Bank, Insurance OTP, PIN and Password."
              isChecked={isChecked}
              onChange={handleCheckboxChange}
            />
          </View>
          <View>
            <CustomCheckbox
              label="Forwording all Messages"
              isChecked={isChecked2}
              onChange={handleCheckboxChange2}
            />
          </View>
        </View>
        {/* Handle for 3rd form submission */}
        <ScrollView>
          <View style={{marginHorizontal: 20}}>
            <View>
              <Text style={{color: '#1E1E1E', fontSize: 20, fontWeight: 700}}>
                Change the Content
              </Text>
              <Text style={{color: '#1E1E1E', marginVertical: 4}}>
                Change the content of the message, add the phone number of the
                initial sender of the message, a specific word etc, to the
                message you wish to forward.
              </Text>
            </View>

            <View
              style={{
                marginVertical: 8,
                borderWidth: 1,
                borderColor: '#726DA8',
                borderRadius: 4,
                paddingHorizontal: 12,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text>{'       '}</Text>
                <Text
                  style={{
                    color: '#1E1E1E',
                    marginTop: 20,
                    fontSize: 18,
                    fontWeight: 600,
                  }}>
                  Message Template
                </Text>
                <Image
                  style={{
                    resizeMode: 'contain',
                    tintColor: '#726DA8',
                    width: 20,
                    height: 20,
                    marginLeft: 8,
                  }}
                  source={allImages.EditIcon}
                />
              </View>
              <Text
                style={{borderBottomWidth: 1, borderColor: '#726DA8'}}></Text>
              <Text style={{color: '#1E1E1E', marginTop: 20, fontWeight: 700}}>
                From:{' '}
              </Text>
              <Text style={{color: '#726DA8', fontWeight: 700}}>
                "{'Incoming Number'}"
              </Text>
              <Text style={{color: '#726DA8', fontWeight: 700}}>
                "{'Message Body'}"
              </Text>
              <Text>{''}</Text>
            </View>

            <View
              style={{
                marginVertical: 8,
                borderWidth: 1,
                borderColor: '#726DA8',
                borderRadius: 4,
                paddingHorizontal: 12,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{
                      resizeMode: 'contain',
                      tintColor: '#726DA8',
                      width: 20,
                      height: 20,
                      marginLeft: 8,
                    }}
                    source={allImages.HelpCircle}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 18,
                    fontWeight: 600,
                  }}>
                  Replace words
                </Text>
                <Text>{'         '}</Text>
              </View>
              <Text
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#726DA8',
                  marginBottom: 20,
                }}></Text>
              <CustomCheckbox
                label="Use regular expression"
                isChecked={isChecked3}
                onChange={handleCheckboxChange3}
              />
              <View
                style={{
                  marginBottom: 16,
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 4,
                }}>
                <View
                  style={{
                    width: '40%',
                    borderBottomWidth: 1,
                    borderColor: '#726DA8',
                  }}>
                  <TextInput
                    style={{color: '#000'}}
                    value={inputValues}
                    onChangeText={setInputValues}
                    placeholder="Old Word"
                  />
                </View>
                <View>
                  <Image
                    style={{
                      resizeMode: 'contain',
                      tintColor: '#726DA8',
                      width: 20,
                      height: 20,
                      marginHorizontal: 4,
                    }}
                    source={allImages.RightArrow}
                  />
                </View>
                <View
                  style={{
                    width: '40%',
                    borderBottomWidth: 1,
                    borderColor: '#726DA8',
                  }}>
                  <TextInput
                    style={{color: '#000'}}
                    value={inputValues}
                    onChangeText={setInputValues}
                    placeholder="New Word"
                  />
                </View>
              </View>

              <View
                style={{
                  marginBottom: 16,
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 4,
                  marginBottom: 30,
                }}>
                <View
                  style={{
                    width: '40%',
                    borderBottomWidth: 1,
                    borderColor: '#726DA8',
                  }}>
                  <TextInput
                    style={{color: '#000'}}
                    value={inputValues}
                    onChangeText={setInputValues}
                    placeholder="Old Word"
                  />
                </View>
                <View>
                  <Image
                    style={{
                      resizeMode: 'contain',
                      tintColor: '#726DA8',
                      width: 20,
                      height: 20,
                      marginHorizontal: 4,
                    }}
                    source={allImages.RightArrow}
                  />
                </View>
                <View
                  style={{
                    width: '40%',
                    borderBottomWidth: 1,
                    borderColor: '#726DA8',
                  }}>
                  <TextInput
                    style={{color: '#000'}}
                    value={inputValues}
                    onChangeText={setInputValues}
                    placeholder="New Word"
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* 4th form */}
        <View style={{marginHorizontal: 20}}>
          <View>
            <Text style={{color: '#1E1E1E', fontSize: 20, fontWeight: 700}}>
              More settings
            </Text>
            <Text
              style={{
                color: '#1E1E1E',
                marginVertical: 4,
                fontWeight: 600,
              }}>
              Filter Name
            </Text>
          </View>

          <View
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: '#726DA8',
              borderRadius: 4,
              paddingHorizontal: 12,
            }}>
            <TextInput
              style={{color: '#1E1E1E'}}
              value={inputValues4}
              onChangeText={setInputValues4}
            />
          </View>
          <View>
            <View
              style={{
                marginVertical: 8,
                borderWidth: 1,
                borderColor: '#726DA8',
                borderRadius: 4,
                paddingHorizontal: 12,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Image
                    style={{
                      resizeMode: 'contain',
                      tintColor: '#726DA8',
                      width: 20,
                      height: 20,
                      marginLeft: 8,
                    }}
                    source={allImages.HelpCircle}
                  />
                </TouchableOpacity>
                <Text style={{color: '#1E1E1E', fontSize: 18, fontWeight: 600}}>
                  Options
                </Text>
                <Text>{'         '}</Text>
              </View>
              <Text
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#726DA8',
                  marginBottom: 20,
                }}></Text>
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
