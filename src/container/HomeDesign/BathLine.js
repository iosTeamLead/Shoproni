import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Bath/bath1.jpeg'),
    title: 'KLOTTHE',
    track: 'White Color Bath Robe With Belt',
    Price: '₹ 599',
    Best_Price: 'Best Price ₹469 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Bath/bath2.jpeg'),
    title: 'RANGOLI',
    track: 'Black Color Bath Robe With Belt',
    Price: '₹ 899',
    Best_Price: 'Best Price ₹681 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Bath/bath3.jpeg'),
    title: 'SPACES',
    track: '1418 GSM Drlon Large Bat Mat',
    Price: '₹ 646',
    Best_Price: 'Best Price ₹502 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Bath/bath4.jpeg'),
    title: 'Pano',
    track: 'Solid 1600 GSM Bath Rug',
    Price: '₹ 500',
    Best_Price: 'Best Price ₹379',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Bath/bath5.jpeg'),
    title: 'Aura',
    track: 'SkyBlue Color Bath Towel',
    Price: '₹ 345',
    Best_Price: 'Best Price ₹273 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Bath/bath6.jpeg'),
    title: 'Nautica',
    track: 'SkyBlue Color Bath Towel',
    Price: '₹ 474',
    Best_Price: 'Best Price ₹354 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Bath/bath7.jpeg'),
    title: 'MUSH',
    track: 'Striped 300 GSM Beach Towel',
    Price: '₹ 1,053',
    Best_Price: 'Best Price ₹909 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Bath/bath8.jpeg'),
    title: 'American-Elm',
    track: 'Shower curtains of American-Elm Box Textured Light Blue Anti Bacteria',
    Price: '₹ 569',
    Best_Price: 'Best Price ₹466',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Bath/bath9.jpeg'),
    title: 'Kanushi',
    track: 'Self Design Printed Bathroom Shower Curtain / Transparent Curtains',
    Price: '₹ 199',
    Best_Price: 'Best Price ₹156 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Bath/bath10.jpeg'),
    title: 'Rosalind Wheeler',
    track: '83" H x 71" W Bettianne Floral Shower Curtain',
    Price: '₹ 799',
    Best_Price: 'Best Price ₹593 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Bath/bath11.jpeg'),
    title: 'Turkish',
    track: '3 Line Turkish Cotton Bath Towels (36 X 72), Machine And Hand Wash',
    Price: '₹ 546',
    Best_Price: 'Best Price ₹509',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Bath/bath12.jpeg'),
    title: 'Be You',
    track: 'Be You Kids Solid Cotton Bath Robe for Girls and Boys',
    Price: '₹ 471',
    Best_Price: 'Best Price ₹404 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Bath/bath13.jpeg'),
    title: 'SENSES',
    track: 'Plush Terry Cotton Unisex Bath Robe',
    Price: '₹ 1,158',
    Best_Price: 'Best Price ₹999 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Bath/bath14.jpeg'),
    title: 'Rangoli ',
    track: 'Rangoli 100% Cotton Bathrobe for Men ',
    Price: '₹ 679',
    Best_Price: 'Best Price ₹557 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Bath/bath15.jpeg'),
    title: 'Poorak Terry',
    track: 'Poorak Terry Men Bath robe Fit Upto 42 inches Rani',
    Price: '₹ 689',
    Best_Price: 'Best Price ₹499 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Bath/bath16.jpeg'),
    title: 'Abstract',
    track: 'Sand Free Quick Dry Abstract Face Line Beach Towel ',
    Price: '₹ 539',
    Best_Price: 'Best Price ₹449 ',
    qty:0
  },
]



const BathLine = () => {
  const dispatch = useDispatch();
const navigation=useNavigation()

const cartItems = useSelector(state => state.cart2.cartItems);

console.log('item',cartItems)

  const favorites = useSelector((state) => state.favorites.favorites);

  const isFavorite = (itemId) => favorites.some((item) => item.id === itemId);

  const handleToggleFavorite = (item) => {
    dispatch(toggleFavorite(item));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ alignItems: 'center', marginBottom: 40, marginHorizontal: 10,bottom:10 ,}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{ selectedItem: item })}>
        <Image source={item?.image} resizeMode='stretch' style={{ height: 180, width: 180, }} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'flex-start' }}>
          <Text style={[style.txt, { alignSelf: 'flex-start' }]}>{item?.title}</Text>
          <TouchableOpacity onPress={() => handleToggleFavorite(item)}>
            <Image
              source={isFavorite(item.id) ? require('../../assets/fillHeart.png') : require('../../assets/heart.png')}
              resizeMode='contain'
              style={[style.imge3, { marginHorizontal: 0 }]}
            />
          </TouchableOpacity>
        </View>
        <Text style={[style.txt2, { alignSelf: 'flex-start' }]}>{item?.track.substring(0, 24) + ('...')}</Text>
        <Text style={[style.txt, { alignSelf: 'flex-start' }]}>{item?.Price}</Text>
        <Text style={[style.txt, { color: 'green', fontSize: 12, alignSelf: 'flex-start' }]}>{item?.Best_Price}<Text style={style.txt2}>with coupon </Text></Text>

        
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={style.view}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/back.png')} style={{ width: 30, height: 30, alignSelf: 'flex-start', }} />
        </TouchableOpacity>
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>BathLine </Text>
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
    fontSize: 12,
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

export default BathLine;