import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Curtains/curtain1.jpeg'),
    title: 'Kraftiq Homes',
    track: '2 Pieces Long Window Curtains',
    Price: '₹ 959',
    Best_Price: 'Best Price ₹759 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Curtains/curtain2.jpeg'),
    title: 'HOMEMONDE',
    track: '2 Pieces Long Window Curtains',
    Price: '₹ 799',
    Best_Price: 'Best Price ₹621 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Curtains/curtain3.jpeg'),
    title: 'Home Sizzler',
    track: '2 Pieces Long Window Curtains',
    Price: '₹ 839',
    Best_Price: 'Best Price ₹652 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Curtains/curtain4.jpeg'),
    title: 'Fashion String',
    track: '3 Pieces Long Door Curtains',
    Price: '₹ 899',
    Best_Price: 'Best Price ₹699',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Curtains/curtain5.jpeg'),
    title: 'Cortina',
    track: 'Set of 2 Door Curtains',
    Price: '₹ 545',
    Best_Price: 'Best Price ₹423 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Curtains/curtain6.jpeg'),
    title: 'BELLA TRUE',
    track: 'Set of 2Printed Door Curtains ',
    Price: '₹ 674',
    Best_Price: 'Best Price ₹534 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Curtains/curtain7.jpeg'),
    title: 'SPACES',
    track: 'Set of 2 Colourblocked Long Door Curtain',
    Price: '₹ 953',
    Best_Price: 'Best Price ₹789 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Curtains/curtain8.jpeg'),
    title: 'URBAN SPACE',
    track: 'Set of 2 Floral Door Curtains',
    Price: '₹ 599',
    Best_Price: 'Best Price ₹466',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Curtains/curtain9.jpeg'),
    title: 'Homefab INDIA',
    track: 'Unisex Curtains and Sheers',
    Price: '₹ 589',
    Best_Price: 'Best Price ₹436 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Curtains/curtain10.jpeg'),
    title: 'SWAYAM',
    track: 'Set of 2 Silk Door Curtains',
    Price: '₹ 740',
    Best_Price: 'Best Price ₹593 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Curtains/curtain11.jpeg'),
    title: 'Cortina',
    track: '2Pieces Printed Door Curtains',
    Price: '₹ 614',
    Best_Price: 'Best Price ₹535',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Curtains/curtain12.jpeg'),
    title: 'Lushomes',
    track: 'Multicoloured Digital 3D Printed Marine Window Curtain',
    Price: '₹ 971',
    Best_Price: 'Best Price ₹822 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Curtains/curtain13.jpeg'),
    title: 'LUGAI FASHION',
    track: 'The Lugai Fashion 3d Printed Curtain for Room darkning',
    Price: '₹ 399',
    Best_Price: 'Best Price ₹354 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Curtains/curtain14.jpeg'),
    title: 'Aj Fashion',
    track: '3D Curtains Online - 3D Window Curtains ',
    Price: '₹ 439',
    Best_Price: 'Best Price ₹407 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Curtains/curtain15.jpeg'),
    title: 'UrbenQueen',
    track: 'Buy UrbenQueen 3D Flowers Design White Home Decor Fashion Curtain - 4 x 9 feet (Pack of 2)',
    Price: '699',
    Best_Price: 'Best Price ₹489 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Curtains/curtain16.jpeg'),
    title: 'BIANCA',
    track: 'Plain 3D Curtains Polyester Curtain',
    Price: '₹ 449',
    Best_Price: 'Best Price ₹339 ',
    qty:0
  },
]



const Curtains = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>CURTAINS </Text>
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

export default Curtains;