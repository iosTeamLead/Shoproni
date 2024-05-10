import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';
import { useTranslation } from 'react-i18next'

const Data = [
  {
    id: 1,
    image: require('../../assets/Kurtas/kurta1.jpeg'),
    title: 'KALINI',
    track: 'Women Yoke Design Kurta Set',
    Price: '₹ 850',
    Best_Price: 'Best Price ₹650 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Kurtas/kurta2.jpeg'),
    title: 'Here & Now',
    track: 'Printed Cotton Kurta Set',
    Price: '₹ 1,106',
    Best_Price: 'Best Price ₹808 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Kurtas/kurta3.jpeg'),
    title: 'Street',
    track: 'Ethnic Motifs Pure Cotton Kurta',
    Price: '₹ 1,049',
    Best_Price: 'Best Price ₹766 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Kurtas/kurta4.jpeg'),
    title: 'Indo Era ',
    track: 'Women Yoke Design Kurta',
    Price: '₹ 699',
    Best_Price: 'Best Price ₹524 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Kurtas/kurta5.jpeg'),
    title: 'Ketch',
    track: 'Kurta With Palazzos',
    Price: '₹ 799',
    Best_Price: 'Best Price ₹549 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Kurtas/kurta6.jpeg'),
    title: 'Anouk',
    track: 'Angrakha A-Line Kurta Sets',
    Price: '₹ 956',
    Best_Price: 'Best Price ₹698 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Kurtas/kurta7.jpeg'),
    title: 'Poshak Hub',
    track: 'Women Printed Kurta',
    Price: '₹ 790',
    Best_Price: 'Best Price ₹693 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Kurtas/kurta8.jpeg'),
    title: 'Sangria',
    track: 'Printed Kurta with Slacks',
    Price: '₹ 1299',
    Best_Price: 'Best Price ₹899 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Kurtas/kurta9.jpeg'),
    title: 'Ahalyaa',
    track: 'Printed Kurta With Palazzo',
    Price: '₹ 940',
    Best_Price: 'Best Price ₹766 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Kurtas/kurta10.jpeg'),
    title: 'Jaipuri Bunaai',
    track: 'Women Printed Kurta',
    Price: '₹ 919',
    Best_Price: 'Best Price ₹669 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Kurtas/kurta11.jpeg'),
    title: 'Vishudh',
    track: 'Kurta With Palazzo',
    Price: '₹ 940',
    Best_Price: 'Best Price ₹730 ',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Kurtas/kurta12.jpeg'),
    title: 'Libas',
    track: 'Ethnic Print Kurta Set',
    Price: '₹ 999',
    Best_Price: 'Best Price ₹899 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Kurtas/kurta13.jpeg'),
    title: 'Vishudh',
    track: 'Kurta With Palazzo',
    Price: '₹ 949',
    Best_Price: 'Best Price ₹730 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Kurtas/kurta14.jpeg'),
    title: 'Anouk',
    track: 'Printed Kurta With Slacks',
    Price: '₹ 549',
    Best_Price: 'Best Price ₹392 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Kurtas/kurta15.jpeg'),
    title: 'Stylum',
    track: 'Women Ethnic Motifs Kurta Set',
    Price: '₹ 1,088',
    Best_Price: 'Best Price ₹975 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Kurtas/kurta16.jpeg'),
    title: 'Azira',
    track: 'Kurta With Palazzos',
    Price: '₹ 999',
    Best_Price: 'Best Price ₹730 ',
    qty:0
  },
]



const Kurtas = () => {
  const dispatch = useDispatch();
const navigation=useNavigation()
const { t } = useTranslation()
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
      <View style={{ alignItems: 'center', marginBottom: 40, marginHorizontal: 10,bottom:10 }}>
        <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{ selectedItem: item })}>
        <Image source={item?.image} resizeMode='stretch' style={{ height: 200, width: 150 }} />
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
        <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>{t('common.kurta')} </Text>
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
      <FlatList style={{margin:10,marginTop:10}}
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

export default Kurtas;