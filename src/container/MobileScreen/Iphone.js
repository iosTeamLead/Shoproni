import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { StarRatingDisplay } from 'react-native-star-rating-widget'

const Data = [
    {
        id: 1,
        image: require('../../assets/iPhone/iphone1.jpeg'),
        name: `iPhone 13${'\n'} `,
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹52,990',
        color: 'Green',
        delivery: 'FREE delivery with in 4 days',
        buy: '1K+ bought in past month',
        store:'Apple',
        display:'*  15 cm (6.1-inch) Super Retina XDR display',
        camera:'* 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording',
        battery:'*  3227 mAh',
    },
    {
        id: 2,
        image: require('../../assets/iPhone/iphone2.jpeg'),
        name: 'iPhone 15',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹72,690',
        color: 'Black',
        delivery: 'FREE delivery with in 2 days',
        buy: '1k+ bought in past month',
        store:'Apple',
        display:'*  Super Retina XDR display,6.1‑inch (diagonal) all‑screen OLED display',
        camera:'*   48MP MAIN CAMERA WITH 2X TELEPHOTO — The 48MP Main camera shoots in super-high resolution',
        battery:'*  3,349 mAh Battery',
    },
    {
        id: 3,
        image: require('../../assets/iPhone/iphone3.jpeg'),
        name: 'iPhone 14',
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹58,999',
        color: 'Blue',
        delivery: 'FREE delivery with in 3 days',
        buy: '500+ bought in past month',
        store:'Apple',
        display:'*  15.40 cm (6.1-inch) Super Retina XDR display',
        camera:'*  	Dual 12MP camera system (Ultra Wide and Wide) | 12MP TrueDepth camera',
        battery:'* 3279ddmAh Battery ',
    },
    {
        id: 4,
        image: require('../../assets/iPhone/iphone4.jpeg'),
        name: 'iPhone 15 Pro',
        storage: '256 GB',
        Ram: '4GB',
        Price: '₹1,37,990',
        color: 'Natural Titanium',
        delivery: 'FREE delivery with in 2 days',
        buy: '100+ bought in past month',
        store:'Apple',
        display:'*  Super Retina XDR display, 6.1‑inch (diagonal) all‑screen OLED display',
        camera:'*  Pro 48MP camera system (Ultra Wide, Main, and Telephoto | 12MP TrueDepth camera',
        battery:'*   3,274 mAh battery',
    },
    {
        id: 5,
        image: require('../../assets/iPhone/iphone5.jpeg'),
        name: ` iPhone 13 ${'\n'}`,
        storage: '256 GB',
        Ram: '12GB',
        Price: '₹61,490',
        color: 'RED',
        delivery: 'FREE delivery with in 3 days',
        buy: '50+ bought in past month',
        store:'Apple',
        display:'*  15 cm (6.1-inch) Super Retina XDR display',
        camera:'*  Dual 12MP camera system (Ultra Wide and Wide) | 12MP TrueDepth camera',
        battery:'*  3227 mAh Battery',
    },
    {
        id: 6,
        image: require('../../assets/iPhone/iphone6.jpeg'),
        name: `iPhone 15 Plus ${'\n'}`,
        storage: '128 GB',
        Ram: '4GB',
        Price: '₹80,990',
        color: 'Blue',
        delivery: 'FREE delivery with in 2 days',
        buy: '500+ bought in past month',
        store:'Apple',
        display:'*  Super Retina XDR display, 6.1‑inch (diagonal) all‑screen OLED display',
        camera:'*  Dual 48MP camera system (Ultra Wide and Main) | 12MP TrueDepth camera',
        battery:'*  4,383 mAh Battery ',
    },
    {
        id: 7,
        image: require('../../assets/iPhone/iphone7.jpeg'),
        name: `iPhone 14 Plus ${'\n'}`,
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹68,999',
        color: 'Midnight',
        delivery: 'FREE delivery with in 4 days',
        buy: '50+ bought in past month',
        store:'Apple',
        display:'*  16.95 cm (6.7-inch) Super Retina XDR display',
        camera:'*  12MP Main, 12MP Ultrawide with Portrait mode | 12MP TrueDepth front camera with Portrait mode',
        battery:'*  4,325 mAh battery ',
    },
    {
        id: 8,
        image: require('../../assets/iPhone/iphone8.jpeg'),
        name: 'iPhone 12',
        storage: '256 GB',
        Ram: '4GB',
        Price: '₹54,899',
        color: 'RED',
        delivery: 'FREE delivery with in 3 days',
        buy: '150+ bought in past month',
        store:'Apple',
        display:'*  6.1-inch (15.5 cm diagonal) Super Retina XDR display',
        camera:'*  Dual 12MP camera system (Ultra Wide and Wide) | 12MP TrueDepth camera',
        battery:'*   2,815 mAh battery ',
    },
    {
        id: 9,
        image: require('../../assets/iPhone/iphone9.jpeg'),
        name: `iPhone 15 Pro ${'\n'}`,
        storage: '256 GB',
        Ram: '12GB',
        Price: '₹1,37,990',
        color: 'Blue Titanium',
        delivery: 'FREE delivery with in 4 days',
        buy: '100+ bought in past month',
        store:'Apple',
        display:'*  Super Retina XDR display, 6.1‑inch (diagonal) all‑screen OLED display',
        camera:'*  Pro 48MP camera system (Ultra Wide, Main, and Telephoto| 12MP TrueDepth camera',
        battery:'*  3,274 mAh Battery',
    },
    {
        id: 10,
        image: require('../../assets/iPhone/iphone10.jpeg'),
        name: `iPhone 15 Pro ${'\n'}`,
        storage: '1 TB',
        Ram: '6GB',
        Price: '₹1,77,990',
        color: 'Blue Titanium',
        delivery: 'FREE delivery with in 3 days',
        buy: '40+ bought in past month',
        store:'Apple',
        display:'*  Super Retina XDR display, 6.1‑inch (diagonal) all‑screen OLED display',
        camera:'*  Pro 48MP camera system (Ultra Wide, Main, and Telephoto| 12MP TrueDepth camera',
        battery:'*  3,274 mAh Battery',
    },
   
]

