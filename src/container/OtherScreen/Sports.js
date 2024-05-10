import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Sports/sport1.jpeg'),
    title: 'FEROC',
    track: 'FEROC 2 Pieces Aluminium Badminton Racket with 3 Pieces Feather Shuttles with Full-Cover Set,Aluminum, Multicolor',
    Price: '₹ 500',
    Best_Price: 'Best Price ₹379',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Sports/sport2.jpeg'),
    title: 'HUNDRED',
    track: 'HUNDRED Aluminium Powertek 100 (Set of 2) Badminton Racket with Full Cover (115G, Black/Orange)',
    Price: '₹ 569',
    Best_Price: 'Best Price ₹378 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Sports/sport3.jpeg'),
    title: 'Nivia',
    track: 'Nivia Craters Volleyball/Rubber Moulded Volleyball/for Indoor/Outdoor/for Men/Women Size - 4 (Yellow/Blue)',
    Price: '₹ 399',
    Best_Price: 'Best Price ₹308 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Sports/sport4.jpeg'),
    title: 'Vifitkit',
    track: 'Vifitkit Cricket Stumps with Stand Cricket Kit Plastic Wickets for Cricket Standard Wickets for Cricket Ground, Match, Tournament Stump with Stand & Bails ',
    Price: '₹ 239',
    Best_Price: 'Best Price ₹200',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Sports/sport5.jpeg'),
    title: 'Jaspo SLOG',
    track: 'Jaspo SLOG Plastic Tennis Cricket Bat Full Size Bat (34” X 4.5” inch) for All Age Group (SLOG Cricket BAT)',
    Price: '₹ 399',
    Best_Price: 'Best Price ₹299',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Sports/sport6.jpeg'),
    title: 'SG',
    track: 'Cricket Bat Full Size Popular Willow SG Cricket Bat with Bat Cover Play for Tennis Ball | Rubber Ball | Plastic Ball (Black & White)',
    Price: '₹ 795',
    Best_Price: 'Best Price ₹597 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Sports/sport7.jpeg'),
    title: 'Volatility',
    track: 'Volatility Red&White Hand Stich Football Size-05 (2022 White Qtr-0001)',
    Price: '₹ 499',
    Best_Price: 'Best Price ₹279 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Sports/sport8.jpeg'),
    title: 'WRF',
    track: 'WRF | World cupa Hand Stich Football Size-05 (MFC with Pump-01A22)',
    Price: '₹ 499',
    Best_Price: 'Best Price ₹343 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Sports/sport9.jpeg'),
    title: 'Vector',
    track: 'Vector X Power Basketball with Free Air Needle (Color : Black-White-Blue) (Size-7) Pack of 1',
    Price: '₹ 423',
    Best_Price: 'Best Price ₹368 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Sports/sport10.jpeg'),
    title: 'Nivia',
    track: 'Nivia Graffiti Basketball/Material Rubber/Rubberized Moulded/Panel 8/Suitable for: Indoors Matches',
    Price: '₹ 417',
    Best_Price: 'Best Price ₹364',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Sports/sport11.jpeg'),
    title: 'Apolestar',
    track: 'Apolestar Solid Wooden Basebat Combo with Hockey Stick for Men/Women/Boy Practice and Self Defence Hockey Stick - 36 inch',
    Price: '₹ 629',
    Best_Price: 'Best Price ₹470',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Sports/sport12.jpeg'),
    title: 'Liffo',
    track: 'Liffo® LX-1001 Hockey Sticks for Men and Women Practice and Beginner Level with 1 Ball and 1 Cover ',
    Price: '₹ 649',
    Best_Price: 'Best Price ₹549 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Sports/sport13.jpeg'),
    title: 'Nivia',
    track: 'Nivia VB-492 Spot Volleyball, Size 4, Rubber, Multicolour',
    Price: '₹ 1,049',
    Best_Price: 'Best Price ₹829',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Sports/sport14.jpeg'),
    title: 'JTC',
    track: 'JTC 32x32 inch Superior Matte Finish Practice Carrom Board for Kids for Serious Professional Practice with Coins Striker and Powder Beige (Black, Large -32 inch)',
    Price: '₹ 1,499',
    Best_Price: 'Best Price ₹1,197 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Sports/sport15.jpeg'),
    title: 'PALM ROYAL',
    track: 'PALM ROYAL HANDICRAFTS Wooden Handmade Foldable Magnetic Chess Board Set Wooden with Magnetic Pieces and Extra Queens for Kids and Adults (12x12 Inches, Brown)',
    Price: '1,599',
    Best_Price: 'Best Price ₹1,239 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Sports/sport16.jpeg'),
    title: 'IBAZAR',
    track: 'IBAZAR SG complete Cricket Kit with Helmet Leather Ball for 11 to 14 Year Boy Multicolor Size 6',
    Price: '₹ 8,600',
    Best_Price: 'Best Price ₹7,699',
    qty:0
  },
]



const Sports = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Trolly Bag</Text>
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

export default Sports;