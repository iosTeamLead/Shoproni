import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Trolly/tbag1.jpeg'),
    title: 'Skybags',
    track: 'Skybags Rubik 4W Exp Str 69 Black Soft Luggage',
    Price: '₹ 2,799',
    Best_Price: 'Best Price ₹2,379',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Trolly/tbag2.jpeg'),
    title: 'Safari',
    track: 'Safari Ray 53 Cms Small Cabin Polycarbonate (Pc) Hard Sided 4 Wheels 360 Degree Wheeling System Luggage/Speed_Wheel Suitcase/Trolley Bag',
    Price: '₹ 2,099',
    Best_Price: 'Best Price ₹1,678 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Trolly/tbag3.jpeg'),
    title: 'American Tourister',
    track: 'Click to open expanded view American Tourister Jamaica 80 Cms Large Check-in Polyester Soft Sided 4 Spinner Wheels Luggage',
    Price: '₹ 5,349',
    Best_Price: 'Best Price ₹4,708 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Trolly/tbag4.jpeg'),
    title: 'Safari',
    track: 'Safari Thorium Sharp Antiscratch 77 cms Large Check-in Polycarbonate (PC) Hard Sided 4 Wheels 360 Degree Wheeling System Suitcase, Black',
    Price: '₹ 3,499',
    Best_Price: 'Best Price ₹2,899',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Trolly/tbag5.jpeg'),
    title: 'Safari ',
    track: 'Safari Pentagon Hardside Medium Size Check-in Luggage Suitcase Trolley Bags for Travel Black Color 66cm',
    Price: '₹ 2,249',
    Best_Price: 'Best Price ₹1,999',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Trolly/tbag6.jpeg'),
    title: 'American Tourister',
    track: 'American Tourister Liftoff 79 cms Large Check-in Polypropylene Hard Sided Double Spinner Wheel Luggage/Trolley Bag/Suitcase',
    Price: '₹ 5,349',
    Best_Price: 'Best Price ₹4,697 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Trolly/tbag7.jpeg'),
    title: 'Safari',
    track: 'Safari Oasis 65 cms Medium Check-in Polycarbonate (PC) Hard Sided 4 Wheels 360 Degree Rotation Luggage/Suitcase/Trolley Bag',
    Price: '₹ 3,299',
    Best_Price: 'Best Price ₹2,799 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Trolly/tbag8.jpeg'),
    title: 'Safari',
    track: 'Safari Pentagon 55 Cms Small Cabin Polypropylene Hard Sided 4 Wheels 360 Degree Wheeling System Luggage/Speed_Wheel Suitcase/Trolley Bag',
    Price: '₹ 1,899',
    Best_Price: 'Best Price ₹1,543 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Trolly/tbag9.jpeg'),
    title: 'Safari',
    track: 'Safari RAY 55 Cms Small Cabin Polycarbonate (PC) Hard Sided 4 Wheels 360 Degree Wheeling System Luggage/Suitcase/Trolley Bag',
    Price: '₹ 2,099',
    Best_Price: 'Best Price ₹1,768 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Trolly/tbag10.jpeg'),
    title: 'Kamiliant',
    track: 'American Tourister Kamiliant Harrier Zing 56 cms Small Cabin (PP) Hard Sided 8 Wheels Spinner Luggage/Suitcase/Trolley Bag',
    Price: '₹ 2,849',
    Best_Price: 'Best Price ₹2,364',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Trolly/tbag11.jpeg'),
    title: 'Skybags',
    track: 'Skybags Stroke Cabin ABS Hard Luggage (55 cm) | Printed Luggage Trolley with 8 Wheels and in-Built Combination Lock | Unisex, Blue and White',
    Price: '₹ 1,999',
    Best_Price: 'Best Price ₹1,670',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Trolly/tbag12.jpeg'),
    title: 'Lavie',
    track: 'Lavie Sport Lino Cabin Wheel Duffel Bag | 2 Wheel Duffle Bag | Built to Last Wheels and Trolley',
    Price: '₹ 929',
    Best_Price: 'Best Price ₹749 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Trolly/tbag13.jpeg'),
    title: 'Swiss Military',
    track: 'Swiss Military PP Swirl Black Textured Hard Top 20 Inch Luggage Trolley Bag, 360 Degree Rotatable 8 Wheels, 3 Dial Combination Lock, 41 Liters, HTL121',
    Price: '₹ 3,044',
    Best_Price: 'Best Price ₹2,729',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Trolly/tbag14.jpeg'),
    title: 'Aristocrat',
    track: 'Aristocrat Oasis Plus Cabin Size Soft Luggage (55 cm) | Spacious Polyester Trolley with 4 Wheels and Combination Lock | Dazzling Blue | Unisex| 5 Year Warranty',
    Price: '₹ 1,981',
    Best_Price: 'Best Price ₹1,697 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Trolly/tbag15.jpeg'),
    title: 'Aristocrat',
    track: 'Aristocrat Force 75cm 360° rotated Acrylonitrile Butadiene Styrene (ABS) Hardsided Large Size 4 Wheels Blue Suitcase',
    Price: '3,999',
    Best_Price: 'Best Price ₹2,579 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Trolly/tbag16.jpeg'),
    title: 'Genie',
    track: 'Genie Florentine 66 cms Medium check-in Printed Polycarbonate Hardsided 8 Wheel 360 Degree Rotation Luggage/Suitcase/Trolley Bag',
    Price: '₹ 3,199',
    Best_Price: 'Best Price ₹2,768',
    qty:0
  },
]



