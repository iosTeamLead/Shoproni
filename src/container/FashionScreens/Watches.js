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
    image: require('../../assets/Watch/watch1.jpeg'),
    title: 'HAMMER',
    track: 'Round dial Glide bluetooth calling smart watch ',
    Price: '₹ 1,499',
    Best_Price: 'Best Price ₹1,049 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Watch/watch2.jpeg'),
    title: 'GIXON',
    track: 'Silicone Smartwatch Watch For Men ',
    Price: '₹ 1,200',
    Best_Price: 'Best Price ₹999 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Watch/watch3.jpeg'),
    title: 'MisFit',
    track: 'Misfit Men Rose Gold-Toned Display Smart Watch MIS7008',
    Price: '₹ 13,550',
    Best_Price: 'Best Price ₹10,000 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Watch/watch4.jpeg'),
    title: 'HAMT',
    track: 'Men Brass Dial & Watch',
    Price: '₹ 699',
    Best_Price: 'Best Price ₹449 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Watch/watch5.jpeg'),
    title: 'TITAN',
    track: 'Unisex Modern Watch ',
    Price: '₹ 6,110',
    Best_Price: 'Best Price ₹5,810 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Watch/watch6.jpeg'),
    title: 'TITAN',
    track: 'Men Dial Watch',
    Price: '₹ 3,995',
    Best_Price: 'Best Price ₹2,965 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Watch/watch7.jpeg'),
    title: 'Sonata',
    track: 'Men Dial Watch ',
    Price: '₹ 1,545',
    Best_Price: 'Best Price ₹807 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Watch/watch8.jpeg'),
    title: 'BRISTON',
    track: 'Men Chronograph Watch',
    Price: '₹ 7,999',
    Best_Price: 'Best Price ₹6,199 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Watch/watch9.jpeg'),
    title: 'Timex',
    track: 'Men Bracelet Analogue Watch',
    Price: '₹ 2,271',
    Best_Price: 'Best Price ₹1,971 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Watch/watch10.jpeg'),
    title: 'Omax',
    track: 'Unisex Men Watch',
    Price: '₹ 2,395',
    Best_Price: 'Best Price ₹1,293 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Watch/watch11.jpeg'),
    title: 'Army',
    track: 'Solider Watch For Men ',
    Price: '₹ 899',
    Best_Price: 'Best Price ₹599 ',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Watch/watch12.jpeg'),
    title: 'Police',
    track: 'Men Leather Straps Watch',
    Price: '₹ 10,999',
    Best_Price: 'Best Price ₹8,499 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Watch/watch13.jpeg'),
    title: 'ROAMER',
    track: 'Men Stainless Steel Watch',
    Price: '₹ 59,850',
    Best_Price: 'Best Price ₹54,999 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Watch/watch14.jpeg'),
    title: 'GUESS',
    track: 'Men Stainless Steel Straps Watch',
    Price: '₹ 5,097',
    Best_Price: 'Best Price ₹4,797 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Watch/watch15.jpeg'),
    title: 'Helix',
    track: 'Men Bracelet Analouge Watch',
    Price: '₹ 1,013',
    Best_Price: 'Best Price ₹779 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/watch.jpeg'),
    title: 'boAt',
    track: 'The Multi Feature Watch',
    Price: '₹ 1,110',
    Best_Price: 'Best Price ₹990 ',
    qty:0
  },
]



const Watches = () => {
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
      <View style={{ alignItems: 'center', marginBottom: 40, marginHorizontal: 10,bottom:10 }}>
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>{t('common.watches')} </Text>
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

export default Watches;