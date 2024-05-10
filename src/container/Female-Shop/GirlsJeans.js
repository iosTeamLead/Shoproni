import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';
import { useTranslation } from 'react-i18next'

const Data = [
  {
    id: 1,
    image: require('../../assets/Jean/jean1.jpeg'),
    title: 'Kotty',
    track: 'Feather Soft Straight Jeans',
    Price: '₹ 1,455',
    Best_Price: 'Best Price ₹1,099 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Jean/jean2.jpeg'),
    title: 'DOLCE CRUDO',
    track: 'Skinny Fit High-Rise Jeans',
    Price: '₹ 1,258',
    Best_Price: 'Best Price ₹908 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Jean/jean3.jpeg'),
    title: 'Chemistry ',
    track: 'Women Skinny Fit Jeans ',
    Price: '₹ 879',
    Best_Price: 'Best Price ₹629',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Jean/jean4.jpeg'),
    title: 'Flying Machine ',
    track: 'Women Relaxed Fit Jeans',
    Price: '₹ 1,539',
    Best_Price: 'Best Price ₹1,189 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Jean/jean5.jpeg'),
    title: 'SASSAFRAS',
    track: 'Women Loose Fit Ankle Jeans',
    Price: '₹ 1,799',
    Best_Price: 'Best Price ₹1,499 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Jean/jean6.jpeg'),
    title: 'Roadster',
    track: 'Women Blue-Skinny Fit Stretchable Cropped Jeans',
    Price: '₹ 699',
    Best_Price: 'Best Price ₹508 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Jean/jean7.jpeg'),
    title: 'IVOC',
    track: 'Women Flared High-Rise Jeans',
    Price: '₹ 1,124',
    Best_Price: 'Best Price ₹809 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Jean/jean8.jpeg'),
    title: 'TARAMA',
    track: 'Women Skinny Fit Navy-Blue Jeans',
    Price: '₹ 850',
    Best_Price: 'Best Price ₹600 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Jean/jean9.jpeg'),
    title: 'Mast & Harbour',
    track: 'Women High-Rise Slouchy Jeans',
    Price: '₹ 1,099',
    Best_Price: 'Best Price ₹895 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Jean/jean10.jpeg'),
    title: 'TARAMA',
    track: 'Women Wide Leg High-Rise Jeans',
    Price: '₹ 1,567',
    Best_Price: 'Best Price ₹1,347 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Jean/jean11.jpeg'),
    title: 'High Star',
    track: 'Women Stretchable Jeans',
    Price: '₹ 699',
    Best_Price: 'Best Price ₹473 ',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Jean/jean12.jpeg'),
    title: 'Harvard',
    track: 'Women Wide Leg Cargo Jeans',
    Price: '₹ 1,091',
    Best_Price: 'Best Price ₹785 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Jean/jean13.jpeg'),
    title: 'HERE & NOW',
    track: 'Women High Rise Cotton Jeans',
    Price: '₹ 781',
    Best_Price: 'Best Price ₹531 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Jean/jean14.jpeg'),
    title: 'Moda Rapido',
    track: 'Women Wide Leg Cotton Jeans',
    Price: '₹ 1,648',
    Best_Price: 'Best Price ₹1,362',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Jean/jean15.jpeg'),
    title: 'Kraus Jeans',
    track: 'Women Relaxed Fit Cotton Jeans ',
    Price: '₹ 1,784',
    Best_Price: 'Best Price ₹1,549',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Jean/jean16.jpeg'),
    title: 'CURVY STREET',
    track: 'Women Pure Cotton Jeans',
    Price: '₹ 951',
    Best_Price: 'Best Price ₹685 ',
    qty:0
  },
]



const ShopBags = () => {
  const dispatch = useDispatch();
const navigation=useNavigation()
const { t } = useTranslation()
const cartItems = useSelector(state => state.cart2.cartItems);

console.log('item',cartItems)
const addItem = (item) => {
  // Check if the item already exists in the cart
  const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

  // If the item is not in the cart, dispatch the addCartItem action
  if (!isItemInCart) {
    dispatch(addCartItem(item));
  }
};
  const favorites = useSelector((state) => state.favorites.favorites);

  const isFavorite = (itemId) => favorites.some((item) => item.id === itemId);

  const handleToggleFavorite = (item) => {
    dispatch(toggleFavorite(item));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ alignItems: 'center', marginBottom: 40,  bottom: 10 }}>
         <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{ selectedItem: item })}>
        <Image source={item?.image} resizeMode='stretch' style={{ height: 200, width: 160 }} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'flex-start' }}>
          <Text style={[style.txt, { alignSelf: 'flex-start' }]}>{item?.title}</Text>
          <TouchableOpacity onPress={() => handleToggleFavorite(item)}>
            <Image
              source={isFavorite(item.id) ? require('../../assets/fillHeart.png') : require('../../assets/heart.png')}
              resizeMode='contain'
              style={[style.imge3, { marginHorizontal: 20 }]}
            />
          </TouchableOpacity>
        </View>
        <Text style={[style.txt2, { alignSelf: 'flex-start' }]}>{item?.track?.substring(0, 16) + ('...')}</Text>
        <Text style={[style.txt, { alignSelf: 'flex-start' }]}>{item?.Price}</Text>
        <Text style={[style.txt, { color: 'green', fontSize: 14, alignSelf: 'flex-start' }]}>{item?.Best_Price}<Text style={style.txt2}>with coupon </Text></Text>
   
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={style.view}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/back.png')} style={{ width: 30, height: 30, alignSelf: 'flex-start', }} />
        </TouchableOpacity>
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>{t('common.jeans')} </Text>
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
      <FlatList style={{margin:10,marginTop:10}}
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
    fontSize: 14,
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

export default ShopBags;