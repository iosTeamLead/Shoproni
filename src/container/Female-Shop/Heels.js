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
    image: require('../../assets/Heels/heel1.jpeg'),
    title: 'Red Tape',
    track: 'Women Open Toe Flats',
    Price: '₹ 639',
    Best_Price: 'Best Price ₹479 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Heels/heel2.jpeg'),
    title: 'ICONICS',
    track: 'Textured Block Heels',
    Price: '₹ 899',
    Best_Price: 'Best Price ₹691 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Heels/heel3.jpeg'),
    title: 'Anouk ',
    track: 'Western - Embellished Flats ',
    Price: '₹ 623',
    Best_Price: 'Best Price ₹428',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Heels/heel4.jpeg'),
    title: 'GNIST ',
    track: 'Women Stiletto Heels',
    Price: '₹ 895',
    Best_Price: 'Best Price ₹688 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Heels/heel5.jpeg'),
    title: 'Shoetopia',
    track: 'Braided One Toe Block Heels',
    Price: '₹ 599',
    Best_Price: 'Best Price ₹490 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Heels/heel6.jpeg'),
    title: 'Denill',
    track: 'Textured Open Toe Block Heels ',
    Price: '₹ 499',
    Best_Price: 'Best Price ₹374 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Heels/heel7.jpeg'),
    title: 'DressBerry',
    track: 'Textured Block Heels',
    Price: '₹ 849',
    Best_Price: 'Best Price ₹649 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Heels/heel8.jpeg'),
    title: 'ADIVER',
    track: 'PU Block Heels',
    Price: '₹ 735',
    Best_Price: 'Best Price ₹505 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Heels/heel9.jpeg'),
    title: 'Gibelle',
    track: 'High-Top Block Heels',
    Price: '₹ 699',
    Best_Price: 'Best Price ₹524 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Heels/heel10.jpeg'),
    title: 'Denill',
    track: 'Embellished Block Heels',
    Price: '₹ 699',
    Best_Price: 'Best Price ₹524 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Heels/heel11.jpeg'),
    title: 'Mast & Harbour',
    track: 'Women Solid Heels',
    Price: '₹ 624',
    Best_Price: 'Best Price ₹468 ',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Heels/heel12.jpeg'),
    title: 'OPHELIA',
    track: 'Double Straps Platform Heels',
    Price: '₹ 699',
    Best_Price: 'Best Price ₹449 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Heels/heel13.jpeg'),
    title: 'DressBerry',
    track: 'Women Ballerinas Flats',
    Price: '₹ 799',
    Best_Price: 'Best Price ₹599 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Heels/heel14.jpeg'),
    title: 'GNIST',
    track: 'Women Mules Heels',
    Price: '₹ 892',
    Best_Price: 'Best Price ₹642',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Heels/heel15.jpeg'),
    title: 'ICONICS',
    track: 'Women Embellish Open Toe Flats ',
    Price: '₹ 624',
    Best_Price: 'Best Price ₹468',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Heels/heel16.jpeg'),
    title: 'Denill',
    track: 'Women Ballerians Heels',
    Price: '₹ 799',
    Best_Price: 'Best Price ₹599 ',
    qty:0
  },
]



const Heels = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>{t('common.heels')} </Text>
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

export default Heels;