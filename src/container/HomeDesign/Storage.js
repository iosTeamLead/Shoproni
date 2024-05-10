import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Storage/store1.jpeg'),
    title: 'Afast',
    track: 'Drawer Multipurpose Drawer Plastic Modular Chest Storage Organizer',
    Price: '₹ 1,529',
    Best_Price: 'Best Price ₹1,209 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Storage/store2.jpeg'),
    title: 'ExclusiveLane',
    track: 'Dream Home Kitchen Storage Containers - Plastic, Blue, Printed, 500 ml (Set of 4)',
    Price: '₹ 179',
    Best_Price: 'Best Price ₹109 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Storage/store3.jpeg'),
    title: 'Dream Home',
    track: 'Home Kitchen Storage Containers - Plastic, DLX, Brown,750ml',
    Price: '₹ 129',
    Best_Price: 'Best Price ₹99 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Storage/store4.jpeg'),
    title: 'TIMBADIYA ',
    track: '1100 ML Square Airtight Storage Jar and Container organizer ',
    Price: '₹ 499',
    Best_Price: 'Best Price ₹404 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Storage/store5.jpeg'),
    title: 'Better Home',
    track: 'The Better Home Borosilicate Glass Jar for Kitchen Storage | Kitchen',
    Price: '₹ 2,269',
    Best_Price: 'Best Price ₹1,943 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Storage/store6.jpeg'),
    title: 'Home One',
    track: 'Home One Stylo Assorted Colour Plastic Container 280 ml (Set of 4) ',
    Price: '₹ 99',
    Best_Price: 'Best Price ₹69 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Storage/store7.jpeg'),
    title: 'BB Home',
    track: 'Home Glass Seal & Lock Lunch Box',
    Price: '₹ 249',
    Best_Price: 'Best Price ₹189 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Storage/store8.jpeg'),
    title: 'MARUTI ENTERPRISE',
    track: 'MK HOME Food Storage Containers For Fridge 1500Ml, Food Box Pack of 6',
    Price: '₹ 449',
    Best_Price: 'Best Price ₹363 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Storage/store9.jpeg'),
    title: 'Allo',
    track: 'Plastic containers with cereals. Home storage products.',
    Price: '₹ 339',
    Best_Price: 'Best Price ₹299 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Storage/store10.jpeg'),
    title: 'Hariware',
    track: 'Round Plastic Printed Airtight Container Set, For Home',
    Price: '₹ 270',
    Best_Price: 'Best Price ₹220 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Storage/store11.jpeg'),
    title: '	DE',
    track: 'Glass Food Storage Containers with Bamboo Lids (Pack of 4)',
    Price: '₹ 689',
    Best_Price: 'Best Price ₹630',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Storage/store12.jpeg'),
    title: 'Home One',
    track: 'Home One Stylo Assorted Colour Plastic Container 280 ml (Set of 4)',
    Price: '₹ 239',
    Best_Price: 'Best Price ₹189 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Storage/store13.jpeg'),
    title: 'Home One',
    track: 'Home One Stella Grey Square Plastic Container 5+ 9+ 12 L (Set of 3)',
    Price: '₹ 661',
    Best_Price: 'Best Price ₹594 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Storage/store14.jpeg'),
    title: 'Allo',
    track: 'Plastic Refrigerator Storage Box Transparent Fresh keeping - Temu',
    Price: '₹ 569',
    Best_Price: 'Best Price ₹443',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Storage/store15.jpeg'),
    title: 'Borosilicate',
    track: 'The Better Home Borosilicate Glass Containers With Silicone Sleeves & Lock Lid, 3 Pcs Set,',
    Price: '2,229',
    Best_Price: 'Best Price ₹1,928 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Storage/store16.jpeg'),
    title: 'Kadam Haat',
    track: 'KADAM- HAAT products are all natural, handcrafted & ENVIRONMENT FRIENDLY.',
    Price: '₹ 899',
    Best_Price: 'Best Price ₹789 ',
    qty:0
  },
]



const Storage = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Storage </Text>
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

export default Storage;