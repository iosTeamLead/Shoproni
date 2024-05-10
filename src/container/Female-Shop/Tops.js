import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Tops/top1.jpeg'),
    title: 'Sangria',
    track: 'Floral Printed V-Neck Tops',
    Price: '₹ 444',
    Best_Price: 'Best Price ₹333 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Tops/top2.jpeg'),
    title: 'Fabflee',
    track: 'Sweetheart Neck Peplum Tops',
    Price: '₹ 489',
    Best_Price: 'Best Price ₹316 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Tops/top3.jpeg'),
    title: 'Harpa ',
    track: 'Women Floral Printed Tops ',
    Price: '₹ 339',
    Best_Price: 'Best Price ₹233 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Tops/top4.jpeg'),
    title: 'Roadster ',
    track: 'Self Design Crop Peplum Top',
    Price: '₹ 304',
    Best_Price: 'Best Price ₹209 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Tops/top5.jpeg'),
    title: 'Boleem',
    track: 'Floral Blouson Crop Top',
    Price: '₹ 350',
    Best_Price: 'Best Price ₹240 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Tops/top6.jpeg'),
    title: 'SASSAFRAS',
    track: 'Floral Printed Puff Sleeves Top',
    Price: '₹ 454',
    Best_Price: 'Best Price ₹304 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Tops/top7.jpeg'),
    title: 'Selvia',
    track: 'Tie Up Crop Shirt Style Top',
    Price: '₹ 373',
    Best_Price: 'Best Price ₹248 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Tops/top8.jpeg'),
    title: 'Sangria',
    track: 'Printed Cotton Peplum Top',
    Price: '₹ 436',
    Best_Price: 'Best Price ₹300 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Tops/top9.jpeg'),
    title: 'Kibo',
    track: 'Solid Floral Print  Crepe Top',
    Price: '₹ 417',
    Best_Price: 'Best Price ₹287 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Tops/top10.jpeg'),
    title: 'AAHWAN',
    track: 'Cotton Tank Crop Top',
    Price: '₹ 399',
    Best_Price: 'Best Price ₹299 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Tops/top11.jpeg'),
    title: 'Harvard',
    track: 'Relaxed Fit Crop T-shirt',
    Price: '₹ 418',
    Best_Price: 'Best Price ₹287 ',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Tops/top12.jpeg'),
    title: 'Berrylush',
    track: 'Solid Cropped Top',
    Price: '₹ 454',
    Best_Price: 'Best Price ₹312 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Tops/top13.jpeg'),
    title: 'Aadews',
    track: 'Floral Georgette Fitted Top',
    Price: '₹ 415',
    Best_Price: 'Best Price ₹285 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Tops/top14.jpeg'),
    title: 'Roadster',
    track: 'Floral Cotton Top',
    Price: '₹ 389',
    Best_Price: 'Best Price ₹253 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Tops/top15.jpeg'),
    title: 'BASED',
    track: 'Sweetheart Neck Crop Top ',
    Price: '₹ 399',
    Best_Price: 'Best Price ₹274',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Tops/top16.jpeg'),
    title: 'ETC',
    track: 'Women Printed Lounge T-Shirts',
    Price: '₹ 399',
    Best_Price: 'Best Price ₹299 ',
    qty:0
  },
]



const Tops = () => {
  const dispatch = useDispatch();
const navigation=useNavigation()

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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Tops & Tees </Text>
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

export default Tops;