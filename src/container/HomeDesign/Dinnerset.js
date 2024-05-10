import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Dinnerset/dware1.jpeg'),
    title: 'Corelle',
    track: 'Corelle 12-Piece Dinnerware Set',
    Price: '₹ 10,921',
    Best_Price: 'Best Price ₹8,889 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Dinnerset/dware2.jpeg'),
    title: 'Corelle',
    track: 'Glass Corelle Dinnerware Set, For Home,Restaurant Etc, 14',
    Price: '₹ 5,029',
    Best_Price: 'Best Price ₹4,301 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Dinnerset/dware3.jpeg'),
    title: '	Rustic',
    track: 'Handcrafted artisanal double bead plates and meal bowls',
    Price: '₹ 895',
    Best_Price: 'Best Price ₹836 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Dinnerset/dware4.jpeg'),
    title: 'Ceramic',
    track: 'Ceramic Stoneware Dinnerware Set, No Of Piece: 22',
    Price: '₹ 4,225',
    Best_Price: 'Best Price ₹3,999',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Dinnerset/dware5.jpeg'),
    title: 'Cello',
    track: 'Mermaid Tales Hand-Painted Ceramic Dinner Set of 6 Dinner Plates and 6 Katori',
    Price: '₹ 4,659',
    Best_Price: 'Best Price ₹4,000 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Dinnerset/dware6.jpeg'),
    title: 'West Elm',
    track: ' Kaloh Stoneware Dinnerware ',
    Price: '₹ 2,600',
    Best_Price: 'Best Price ₹2,200 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Dinnerset/dware7.jpeg'),
    title: 'Pepperfry',
    track: 'Basics 6 Pcs Silver Stainless Steel Dinnerware Set ',
    Price: '₹ 459',
    Best_Price: 'Best Price ₹399 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Dinnerset/dware8.jpeg'),
    title: 'Shri & Sam',
    track: 'Stainless Steel Delight Solid Dinner Set, 16 Pieces',
    Price: '₹ 1,049',
    Best_Price: 'Best Price ₹999',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Dinnerset/dware9.jpeg'),
    title: '	CORELLE',
    track: ' Service for 6 Chip Resistant Glass Dinnerware Set, Portofino -18-Piece ',
    Price: '₹ 2,140',
    Best_Price: 'Best Price ₹2,099 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Dinnerset/dware10.jpeg'),
    title: 'Earthen',
    track: 'ExclusiveLane  Hand Glazed Ceramic Plates For Dinne  ',
    Price: '₹ 2,949',
    Best_Price: 'Best Price ₹2,399 ',
    qty:0
  },

]



const Dinnerset = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Dinnernware </Text>
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









// Stainless Steel Dinner Set at Rs 1950/set in Palanpur | ID: 18970428297
export default Dinnerset