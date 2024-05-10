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
    image: require('../../assets/Jackets/jack1.jpeg'),
    title: 'Roadster',
    track: 'Men Quilted Jacket',
    Price: '₹ 639',
    Best_Price: 'Best Price ₹439 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Jackets/jack2.jpeg'),
    title: 'Adobe',
    track: 'Men Solid Jacket',
    Price: '₹ 1,259',
    Best_Price: 'Best Price ₹970 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Jackets/jack3.jpeg'),
    title: 'Dennis Lingo ',
    track: 'Denim Jacket',
    Price: '₹ 1,385',
    Best_Price: 'Best Price ₹1,035 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Jackets/jack4.jpeg'),
    title: 'BYFORD ',
    track: 'Outdoor Puffer Jacket',
    Price: '₹ 700',
    Best_Price: 'Best Price ₹480 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Jackets/jack5.jpeg'),
    title: 'Blackberrys',
    track: 'Plus Size Regular jacket',
    Price: '₹ 2,250',
    Best_Price: 'Best Price ₹1,999 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Jackets/jack6.jpeg'),
    title: 'Leather Retail',
    track: 'Men Leather Biker Jacket',
    Price: '₹ 1,999',
    Best_Price: 'Best Price ₹1,999 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Jackets/jack7.jpeg'),
    title: 'fanideaz',
    track: 'Mock Collar Bomber Jacket',
    Price: '₹ 999',
    Best_Price: 'Best Price ₹730 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Jackets/jack8.jpeg'),
    title: 'Leather',
    track: 'Biker Jacket',
    Price: '₹ 1,999',
    Best_Price: 'Best Price ₹1,699 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Jackets/jack9.jpeg'),
    title: 'Dennis',
    track: 'Washed Pure Cotton Jacket',
    Price: '₹ 1,399',
    Best_Price: 'Best Price ₹1,099 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Jackets/jack10.jpeg'),
    title: 'Pepe Jeans',
    track: 'Colourblocked Puffer Jacket',
    Price: '₹ 1,740',
    Best_Price: 'Best Price ₹1,493 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Jackets/jack11.jpeg'),
    title: 'ether',
    track: 'Solid Tailored Long Jacket',
    Price: '₹ 1,499',
    Best_Price: 'Best Price ₹1,233 ',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Jackets/jack12.jpeg'),
    title: 'COBB',
    track: 'Lightweight Puffer Jacket',
    Price: '₹ 2,274',
    Best_Price: 'Best Price ₹1,924 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Jackets/jack13.jpeg'),
    title: 'Duke',
    track: 'Stand Collar Padded Jacket',
    Price: '₹ 1,299',
    Best_Price: 'Best Price ₹974 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Jackets/jack14.jpeg'),
    title: 'LOCOMOTIVE',
    track: 'Men Solid Puffer Jacket',
    Price: '₹ 999',
    Best_Price: 'Best Price ₹792 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Jackets/jack15.jpeg'),
    title: 'Columbia',
    track: 'Insulator Outdoor Puffer Jacket',
    Price: '₹ 10,240',
    Best_Price: 'Best Price ₹9,999 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Jackets/jack16.jpeg'),
    title: 'FREESOUL ',
    track: 'Solid Reversible Bomber Jacket',
    Price: '₹ 4,349',
    Best_Price: 'Best Price ₹4,049 ',
    qty:0
  },
]



const Jackets = () => {
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
      <View style={{ alignItems: 'center', marginBottom: 40, marginHorizontal: 5,bottom:10 ,}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{ selectedItem: item })}>
      <Image source={item?.image} resizeMode='contain' style={{ height: 180, width: 180, }} />
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>{t('common.jacket')} </Text>
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

export default Jackets;