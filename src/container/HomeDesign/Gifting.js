import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Deco/deco1.jpeg'),
    title: 'Discount ARA',
    track: 'Home Decorative Items Brand',
    Price: '₹ 649',
    Best_Price: 'Best Price ₹589 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Deco/deco2.jpeg'),
    title: 'SANDED EDGE',
    track: 'Contemporary Shelf Lamp',
    Price: '₹ 3,679',
    Best_Price: 'Best Price ₹3,221 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Deco/deco3.jpeg'),
    title: 'SANDED EDGE',
    track: 'Traditional Column Lamp',
    Price: '₹ 1,995',
    Best_Price: 'Best Price ₹1,756 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Deco/deco4.jpeg'),
    title: 'OLIVE TREE',
    track: 'Floral and Botanical Wall Art',
    Price: '₹ 1,065',
    Best_Price: 'Best Price ₹909',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Deco/deco5.jpeg'),
    title: 'Art Street',
    track: 'Set of Photo Frames',
    Price: '₹ 835',
    Best_Price: 'Best Price ₹730 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Deco/deco6.jpeg'),
    title: 'Niharika Creations',
    track: ' Pair of Bird showpiece for Home Decor ',
    Price: '₹ 370',
    Best_Price: 'Best Price ₹304 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Deco/deco7.jpeg'),
    title: 'nantan',
    track: 'nantan Birds Couple Showpiece for Home Decoration',
    Price: '₹ 616',
    Best_Price: 'Best Price ₹549 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Deco/deco8.jpeg'),
    title: 'Blissful Deco',
    track: 'This panther figurine of a magnificently muscular animal predator is inspired by the wildlife.',
    Price: '₹ 1,999',
    Best_Price: 'Best Price ₹1,466',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Deco/deco9.jpeg'),
    title: 'AFTERSTITCH',
    track: ' Welcome Dog Showpiece Statue for Door Entrance Decoration',
    Price: '₹ 348',
    Best_Price: 'Best Price ₹299 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Deco/deco10.jpeg'),
    title: 'Handicrafts',
    track: 'Brown Traditional Handmade Leather Camel For Home Decor Gift Item, For Decoration',
    Price: '₹ 1,540',
    Best_Price: 'Best Price ₹1,393 ',
    qty:0
  },

]



const Gifting = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Gifting </Text>
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

export default Gifting;






