import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth'; 

const OTPVerification = ({ route, navigation }) => {
    const { confirmation } = route.params;
    const [otp, setOtp] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { t } = useTranslation();

    const handleVerifyOTP = async () => {
        try {
            await confirmation.confirm(otp);
            // OTP verified successfully
            // You can navigate user to the next screen or perform necessary actions
            navigation.navigate('Home');
        } catch (error) {
            console.error('OTP verification error:', error);
            // Handle error, display appropriate message to the user
            setErrorMessage(t('common.otp.error'));
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.heading}>{t('common.otp.enter')}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={t('common.otp.placeholder')}
                    keyboardType='numeric'
                    value={otp}
                    onChangeText={(text) => setOtp(text)}
                />
                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
                    <Text style={styles.buttonText}>{t('common.otp.verify')}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '80%',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});

export default OTPVerification;
