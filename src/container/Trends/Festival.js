import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Festival/fest1.jpeg'),
    title: 'Uri',
    track: `Men's Silk Blend Kurta Pajama with Designer Ethnic Nehru`,
    Price: '₹ 2,699',
    Best_Price: 'Best Price ₹2,059',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Festival/fest2.jpeg'),
    title: 'Rangavali',
    track: `Chanderi Silk Anarkali Kurta for Women | Readymade Outfit Kurti for Womens`,
    Price: '₹ 1,499',
    Best_Price: 'Best Price ₹1,129',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Festival/fest3.jpeg'),
    title: 'Uri',
    track: `Men's Lightweight Nehru Jacket`,
    Price: '₹ 899',
    Best_Price: 'Best Price ₹689 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Festival/fest4.jpeg'),
    title: 'EthnicJunction',
    track: `Women's Embellished Woven Zari Work Banarasi Silk Straight Kurta Pant With Dupatta`,
    Price: '₹ 599',
    Best_Price: 'Best Price ₹392',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Festival/fest5.jpeg'),
    title: 'Logass',
    track: `Men's Silk Blend Kurta Pyjama Set`,
    Price: '₹ 1,795',
    Best_Price: 'Best Price ₹1,348',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Festival/fest6.jpeg'),
    title: 'VredeVogel',
    track: `Women's Cotton Silk Jacquard Kurta Pant with Banarasi Silk Dupatta`,
    Price: '₹ 709',
    Best_Price: 'Best Price ₹609 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Festival/fest7.jpeg'),
    title: 'Royal Kurta',
    track: `Mens Silk Blend Festive Kurta Churidaar Set`,
    Price: '₹ 1,699',
    Best_Price: 'Best Price ₹1,159 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Festival/fest8.jpeg'),
    title: 'VredeVogel',
    track: `Women's Spandex Chanderi Modal Butti Kurta & Trouser & Dupatta`,
    Price: '₹ 879',
    Best_Price: 'Best Price ₹779',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Festival/fest9.jpeg'),
    title: 'VASTRAMAY',
    track: `Mens Cotton Linen Kurta - Timeless Elegance for Eid & Holi Festivals`,
    Price: '₹ 859',
    Best_Price: 'Best Price ₹669 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Festival/fest10.jpeg'),
    title: 'Cinders',
    track: `Women's Viscose Shrug Style Printed Embroidered Anarkali Regular Kurta`,
    Price: '₹ 849',
    Best_Price: 'Best Price ₹659',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Festival/fest11.jpeg'),
    title: 'Jompers',
    track: `Men's Silk Kurta Pyjama Set`,
    Price: '₹ 987',
    Best_Price: 'Best Price ₹749',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Festival/fest12.jpeg'),
    title: 'FIORRA',
    track: `Women's Maroon Poly Crepe A-Line Kurta Set With Dupatta`,
    Price: '₹ 829',
    Best_Price: 'Best Price ₹671 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Festival/fest13.jpeg'),
    title: 'koshin',
    track: `Men's Printed Art Silk Square Digitally Kurta Pyjama Set For Festive And Wedding `,
    Price: '₹ 799',
    Best_Price: 'Best Price ₹654 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Festival/fest14.jpeg'),
    title: 'GoSriKi',
    track: `Women's Cotton Blend Straight Printed Kurta with Pant & Dupatta`,
    Price: '₹ 679',
    Best_Price: 'Best Price ₹499',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Festival/fest15.jpeg'),
    title: 'Leriya',
    track: ` Men's Rayon Kurta, Ethnic Printed Kurta For Perfect Ethnic Look`,
    Price: '₹399',
    Best_Price: 'Best Price ₹326',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Festival/fest16.jpeg'),
    title: 'Naixa',
    track: `Women's Viscose Sequinned Worked A-line Kurta with Viscose Pant and Organza Embroidered Dupatta Sets`,
    Price: '₹ 1,329',
    Best_Price: 'Best Price ₹919 ',
    qty:0
  },
]



const Festival = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Festival Wear </Text>
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

export default Festival;