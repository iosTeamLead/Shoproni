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
    image: require('../../assets/Jack/jack1.jpeg'),
    title: 'Globus',
    track: 'Reversible Puffer Jacket',
    Price: '₹ 3,455',
    Best_Price: 'Best Price ₹3,099 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Jack/jack2.jpeg'),
    title: 'KETCH',
    track: 'Long Sleeves Puffer Jacket',
    Price: '₹ 1,695',
    Best_Price: 'Best Price ₹1,308 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Jack/jack3.jpeg'),
    title: 'Vero Moda ',
    track: 'Women Padded Jacket ',
    Price: '₹ 1,749',
    Best_Price: 'Best Price ₹1,449',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Jack/jack4.jpeg'),
    title: 'Tokyo Talkies ',
    track: 'Women Solid Padded Jacket',
    Price: '₹ 999',
    Best_Price: 'Best Price ₹789 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Jack/jack5.jpeg'),
    title: 'VOXATI',
    track: 'Women Solid Puffer Jacket',
    Price: '₹ 979',
    Best_Price: 'Best Price ₹728 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Jack/jack6.jpeg'),
    title: 'Deewa',
    track: 'Mock Biker Jacket',
    Price: '₹ 963',
    Best_Price: 'Best Price ₹869 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Jack/jack7.jpeg'),
    title: 'IVOC',
    track: 'Mock Collar Padded Jacket',
    Price: '₹ 1,124',
    Best_Price: 'Best Price ₹809 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Jack/jack8.jpeg'),
    title: 'cantabil',
    track: 'Women Solid Denim Jacket',
    Price: '₹ 1,385',
    Best_Price: 'Best Price ₹1,132 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Jack/jack9.jpeg'),
    title: 'Well Quality',
    track: 'Hooded Puffer Jacket',
    Price: '₹ 799',
    Best_Price: 'Best Price ₹599 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Jack/jack10.jpeg'),
    title: 'RAREISM',
    track: 'Women Bomber Jacket',
    Price: '₹ 899',
    Best_Price: 'Best Price ₹647 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Jack/jack11.jpeg'),
    title: 'Roadster',
    track: 'Women Spread Collar Tailored Jacket',
    Price: '₹ 974',
    Best_Price: 'Best Price ₹740 ',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Jack/jack12.jpeg'),
    title: 'Brazo',
    track: 'Hooded Parka Jacket',
    Price: '₹ 1,491',
    Best_Price: 'Best Price ₹1,285 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Jack/jack13.jpeg'),
    title: 'ATHLISIS',
    track: 'Lightweight Outdoor Jacket',
    Price: '₹ 791',
    Best_Price: 'Best Price ₹591 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Jack/jack14.jpeg'),
    title: 'ISAM',
    track: 'Printed Fleece Bomber Jacket',
    Price: '₹ 999',
    Best_Price: 'Best Price ₹759',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Jack/jack15.jpeg'),
    title: 'Van Heusen',
    track: 'Relaxed Fit Bomber Jacket ',
    Price: '₹ 1,784',
    Best_Price: 'Best Price ₹1,449',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Jack/jack16.jpeg'),
    title: 'Belle Fille',
    track: 'Women Solid Wrap Jacket',
    Price: '₹ 951',
    Best_Price: 'Best Price ₹685 ',
    qty:0
  },
]



const GirlJack = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>{t('common.jacket')}</Text>
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

export default GirlJack;