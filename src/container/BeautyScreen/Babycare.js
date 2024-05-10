import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Baby/baby1.jpeg'),
    title: 'Parachute',
    track: 'Parachute Advansed Baby Lotion for New Born Babies | Doctor Certified | Virgin Coconut Oil & Coconut Milk | Ph 5.5 | 24 Hour Moisturization | 410ml',
    Price: '₹ 276',
    Best_Price: 'Best Price ₹237 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Baby/baby2.jpeg'),
    title: 'Himalaya',
    track: 'Himalaya Powder For Baby, (400G)',
    Price: '₹ 209',
    Best_Price: 'Best Price ₹170 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Baby/baby3.jpeg'),
    title: 'Nappi Cream ',
    track: 'B4 Nappi Cream TEDIBAR B4 Nappi Diaper Rash Cream for Babies 75g | Forms protective layer from faecal irritation |',
    Price: '₹ 205',
    Best_Price: 'Best Price ₹155 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Baby/baby4.jpeg'),
    title: 'Chinmay ',
    track: 'Chinmay Kids Adjustable Hands-Free 4-in-1 Baby Carrier Cum Kangaroo Bag with Comfortable Head Support & Buckle Straps for 0-18 Months Baby',
    Price: '₹ 499',
    Best_Price: 'Best Price ₹439 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Baby/baby5.jpeg'),
    title: 'AMARDEEP',
    track: 'AMARDEEP Cotton Modern Toddler Mosquito And Insect Protection Net/Mattress Pink Teddy Print 70*40Cms',
    Price: '₹ 350',
    Best_Price: 'Best Price ₹289 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Baby/baby6.jpeg'),
    title: 'Puddles',
    track: 'Puddles Organic Bubbly Bodywash For Kids (100 ml) | Tangy Candy - Age 2-12 Years |',
    Price: '₹ 449',
    Best_Price: 'Best Price ₹379 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Baby/baby7.jpeg'),
    title: `Little's`,
    track: `Little's Organix Gentle Baby Liquid Detergent 1 Litre |`,
    Price: '₹ 289',
    Best_Price: 'Best Price ₹244 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Baby/baby8.jpeg'),
    title: 'LuvLap',
    track: 'LuvLap Supreme Diaper Pants New Born (NB) 0 to 5kg, 60pcs, 360° skin care with 10 million breathable pores,',
    Price: '₹ 670',
    Best_Price: 'Best Price ₹590 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Baby/baby9.jpeg'),
    title: 'Chicco',
    track: 'Chicco Baby Moments Caring Gift Pack Blue',
    Price: '₹ 529',
    Best_Price: 'Best Price ₹479 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Baby/baby10.jpeg'),
    title: `Johnson's`,
    track: `Johnson's Non-Sticky Baby Oil with Vitamin E for Easy Spread and Massage (Clear, 500ml)`,
    Price: '₹ 520',
    Best_Price: 'Best Price ₹460 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Baby/baby11.jpeg'),
    title: `Johnson's`,
    track: `Johnson's Baby Lotion For New Born, 500ml`,
    Price: '₹ 392',
    Best_Price: 'Best Price ₹324 ',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Baby/baby12.jpeg'),
    title: `Johnson's`,
    track: `Johnson's Baby Skincare Wipes with Lid, 144's +Johnson's Baby Powder 400g`,
    Price: '₹ 848',
    Best_Price: 'Best Price ₹786 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Baby/baby13.jpeg'),
    title: `Johnson's`,
    track: `Johnson's Baby Cream 200ml with Ayur Product in Combo`,
    Price: '₹ 349',
    Best_Price: 'Best Price ₹299 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Baby/baby14.jpeg'),
    title: `Johnson's`,
    track: 'Johnson Baby Care Kit Gift Combo 5N Pack Of 1, Green',
    Price: '₹ 599',
    Best_Price: 'Best Price ₹482 ',
    qty:0
  },

]



const Babycare = () => {
  const dispatch = useDispatch();
const navigation=useNavigation()

const cartItems = useSelector(state => state.cart2.cartItems);

console.log('item',cartItems)
const addItem = (item) => {
  // Check if the item already exists in the cart
  const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

  // If the item is not in the cart, dispatch the addCartItem action
  if (!isItemInCart) {
    dispatch(addCartItem(item));
  }
};
  const favorites = useSelector((state) => state.favorites.favorites);

  const isFavorite = (itemId) => favorites.some((item) => item.id === itemId);

  const handleToggleFavorite = (item) => {
    dispatch(toggleFavorite(item));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ alignItems: 'center', marginBottom: 40, marginHorizontal: 5,bottom:10 ,marginVertical:20}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{ selectedItem: item })}>
      <Image source={item?.image} resizeMode='contain' style={{ height: 180, width: 180, }} />
      </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'flex-start' }}>
          <Text style={[style.txt, { alignSelf: 'flex-start' }]}>{item?.title}</Text>
          <TouchableOpacity onPress={() => handleToggleFavorite(item)}>
            <Image
              source={isFavorite(item.id) ? require('../../assets/fillHeart.png') : require('../../assets/heart.png')}
              resizeMode='contain'
              style={[style.imge3, { marginHorizontal: 20 }]}
            />
          </TouchableOpacity>
        </View>
        <Text style={[style.txt2, { alignSelf: 'flex-start' }]}>{item?.track.substring(0, 16) + ('...')}</Text>
        <Text style={[style.txt, { alignSelf: 'flex-start' }]}>{item?.Price}</Text>
        <Text style={[style.txt, { color: 'green', fontSize: 14, alignSelf: 'flex-start' }]}>{item?.Best_Price}<Text style={style.txt2}>with coupon </Text></Text>

        
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={style.view}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/back.png')} style={{ width: 30, height: 30, alignSelf: 'flex-start', }} />
        </TouchableOpacity>
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Babycare </Text>
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
    fontSize: 14,
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

export default Babycare;