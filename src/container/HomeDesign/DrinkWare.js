import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Drink/drink1.jpeg'),
    title: 'Milton',
    track: 'Milton Duo DLX 350 Thermosteel 24 Hours Hot and Cold Water Bottle, 1 Piece, 350 ml, Silver',
    Price: '₹ 599',
    Best_Price: 'Best Price ₹482 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Drink/drink2.jpeg'),
    title: 'Milton',
    track: 'Polished Milton Copper Bottle',
    Price: '₹ 900',
    Best_Price: 'Best Price ₹768 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Drink/drink3.jpeg'),
    title: '	MILTON',
    track: 'MILTON Kool Trendy 500 Plastic Insulated Water Bottle with Straw for Kids, 490 ml, Cherry Pink School Bottle, Picnic Bottle, Sipper Bottle, Leak Proof, BPA Free, Food Grade, Easy to Carry ',
    Price: '₹ 170',
    Best_Price: 'Best Price ₹130 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Drink/drink4.jpeg'),
    title: 'Milton',
    track: 'Milton Water Flask - Insulated Thermosteel, Rose Gold, Stark, 790 ml',
    Price: '₹ 1,029',
    Best_Price: 'Best Price ₹869 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Drink/drink5.jpeg'),
    title: 'BOROSIL',
    track: 'BOROSIL Trek Military Camouflage 700 ml Flask water Bottle ',
    Price: '₹ 896',
    Best_Price: 'Best Price ₹822 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Drink/drink6.jpeg'),
    title: 'BOROSIL',
    track: 'Buy Fresh Stainless Steel Water Bottle (900 ml)',
    Price: '₹ 428',
    Best_Price: 'Best Price ₹370 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Drink/drink7.jpeg'),
    title: 'Cello',
    track: 'Cello Puro Steel-X Benz 900 | Leak Proof| Wide Mouth & Easy to Open | Insulated Inner Steel Outer Plastic Water Bottle | 730ml | Black',
    Price: '₹ 462',
    Best_Price: 'Best Price ₹406 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Drink/drink8.jpeg'),
    title: 'Cello',
    track: 'Cello Puro Steel-X Benz 900 | Leak Proof| Wide Mouth & Easy to Open | Insulated Inner Steel Outer Plastic Water Bottle | 730ml | Turquoise',
    Price: '₹ 348',
    Best_Price: 'Best Price ₹300',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Drink/drink9.jpeg'),
    title: '	Copper-Master',
    track: 'Copper-Master 14 Litre Hammered Copper Water Dispenser (Matka) Container Pot with Pure Copper and Ayurvedic Health Benefits (14000 ml)',
    Price: '₹ 4,394',
    Best_Price: 'Best Price ₹4,100 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Drink/drink10.jpeg'),
    title: 'Copper-Arts',
    track: 'Wave lady Copper Grocery Container - 10 L  (Multicolor)',
    Price: '₹ 3,678',
    Best_Price: 'Best Price ₹3,393 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Drink/drink11.jpeg'),
    title: 'La Spezia',
    track: 'La Spezia Jug with Glass Set, Juice/Water Jug with Crystal Glasses (6 Pieces Glasses 300ml and 1 Water Juice Jug 1.1 Liter),Highball Glass with Jug for Dining Table (Jug A + 6 Lining Glass)',
    Price: '₹ 1,499',
    Best_Price: 'Best Price ₹1,259',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Drink/drink12.jpeg'),
    title: 'S1Store',
    track: 'S1Store Italian Premium Elegant Glass Lemon Set, Glass Jug (1.3L) with 6 Glasses(280ML) Jug Glass Set  (Glass)',
    Price: '₹ 870',
    Best_Price: 'Best Price ₹809 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Drink/drink13.jpeg'),
    title: 'Ashtok',
    track: 'Pure Copper Water Bottle With 2 Glasses And 1 Jug. Beautiful Printed Design Drinkware Set. Pack Of 1 Bottle, Jug And 2 Glasses',
    Price: '₹ 2,549',
    Best_Price: 'Best Price ₹2,284 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Drink/drink14.jpeg'),
    title: 'SHINI',
    track: 'FarQue Steel Jug Glass Set(1 JUG AND 6 GLASSES)',
    Price: '₹ 514',
    Best_Price: 'Best Price ₹467 ',
    qty:0
  },
 
]



const DrinkWare = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>DrinkWare </Text>
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

export default DrinkWare ;