const Iphone = () => {
    const navigation = useNavigation()
    const cartItems = useSelector(state => state.cart2.cartItems);

    const renderItem = ({ item, index }) => {
        return (
            <View style={style.listview}>
                <Image source={item.image} style={style.image2} />
                <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Checkout2',{ selectedItem: item })}>
                    <Text style={style.txt3}>{item.store} {item.name}{'(' + item.storage  + ")"}</Text>
                    <StarRatingDisplay
                        rating={4.5}
                        color='green'
                        starSize={25}
                        
                    />
                    <Text style={style.txt4}>{item.buy}</Text>
                    <Text style={style.txt3}>{item.Price}</Text>
                    <Text style={style.txt4}>{item.delivery}</Text>
                 <Text style={style.txt2}> Color <Text style={style.txt4}>{item.color}</Text></Text> 
             </TouchableOpacity>
                </View>
                
            </View>
        )
    }
    return (
        <SafeAreaView>
            <View style={style.view}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/back.png')} style={{ width: 30, height: 30, alignSelf: 'flex-start', }} />
                </TouchableOpacity>
                <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>iPhone </Text>
                <View style={style.view1}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/notification.png')} resizeMode='contain' style={style.imge} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Favourites',)}>
                        <Image source={require('../../assets/heart.png')} resizeMode='contain' style={style.imge3} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ShopCart')}>
                        <Image source={require('../../assets/bag.png')} resizeMode='contain' style={style.imge} />
                        {cartItems.length > 0 && (
                            <View style={style.cartCount}>
                                <Text style={style.cartCountText}>{cartItems.length}</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList style={{ marginBottom: 30 }}
                data={Data}
                renderItem={renderItem} />
        </SafeAreaView>
    )
}

export default Iphone

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
    image2: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    listview: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        padding: 5

    },
    txt3: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
        marginBottom:3
    },
    txt4: {
        color: 'black',
        fontSize: 14,
        fontWeight: '500',
        marginBottom:3,
        marginTop:4
    }
});