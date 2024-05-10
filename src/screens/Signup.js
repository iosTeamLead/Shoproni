import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import FastImage from 'react-native-fast-image';

const Signup = () => {
    const [number, setNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { t,i18n } = useTranslation();
    const handleContinue = () => {
        if (number.trim() === '') {
            setErrorMessage(t('common.phone.validate'));
        } else if (number.length !== 10) {
            setErrorMessage(t('common.phone.validate2'));
        } else {
            
            setErrorMessage(''); 
            
        }
    };

    return (
        <SafeAreaView>
            <View>
                <Image source={require('../assets/back.png')} style={{ width: 30, height: 30, alignSelf: 'flex-start', marginBottom: 10 }} />
                {/* <Image source={require('../assets/signup.gif')} style={{ width: "90%", height: "50%", alignSelf: 'center', marginBottom: 10, backgroundColor: 'red', marginTop: 20 }} /> */}
                <FastImage
                                source={require('../assets/signup.gif')}
                                style={{ width: "90%", height: "50%", alignSelf: 'center', marginBottom: 10,  marginTop: 20 }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                <Text style={style.txt}>{t('common.login')}      <Text style={[style.txt, { fontWeight: '300' }]}>or</Text>    {t('common.Signup')}</Text>
                <View style={style.view}>
                    <Text style={style.txtinpt}>+91 | </Text>
                    <TextInput
                        style={style.txtinpt}
                        maxLength={10}
                        placeholder={t('common.enter.mobile')}
                        keyboardType='numeric'
                        value={number}
                        placeholderTextColor={'black'}
                        onChangeText={(text) => {
                            setNumber(text);
                            setErrorMessage('');
                        }}
                    />
                </View>
                {errorMessage ? <Text style={style.errorText}>{errorMessage}</Text> : null}
                <Text style={style.txt1}>{t('common.agree')} <Text style={style.txt2} onPress={() => Alert.alert('hello')}>{t('common.terms')}</Text>&</Text>
                <Text style={[style.txt2, { alignSelf: 'flex-start', paddingLeft: 70, }]}>{t('common.Policy')}</Text>
                <TouchableOpacity style={style.btnview} onPress={handleContinue}>
                    <Text style={[style.txt, { color: 'white' }]}>{t('common.continue')}</Text>
                </TouchableOpacity>
                <Text style={style.txt1}>{t('common.trouble')}<Text style={style.txt2}>  {t('common.get.help')}</Text></Text>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    txt: {
        color: 'black',
        fontSize: 20,
        fontWeight: '800',
        alignSelf: 'center'
    },
    txtinpt: {
        fontSize: 16
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        width: '70%',
        marginTop: 20
    },
    txt1: {
        fontSize: 14,
        fontWeight: '200',
        color: 'black',
        alignSelf: 'center',
        marginTop: 10
    },
    txt2: {
        color: 'red',
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10,
        alignSelf: 'center'
    },
    btnview: {
        width: "70%",
        alignSelf: 'center',
        backgroundColor: 'red',
        marginTop: 20,
        padding: 10
    },
    errorText: {
        color: 'red',
        alignSelf: 'center',
        marginTop: 10
    }
});

export default Signup;
