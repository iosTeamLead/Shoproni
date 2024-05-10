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
    image: require('../../assets/Groom/groom1.jpeg'),
    title: 'Philips',
    track: 'Cordless Beard Trimmer BT3101',
    Price: '₹ 999',
    Best_Price: 'Best Price ₹699 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Groom/groom2.jpeg'),
    title: 'Ponds',
    track: 'Men Pimple Clear Facewash',
    Price: '₹ 259',
    Best_Price: 'Best Price ₹170 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Groom/groom3.jpeg'),
    title: 'Garnier',
    track: 'Men Turbo Bright Double Action Face Wash',
    Price: '₹ 191',
    Best_Price: 'Best Price ₹135 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Groom/groom4.jpeg'),
    title: 'Gillete kit ',
    track: 'Men Luxury Grooming Kit',
    Price: '₹ 700',
    Best_Price: 'Best Price ₹480 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Groom/groom5.jpeg'),
    title: 'NIOON',
    track: 'Fragrance-Free Beard Growing Oil',
    Price: '₹ 220',
    Best_Price: 'Best Price ₹199 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Groom/groom6.jpeg'),
    title: 'BEARDO',
    track: 'Hair Growth Hair Serum',
    Price: '₹ 168',
    Best_Price: 'Best Price ₹149 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Groom/groom7.jpeg'),
    title: 'CINTHOL',
    track: 'Refreshing Deo Soap',
    Price: '₹ 49',
    Best_Price: 'Best Price ₹30 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Groom/groom8.jpeg'),
    title: 'NIVEA',
    track: 'Men Deep Impact',
    Price: '₹ 99',
    Best_Price: 'Best Price ₹79 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Groom/groom9.jpeg'),
    title: 'Pick Ur Needs',
    track: 'Get effective hair drying with this hot and cold hairdryer',
    Price: '₹ 854',
    Best_Price: 'Best Price ₹799 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Groom/groom10.jpeg'),
    title: 'Weight Gainer',
    track: 'MuscleBlaze Weight Gainer with Added Digezyme, 2 kg (4.4 lb), Chocolate',
    Price: '₹ 1,899',
    Best_Price: 'Best Price ₹1,793 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/trimmer.jpeg'),
    title: 'BEARDO',
    track: 'Men Series 3 Dry Flex Trimmer',
    Price: '₹ 2,499',
    Best_Price: 'Best Price ₹2,233 ',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/h&S.jpeg'),
    title: 'Head & Shoulders ',
    track: 'Head & Shoulders Men Charcoal Anti-Dandruff 2in1 Shampoo, 12.8 fl oz',
    Price: '₹ 1388',
    Best_Price: 'Best Price ₹924 ',
    qty:0
  },
 
]



const Grooming = () => {
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
      <View style={{ alignItems: 'center', marginBottom: 40, bottom:10,top:10 }}>
        <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{ selectedItem: item })}>
        <Image source={item?.image} resizeMode='contain' style={{ height: 180, width: 180,marginRight:50}} />
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>{t('common.grooming')}</Text>
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
      <FlatList style={{marginBottom:20}}
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

export default Grooming;