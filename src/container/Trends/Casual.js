import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Casual/casual1.jpeg'),
    title: 'Dennis Lingo',
    track: `Men's Checked Print Button Down Regular Fit Casual Shirt`,
    Price: '₹ 861',
    Best_Price: 'Best Price ₹759',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Casual/casual2.jpeg'),
    title: 'Symbol',
    track: `Women's Wide Leg 4-Way Stretch Formal Trousers`,
    Price: '₹ 1,599',
    Best_Price: 'Best Price ₹1,119',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Casual/casual3.jpeg'),
    title: 'Lymio',
    track: `Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt`,
    Price: '₹ 379',
    Best_Price: 'Best Price ₹289 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Casual/casual4.jpeg'),
    title: 'Leriya',
    track: `Women Co Ord Set | Ribbed Pajama Set | Casual Wear Pant Top Set`,
    Price: '₹ 489',
    Best_Price: 'Best Price ₹342',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Casual/casual5.jpeg'),
    title: 'Majestic',
    track: `Man Slim Fit Cotton Casual Printed Shirt for Men`,
    Price: '₹ 429',
    Best_Price: 'Best Price ₹348',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Casual/casual6.jpeg'),
    title: 'KOTTY',
    track: `Women Polyester Blend Solid Trousers`,
    Price: '₹ 299',
    Best_Price: 'Best Price ₹239 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Casual/casual7.jpeg'),
    title: 'FINIVO',
    track: `Men's Cotton Regular Fit Casual Shirt`,
    Price: '₹ 499',
    Best_Price: 'Best Price ₹359 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Casual/casual8.jpeg'),
    title: 'RIGO',
    track: 'Casual Wear V Neck Rib Knit Top for Women',
    Price: '₹ 416',
    Best_Price: 'Best Price ₹325 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Casual/casual9.jpeg'),
    title: 'DHRUVI',
    track: `Men's Regular Fit Shirt`,
    Price: '₹ 289',
    Best_Price: 'Best Price ₹259 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Casual/casual10.jpeg'),
    title: 'Cinders',
    track: ` Women's Cotton Casual Regular Fit Extra Comfort 3/4 Sleeve Formal Shirt for Any Occasions`,
    Price: '₹ 499',
    Best_Price: 'Best Price ₹389 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Casual/casual11.jpeg'),
    title: 'Leriya',
    track: 'Shirt for Men | Tropical Leaf Printed Rayon Shirts for Men  ',
    Price: '₹ 289',
    Best_Price: 'Best Price ₹249',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Casual/casual12.jpeg'),
    title: 'PURVAJA',
    track: `PURVAJA Women's Maxi Dress`,
    Price: '₹ 459',
    Best_Price: 'Best Price ₹371 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Casual/casual13.jpeg'),
    title: 'Campus',
    track: `Men's Shirt for Casual Wear | Spread Collar `,
    Price: '₹ 664',
    Best_Price: 'Best Price ₹554 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Casual/casual14.jpeg'),
    title: 'KOTTY',
    track: `Women's Solid Relaxed Fit Full Sleeve Co-ord Blazer and Trouser Set.`,
    Price: '₹ 739',
    Best_Price: 'Best Price ₹679',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Casual/casual15.jpeg'),
    title: 'IndoPrimo',
    track: ` Men's Regular Fit Casual Shirt`,
    Price: '₹ 476',
    Best_Price: 'Best Price ₹376',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Casual/casual16.jpeg'),
    title: 'KOTTY',
    track: `Women's High Rise Viscose Rayon Relaxed Fit Korean Trousers`,
    Price: '₹ 299',
    Best_Price: 'Best Price ₹219 ',
    qty:0
  },
]



const Casual = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Casual Wear </Text>
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

export default Casual;