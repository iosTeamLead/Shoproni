import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Daily/daily1.jpeg'),
    title: '0-DEGREE',
    track: `Men's Running Shorts`,
    Price: '₹ 737',
    Best_Price: 'Best Price ₹599',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Daily/daily2.jpeg'),
    title: 'Real Basics',
    track: `Real Basics Women's Cotton Animal Print Pajama Set Pack of 2`,
    Price: '₹ 999',
    Best_Price: 'Best Price ₹849 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Daily/daily3.jpeg'),
    title: 'LEOTUDE',
    track: `Men's Oversized Cottonblend Round Neck Half Sleeve Drop Shoulder Regular Fit T-shirt`,
    Price: '₹ 289',
    Best_Price: 'Best Price ₹209 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Daily/daily4.jpeg'),
    title: 'DHRUVI',
    track: `Real Basics Women's Cotton Printed Pyjama pack of 2`,
    Price: '₹ 749',
    Best_Price: 'Best Price ₹642',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Daily/daily5.jpeg'),
    title: 'ENDEAVOUR',
    track: `Men's Regular Fit Trackpants`,
    Price: '₹ 498',
    Best_Price: 'Best Price ₹378',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Daily/daily6.jpeg'),
    title: 'DHRUVI',
    track: 'DHRUVI TRENDZ Womens Pajama Set',
    Price: '₹ 559',
    Best_Price: 'Best Price ₹452 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Daily/daily7.jpeg'),
    title: 'Lymio',
    track: 'Lymio Men Pants',
    Price: '₹ 449',
    Best_Price: 'Best Price ₹399 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Daily/daily8.jpeg'),
    title: 'GRECIILOOKS',
    track: 'Women Rayon Coord Set',
    Price: '₹ 599',
    Best_Price: 'Best Price ₹503 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Daily/daily9.jpeg'),
    title: 'CBlue',
    track: `Men's Outdoor Quick Dry Lightweight Sports Shorts Zipper Pockets`,
    Price: '₹ 479',
    Best_Price: 'Best Price ₹366 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Daily/daily10.jpeg'),
    title: 'OOMPH',
    track: 'Myx Short Kurtis for Women| Cotton Kurtis',
    Price: '₹ 399',
    Best_Price: 'Best Price ₹229 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Daily/daily11.jpeg'),
    title: 'Lymio',
    track: 'Men Regular Fit Track Pant ',
    Price: '₹ 399',
    Best_Price: 'Best Price ₹346',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Daily/daily12.jpeg'),
    title: 'NAINVISH',
    track: 'Ethnic Kaftan Co Ord Pant Set | Casual Wear Kaftan Pant & Top Set ',
    Price: '₹ 499',
    Best_Price: 'Best Price ₹349 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Daily/daily13.jpeg'),
    title: 'ALCiS Men',
    track: 'Charcoal Typography Printed Track Pants',
    Price: '₹ 934',
    Best_Price: 'Best Price ₹774 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Daily/daily14.jpeg'),
    title: 'OOMPH',
    track: 'Crepe Maxi Dress for Women',
    Price: '₹ 399',
    Best_Price: 'Best Price ₹279',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Daily/daily15.jpeg'),
    title: 'XYXX',
    track: `Men's Super Combed Cotton Checkered Checkmate Pyjamas Elasticated Waist, Drawstring`,
    Price: '₹ 775',
    Best_Price: 'Best Price ₹689 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Daily/daily16.jpeg'),
    title: 'Leriya Fashion',
    track: 'Ethnic Co Ord Set for Women Kurta Set for Women',
    Price: '₹ 539',
    Best_Price: 'Best Price ₹449 ',
    qty:0
  },
]



const DailyWear = () => {
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
      <View style={{ alignItems: 'center', marginBottom: 40, marginHorizontal: 10,bottom:10 ,marginVertical:20}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{ selectedItem: item })}>
        <Image source={item?.image} resizeMode='contain' style={{ height: 180, width: 180, }} />
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Daily Wear </Text>
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

export default DailyWear;