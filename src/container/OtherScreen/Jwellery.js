import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Jwellery/jwell1.jpeg'),
    title: 'Yellow Chimes',
    track: 'Yellow Chimes Jewellery Set for Women and Girls Temple Jewellery Set | Gold Plated Broad Choker Temple Jewellery Set ',
    Price: '₹ 1,158',
    Best_Price: 'Best Price ₹976',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Jwellery/jwell2.jpeg'),
    title: 'GIVA',
    track: `'GIVA 925 Silver Anushka Sharma'S Solitaire Heart Set With Necklace&Earrings'`,
    Price: '₹ 2,754',
    Best_Price: 'Best Price ₹2,375 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Jwellery/jwell3.jpeg'),
    title: 'Shining Diva',
    track: 'Shining Diva Fashion Latest Stylish Design Fancy Pearl Choker Traditional Temple Necklace Jewellery Set for Women',
    Price: '₹ 539',
    Best_Price: 'Best Price ₹459 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Jwellery/jwell4.jpeg'),
    title: 'Shining Diva',
    track: 'Shining Diva Fashion Latest Stylish Traditional Oxidised Silver Necklace Jewellery Set for Women',
    Price: '₹ 269',
    Best_Price: 'Best Price ₹200',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Jwellery/jwell5.jpeg'),
    title: 'Atasi ',
    track: `'Atasi International Women's Silver Plated American Diamond Necklace/Jewellery Set with Earrings'`,
    Price: '₹ 269',
    Best_Price: 'Best Price ₹199',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Jwellery/jwell6.jpeg'),
    title: 'Asmitta',
    track: 'Asmitta Jewellery Set for Women (Golden)',
    Price: '₹ 399',
    Best_Price: 'Best Price ₹197 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Jwellery/jwell7.jpeg'),
    title: 'ZAVERI',
    track: 'ZAVERI PEARLS Gold Tone Kundan & Pearls Bridal Choker Necklace Set For Women-ZPFK8454',
    Price: '₹ 690',
    Best_Price: 'Best Price ₹499 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Jwellery/jwell8.jpeg'),
    title: 'Shining Diva',
    track: 'Shining Diva Latest Stylish 18k Gold Plated Traditional Kundan Necklace Jewellery Set for Women',
    Price: '₹ 399',
    Best_Price: 'Best Price ₹243 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Jwellery/jwell9.jpeg'),
    title: 'YouBella',
    track: 'YouBella Jewellery for women Traditional Gold Plated Bangles for Women and Girls',
    Price: '₹ 327',
    Best_Price: 'Best Price ₹168 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Jwellery/jwell10.jpeg'),
    title: 'Atasi',
    track: 'Atasi International Diamond Necklace Jewellery Set for Women with Earrings and Maang Tikka ',
    Price: '₹ 399',
    Best_Price: 'Best Price ₹324',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Jwellery/jwell11.jpeg'),
    title: 'ZAVERI',
    track: 'ZAVERI PEARLS Ethnic Kundan & Pearls Multi Layers Bridal Necklace Set For Women',
    Price: '₹ 410',
    Best_Price: 'Best Price ₹340',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Jwellery/jwell12.jpeg'),
    title: 'Shining Diva',
    track: 'Shining Diva Fashion Latest Stylish Fancy Oxidised Silver Tribal Necklace Jewellery Set for Women',
    Price: '₹ 349',
    Best_Price: 'Best Price ₹224 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Jwellery/jwell13.jpeg'),
    title: 'Shining Diva',
    track: 'Shining Diva Fashion 18k Gold Plated Latest Stylish Choker Traditional Pearl Kundan Necklace Jewellery Set for Women',
    Price: '₹ 674',
    Best_Price: 'Best Price ₹529',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Jwellery/jwell14.jpeg'),
    title: 'Estele ',
    track: 'Estele Gold Plated Alluring Lotus Designer Pearl Necklace Set with Pink Enamel',
    Price: '₹ 1,471',
    Best_Price: 'Best Price ₹1,297 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Jwellery/jwell15.jpeg'),
    title: 'Shining Diva',
    track: 'Shining Diva Fashion Latest Stylish Traditional Oxidised Silver Necklace Jewellery Set for Women',
    Price: '299',
    Best_Price: 'Best Price ₹179 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Jwellery/jwell16.jpeg'),
    title: 'Shining Diva',
    track: 'Shining Diva Fashion Latest Stylish Traditional Tibetan Pendant Necklace Jewellery Set for Women',
    Price: '₹ 368',
    Best_Price: 'Best Price ₹238',
    qty:0
  },
]



const Jwellery = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Jwellery</Text>
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

export default Jwellery;