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
    image: require('../../assets/Bags/bag1.jpeg'),
    title: 'Lino Perros',
    track: 'Floral Print Baguette Bag',
    Price: '₹ 917',
    Best_Price: 'Best Price ₹660 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Bags/bag2.jpeg'),
    title: 'LEKHX',
    track: 'Printed Structured Tote Bag',
    Price: '₹ 699',
    Best_Price: 'Best Price ₹480 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Bags/bag3.jpeg'),
    title: 'Exotic ',
    track: 'PU Structured Hanndheld Bag ',
    Price: '₹ 1,439',
    Best_Price: 'Best Price ₹1,089',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Bags/bag4.jpeg'),
    title: 'Lino Perros ',
    track: 'Handheld Bag with Quilted',
    Price: '₹ 1,425',
    Best_Price: 'Best Price ₹1,125 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Bags/bag5.jpeg'),
    title: 'THE CLOWNFISH',
    track: 'Floral Leather Handheld Bag',
    Price: '₹ 1,399',
    Best_Price: 'Best Price ₹1,199 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Bags/bag6.jpeg'),
    title: 'H&M',
    track: 'Half-Moon Handbags',
    Price: '₹ 799',
    Best_Price: 'Best Price ₹574 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Bags/bag7.jpeg'),
    title: 'OsaiZ',
    track: 'Textured Tote Bag',
    Price: '₹ 595',
    Best_Price: 'Best Price ₹409 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Bags/bag8.jpeg'),
    title: 'Hidesign',
    track: 'Leather Structured Handheld Bag',
    Price: '₹ 965',
    Best_Price: 'Best Price ₹875 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Bags/bag9.jpeg'),
    title: 'Allen Solly',
    track: 'PU Structured Shoulder Bag',
    Price: '₹ 879',
    Best_Price: 'Best Price ₹644 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Bags/bag10.jpeg'),
    title: 'Baggit',
    track: 'Structured Shoulder Bag',
    Price: '₹ 867',
    Best_Price: 'Best Price ₹617 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Bags/bag11.jpeg'),
    title: 'Van Heusen',
    track: 'PU Structured Handheld Bag',
    Price: '₹ 1,149',
    Best_Price: 'Best Price ₹888 ',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Bags/bag12.jpeg'),
    title: 'Lavie',
    track: 'Structured Handheld Bag',
    Price: '₹ 1,049',
    Best_Price: 'Best Price ₹779 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Bags/bag13.jpeg'),
    title: 'Women Marks',
    track: 'Solid Shoulder Bag',
    Price: '₹ 1,299',
    Best_Price: 'Best Price ₹1,063 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Bags/bag14.jpeg'),
    title: 'ZOUK',
    track: 'Women Printed Shopper Tote Bag',
    Price: '₹ 1,248',
    Best_Price: 'Best Price ₹962',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Bags/bag15.jpeg'),
    title: 'Diva Dale',
    track: 'Structured Sling Bag ',
    Price: '₹ 799',
    Best_Price: 'Best Price ₹549',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Bags/bag16.jpeg'),
    title: 'ROVOK',
    track: 'Textured Quilted Handheld Bag',
    Price: '₹ 1,099',
    Best_Price: 'Best Price ₹899 ',
    qty:0
  },
]



const ShopBags = () => {
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
      <View style={{ alignItems: 'center', marginBottom: 40,  bottom: 10 }}>
      <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{ selectedItem: item })}>
        <Image source={item?.image} resizeMode='stretch' style={{ height: 200, width: 160 }} />
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
        <Text style={[style.txt2, { alignSelf: 'flex-start' }]}>{item?.track?.substring(0, 16) + ('...')}</Text>
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>{t('common.handbag')} </Text>
        <View style={style.view1}>
          <TouchableOpacity>
            <Image source={require('../../assets/notification.png')} resizeMode='contain' style={style.imge} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Favourites',)}>
            <Image source={require('../../assets/heart.png')} resizeMode='contain' style={style.imge3} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('ShopCart')}>
            <Image source={require('../../assets/bag.png')} resizeMode='contain' style={style.imge} />
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

export default ShopBags;