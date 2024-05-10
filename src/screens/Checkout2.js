import  React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput ,Share} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import CheckBox from 'react-native-check-box';    
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../reduxToolkit/slice/Addtocart';
import { toggleFavorite } from '../reduxToolkit/slice/favoritesSlice';

const Checkout2 = ({ route }) => {
    const selectedItem = route.params.selectedItem;
    console.log('selectedItem',selectedItem)
    const dispatch = useDispatch();
    const navigation=useNavigation()
    const [deliveryDate, setDeliveryDate] = useState('');
    const [pincode, setPincode] = useState('');
    const [savedPincode, setSavedPincode] = useState('');
    const cartItems = useSelector(state => state.cart2.cartItems);

    const addItemToCart = () => {
      
            dispatch(addCartItem(selectedItem));
    }

    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(selectedItem));
    };

    useEffect(() => {
        const calculateDeliveryDate = () => {
            const currentDate = new Date();
            const deliveryDate = new Date(currentDate);
            deliveryDate.setDate(currentDate.getDate() + 3);
            const options = { weekday: 'short', day: '2-digit', month: 'short' };
            const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', options);
            setDeliveryDate(formattedDeliveryDate);
        };

        calculateDeliveryDate();
    }, []);
    useEffect(() => {
        const loadPincode = async () => {
            try {
                const savedPincode = await AsyncStorage.getItem('pincode');
                if (savedPincode) {
                    setPincode(savedPincode);
                    setSavedPincode(savedPincode);
                }
            } catch (error) {
                console.error('Error loading pincode from AsyncStorage:', error);
            }
        };

        loadPincode();
    }, []);

    const handlePincodeChange = (newPincode) => {
        setPincode(newPincode);
    };

    const savePincode = async () => {
        try {
            await AsyncStorage.setItem('pincode', pincode);
            setSavedPincode(pincode);
        } catch (error) {
            console.error('Error saving pincode to AsyncStorage:', error);
        }
    };


    const handleShare = async () => {
        try {
          
          const shareOptions = {
            title: selectedItem.store + ' ' + selectedItem.name,
            message: 'Check out this item!',
       
          };
          const result = await Share.share(shareOptions);
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              console.log('Shared with activity type:', result.activityType);
            } else {
              console.log('Shared');
            }
          } else if (result.action === Share.dismissedAction) {
            console.log('Dismissed');
          }
        } catch (error) {
          console.error('Error sharing:', error.message);
        }
      };

  return (
       <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={style.container}>
                    <View style={style.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require('../assets/back.png')} style={{ width: 30, height: 30, alignSelf: 'flex-start' }} />
                        </TouchableOpacity>
                        <Text style={style.headerText}>{selectedItem.store}</Text>
                        <View style={style.icons}>
                            <TouchableOpacity onPress={handleShare}>
                                <Image source={require('../assets/share.png')} resizeMode='contain' style={style.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
                                <Image source={require('../assets/heart.png')} resizeMode='contain' style={[style.icon1,]} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('ShopCart')}>
                                <Image source={require('../assets/bag.png')} resizeMode='contain' style={style.icon} />
                                {cartItems.length > 0 && (
                                    <View style={style.cartCount}>
                                        <Text style={style.cartCountText}>{cartItems.length}</Text>
                                    </View>
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.imageContainer}>
                        <Image source={selectedItem?.image} style={style.mainimage} />
                    </View>
                    <View style={style.detailsContainer}>
                        <View style={style.detail}>
                            <Text style={style.title}>{selectedItem.store} {selectedItem?.name}{'(' + selectedItem.storage + selectedItem.Ram + ')'} <Text style={style.track}>{selectedItem?.track}</Text></Text>

                            <Text style={style.price}>MRP <Text style={style.priceValue}>{selectedItem.Price}</Text></Text>
                        </View>
                        {/* <View style={style.offerContainer}>
                            <Text style={style.offerText}>{selectedItem?.Best_Price} with coupon <Text style={style.coupon}>TOPBRANDOFFER</Text></Text>
                            <Text style={style.discountText}>₹177 Off On orders Above ₹749 (only on 1st Purchase)</Text>
                        </View> */}
                        <View style={style.bankOfferContainer}>
                            <Text style={style.bankOfferText}> Offers</Text>
                            <View style={style.bankOfferTextContainer}>
                                <View style={style.bankOfferItem}>
                                    <Image source={require('../assets/offer2.png')} resizeMode='contain' style={style.bankOfferIcon} />
                                    <Text style={style.bankOfferText}>Bank Offer</Text>
                                </View>
                                <Text style={style.discountText}>7.5% Discount on Kotak Credit Card.</Text>
                                <Text style={style.discountText}>Max Discount Up to ₹750 on every spend.</Text>
                            </View>
                        </View>
                        {/* <View style={style.sizeContainer}>
                            <Text style={style.sizeTitle}>Sizes: {selectedSize}</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {sizes.map((size, index) => (
                                    <TouchableOpacity key={index} style={[style.sizeItem, selectedSize === size ? style.selectedSizeItem : null]} onPress={() => handleSizeSelection(size)}>
                                        <Text style={style.sizeText}>{size}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                            {selectedSize === '' && <Text style={{ color: 'red' }}>Please select a size</Text>}
                        </View>
                        <View style={style.checkboxContainer}>
                            <CheckBox
                                style={style.checkbox}
                                isChecked={useAlphaSizes}
                                onClick={toggleAlphaSizes}
                            />
                            <Text style={style.checkboxLabel}>Show sizing used by {selectedItem?.title}</Text>
                        </View> */}
                        <View style={style.deliveryContainer}>
                            <Text style={[style.priceValue, { color: 'black' }]}>{selectedItem?.Price}</Text>
                            <Text>Delivery by {deliveryDate} - {savedPincode || 'Enter pincode'}</Text>
                            <Text>Seller : <Text style={[style.priceValue, { color: 'red' }]}>{selectedItem.store} Store</Text></Text>
                        </View>
                        <View style={style.checkboxContainer2}>
                            <View style={style.favbutton}>
                                <TouchableOpacity onPress={handleToggleFavorite}
                                    style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                                    <Image source={require('../assets/heart.png')} resizeMode='contain' style={[style.icon1,]} />
                                    <Text style={style.favtext}>Favortie</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[style.favbutton, { marginHorizontal: 20, backgroundColor: 'red', borderColor: 'red' }]}>
                                <TouchableOpacity onPress={addItemToCart}
                                    style={[style.favbutton, { backgroundColor: 'red', borderColor: 'red' }]}>
                                    <Image source={require('../assets/bag.png')} resizeMode='contain' style={[style.icon1, { tintColor: 'white' }]} />
                                    <Text style={[style.favtext, { color: 'white' }]}>Add to Bag</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.deliveryContainer}>
                            <Text style={style.headerText}> Delivery & Services</Text>
                        </View>
                        <View style={style.pinView}>
                            <TextInput
                                placeholder='Enter your Pincode'
                                placeholderTextColor='black'
                                onChangeText={handlePincodeChange}
                                keyboardType='number-pad'
                                defaultValue={savedPincode}
                            />
                            <TouchableOpacity onPress={savePincode}>
                                <Text style={{ color: 'red' }}> Save</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={style.deliveryContainer}>
                            <Text style={style.headerText}> Mobile Details</Text>
                        </View>
                        <View style={{marginTop:10,padding:10,borderWidth:0.75,borderRadius:10}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Text style={style.bankOfferText}>Brand</Text>
                                <Text style={[style.bankOfferText,{marginLeft:100}]}>{selectedItem.store}</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Text style={style.bankOfferText}>Model</Text>
                                <Text style={[style.bankOfferText,{marginLeft:100}]}>{selectedItem.name}</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Text style={style.bankOfferText}>Operating System	</Text>
                                <Text style={[style.bankOfferText,{marginLeft:40}]}>FunTouch OS 12</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Text style={style.bankOfferText}>Cellular Technology	</Text>
                                <Text style={[style.bankOfferText,{marginLeft:40}]}>LTE</Text>
                            </View>
                        </View>
                        <View style={style.deliveryContainer}>
                            <Text style={style.headerText}>About this item</Text>
                        </View>
                        <View style={style.itemview}>
                            <Text style={[style.cartCountText,{marginBottom:10}]}>{selectedItem.display}</Text>
                            <Text style={[style.cartCountText,{marginBottom:10}]}>{selectedItem.camera}</Text>
                            <Text style={[style.cartCountText,{marginBottom:10}]}>{selectedItem.battery}</Text>
                        </View>

                        <View style={style.delevryview}>
                            <Image source={require('../assets/box.png')} resizeMode='contain' style={style.bankOfferIcon} />
                            <View>
                                <Text style={[style.priceValue, { color: 'black' }]}>Get it between {deliveryDate} </Text>
                                <Text style={style.discountText}>No Convenience Fee </Text>
                            </View>
                        </View>
                        <View style={style.delevryview}>
                            <Image source={require('../assets/card.png')} resizeMode='contain' style={style.bankOfferIcon} />
                            <View>
                                <Text style={[style.priceValue, { color: 'black' }]}>Pay on Delivery is available </Text>
                                <Text style={style.discountText}>₹10 additional fee applicable </Text>
                            </View>
                        </View>
                        <View style={[style.delevryview, { marginBottom: 20 }]}>
                            <Image source={require('../assets/dataarrow.png')} resizeMode='contain' style={style.bankOfferIcon} />
                            <View>
                                <Text style={[style.priceValue, { color: 'black' }]}>Hassle free 14 days {'\n'} Return & Exchange  </Text>

                            </View>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
  )
}

