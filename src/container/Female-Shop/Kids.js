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
    image: require('../../assets/Kids/kid1.jpeg'),
    title: 'ahhaaa',
    track: 'Boys Kurta With Pyjamas',
    Price: '₹ 479',
    Best_Price: 'Best Price ₹359 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Kids/kid2.jpeg'),
    title: 'HellCAT',
    track: 'Floral  A-Line Cotton Dress',
    Price: '₹ 950',
    Best_Price: 'Best Price ₹731 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Kids/kid3.jpeg'),
    title: 'H & M  ',
    track: 'Boys Solid Suit Trousers ',
    Price: '₹ 699',
    Best_Price: 'Best Price ₹480',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Kids/kid4.jpeg'),
    title: 'BASED ',
    track: 'Girls Floral Printed Dress',
    Price: '₹ 639',
    Best_Price: 'Best Price ₹479 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Kids/kid5.jpeg'),
    title: 'Monte Carlo',
    track: 'Boys Superstretch T-shirt and Slim Fit Jeans',
    Price: '₹ 899',
    Best_Price: 'Best Price ₹740 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Kids/kid6.jpeg'),
    title: 'Aarika',
    track: 'Girls Net Fit & Flare Dress ',
    Price: '₹ 599',
    Best_Price: 'Best Price ₹449 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Kids/kid7.jpeg'),
    title: 'BT DEZINES',
    track: 'Boys Kurta With Pyjamas',
    Price: '₹ 899',
    Best_Price: 'Best Price ₹691 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Kids/kid8.jpeg'),
    title: 'Sangria',
    track: 'Girls Fit & Flare Dress',
    Price: '₹ 790',
    Best_Price: 'Best Price ₹630 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Kids/kid9.jpeg'),
    title: 'Googo Gaaga',
    track: 'Printed Cotton T-shirt & Jeans',
    Price: '₹ 499',
    Best_Price: 'Best Price ₹387 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Kids/kid10.jpeg'),
    title: 'BAESD',
    track: 'Cotton Maxi Dress',
    Price: '₹ 699',
    Best_Price: 'Best Price ₹599 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Kids/kid11.jpeg'),
    title: 'Antheaa',
    track: 'Boys 2-Piece Cotton Set',
    Price: '₹ 618',
    Best_Price: 'Best Price ₹578 ',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Kids/kid12.jpeg'),
    title: 'Cutekins',
    track: 'Fit & Flare Maxi Dress',
    Price: '₹ 454',
    Best_Price: 'Best Price ₹359 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Kids/kid13.jpeg'),
    title: 'Pepe Jeans',
    track: 'Combo Of Shirt-Pant For Boys',
    Price: '₹ 789',
    Best_Price: 'Best Price ₹675 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Kids/kid14.jpeg'),
    title: 'Sangria',
    track: 'Girls Cotton Kurti & Sharara',
    Price: '₹ 699',
    Best_Price: 'Best Price ₹524 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Kids/kid15.jpeg'),
    title: 'INCLUD',
    track: 'Boys Printed Clothing Set ',
    Price: '₹ 679',
    Best_Price: 'Best Price ₹509',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Kids/kid16.jpeg'),
    title: 'BAESD',
    track: 'Girl Floral Fit & Flare Dress',
    Price: '₹ 629',
    Best_Price: 'Best Price ₹472 ',
    qty:0
  },
]



const Kids = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>{t('common.top')} </Text>
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

export default Kids;