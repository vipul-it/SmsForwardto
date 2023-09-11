import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomCheckbox = ({label, isChecked, onChange}) => {
  return (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={() => onChange(!isChecked)}>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && <Text style={styles.checkIcon}>✓</Text>}
      </View>
      <Text style={{color: '#1E1E1E', flexWrap: 'wrap', marginRight: 32}} >{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'gray',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#726DA8', // Customize the checked color
    borderWidth: 0,
  },
  checkIcon: {
    color: 'white', // Customize the checkmark color
  },
});

export default CustomCheckbox;
