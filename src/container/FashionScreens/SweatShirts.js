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
    image: require('../../assets/Sweat/sweat1.jpeg'),
    title: 'Roadster',
    track: 'Men Sweatshirt',
    Price: '₹ 639',
    Best_Price: 'Best Price ₹439 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Sweat/sweat2.jpeg'),
    title: 'H & M',
    track: 'Men Relaxed Fit Sweatshirt',
    Price: '₹ 799',
    Best_Price: 'Best Price ₹410 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Sweat/sweat3.jpeg'),
    title: 'Allen Solly ',
    track: 'Men Solid Sweatshirt',
    Price: '₹ 1,139',
    Best_Price: 'Best Price ₹963 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Sweat/sweat4.jpeg'),
    title: 'Roadster ',
    track: 'Solid Hooded Sweatshirt',
    Price: '₹ 700',
    Best_Price: 'Best Price ₹480 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Sweat/sweat5.jpeg'),
    title: 'Bushirt',
    track: 'Regular Fit Zip-Top Sweatshirt',
    Price: '₹ 2,250',
    Best_Price: 'Best Price ₹1,999 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Sweat/sweat6.jpeg'),
    title: 'RARE RABBIT',
    track: 'The Pure Cotton Pullover',
    Price: '₹ 1,924',
    Best_Price: 'Best Price ₹1,593 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Sweat/sweat7.jpeg'),
    title: 'Mast & Harrbour',
    track: 'Men Printed Sweatshirt',
    Price: '₹ 790',
    Best_Price: 'Best Price ₹593 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Sweat/sweat8.jpeg'),
    title: 'Powerlook',
    track: 'Relax Fit Sweatshirt',
    Price: '₹ 699',
    Best_Price: 'Best Price ₹499 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Sweat/sweat9.jpeg'),
    title: 'HIGHLANDER',
    track: 'Men Relax Fit Sweatshirt',
    Price: '₹ 940',
    Best_Price: 'Best Price ₹599 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Sweat/sweat10.jpeg'),
    title: 'Louis Philippe',
    track: 'Logo Embroidered Pullover',
    Price: '₹ 1,740',
    Best_Price: 'Best Price ₹1,493 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Sweat/sweat11.jpeg'),
    title: 'LOCOMOTIVE',
    track: 'Men Slim Fit Sweatshirt',
    Price: '₹ 540',
    Best_Price: 'Best Price ₹333 ',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Sweat/sweat12.jpeg'),
    title: 'WRONG',
    track: 'Printed Sweatshirt',
    Price: '₹ 1,385',
    Best_Price: 'Best Price ₹899 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Sweat/sweat13.jpeg'),
    title: 'Bergamo',
    track: 'Slim Fit Knitted Sweatshirt',
    Price: '₹ 1,299',
    Best_Price: 'Best Price ₹974 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Sweat/sweat4.jpeg'),
    title: 'HIGHLANDER',
    track: 'Printed Slim Fit Cotton  Sweatshirt',
    Price: '₹ 549',
    Best_Price: 'Best Price ₹392 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Sweat/sweat15.jpeg'),
    title: 'DAMENSCH',
    track: 'Statement Half-Zip Sweatshirt',
    Price: '₹ 1,240',
    Best_Price: 'Best Price ₹999 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Sweat/sweat16.jpeg'),
    title: 'Kappa ',
    track: 'Cotton Front Open Sweatshirt',
    Price: '₹ 1,349',
    Best_Price: 'Best Price ₹1,049 ',
    qty:0
  },
]



const SweatShirts = () => {
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
      <View style={{ alignItems: 'center', marginBottom: 40, marginHorizontal: 10,bottom:10,marginVertical:20 }}>
         <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{ selectedItem: item })}>
        <Image source={item?.image} resizeMode='stretch' style={{ height: 200, width: 150,alignSelf:'center',right:20 }} />
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>{t('common.sweat')}</Text>
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

export default SweatShirts;