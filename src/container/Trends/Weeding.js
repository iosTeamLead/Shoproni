import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Weeding/weeding1.jpeg'),
    title: 'Miss Ethnik',
    track: `Women's Light Green Embroidered Flared Gown 945-Light Green`,
    Price: '₹ 1,969',
    Best_Price: 'Best Price ₹1,759',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Weeding/weeding2.jpeg'),
    title: 'TAHVO',
    track: `Grey Bandgala Blazer with Hanky`,
    Price: '₹ 1,994',
    Best_Price: 'Best Price ₹1,629',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Weeding/weeding3.jpeg'),
    title: 'WEAVERS',
    track: `SAGA Net Lehanga Choli With Stitched Blouse Halter neck Backless Sleeveless Perfect For Haldi Wedding`,
    Price: '₹ 1,999',
    Best_Price: 'Best Price ₹1,689 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Weeding/weeding4.jpeg'),
    title: 'FAVOROSKI',
    track: `Designer Men's Slim Italian Fit Shawl Collar Tuxedo Suit Blazer`,
    Price: '₹ 2,399',
    Best_Price: 'Best Price ₹2,092',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Weeding/weeding5.jpeg'),
    title: 'iZibra',
    track: `Silk Saree for Women Wear Kanjivaram Fabric Soft Kanchipuram Pattu with Unstitched Blouse Piece`,
    Price: '₹ 999',
    Best_Price: 'Best Price ₹748',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Weeding/weeding6.jpeg'),
    title: 'VASTRAMAY',
    track: `Mens Silk Blend Kurta - Elegance for Festivals & Events | Banarasi Silk with Slight Cotton mix Solid Full Sleeves Chinese Collar Kurta`,
    Price: '₹ 1,196',
    Best_Price: 'Best Price ₹ 909',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Weeding/weeding7.jpeg'),
    title: 'HEM SELLES',
    track: `Women's Tussar Silk With Patola Print And Foil Work New Lehenga choli`,
    Price: '₹ 1,299',
    Best_Price: 'Best Price ₹1,059 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Weeding/weeding8.jpeg'),
    title: 'VASTRAMAY',
    track: `Mens Silk Blend Kurta And Dhoti Set - Classic Ethnic Attire`,
    Price: '₹ 1,459',
    Best_Price: 'Best Price ₹1,079',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Weeding/weeding9.jpeg'),
    title: 'TRENDMALLS',
    track: `Women's Chikankari Sequins Embroidery Georgette Lehenga Choli with Dupatta Lehenga Choli with Dupatta`,
    Price: '₹ 2,498',
    Best_Price: 'Best Price ₹2,099',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Weeding/weeding10.jpeg'),
    title: 'Ethluxis',
    track: ` Men's Silk Blend Kurta Churidar Pyjama with Premium Ethnic Bundi Jacket`,
    Price: '₹ 2,849',
    Best_Price: 'Best Price ₹2,359',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Weeding/weeding11.jpeg'),
    title: 'TRENDMALLS',
    track: ` Women's Georgette Embroidery Salwar Suit Set Anarkali Kurta Pant with Dupatta Purple`,
    Price: '₹ 2,719',
    Best_Price: 'Best Price ₹2,344',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Weeding/weeding12.jpeg'),
    title: 'XEPON',
    track: ` Indo Western Sherwani Set For Men`,
    Price: '₹ 1,996',
    Best_Price: 'Best Price ₹1,449',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Weeding/weeding13.jpeg'),
    title: 'Miss Ethnik',
    track: `Women's Faux Georgette Semi Stitched Top With Unstitched Santoon Bottom and Net Dupatta Embroidered Straight Kurta Dress Material`,
    Price: '₹ 1,814',
    Best_Price: 'Best Price ₹1,554 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Weeding/weeding14.jpeg'),
    title: 'ABH LIFESTYLE',
    track: `Men's Cotton Silk Kurta Pyjama With Ethnic Jacket `,
    Price: '₹ 1,399',
    Best_Price: 'Best Price ₹1,026',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Weeding/weeding15.jpeg'),
    title: 'FIORRA',
    track: ` Women's Maroon Poly Crepe A-Line Kurta Set With Dupatta`,
    Price: '₹ 829',
    Best_Price: 'Best Price ₹626',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Weeding/weeding16.jpeg'),
    title: 'Vriaane',
    track: `Men Ethnic/Western Nehru/Modi Jacket`,
    Price: '₹ 698',
    Best_Price: 'Best Price ₹489',
    qty:0
  },
]



const Weeding = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Wedding Wear </Text>
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

export default Weeding;