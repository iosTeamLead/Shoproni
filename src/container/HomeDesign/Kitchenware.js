import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Kitchen/kitchen1.jpeg'),
    title: 'Shining',
    track: 'Shining Premium Quality Mirror Finish Stainless Steel Vessels for kitchen',
    Price: '₹ 544',
    Best_Price: 'Best Price ₹499',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Kitchen/kitchen2.jpeg'),
    title: 'FORTUNA',
    track: 'FORTUNA KITCHENWARE-700Ml,Heavy Gauge Dahi Handi',
    Price: '₹ 329',
    Best_Price: 'Best Price ₹4,279 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Kitchen/kitchen3.jpeg'),
    title: 'SeaRegal',
    track: 'Stainless Steel 1.5 LTR Tea Pan',
    Price: '₹ 396',
    Best_Price: 'Best Price ₹346 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Kitchen/kitchen4.jpeg'),
    title: 'HAZEL',
    track: 'Aluminium Cookware with Handle | Cooking Utensil, 500 ml with 4 mm Thickness',
    Price: '₹ 1,649',
    Best_Price: 'Best Price ₹1,349',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Kitchen/kitchen5.jpeg'),
    title: 'NIRLON',
    track: 'Special Cooking Pots and Pans Non-Stick Cookware Set 3-Pieces Kadai 2 Liter, Deep Kadai with Lid Big 2.6 Liter, Sauce Pan Big 1.8 Liter only Gas Cooktop Compatible"Premier Quality',
    Price: '₹ 1,459',
    Best_Price: 'Best Price ₹1,259 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Kitchen/kitchen6.jpeg'),
    title: 'IndiaMart',
    track: 'Utopia Kitchen Stainless Steel Cooking Utensil Set - 5-Piece Serving Spoons',
    Price: '₹ 900',
    Best_Price: 'Best Price ₹750 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Kitchen/kitchen7.jpeg'),
    title: 'IndiaMart',
    track: 'Induction cooktops are known for their incredible precision',
    Price: '₹ 1,459',
    Best_Price: 'Best Price ₹1,299 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Kitchen/kitchen8.jpeg'),
    title: 'Geek',
    track: 'Geek Robocook Zeta Electric Cooker | 2 Years Warranty ',
    Price: '₹ 1,049',
    Best_Price: 'Best Price ₹999',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Kitchen/kitchen9.jpeg'),
    title: '	Hawkins',
    track: ' Hawkins 3 Litre Instaa Pressure Cooker',
    Price: '₹ 2,109',
    Best_Price: 'Best Price ₹1,999 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Kitchen/kitchen10.jpeg'),
    title: 'Hawkins',
    track: 'Hawkins 1.5 Litre Pressure Cooker Contura ',
    Price: '₹ 1,080',
    Best_Price: 'Best Price ₹980 ',
    qty:0
  },

]



const Kitchenware = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Kitchenware </Text>
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









export default Kitchenware