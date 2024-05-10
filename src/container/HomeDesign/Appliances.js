import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Appliances/app1.jpeg'),
    title: 'Butterfly',
    track: 'Butterfly Jet Elite Mixer Grinder, 750W, 4 Jars (Grey)',
    Price: '₹ 2,999',
    Best_Price: 'Best Price ₹2,699 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Appliances/app2.jpeg'),
    title: 'Maharsh',
    track: 'Maharsh Hand Blender |Food Blender, Egg Beater Hand Blenders Hand Mixer | Beater - Easy Mix, Powerful 260 Watt Motor | 7 Speed Control + Turbo | Dough Hooks and Strip Beater attachments | Multicolor',
    Price: '₹ 499',
    Best_Price: 'Best Price ₹439 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Appliances/app3.jpeg'),
    title: 'Philips',
    track: 'Philips Viva Collection HD4928/01 2100-Watt Induction Cooktop, Soft Touch Button with Crystal Glass',
    Price: '₹ 3,199',
    Best_Price: 'Best Price ₹3,029 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Appliances/app4.jpeg'),
    title: 'Ninja ',
    track: 'Ninja AF101 1550-Watt Programmable Base Air Fryer with 4-Quart Ceramic Coated Basket',
    Price: '₹ 23,881',
    Best_Price: 'Best Price ₹20,561 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Appliances/app5.jpeg'),
    title: 'Bajaj',
    track: 'Bajaj KTX 1.5 Litre DLX Electric Kettle |1500W Kettle with Stainless Steel Body | Cordless Operation | Auto Shut-off Mechanism | 2-Yr Warranty | Black |1500 watts',
    Price: '₹ 779',
    Best_Price: 'Best Price ₹700 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Appliances/app6.jpeg'),
    title: 'Nova Plus',
    track: 'Nova Plus Amaze NI 10 1100 W Dry Iron  (Grey & Turquoise)',
    Price: '₹ 499',
    Best_Price: 'Best Price ₹429 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Appliances/app7.jpeg'),
    title: 'Pigeon',
    track: 'Pigeon Hand Garment Steamer 1200 W Garment Steamer  (Blue)',
    Price: '₹ 1,749',
    Best_Price: 'Best Price ₹1,559 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Appliances/app8.jpeg'),
    title: 'KASSA',
    track: 'Ferio Hand Juicer For Fruits And Vegetables With Steel Handle Vacuum Locking System, Shake, Smoothies, Travel Juicer For Fruits And Vegetables ',
    Price: '₹ 374',
    Best_Price: 'Best Price ₹293 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Appliances/app9.jpeg'),
    title: 'Philips',
    track: 'Philips PowerPro FC9352/01-Compact Bagless Vacuum Cleaner for Home, 1900Watts for Powerful Suction, 16 A Plug, Compact and Lightweight, with PowerCyclone 5 Technology and MultiClean Nozzle',
    Price: '₹ 9,399',
    Best_Price: 'Best Price ₹8,865 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Appliances/app10.jpeg'),
    title: 'Faber',
    track: 'Faber 800W Drip Coffee Machine | Brew 6 Cups Coffee in Less Than 6 mins | 0.6L Capacity, Cup Warming Plate, Water Level Indicator, Removable Filter, Power Switch, Dry Heat Protection ',
    Price: '₹ 2,475',
    Best_Price: 'Best Price ₹1,843 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Appliances/app11.jpeg'),
    title: 'Hamilton',
    track: 'Hamilton Beach 2 Slice Toaster with Extra-Wide Slots',
    Price: '₹ 2,228',
    Best_Price: 'Best Price ₹1,928',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Appliances/app12.jpeg'),
    title: 'Borosil',
    track: 'Borosil Prima 24 L Oven Toaster & Grill, Motorised Rotisserie & Convection Heating, 5 Heating Modes, Black',
    Price: '₹ 6,499',
    Best_Price: 'Best Price ₹5,860',
    qty:0
  },

]



const Appliances = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Appliances </Text>
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

export default Appliances;