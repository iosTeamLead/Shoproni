import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Work/work1.jpeg'),
    title: 'BLINKIN',
    track: `Gym wear Mesh Leggings Workout Pants with Side Pockets/Stretchable Tights`,
    Price: '₹ 399',
    Best_Price: 'Best Price ₹309',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Work/work2.jpeg'),
    title: 'VIMAL JONNEY',
    track: `Men's Regular Fit Trackpants`,
    Price: '₹ 379',
    Best_Price: 'Best Price ₹1,329',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Work/work3.jpeg'),
    title: 'BLINKIN',
    track: `Women's Stretch Fit Yoga Pants`,
    Price: '₹ 379',
    Best_Price: 'Best Price ₹309 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Work/work4.jpeg'),
    title: 'JUST RIDER',
    track: `2 in 1 Running Sports Shorts for Men with Mobile Phone Pocket Light Weight Quick Dry Fabric for Gym Athletic Workout Running Shorts Lightweight Training Yoga Gym Short with Towel Loop`,
    Price: '₹ 472',
    Best_Price: 'Best Price ₹392',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Work/work5.jpeg'),
    title: 'Mehrang',
    track: `Yoga Pants for Women Gym High Waist with Pocket, Tummy Control, Workout Pants 4 Way Stretch Yoga Leggings`,
    Price: '₹ 379',
    Best_Price: 'Best Price ₹298',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Work/work6.jpeg'),
    title: 'NEVER LOSE',
    track: `Mens 2 Pack Polyester Yoga Short Men Summer Running Gym Sports Shorts with Pockets Shorts for Men`,
    Price: '₹ 719',
    Best_Price: 'Best Price ₹ 609',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Work/work7.jpeg'),
    title: 'Zicada',
    track: `Women's Top & Bottom Set Gym Wear | Jogging Wear | Sports Running Suits For womens`,
    Price: '₹ 499',
    Best_Price: 'Best Price ₹439 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Work/work8.jpeg'),
    title: 'WMX',
    track: `Athletic Men's 2 Piece Stretchy Compression Base Layer Workout Shirt Pull-On Shirt and Shorts Set`,
    Price: '₹ 499',
    Best_Price: 'Best Price ₹379',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Work/work9.jpeg'),
    title: 'Mehrang',
    track: `Gym wear/Active Wear Tights Strechable Leggings Yoga Pants Gym Tight Abstract Print`,
    Price: '₹ 449',
    Best_Price: 'Best Price ₹399',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Work/work10.jpeg'),
    title: 'BLAZZE',
    track: `Men's Tank Tops Muscle Gym Bodybuilding Vest Fitness Workout Train`,
    Price: '₹ 399',
    Best_Price: 'Best Price ₹339',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Work/work11.jpeg'),
    title: 'UZARUS',
    track: ` Womens Dry Fit Workout Top Sports Gym T-Shirt`,
    Price: '₹ 349',
    Best_Price: 'Best Price ₹294',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Work/work12.jpeg'),
    title: 'Unbeatable',
    track: `Polyester Spandex Men's Sports Running Set Compression Shirt + Pants Skin-Tight Long Sleeves Quick Dry Fitness Tracksuit Gym Yoga Suits`,
    Price: '₹ 494',
    Best_Price: 'Best Price ₹349',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Work/work13.jpeg'),
    title: 'CHKOKKO',
    track: `Double Layered Sports Gym Workout Running Shorts for Women`,
    Price: '₹ 498',
    Best_Price: 'Best Price ₹424 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Work/work14.jpeg'),
    title: 'Zexer',
    track: `Men Compression T-Shirt Gym and Sports Wear T-Shirt for Men | Body fit Skinny T-Shirt `,
    Price: '₹ 365',
    Best_Price: 'Best Price ₹286',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Work/work15.jpeg'),
    title: 'Fabluk',
    track: ` High-Impact Velcro Sports Bra – Adjustable, Zip Front, Sports, Yoga, Gym & Workout with Free Premium Lipstick`,
    Price: '₹ 829',
    Best_Price: 'Best Price ₹626',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Work/work16.jpeg'),
    title: 'Boldfit',
    track: `Men Multipurpose Sando for Men for use in Gym, Running, Outdoor`,
    Price: '₹ 349',
    Best_Price: 'Best Price ₹279',
    qty:0
  },
]



const Workout = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>WorkOut Wear </Text>
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

export default Workout;