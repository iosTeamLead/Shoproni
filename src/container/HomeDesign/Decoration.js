import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Homedeco/homedeco1.jpeg'),
    title: 'ARTVARKO',
    track: 'ARTVARKO Ganesha Idol Brass with Multicolor Stone Handwork Ganesh Bhagwan Large Statue',
    Price: '₹ 8,949',
    Best_Price: 'Best Price ₹7,889 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Homedeco/homedeco2.jpeg'),
    title: 'Adhvik',
    track: 'Ram Darbar Idol  Multi Color Metal God Stand Statue for Home',
    Price: '₹ 379',
    Best_Price: 'Best Price ₹301 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Homedeco/homedeco3.jpeg'),
    title: '	CraftVatika',
    track: 'Shiva Shiv Idol Statue murti God Bholenath meditaing',
    Price: '₹ 895',
    Best_Price: 'Best Price ₹836 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Homedeco/homedeco4.jpeg'),
    title: 'Adhvik',
    track: 'Radhe Kanha Ki Murti Home Decor',
    Price: '₹ 499',
    Best_Price: 'Best Price ₹429',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Homedeco/homedeco5.jpeg'),
    title: 'Art Street',
    track: 'hanuman god idol god murti god statue',
    Price: '₹ 659',
    Best_Price: 'Best Price ₹600 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Homedeco/homedeco6.jpeg'),
    title: 'eSplanade',
    track: ' Resin Meditating Buddha Showpiece ',
    Price: '₹ 390',
    Best_Price: 'Best Price ₹334 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Homedeco/homedeco7.jpeg'),
    title: 'CRAFTS',
    track: 'Durga Maa Murti for Home Decorative Showpiece - 20 cm ',
    Price: '₹ 499',
    Best_Price: 'Best Price ₹449 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Homedeco/homedeco8.jpeg'),
    title: 'Karigaari India',
    track: 'Little Laughing Buddha Monk Sculpture Showpiece For Home Decor',
    Price: '₹ 499',
    Best_Price: 'Best Price ₹466',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Homedeco/homedeco9.jpeg'),
    title: 'AFTERSTITCH',
    track: ' Living Room Wall Hangings for Home Decoration ',
    Price: '₹ 2,140',
    Best_Price: 'Best Price ₹2,099 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Homedeco/homedeco10.jpeg'),
    title: 'Handicrafts',
    track: 'Home Decoration Items ',
    Price: '₹ 940',
    Best_Price: 'Best Price ₹793 ',
    qty:0
  },

]



const Decoration = () => {
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
      <View style={{ alignItems: 'center', marginBottom: 40, marginHorizontal: 10,bottom:10 ,}}>
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Decoration </Text>
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

export default Decoration;






