import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView, Modal, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import CheckBox from 'react-native-check-box';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image'
import { useTranslation } from 'react-i18next';

const Payment = () => {
    const navigation = useNavigation()
    const { t } = useTranslation()
    const [modalVisible, setModalVisible] = useState(false);
    const [giftcard, setGiftCard] = useState()
    const [pin, setPin] = useState()
    const [giftcardError, setGiftCardError] = useState()
    const [pinError, setPinError] = useState()
    const [selectedItemPrice, setSelectedItemPrice] = useState('');
    const [selectedItemCount, setSelectedItemCount] = useState('');
    const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
    const [paymentOptionSelected, setPaymentOptionSelected] = useState(false);
    const [paymentSuccessVisible, setPaymentSuccessVisible] = useState(false);

    const handlePaymentOptionSelect = (paymentOption) => {
        setSelectedPaymentOption(paymentOption);
        setPaymentOptionSelected(true);
    };
    useEffect(() => {
        const fetchItemsFromAsyncStorage = async () => {
            try {

                const price = await AsyncStorage.getItem('selectedItemPrice');
                const count = await AsyncStorage.getItem('count');
                console.log('countttt', count)
                setSelectedItemPrice(price);
                setSelectedItemCount(count);
            } catch (error) {
                console.error('Error fetching data from AsyncStorage:', error);
            }
        };

        fetchItemsFromAsyncStorage();
    }, []);
    const handleCredit = () => {
        if (!giftcard) {
            setGiftCardError('Enter your 16 Digits Gift Card Number');
            return;
        } else {
            setGiftCardError('');
        }
        if (!pin) {
            setPinError('Enter your 6 Digits Gift Card Pin');
            return;
        } else {
            setPinError('');
        }


        setModalVisible(false);

        Alert.alert(
            'Gift Card Applied Successfully',
            '',
            [
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed'),
                    style: 'cancel',
                },
            ],
            { cancelable: false }
        );
    };

    const handlePayNow = () => {
        if (!paymentOptionSelected) {
            Alert.alert(
                'Select Payment Option',
                'Please choose a payment option before proceeding to pay.',
                [
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                        style: 'cancel',
                    },
                ],
                { cancelable: false }
            );
            return;
        }
        setPaymentSuccessVisible(true);
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ height: '100%' }}>
                    <View style={style.view}>
                        <Text style={style.txt}>{t('common.secure.payment')}</Text>
                        <Text style={style.txt}>{t('common.easy')}</Text>
                        <Text style={style.txt}>{t('common.refunds')}</Text>
                    </View>
                    <View style={style.bankOfferContainer}>


                        <View style={style.bankOfferItem}>
                            <Image source={require('../assets/offer2.png')} resizeMode='contain' style={style.bankOfferIcon} />
                            <Text style={style.bankOfferText}>{t('common.bank.offer')}</Text>
                        </View>
                        <Text style={style.discountText}>{t('common.kotak.bank')}</Text>
                        <Text style={style.discountText}>{t('common.kotak')}</Text>
                    </View>
                    <View style={[style.view1]}>
                        <Text style={[style.txt, { paddingLeft: 10, color: 'black', opacity: 0.50 }]}>{t('common.payment.option')}</Text>
                    </View>
                    <View style={style.box}>
                        <TouchableOpacity onPress={() => handlePaymentOptionSelect('Cash on Delivery')}>
                            <View style={style.boxview}>
                                <CheckBox isChecked={selectedPaymentOption === 'Cash on Delivery'} />
                                <Text style={style.txt2}>{t('common.cash')}</Text>
                                <Image source={require('../assets/cash.png')} style={[style.img, { marginHorizontal: '10%' }]} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handlePaymentOptionSelect('Google Pay')}>
                            <View style={style.boxview}>
                                <CheckBox isChecked={selectedPaymentOption === 'Google Pay'} />
                                <Text style={style.txt2}>{t('common.google.pay')}</Text>
                                <Image source={require('../assets/Gpay.png')} style={[style.img, { marginHorizontal: '20%' }]} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handlePaymentOptionSelect('Phone Pay')}>
                            <View style={style.boxview}>
                                <CheckBox isChecked={selectedPaymentOption === 'Phone Pay'} />
                                <Text style={style.txt2}>{t('common.phone.pay')}</Text>
                                <Image source={require('../assets/pPAy.png')} style={[style.img, { marginHorizontal: '20%' }]} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[style.view1]}>
                        <Text style={[style.txt, { paddingLeft: 10, color: 'black', opacity: 0.50 }]}>{t('common.online.payment')}</Text>
                    </View>
                    <View style={style.box}>
                        <TouchableOpacity>
                            <View style={[style.boxview, { justifyContent: 'flex-start' }]}>
                                <Image source={require('../assets/card.png')} style={style.img} />
                                <Text style={style.txt2}>{t('common.credit')}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[style.boxview, { justifyContent: 'flex-start' }]}>
                                <Image source={require('../assets/wallet.png')} style={style.img} />
                                <Text style={style.txt2}> {t('common.wallets')}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[style.boxview, { justifyContent: 'flex-start' }]}>
                                <Image source={require('../assets/payLater.png')} style={style.img} />
                                <Text style={style.txt2}>{t("common.pay.later")}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[style.boxview, { justifyContent: 'flex-start' }]}>
                                <Image source={require('../assets/Emi.png')} style={style.img} />
                                <Text style={style.txt2}>{t('common.emi')}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[style.boxview, { justifyContent: 'flex-start' }]}>
                                <Image source={require('../assets/NetBanking.png')} style={style.img} />
                                <Text style={style.txt2}>{t('common.net.banking')}</Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[style.view1]}>
                        <Text style={[style.txt, { paddingLeft: 10, color: 'black', opacity: 0.50 }]}>{t('common.apply.gift')} </Text>
                    </View>
                    <View style={style.box}>
                   
                        <View style={[style.boxview, { justifyContent: 'flex-start' }]}>
                            <Image source={require('../assets/gift.png')} style={style.img} />
                            <Text style={style.txt2}>{t('common.have.card')}</Text>
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <Text style={style.applytext}> {t('common.apply')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[style.view1]}>
                      
                    </View>
                    <View style={style.box}>

                        <View style={style.boxview}>
                            <Text style={[style.txt2]}>{t('common.price.details')} ({selectedItemCount} items)</Text>
                        </View>

                        <View style={style.lastview}>
                            <Text style={style.txt3}>{t('common.total.mrp')}</Text>
                            <Text>{selectedItemPrice}</Text>
                        </View>
                        <View style={style.lastview}>
                            <Text style={style.txt3}>{t('common.discount')}</Text>
                            <Text style={style.color2}>10%</Text>
                        </View>
                        <View style={style.lastview}>
                            <Text style={style.txt3}>{t('common.platform.fee')}</Text>
                            <Text style={style.color2}>FREE</Text>
                        </View>
                        <View style={[style.lastview, { borderBottomWidth: 0.75, borderColor: 'gray' }]}>
                            <Text style={[style.txt3, { marginBottom: 20 }]}>{t('common.shipping.fee')}</Text>
                            <Text style={[style.color2, { marginBottom: 20 }]}>₹ 30</Text>
                        </View>
                        <View style={style.lastview}>
                            <Text style={style.txt3}>{t('common.total')}</Text>
                            <Text style={style.txt3}>
                                {selectedItemPrice && selectedItemCount ?
                                   `₹ ${((parseInt(selectedItemPrice.replace(/\D/g, '')) * parseInt(selectedItemCount)) * 0.9 + 30).toFixed(0)}`
                                    : "Loading..."}
                            </Text>
                        </View>
                    </View>
                    <View style={[style.view1]}>
                       
                    </View>
                    <View style={style.bottom}>
                        <View>
                            <Text style={style.txt3}>₹ {((parseInt(selectedItemPrice.replace(/\D/g, '')) * parseInt(selectedItemCount)) * 0.9 + 30).toFixed(0)}</Text>
                            <Text style={[style.applytext, { paddingLeft: 0 }]}>{t('common.details')}</Text>
                        </View>
                        <TouchableOpacity style={style.tchbtn} onPress={handlePayNow}>
                            <View>
                                <Text style={[style.txt, { alignSelf: 'center' }]} >{t('common.pay.now')}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <KeyboardAvoidingView>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={style.modalContainer}>
                            <View style={style.modalView}>
                                <View style={style.modalHeader}>
                                    <Text style={style.txt3}>{t('common.apply.gift')}</Text>
                                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                                        <Image source={require('../assets/close.png')} style={style.closeIcon} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ marginLeft: 10, marginBottom: 10 }}>{t('common.gift.value')}</Text>
                                <TextInput
                                    style={style.txtinpt}
                                    maxLength={16}
                                    placeholder={t('common.card.number')}
                                    placeholderTextColor={'black'}
                                    onChangeText={(text) => setGiftCard(text)} 
                                    value={giftcard}
                                />
                                {giftcardError ? <Text style={style.errorText}>{giftcardError}</Text> : null}
                                <TextInput style={style.txtinpt}
                                    maxLength={6}
                                    placeholder={t('common.card.pin')}
                                    placeholderTextColor={'black'}
                                    onChangeText={(text) => setPin(text)}
                                    value={pin} />
                                {pinError ? <Text style={style.errorText}>{pinError}</Text> : null}
                                <TouchableOpacity style={style.btnview} onPress={handleCredit}>
                                    <Text style={style.btntxt}>{t('common.shoproni.credit')}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </KeyboardAvoidingView>
            </ScrollView>
            <KeyboardAvoidingView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={paymentSuccessVisible}
                    onRequestClose={() => setPaymentSuccessVisible(false)}
                >
                    <View style={style.centeredView}>
                        <View style={style.modalView}>
                            <Text style={style.modalText}>Order Place Successful!</Text>
                            <FastImage
                                source={require('../assets/7efs.gif')}
                                style={{ width: 200, height: 200 }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                            <TouchableOpacity
                                style={{ ...style.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    setPaymentSuccessVisible(false),
                                        navigation.navigate('Home')
                                }}

                            >
                                <Text style={style.textStyle} >Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#b158b8',
        padding: 10, marginTop: 10
    },
    txt: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },
    bankOfferContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        padding: 10,
        margin: 10
    },
    bankOfferItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bankOfferIcon: {
        height: 25,
        width: 25,
        marginRight: 10,
    },
    discountText: {
        color: 'black',
        fontSize: 14,
        fontWeight: '300',
        marginTop: 5,
    },
    bankOfferText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '700',
    },
    view1: {
        backgroundColor: '#D3D3D3',
        width: '100%',
        padding: 15
    },
    checkbox: {
        marginRight: 10,
    },
    img: {
        resizeMode: 'contain',
        width: 25,
        height: 25,

    },
    boxview: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 0.25,
        width: '100%',
        borderColor: 'gray',
        opacity: 0.75
    },
    box: {
        height: 'auto',
        width: '100%',
        marginTop: 10,
        padding: 0
    },
    txt2: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 30,
        color: 'black'
    },
    applytext: {
        color: 'red',
        fontSize: 14,
        fontWeight: '700',
        paddingLeft: "10%"
    },
    modalContainer: {
        flex: 1,
        // height:'80%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        width: '100%',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    closeIcon: {
        width: 20,
        height: 20,
    },
    txt3: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 10,
        color: 'black'
    },
    txtinpt: {
        width: "100%",
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingLeft: 20,
        marginTop: 10, marginBottom: 10,
        opacity: 0.75
    },
    btntxt: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'center',

    },
    btnview: {
        width: "90%",
        backgroundColor: '#f7530c',
        borderRadius: 10,
        margin: 10,
        padding: 20,
        alignSelf: 'center'
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginLeft: 5,
    },
    lastview: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 5
    },
    color2: {
        color: 'green',
        fontSize: 16,
        fontWeight: '600',

    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20
    },
    tchbtn: {
        backgroundColor: 'red',
        width: '60%',
        height: '100%',
        padding: 20,
        borderRadius: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 18,
        fontWeight: 'bold'
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
})
export default Payment