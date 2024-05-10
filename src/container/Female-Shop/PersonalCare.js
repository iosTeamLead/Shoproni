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
    image: require('../../assets/Care/care1.jpeg'),
    title: 'Dove',
    track: 'Hair Fall Rescue Shampoo',
    Price: '₹ 530',
    Best_Price: 'Best Price ₹399 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Care/care2.jpeg'),
    title: 'Dove ',
    track: 'Fresh Moisture Bathing Soap',
    Price: '₹ 99',
    Best_Price: 'Best Price ₹68 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Care/care3.jpeg'),
    title: 'Garnier ',
    track: 'Color Naturals Creme Ammonia Free Hair Color',
    Price: '₹ 135',
    Best_Price: 'Best Price ₹99',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Care/care4.jpeg'),
    title: 'Clean & Clear ',
    track: 'Foaming Face Wash For Oily Skin',
    Price: '₹ 199',
    Best_Price: 'Best Price ₹172 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Care/care5.jpeg'),
    title: 'Vaseline',
    track: 'Intensive Care Deep Moisture Boy Lotion',
    Price: '₹ 200',
    Best_Price: 'Best Price ₹178 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Care/care6.jpeg'),
    title: 'Lakme',
    track: 'Lakmé Forever Matte Liquid Lip ',
    Price: '₹ 349',
    Best_Price: 'Best Price ₹289 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Care/care7.jpeg'),
    title: 'Whisper',
    track: 'Choice XL Thick Sanitary Pads',
    Price: '₹ 40',
    Best_Price: 'Best Price ₹29 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Care/care8.jpeg'),
    title: 'Veet',
    track: 'Professional Waxing Strips For Normal Skin',
    Price: '₹ 228',
    Best_Price: 'Best Price ₹200 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/h&S.jpeg'),
    title: 'Head & Shoulders',
    track: 'Anti Hair Fall Shampoo',
    Price: '₹ 369',
    Best_Price: 'Best Price ₹300 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Patanjli.jpeg'),
    title: 'Patanjali',
    track: 'Women Face-Wash & Sun Screen',
    Price: '₹ 230',
    Best_Price: 'Best Price ₹189 ',
    qty:0
  },
 
]



const PersonalCare = () => {
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
      <View style={{ alignItems: 'center', marginBottom: 40,  bottom: 10,marginVertical:20 }}>
       <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{ selectedItem: item })}>
        <Image source={item?.image} resizeMode='contain' style={{ height: 180, width: 180 }} />
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>{t('common.personal')} </Text>
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

export default PersonalCare;