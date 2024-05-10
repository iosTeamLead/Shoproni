import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Skin/care1.jpeg'),
    title: '	simple',
    track: 'Simple Kind To Skin Refreshing Facial Wash 150 ml | 100% Soap-Free Facewash that doesnt dry out your skin| For All Skin Types',
    Price: '₹ 308',
    Best_Price: 'Best Price ₹270',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Skin/care2.jpeg'),
    title: 'Aqualogica',
    track: 'Aqualogica Glow+ Dewy Sunscreen SPF 50 PA++++ | UVA/B & Blue Light Protection for Men & Women | Oily, Dry, Sensitive & Combination Skin | Fragrance-Free | 50g',
    Price: '₹ 394',
    Best_Price: 'Best Price ₹320 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Skin/care3.jpeg'),
    title: 'DIKANG',
    track: 'DIKANG Ice Roller for Face, Face Massager for Women, Facial Kit for Women, Facial Massager, Face Ice Roller for Remove Dark Circle Pore Shrink Face Beauty Skin Care (Purple)',
    Price: '₹ 269',
    Best_Price: 'Best Price ₹199 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Skin/care4.jpeg'),
    title: 'Nebesa ',
    track: 'Nebesa Orgranics And Vegetarian Products Skincare Toys Soap For Kids Girls Pack Of 4',
    Price: '₹ 668',
    Best_Price: 'Best Price ₹600 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Skin/care5.jpeg'),
    title: 'mCaffeine',
    track: 'mCaffeine Coffee Detan Facial Travel Kit | Value Pack of 5 Signature Face Care Products: Face Wash, Scrub, Mask, Moisturizer & Sunscreen | Corporate Gifting Solution for All Occasions',
    Price: '₹ 323',
    Best_Price: 'Best Price ₹284 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Skin/care6.jpeg'),
    title: '	Pilgrim',
    track: 'Pilgrim Korean Beauty Flawless Skin Face Care Kit With Vitamin C Night Serum & Jute Kit Bag | Daily Face Wash 100 Ml, Refreshing Face Mist & Toner 100 Ml, Brightening Day Cream Spf50 100 Gm',
    Price: '₹ 1,669',
    Best_Price: 'Best Price ₹1,300 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Skin/care7.jpeg'),
    title: 'Cetaphil',
    track: 'Cetaphil Face Wash by Cetaphil, Gentle Skin Cleanser for Dry to Normal, Sensitive Skin - 250 ml| Hydrating Face Wash with Niacinamide,Vitamin B5| Dermatologist Recommended| Paraben, Sulphate Free',
    Price: '₹ 621',
    Best_Price: 'Best Price ₹569 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Skin/care8.jpeg'),
    title: 'Veet',
    track: 'Veet Pure Hair Removal Cream for Women with No Ammonia Smell, Sensitive Skin - 100 g | Suitable for Legs, Underarms, Bikini Line, Arms | 2x Longer Lasting Smoothness than Razors',
    Price: '₹ 69',
    Best_Price: 'Best Price ₹43 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Skin/care9.jpeg'),
    title: `L'Oreal`,
    track: `L'Oreal Paris Brightening Serum, 1% Glycolic Acid, 2% Niacinamide Serum, Visibly Minimizes Spots, Reveals Even Skin Tone, Glycolic Bright Skin, 15ml`,
    Price: '₹ 299 ',
    Best_Price: 'Best Price ₹249 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Skin/care10.jpeg'),
    title: 'Mamaearth',
    track: 'Mamaearth Vitamin C Daily Glow Face Cream With Vitamin C & Turmeric For Skin Illumination - 80 G',
    Price: '₹ 223',
    Best_Price: 'Best Price ₹179 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Skin/care11.jpeg'),
    title: 'Khadi Essentials',
    track: 'Khadi Essentials 100% Pure Wild Rose Water For Face, Deep Hydration with Deshi Gulaab, Alcohol Free, for Women & Men, 100ml',
    Price: '₹ 299',
    Best_Price: 'Best Price ₹247',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Skin/care12.jpeg'),
    title: 'Aqualogica',
    track: 'Aqualogica Detan+ Smoothie Face Wash with Glycolic Acid & Cherry Tomato for Men & Women for Tan removal, Hydrates & Gentle Exfoliates -Oily, Dry, Sensitive & Combination Skin -100ml ',
    Price: '₹ 229',
    Best_Price: 'Best Price ₹175 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Skin/care13.jpeg'),
    title: 'Minimalist',
    track: 'Minimalist Oily Skincare Kit, Routine Kit For Unisex, Face Wash, Serum & Moisturizer Combo, 180g',
    Price: '₹ 1,222',
    Best_Price: 'Best Price ₹1,000 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Skin/care14.jpeg'),
    title: 'mCaffeine',
    track: 'mCaffeine Special Mood Gift Set for Women With Complete Coffee Skin Care Package | Pampering & Rejuvenating Gift Kit for All Occasions & Ages | Unisex Natural Products Suitable For All Skin Types',
    Price: '₹ 1,656',
    Best_Price: 'Best Price ₹1,498 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Skin/care15.jpeg'),
    title: 'LAKMÉ',
    track: 'LAKMÉ Blush & Glow Strawberry Sheet Mask, 25 Ml',
    Price: '₹ 100',
    Best_Price: 'Best Price ₹77 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Skin/care16.jpeg'),
    title: 'Pilgrim',
    track: 'Pilgrim Korean Beauty White Lotus Refreshing Face Mist & Toner | Toner for glowing skin | Alcohol-Free Mist & toner for open pores Tightening | Korean skin care products | Women & Men | 100 ml',
    Price: '₹ 269',
    Best_Price: 'Best Price ₹199 ',
    qty:0
  },
]



const Skincare = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>SkinCare </Text>
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

export default Skincare;