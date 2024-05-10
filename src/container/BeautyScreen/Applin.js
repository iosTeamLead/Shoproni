import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/BeautyAppliances/appl1.jpeg'),
    title: 'E-DUNIA',
    track: 'E-DUNIA Professional Straightener And Curler Personal Care Appliance (Hair Straightener),Multicolor',
    Price: '₹ 339',
    Best_Price: 'Best Price ₹255 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/BeautyAppliances/appl2.jpeg'),
    title: 'WELKOM',
    track: 'WELKOM 6 in 1 Body Face Beauty Facial Massager Skin Care, Face Cleaning, Body Massage, Personal Care (New 2024)',
    Price: '₹ 208',
    Best_Price: 'Best Price ₹175 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/BeautyAppliances/appl3.jpeg'),
    title: 'ENINAS',
    track: 'ENINAS Eyebrow Trimmer for Women, 2 in 1 Rechargeable Facial Hair Remover with Replaceable Heads, Professional Painless Personal Hair Removal Eyebrow Razor with Indicator Lights, (Rose Gold)',
    Price: '₹ 479',
    Best_Price: 'Best Price ₹399 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/BeautyAppliances/appl4.jpeg'),
    title: `MEDITIVE`,
    track: `Meditive Women Trimmer, Body Electric Shaver with Type-C USB Rechargeable and 2 IN 1 Replaceable Ceramic Blade Heads, Ladies Bikini Trimmer`,
    Price: '₹ 999',
    Best_Price: 'Best Price ₹789',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/BeautyAppliances/appl5.jpeg'),
    title: 'Generic',
    track: 'Laxmi Hair Straightener CombBrush For Men, Women, Girls And Hair Straightening, Fast Smoothing Comb With 5 Temperature Control(45 Watts)',
    Price: '₹ 359',
    Best_Price: 'Best Price ₹289',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/BeautyAppliances/appl6.jpeg'),
    title: `Philips`,
    track: `Philips Essential Care Hair Dryer (HP8120/00) | 1200Watts| On-The-Go Dryer| Thermoprotect| 3 Heat & Speed Settings-Black| Quick, Gentle Drying for Shiny Hair`,
    Price: '₹ 1,223',
    Best_Price: 'Best Price ₹922 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/BeautyAppliances/appl7.jpeg'),
    title: `DATT ENTERPRISE`,
    track: `DATT ENTERPRISE Professional Pro Perfect Ladies Curl Secret Hair Curler Roller Curly Hair Machine With Revolutionary Automatic Curling Technology For Women Girls`,
    Price: '₹ 1,499',
    Best_Price: 'Best Price ₹1,230 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/BeautyAppliances/appl8.jpeg'),
    title: 'JELLIFY',
    track: `Jellify Electric Toothbrush Cartoon Printed with Extra Soft Bristles Head for Kids, Boys, Girls,| Pack of 1 Pink`,
    Price: '₹ 399',
    Best_Price: 'Best Price ₹289',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/BeautyAppliances/appl9.jpeg'),
    title: 'HANNEA',
    track: 'HANNEA® Face Cleaning Machine, Facial Massager for Women, Electric Facial Massage Deep Pores Cleanser for Skin Care Micro-current Anti Wrinkles With 4 Modes',
    Price: '₹ 849',
    Best_Price: 'Best Price ₹779 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/BeautyAppliances/appl10.jpeg'),
    title: 'VGR',
    track: 'VGR Professional Hair Curler for Women Girls, Model 7',
    Price: '₹ 635',
    Best_Price: 'Best Price ₹538',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/BeautyAppliances/appl11.jpeg'),
    title: 'Mabron',
    track: 'Mabron 5 in 1 Hair Dryer hot air Brush Styler, Detachable Hair Styler Electric Hair Dryer Brush Rotating for All Hairstyle Multicolour For Girls',
    Price: '₹ 1,999',
    Best_Price: 'Best Price ₹1,766',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/BeautyAppliances/appl12.jpeg'),
    title: 'VGR',
    track: 'VGR Professional Hair Curler for Women Girls, Model 4',
    Price: '₹ 1,561',
    Best_Price: 'Best Price ₹1,112 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/BeautyAppliances/appl13.jpeg'),
    title: 'Hair-Curler',
    track: 'Hair-Curler-ON-STORE-Cordless-Automatic-Hair-Curler-Portable-Curling-Iron-with-LCD-Temperature-Display-Fast-Heating-Auto-Rotating-Hair-Curler-USB-Rechargeable-for-Travel-Home',
    Price: '₹ 1,499',
    Best_Price: 'Best Price ₹1,123 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/BeautyAppliances/appl14.jpeg'),
    title: 'ARMA',
    track: 'ARMA Pro-Salon 2800W Hair Dryer - The Ultimate Hair Dryer for Women, Men & Girls with Blue Ray Anion Technology, 2 Heat & 2 Speed Settings, Cool Shot & Overheating Protection',
    Price: '₹ 1,429',
    Best_Price: 'Best Price ₹1,197 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/BeautyAppliances/appl15.jpeg'),
    title: 'LIONWY',
    track: 'LIONWY Skincare Facial Hair Removal Machine for Women - Hypoallergenic Lipstick Shaped Hair Remover for Face, Upper Lip, Chin, Eyebrow - Includes FREE Battery ',
    Price: '349',
    Best_Price: 'Best Price ₹249 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/BeautyAppliances/appl16.jpeg'),
    title: 'PIKFOS',
    track: 'PIKFOS Professional Pro Perfect Ladies Curly Hair Machine Curl Secret Hair Curler Roller with Revolutionary Automatic Curling Technology for Women Girls',
    Price: '₹ 2,999',
    Best_Price: 'Best Price ₹2,499',
    qty:0
  },
]



const Haircare = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Appliances</Text>
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

export default Haircare;