import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/BathBody/body1.jpeg'),
    title: 'Lacto Calamine',
    track: 'Lacto Calamine 1% Salicylic Acid Body Wash | 250ml | For Body Acne, Back Acne, Rough & Bumpy Skin ',
    Price: '₹ 229',
    Best_Price: 'Best Price ₹173 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/BathBody/body2.jpeg'),
    title: 'Gingham',
    track: 'Bath & Body Works Gingham Fresh Shower Gel 295 ml',
    Price: '₹ 1,549',
    Best_Price: 'Best Price ₹1,278 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/BathBody/body3.jpeg'),
    title: 'Wishes',
    track: 'Bath & Body Works A Thousand Wishes Ultimate Hydration Body Cream',
    Price: '₹ 1,449',
    Best_Price: 'Best Price ₹1,142 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/BathBody/body4.jpeg'),
    title: 'Noir',
    track: 'Bath & Body Works Noir 3-in-1 Hair, Face & Body Wash For Men 295 ml',
    Price: '₹ 1,649',
    Best_Price: 'Best Price ₹1,343',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/BathBody/body5.jpeg'),
    title: 'Warm ',
    track: 'Bath & Body Works Warm Vanilla Sugar Shower Gel',
    Price: '₹ 1,349',
    Best_Price: 'Best Price ₹999 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/BathBody/body6.jpeg'),
    title: 'Breathe Deep',
    track: 'Bath & Body Works Eucalyptus Lavender Moisturizing Body Lotion',
    Price: '₹ 1,499',
    Best_Price: 'Best Price ₹1,277 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/BathBody/body7.jpeg'),
    title: 'Bath & Body',
    track: 'Bath & Body Works Rose Shower Gel 295 ml',
    Price: '₹ 1,499',
    Best_Price: 'Best Price ₹1,099 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/BathBody/body8.jpeg'),
    title: 'Bath & Body',
    track: 'Bath & Body Works Gingham Travel Size Ultimate Hydration Body Cream',
    Price: '₹ 749',
    Best_Price: 'Best Price ₹543 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/BathBody/body9.jpeg'),
    title: 'Dermafique',
    track: 'Dermafique Aqua Cloud Hydrating Shower Gel – 500ml, Body Wash for Women & Men,',
    Price: '₹ 524',
    Best_Price: 'Best Price ₹476 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/BathBody/body10.jpeg'),
    title: 'Palmolive',
    track: 'Palmolive Iris Flower & Ylang Ylang Essential Oil Aroma Absolute Relax Body Wash ',
    Price: '₹ 323',
    Best_Price: 'Best Price ₹233 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/BathBody/body11.jpeg'),
    title: 'Mee Mee',
    track: 'Mee Mee Foamy Baby Body Wash & Bubble Bath (400ml) | Infused with Cherry and Fruit Extracts ',
    Price: '₹ 235 ',
    Best_Price: 'Best Price ₹199',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/BathBody/body12.jpeg'),
    title: '	Bath & Body',
    track: 'Bath & Body Works Travel Size Fine Fragrance Mist Dark Kiss',
    Price: '₹ 749',
    Best_Price: 'Best Price ₹449 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/BathBody/body13.jpeg'),
    title: '	Soulflower',
    track: 'Soulflower Lavender Bath Salt for Body & Foot Spa, Calming, Relaxing, Muscle Pain Relief, Aromatherapy',
    Price: '₹ 378',
    Best_Price: 'Best Price ₹299 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/BathBody/body14.jpeg'),
    title: 'Bath & Body',
    track: 'Bath & Body Works Eucalyptus Spearmint Moisturizing Body Wash',
    Price: '₹ 1,749',
    Best_Price: 'Best Price ₹1,497 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/BathBody/body15.jpeg'),
    title: '	BRYAN & CANDY',
    track: 'Bryan & Candy Strawberry Bath Tub Kit Gift Set For Women And Men ',
    Price: '1,280',
    Best_Price: 'Best Price ₹1,009 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/BathBody/body16.jpeg'),
    title: 'Neutrogena',
    track: 'Neutrogena Rainbath Refreshing Showel Gel and Bath Gel, 473ml',
    Price: '₹ 941',
    Best_Price: 'Best Price ₹768',
    qty:0
  },
]



const BathBody = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Bath & Body</Text>
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

export default BathBody;