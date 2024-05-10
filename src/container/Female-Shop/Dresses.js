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
    image: require('../../assets/Dress/dress1.jpeg'),
    title: 'PANIT',
    track: 'Fit & Flare Maxi Dress',
    Price: '₹ 2,695',
    Best_Price: 'Best Price ₹2,395 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Dress/dress2.jpeg'),
    title: 'Anouk',
    track: 'Tiered Fit & Flare Dress',
    Price: '₹ 850',
    Best_Price: 'Best Price ₹730 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Dress/dress3.jpeg'),
    title: 'Tokyo Talkies',
    track: 'Floral Printed Midi Dress',
    Price: '₹ 739',
    Best_Price: 'Best Price ₹639 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Dress/dress4.jpeg'),
    title: 'ROJAA ',
    track: 'Embroidered Kurta Set',
    Price: '₹ 1,294',
    Best_Price: 'Best Price ₹945 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Dress/dress5.jpeg'),
    title: 'Mitera',
    track: 'Printed A-Line Midi Dress',
    Price: '₹ 509',
    Best_Price: 'Best Price ₹350 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Dress/dress6.jpeg'),
    title: 'ADDYVERO',
    track: 'Glitter Bodycon Dress',
    Price: '₹ 659',
    Best_Price: 'Best Price ₹453 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Dress/dress7.jpeg'),
    title: 'KALINI',
    track: 'Ethnic Motifs Maxi Dress',
    Price: '₹ 725',
    Best_Price: 'Best Price ₹544 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Dress/dress8.jpeg'),
    title: 'Sangria',
    track: 'Fit and Flare Midi Dress',
    Price: '₹ 717',
    Best_Price: 'Best Price ₹493 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Dress/dress9.jpeg'),
    title: 'Berrylush',
    track: 'Pleated Maxi Dress',
    Price: '₹ 849',
    Best_Price: 'Best Price ₹599 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Dress/dress10.jpeg'),
    title: 'StyleStone',
    track: 'A-Line Mini Dress',
    Price: '₹ 666',
    Best_Price: 'Best Price ₹499 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Dress/dress11.jpeg'),
    title: 'QUIERO',
    track: 'Beautiful Net Design Red Dress',
    Price: '₹ 1,950',
    Best_Price: 'Best Price ₹1,731 ',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Dress/dress12.jpeg'),
    title: 'DressBerry',
    track: 'Printed Georgette Maxi Dress',
    Price: '₹ 850',
    Best_Price: 'Best Price ₹724 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Dress/dress13.jpeg'),
    title: 'Libas',
    track: 'Printed Wrap Style Maxi Dress',
    Price: '₹ 899',
    Best_Price: 'Best Price ₹678 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Dress/dress14.jpeg'),
    title: 'Miss Chase',
    track: 'Floral Tiered Maxi Dress',
    Price: '₹ 876',
    Best_Price: 'Best Price ₹673 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Dress/dress15.jpeg'),
    title: 'SKYLEE',
    track: 'Kurta With Patiala & Dupatta ',
    Price: '₹ 1,153',
    Best_Price: 'Best Price ₹842 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Dress/dress16.jpeg'),
    title: 'Azira',
    track: 'Nimrat Khaira style heavy anarkhali and peplum',
    Price: '₹ 1,899',
    Best_Price: 'Best Price ₹1,620 ',
    qty:0
  },
]



const Dresses = () => {
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
      <View style={{ alignItems: 'center', marginBottom: 40,  bottom: 10 }}>
               <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{ selectedItem: item })}>
        <Image source={item?.image} resizeMode='stretch' style={{ height: 200, width: 150 }} />
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>{t('common.dress')} </Text>
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

export default Dresses;