const Trolly = () => {
  const dispatch = useDispatch();
const navigation=useNavigation()

const cartItems = useSelector(state => state.cart2.cartItems);

console.log('item',cartItems)

  const favorites = useSelector((state) => state.favorites.favorites);

  const isFavorite = (itemId) => favorites.some((item) => item.id === itemId);

  const handleToggleFavorite = (item) => {
    dispatch(toggleFavorite(item));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ alignItems: 'center', marginBottom: 40, marginHorizontal: 10,bottom:10 ,marginVertical:20}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{ selectedItem: item })}>
        <Image source={item?.image} resizeMode='contain' style={{ height: 180, width: 180, }} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'flex-start' }}>
          <Text style={[style.txt, { alignSelf: 'flex-start' }]}>{item?.title}</Text>
          <TouchableOpacity onPress={() => handleToggleFavorite(item)}>
            <Image
              source={isFavorite(item.id) ? require('../../assets/fillHeart.png') : require('../../assets/heart.png')}
              resizeMode='contain'
              style={[style.imge3, { marginHorizontal: 0 }]}
            />
          </TouchableOpacity>
        </View>
        <Text style={[style.txt2, { alignSelf: 'flex-start' }]}>{item?.track.substring(0, 24) + ('...')}</Text>
        <Text style={[style.txt, { alignSelf: 'flex-start' }]}>{item?.Price}</Text>
        <Text style={[style.txt, { color: 'green', fontSize: 12, alignSelf: 'flex-start' }]}>{item?.Best_Price}<Text style={style.txt2}>with coupon </Text></Text>

        
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={style.view}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/back.png')} style={{ width: 30, height: 30, alignSelf: 'flex-start', }} />
        </TouchableOpacity>
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Trolly Bag</Text>
        <View style={style.view1}>
          <TouchableOpacity>
            <Image source={require('../../assets/notification.png')} resizeMode='contain' style={style.imge} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Favourites',)}>
            <Image source={require('../../assets/heart.png')} resizeMode='contain' style={style.imge3} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('ShopCart')}>
            <Image source={require('../../assets/bag.png')} resizeMode='contain' style={style.imge} />
            {cartItems.length > 0 && (
                                <View style={style.cartCount}>
                                    <Text style={style.cartCountText}>{cartItems.length}</Text>
                                </View>
                            )}
          </TouchableOpacity>
        </View>
      </View>  
      <FlatList
        data={Data}
        renderItem={renderItem}
        numColumns={2} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imge: {
    height: 25,
    width: 25,
    paddingHorizontal: 30
  },
  imge3: {
    height: 35,
    width: 35,
  },
  txt: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400'
  },
  txt2: {
    fontSize: 12,
    color: 'gray'
  },
  cartCount: {
    position: 'absolute',
    top: -8,
    right: 6,
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
});

export default Trolly;