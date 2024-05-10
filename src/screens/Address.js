import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Address = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [pin, setPin] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [pinError, setPinError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [cityError, setCityError] = useState('');
  const [stateError, setStateError] = useState('');
  const navigation = useNavigation();

  const handleSaveAddress = async () => {
    const addressObject = {
      name,
      number,
      pin,
      city,
      address,
      state,
    };

    if (!name) {
      setNameError('Name is required');
      return;
    } else {
      setNameError('');
    }
    if (!number) {
      setNumberError('Mobile number is required');
      return;
    } else {
      setNumberError('');
    }
    if (!pin) {
      setPinError('Pincode is required');
      return;
    } else {
      setPinError('');
    }
    if (!address) {
      setAddressError('Address is required');
      return;
    } else {
      setAddressError('');
    }
    if (!city) {
      setCityError('City is required');
      return;
    } else {
      setCityError('');
    }
    if (!state) {
      setStateError('State is required');
      return;
    } else {
      setStateError('');
    }

    try {
      await AsyncStorage.setItem('@address', JSON.stringify(addressObject));
      navigation.navigate('Payment');
    } catch (error) {
      console.log('Error saving address:', error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ height: '100%' }}>
          <View style={style.view}>
            <TextInput
              style={style.txtinpt}
              onChangeText={setName}
              value={name}
              placeholder={t('Name')}
            />
            {nameError && <Text style={style.errorText}>{nameError}</Text>}
            <TextInput
              style={style.txtinpt}
              onChangeText={setNumber}
              value={number}
              placeholder={t('Mobile number')}
              keyboardType='phone-pad'
            />
            {numberError && <Text style={style.errorText}>{numberError}</Text>}
            <TextInput
              style={style.txtinpt}
              onChangeText={setPin}
              value={pin}
              placeholder={t('Pincode')}
              keyboardType='numeric'
            />
            {pinError && <Text style={style.errorText}>{pinError}</Text>}
            <TextInput
              style={style.txtinpt}
              onChangeText={setCity}
              value={city}
              placeholder={t('City')}
            />
            {cityError && <Text style={style.errorText}>{cityError}</Text>}
            <TextInput
              style={style.txtinpt}
              onChangeText={setState}
              value={state}
              placeholder={t('State')}
            />
            {stateError && <Text style={style.errorText}>{stateError}</Text>}
            <TextInput
              style={style.txtinpt}
              onChangeText={setAddress}
              value={address}
              placeholder={t('Address')}
              multiline={true}
              numberOfLines={4}
            />
            {addressError && <Text style={style.errorText}>{addressError}</Text>}
            <TouchableOpacity style={style.btnview} onPress={handleSaveAddress}>
              <Text style={style.btntxt}>{t('Save')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  view: {
    padding: 20,
  },
  txtinpt: {
    width: '100%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    opacity: 0.75,
  },
  inputview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  btntxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
  },
  btnview: {
    width: '90%',
    backgroundColor: '#f7530c',
    borderRadius: 10,
    margin: 10,
    padding: 20,
    alignSelf: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginLeft: 5,
  },
});

export default Address;