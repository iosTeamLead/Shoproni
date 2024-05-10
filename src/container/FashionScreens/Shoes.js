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
    image: require('../../assets/Shoes/shoes1.jpeg'),
    title: 'El Paso',
    track: 'Men Perforated Sneakers',
    Price: '₹ 1,199',
    Best_Price: 'Best Price ₹799 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Shoes/shoes2.jpeg'),
    title: 'Hush Puppies',
    track: 'Men Brown Perforations Leather Sneakers',
    Price: '₹ 2,999',
    Best_Price: 'Best Price ₹2,699 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Shoes/shoes3.jpeg'),
    title: 'Jack & Jones',
    track: 'Men Woven Design Sneakers',
    Price: '₹ 1,499',
    Best_Price: 'Best Price ₹1,199 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Shoes/shoes4.jpeg'),
    title: 'Metro ',
    track: 'Men Leather Loafers',
    Price: '₹ 1,479',
    Best_Price: 'Best Price ₹1,179 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Shoes/shoes5.jpeg'),
    title: 'Buckaroo',
    track: 'Men  Leather Derbys',
    Price: '₹ 3,899',
    Best_Price: 'Best Price ₹3,599 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Shoes/shoes6.jpeg'),
    title: 'Buckaroo',
    track: 'Men Vegan Leather Derbys',
    Price: '₹ 2,999',
    Best_Price: 'Best Price ₹2,599 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Shoes/shoes7.jpeg'),
    title: 'Roadster',
    track: 'Men Lightweight Sneakers',
    Price: '₹ 899',
    Best_Price: 'Best Price ₹499 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Shoes/shoes8.jpeg'),
    title: 'U.S. Polo Assn.',
    track: 'Men Sneakers',
    Price: '₹ 1699',
    Best_Price: 'Best Price ₹1,399',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Shoes/shoes9.jpeg'),
    title: 'Flying Machine ',
    track: 'Men Comfort Insole Sneakers',
    Price: '₹ 2,249',
    Best_Price: 'Best Price ₹1,949 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Shoes/shoes10.jpeg'),
    title: 'U.S. Polo Assn.',
    track: 'Men Lace-Up Sneakers',
    Price: '₹ 2,150',
    Best_Price: 'Best Price ₹1,850 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Shoes/shoes11.jpeg'),
    title: 'ASIAN',
    track: 'Men Colourblocked Sneakers',
    Price: '₹ 899',
    Best_Price: 'Best Price ₹599 ',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Shoes/shoes12.jpeg'),
    title: 'Bxxy',
    track: 'Men Textured Tassel Loafers',
    Price: '₹ 1,385',
    Best_Price: 'Best Price ₹999 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Shoes/shoes13.jpeg'),
    title: 'Mactree',
    track: 'Men Textured Suede Core',
    Price: '₹ 999',
    Best_Price: 'Best Price ₹659 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Shoes/shoes14.jpeg'),
    title: 'Bollero',
    track: 'Men Lightweight Sneakers',
    Price: '₹ 849',
    Best_Price: 'Best Price ₹639 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Shoes/shoes15.jpeg'),
    title: 'Airson',
    track: 'Men Running Shoes',
    Price: '₹ 1,495',
    Best_Price: 'Best Price ₹1,195',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Shoes/shoes16.jpeg'),
    title: 'BERSACHE',
    track: 'Easy Lightweight Running Shoes',
    Price: '₹ 1,468',
    Best_Price: 'Best Price ₹1,168 ',
    qty:0
  },
]



const Shoes = () => {
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
      <View style={{ alignItems: 'center', marginBottom: 40, marginHorizontal: 10,bottom:10 ,marginVertical:20}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{ selectedItem: item })}>
        <Image source={item?.image} resizeMode='contain' style={{ height: 180, width: 180,right:35 }} />
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>{t('common.shoes')} </Text>
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

export default Shoes;