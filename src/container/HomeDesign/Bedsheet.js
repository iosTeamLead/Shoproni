import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/BedLine/sheet1.jpeg'),
    title: 'KLOTTHE',
    track: 'Queen Bedsheet & Pillow Covers',
    Price: '₹ 620',
    Best_Price: 'Best Price ₹482 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/BedLine/sheet2.jpeg'),
    title: 'Home Sizzler',
    track: '210 TC Queen & 2 Pillow Cover',
    Price: '₹ 279',
    Best_Price: 'Best Price ₹409 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/BedLine/sheet3.jpeg'),
    title: 'URBAN SPACE',
    track: 'Queen Bedsheet & Pillow Covers',
    Price: '₹ 799',
    Best_Price: 'Best Price ₹621 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/BedLine/sheet4.jpeg'),
    title: 'MYTRIDENT ',
    track: 'Queen Bedsheet & Pillow Covers',
    Price: '₹ 620',
    Best_Price: 'Best Price ₹482 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/BedLine/sheet5.jpeg'),
    title: 'haus & kinder',
    track: '300 TC King Bedsheet & Pillow Covers',
    Price: '₹ 945',
    Best_Price: 'Best Price ₹843 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/BedLine/sheet6.jpeg'),
    title: 'BELLA CASA',
    track: 'Ethic Cotton Bedsheet & Pillow Covers ',
    Price: '₹ 839',
    Best_Price: 'Best Price ₹652 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/BedLine/sheet7.jpeg'),
    title: 'DECOREZA',
    track: '300 TC Queen Bedsheet',
    Price: '₹ 642',
    Best_Price: 'Best Price ₹499 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/BedLine/sheet8.jpeg'),
    title: 'Arrabi',
    track: '300 TC King & 2 Pillow Covers',
    Price: '₹ 699',
    Best_Price: 'Best Price ₹543 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/BedLine/sheet9.jpeg'),
    title: 'CHHAVI INDIA',
    track: '210 TC King 2 Pillow Covers',
    Price: '₹ 689',
    Best_Price: 'Best Price ₹536 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/BedLine/sheet10.jpeg'),
    title: 'DDecor',
    track: '140 TC 1 King Bedsheet with Pillow Covers',
    Price: '₹ 1,040',
    Best_Price: 'Best Price ₹893 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/BedLine/sheet11.jpeg'),
    title: 'LABHAM',
    track: 'King Bedsheet & Pillow Covers',
    Price: '₹ 779',
    Best_Price: 'Best Price ₹606',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/BedLine/sheet12.jpeg'),
    title: 'ROMEE',
    track: '144 TC 1 Bedsheet with Pillow Covers',
    Price: '₹ 599',
    Best_Price: 'Best Price ₹349 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/BedLine/sheet13.jpeg'),
    title: 'GLORIES',
    track: '210 TC King Bedsheet Set',
    Price: '₹ 751',
    Best_Price: 'Best Price ₹584 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/BedLine/sheet14.jpeg'),
    title: 'Florida',
    track: '120 TC King 2 Pillow Covers',
    Price: '₹ 639',
    Best_Price: 'Best Price ₹497 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/BedLine/sheet15.jpeg'),
    title: 'Aura',
    track: 'Cotton Queen Bedsheet Set',
    Price: '399',
    Best_Price: 'Best Price ₹289 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/BedLine/sheet16.jpeg'),
    title: 'BIANCA',
    track: 'Printed 1152 TC Cotton King Bedsheet With 2 Pillow Covers',
    Price: '₹ 449',
    Best_Price: 'Best Price ₹339 ',
    qty:0
  },
]



const Bedsheet = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>BEDSHEETS </Text>
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

export default Bedsheet;