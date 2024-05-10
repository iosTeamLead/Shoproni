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
    image: require('../../assets/Saree/saree1.jpeg'),
    title: 'KALINI',
    track: 'Women Design Saree',
    Price: '₹ 799',
    Best_Price: 'Best Price ₹650 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Saree/saree2.jpeg'),
    title: 'Anjaneya Sarees',
    track: 'Women Design Chanderi Saree',
    Price: '₹ 1,109',
    Best_Price: 'Best Price ₹810 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Saree/saree3.jpeg'),
    title: 'Anouk',
    track: 'Printed Pure Geogette Saree',
    Price: '₹ 799',
    Best_Price: 'Best Price ₹599 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Saree/saree4.jpeg'),
    title: 'Stava Creation ',
    track: 'Pure Georgette Saree',
    Price: '₹ 799',
    Best_Price: 'Best Price ₹599 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Saree/saree5.jpeg'),
    title: 'Mitera',
    track: 'Floral Pure Chiffon Saree',
    Price: '₹ 879',
    Best_Price: 'Best Price ₹676 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Saree/saree6.jpeg'),
    title: 'Banarasi Style',
    track: 'Ethic Motifs Silk BlendBanarasi Saree',
    Price: '₹ 1,137',
    Best_Price: 'Best Price ₹949 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Saree/saree7.jpeg'),
    title: 'KALINI',
    track: 'Batik Printed Bagh Sarees',
    Price: '₹ 621',
    Best_Price: 'Best Price ₹466 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Saree/saree8.jpeg'),
    title: 'Sangria',
    track: 'Embellished Silk Blend Saree',
    Price: '₹ 1,044',
    Best_Price: 'Best Price ₹874 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Saree/saree9.jpeg'),
    title: 'Saree Mall',
    track: 'Tie & Dyed Dyed Saree',
    Price: '₹ 639',
    Best_Price: 'Best Price ₹489 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Saree/saree10.jpeg'),
    title: 'Aarrah',
    track: 'Women Design Kanjeevaram Saree',
    Price: '₹ 1,119',
    Best_Price: 'Best Price ₹861 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Saree/saree11.jpeg'),
    title: 'BAESD',
    track: 'Flora Print Linen Saree',
    Price: '₹ 950',
    Best_Price: 'Best Price ₹731 ',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Kurtas/kurta12.jpeg'),
    title: 'KALINI',
    track: 'Embroidered Geogette Sarre',
    Price: '₹ 699',
    Best_Price: 'Best Price ₹524 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Saree/saree13.jpeg'),
    title: 'DRIZOMIZ',
    track: 'Tussar Organza Saree',
    Price: '₹ 739',
    Best_Price: 'Best Price ₹508 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Kurtas/kurta14.jpeg'),
    title: 'HOMIGOZ',
    track: 'Patola Silk Blend Saree',
    Price: '₹ 979',
    Best_Price: 'Best Price ₹753 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Saree/saree15.jpeg'),
    title: 'Libas',
    track: 'Women Ethnic Printed Saree ',
    Price: '₹ 1,088',
    Best_Price: 'Best Price ₹975 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Saree/saree16.jpeg'),
    title: 'Azira',
    track: 'Printed Net Saree',
    Price: '₹ 899',
    Best_Price: 'Best Price ₹720 ',
    qty:0
  },
]



const Saree = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>{t('common.sarees')} </Text>
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

export default Saree;