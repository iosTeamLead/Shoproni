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
    image: require('../../assets/Headphone/budd1.jpeg'),
    title: 'boAt',
    track: 'Airpods 163 M TWS Earbuds ',
    Price: '₹ 1,099',
    Best_Price: 'Best Price ₹899 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Headphone/budd2.jpeg'),
    title: 'EYNK',
    track: 'Touch Control Earbuds ',
    Price: '₹ 799',
    Best_Price: 'Best Price ₹590 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Headphone/budd3.jpeg'),
    title: 'NOISE',
    track: 'Buds VS102 Wireless Earbuds',
    Price: '₹ 1,099',
    Best_Price: 'Best Price ₹833 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Headphone/budd4.jpeg'),
    title: 'mivi ',
    track: 'P70 DuoPods Earbuds ',
    Price: '₹ 2,999',
    Best_Price: 'Best Price ₹1,300 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Headphone/budd5.jpeg'),
    title: 'Realme',
    track: 'TeachLife Buds T100',
    Price: '₹ 1,499',
    Best_Price: 'Best Price ₹1,200 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Headphone/budd6.jpeg'),
    title: 'Realme',
    track: 'Buds Wireless 2 Neo',
    Price: '₹ 2,499',
    Best_Price: 'Best Price ₹1,999 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Headphone/budd7.png'),
    title: 'CMF by Nothing',
    track: 'Neckband Pro ',
    Price: '₹ 1,799',
    Best_Price: 'Best Price ₹1,299 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Headphone/budd8.jpeg'),
    title: 'ACwo',
    track: 'DwOTS Relaxable Headset',
    Price: '₹ 1,399',
    Best_Price: 'Best Price ₹999 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Headphone/budd9.jpeg'),
    title: 'OnePlus',
    track: 'Buds VS102 Wireless Earbuds',
    Price: '₹ 2,099',
    Best_Price: 'Best Price ₹1,599',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Headphone/budd10.jpeg'),
    title: 'OnePlus',
    track: 'Bullets Z2 Wireless Neckband',
    Price: '₹ 1,499',
    Best_Price: 'Best Price ₹1,199 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Headphone/budd11.jpeg'),
    title: 'JBL',
    track: 'Printed Wireless Hdeadphone',
    Price: '₹ 6,999',
    Best_Price: 'Best Price ₹5,500 ',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Headphone/budd12.jpeg'),
    title: 'JBL',
    track: 'JBL Wireless Neckband Pro',
    Price: '₹ 3,999',
    Best_Price: 'Best Price ₹2,999 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Headphone/budd13.jpeg'),
    title: 'Shokz',
    track: 'On-Ear Bluetooth Headphones',
    Price: '₹ 7,999',
    Best_Price: 'Best Price ₹6,000 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Headphone/budd14.jpeg'),
    title: 'WINGS',
    track: 'Phantom Pro Gaming Earbuds',
    Price: '₹ 5,499',
    Best_Price: 'Best Price ₹4,555 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Headphone/budd15.jpeg'),
    title: 'Wings',
    track: 'Unisex Phantom 205 Earphones',
    Price: '₹ 2,999',
    Best_Price: 'Best Price ₹2,100 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/buddys.jpeg'),
    title: 'NOISE',
    track: 'AirBuds Mini Bluetooth Headset',
    Price: '₹ 1,099',
    Best_Price: 'Best Price ₹899 ',
    qty:0
  },
]



const Headphones = () => {
  const dispatch = useDispatch();
const navigation=useNavigation()
const { t } = useTranslation();
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
      <View style={{ alignItems: 'center', marginBottom: 40, bottom:10 }}>
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>{t('common.headhphone')}</Text>
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

export default Headphones;