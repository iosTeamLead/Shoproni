import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/PartyHits/party1.jpeg'),
    title: 'SERA',
    track: `SERA Women's Polyester Black Velvet Sequined Two Piece Party Dress Mini`,
    Price: '₹ 1,520',
    Best_Price: 'Best Price ₹1,129',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/PartyHits/party9.jpeg'),
    title: 'HammerSmith',
    track: `HammerSmith Men's Regular Fit 100% Cotton Shirt`,
    Price: '₹ 599',
    Best_Price: 'Best Price ₹459',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/PartyHits/party3.jpeg'),
    title: 'jaanshi',
    track: `jaanshi Women's Clubwear Mini Tube Dress`,
    Price: '₹ 799',
    Best_Price: 'Best Price ₹586',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/PartyHits/party10.jpeg'),
    title: 'MANQ',
    track: `MANQ Men's Slim Fit Shirt`,
    Price: '₹ 994',
    Best_Price: 'Best Price ₹789',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/PartyHits/party5.jpeg'),
    title: 'Cottinfab',
    track: 'Cottinfab Black & Silver-Toned Sequined Bodycon Dress',
    Price: '₹ 1,699',
    Best_Price: 'Best Price ₹1,299',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/PartyHits/party11.jpeg'),
    title: 'INKAST',
    track: `INKAST Men's Cotton Solid Full Sleeve Slim Fit Casual Shirt `,
    Price: '₹ 849',
    Best_Price: 'Best Price ₹649 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/PartyHits/party6.jpeg'),
    title: 'MANQ',
    track: 'Sheetal Associates Women Maxi Bodycon Dress',
    Price: '₹ 359',
    Best_Price: 'Best Price ₹299',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/PartyHits/party12.jpeg'),
    title: 'Lymio',
    track: `Men's Cotton Printed Short Kurta`,
    Price: '₹ 699',
    Best_Price: 'Best Price ₹486',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/PartyHits/party2.jpeg'),
    title: 'ROARERS',
    track: 'ROARERS Women Maxi Dress Bead Work WD007',
    Price: '₹ 699',
    Best_Price: 'Best Price ₹479 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/PartyHits/party13.jpeg'),
    title: 'Dennis Lingo',
    track: `Dennis Lingo Men's Cotton Checkered Button Down Slim Fit Casual Shirt`,
    Price: '₹ 599',
    Best_Price: 'Best Price ₹493 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/PartyHits/party4.jpeg'),
    title: 'Chase',
    track: `Miss Chase Women's Solid Embroidered Double Breasted Knee Length Dress`,
    Price: '₹ 1,461',
    Best_Price: 'Best Price ₹1,099',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/PartyHits/party14.jpeg'),
    title: 'Lymio',
    track: 'Lymio Casual Shirt for Men',
    Price: '₹ 349',
    Best_Price: 'Best Price ₹278 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/PartyHits/party7.jpeg'),
    title: 'TRIANGLE',
    track: `Women's Midi Velvet Short DressWith Band Collar and Sleeve`,
    Price: '₹ 1,050',
    Best_Price: 'Best Price ₹896',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/PartyHits/party15.jpeg'),
    title: 'Hallowen',
    track: 'Bhains Ki Ankh Black Men Polyester Halloween Party Printed Short Sleeve T-Shirt ',
    Price: '₹ 439',
    Best_Price: 'Best Price ₹399 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/PartyHits/party8.jpeg'),
    title: 'StyleStone',
    track: `StyleStone Women's Color Blocking Bodycon Dress`,
    Price: '₹ 849',
    Best_Price: 'Best Price ₹669 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/PartyHits/party16.jpeg'),
    title: 'Campus',
    track: `Campus Sutra Men's Black & Grey Zip-Front Jacket With Open-Angled Pocket For Casual Wear`,
    Price: '₹ 599',
    Best_Price: 'Best Price ₹439 ',
    qty:0
  },
]



const PartyHits = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Party Wear </Text>
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

export default PartyHits;