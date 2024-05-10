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
    image: require('../../assets/Jeansmen/Jeans1.jpeg'),
    title: 'HIGHLANDER',
    track: 'Men Tapered Fit Jeans',
    Price: '₹ 688',
    Best_Price: 'Best Price ₹531 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Jeansmen/Jeans2.jpeg'),
    title: 'Bene Kleed',
    track: 'Relaxed Fit Denim Jeans',
    Price: '₹ 998',
    Best_Price: 'Best Price ₹771 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Jeansmen/Jeans3.jpeg'),
    title: 'RARE RABBIT',
    track: 'Men Heavy Fade Cotton Jeans',
    Price: '₹ 2,999',
    Best_Price: 'Best Price ₹2,000 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Jeansmen/Jeans4.jpeg'),
    title: 'Pepe Jeans',
    track: 'Men Straight Fit Jeans',
    Price: '₹ 2,000',
    Best_Price: 'Best Price ₹1,599 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Jeansmen/Jeans5.jpeg'),
    title: 'Powerlook',
    track: 'Men  Clean Look Cotton Jeans',
    Price: '₹ 1,203',
    Best_Price: 'Best Price ₹943 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Jeansmen/Jeans6.jpeg'),
    title: 'Urbano Plus',
    track: 'Plus Size men Heavy Fade Jeans',
    Price: '₹ 1,924',
    Best_Price: 'Best Price ₹1,393 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Jeansmen/Jeans7.jpeg'),
    title: 'Urbano fashion',
    track: 'Men Slim Fit Jeans',
    Price: '₹ 799',
    Best_Price: 'Best Price ₹493 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Jeansmen/Jeans8.jpeg'),
    title: 'Flying Machine',
    track: 'Men Slim Straight Fit Jeans',
    Price: '₹ 1499',
    Best_Price: 'Best Price ₹999 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Jeansmen/Jeans9.jpeg'),
    title: 'Ketch',
    track: 'Men Tapered Fit Jeans',
    Price: '₹ 999',
    Best_Price: 'Best Price ₹579 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Jeansmen/Jeans10.jpeg'),
    title: 'Roadster',
    track: 'Men Bootcut Jeans',
    Price: '₹ 1,055',
    Best_Price: 'Best Price ₹893 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Jeansmen/Jeans11.jpeg'),
    title: 'Moda Rapido',
    track: 'Men Baggy Fit Mid-Rise Jeans  ',
    Price: '₹ 899',
    Best_Price: 'Best Price ₹533 ',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Jeansmen/Jeans12.jpeg'),
    title: 'Passion',
    track: 'Men Straight Fit Jeans',
    Price: '₹ 1,785',
    Best_Price: 'Best Price ₹999 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Jeansmen/Jeans13.jpeg'),
    title: 'Roadster',
    track: 'Men Bootcut Jeans',
    Price: '₹ 1,299',
    Best_Price: 'Best Price ₹994 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Jeansmen/Jeans14.jpeg'),
    title: 'High Star',
    track: 'Men Bootcut Jeans',
    Price: '₹ 999',
    Best_Price: 'Best Price ₹492 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Jeansmen/Jeans15.jpeg'),
    title: 'Nautica',
    track: 'Men Mid Rise Cotton Jeans',
    Price: '₹ 1,540',
    Best_Price: 'Best Price ₹899 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Jeansmen/Jeans16.jpeg'),
    title: 'Dennis Lingo',
    track: 'Men Relaxed Fit Jeans',
    Price: '₹ 999',
    Best_Price: 'Best Price ₹499 ',
    qty:0
  },
]



const Jeans = () => {
  const dispatch = useDispatch();
const navigation=useNavigation()
const { t } = useTranslation();
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
      <View style={{ alignItems: 'center', marginBottom: 40, marginHorizontal: 10 ,bottom:10}}>
       <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{ selectedItem: item })}>
        <Image source={item?.image} resizeMode='contain' style={{ height: 180, width: 180,right:20 }} />
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
        <Text style={[style.txt2, { alignSelf: 'flex-start' }]}>{item?.track.substring(0, 16) + ('...')}</Text>
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

export default Jeans;