export default Checkout2
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },
    headerText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
    },
    icons: {
        flexDirection: 'row',
    },
    icon: {
        height: 25,
        width: 25,
        marginHorizontal: 10,
    },
    icon1: {
        height: 35,
        width: 35,
        marginHorizontal: 10,
    },
    imageContainer: {
        alignItems: 'center',
    },
    mainimage: {
        height: 300,
        width: '90%',
        borderRadius: 20,
        resizeMode: 'contain',
        marginTop: 20,
    },
    detailsContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    detail: {
        marginBottom: 20,
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
    },
    track: {
        color: 'black',
        fontWeight: '300',
        fontSize: 14,
        marginBottom: 10,
    },
    price: {
        color: 'black',
        fontWeight: '300',
        fontSize: 14,
        marginTop: 10
    },
    priceValue: {
        fontWeight: '700',
        marginTop: 10,
        fontSize: 18,
    },
    offerContainer: {
        backgroundColor: '#a1e3be',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
    },
    offerText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '700',
    },
    coupon: {
        fontWeight: '500',
        fontSize: 12,
    },
    discountText: {
        color: 'black',
        fontSize: 14,
        fontWeight: '300',
        marginTop: 5,
    },
    bankOfferContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        padding: 10,
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
    bankOfferText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '700',
    },
    sizeContainer: {
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 10
    },
    sizeTitle: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
    sizeItem: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        marginRight: 10,
    },
    selectedSizeItem: {
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'green',
    },
    sizeText: {
        color: 'black',
        fontSize: 16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,
    },
    checkboxContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        marginLeft: 20,
        marginBottom: 30
    },
    checkbox: {
        marginRight: 10,
    },
    checkboxLabel: {
        fontSize: 16,
        color: 'black',
    },
    deliveryContainer: {
        marginTop: 10,
        marginLeft: 20,
    },
    favbutton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 5,
        borderRadius: 10
    },
    favtext: {
        color: 'black',
        fontWeight: '500',
        fontSize: 16
    },
    pinView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 20,
        paddingHorizontal: 10,
        borderColor: 'gray',
        marginBottom: 30
    },
    delevryview: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 20

    },
    cartCount: {
        position: 'absolute',
        top: -8,
        right: -8,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartCountText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    itemview:{
        marginTop:10,
        padding:10,
        marginBottom:20,
        marginLeft:10,
        backgroundColor:'#70becc',
        borderRadius:20,
        marginHorizontal:20,
        paddingLeft:20
        
    }
});