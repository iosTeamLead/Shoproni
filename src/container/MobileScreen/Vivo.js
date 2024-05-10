import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { StarRatingDisplay } from 'react-native-star-rating-widget'

const Data = [
    {
        id: 1,
        image: require('../../assets/Vivo/vivo1.jpeg'),
        name: 'T2x 5G',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹14,999',
        color: 'Aurora Gold',
        delivery: 'FREE delivery with in 4 days',
        buy: '200+ bought in past month',
        store:'Vivo',
        display:'*  16.71 cm (6.58 inch) Full HD+ Display',
        camera:'*  50MP + 2MP | 8MP Front Camera',
        battery:'*  5000 mAh Battery',
    },
    {
        id: 2,
        image: require('../../assets/Vivo/vivo2.jpeg'),
        name: 'Y200e 5G',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹20,999',
        color: 'Black Diamond',
        delivery: 'FREE delivery with in 3 days',
        buy: '200+ bought in past month',
        store:'Vivo',
        display:'*  Dual 50MP+2MP Rear Camera | 16MP Selfie Camera Rear flash',
        camera:'* 16.94 cm (6.67" inch) FHD+ AMOLED Capacitive multi-touch display 120Hz refresh rate, 394 ppi',
        battery:'*  5000 mAh with 44W fast charging',
    },
    {
        id: 3,
        image: require('../../assets/Vivo/vivo3.jpeg'),
        name: 'Y02t',
        storage: '64 GB',
        Ram: '4GB',
        Price: '₹7,499',
        color: 'Sunset Gold',
        delivery: 'FREE delivery with in 4 days',
        buy: '500+ bought in past month',
        store:'Vivo',
        display:'*  16.53 cm (6.51" inch) HD+ Eye Protection Screen',
        camera:'*   Front 5 MP / Rear 8 MP',
        battery:'*  10W fast charging with 5000mAh battery',
    },
    {
        id: 4,
        image: require('../../assets/Vivo/vivo4.jpeg'),
        name: 'Y27',
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹11,999',
        color: 'Sea Blue',
        delivery: 'FREE delivery with in 4 days',
        buy: '500+ bought in past month',
        store:'Vivo',
        display:'*  16.86 cm (6.64 inch) FHD+ LCD Sunlight Display for enhanced outdoor display',
        camera:'*   Dual 50MP+2MP Rear Camera | 8MP Selfie Camera with rear flash, night mode',
        battery:'*  44W FlashCharge with 5000 mAh battery',
    },
    {
        id: 5,
        image: require('../../assets/Vivo/vivo5.jpeg'),
        name: 'Y200 5G',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹21,999',
        color: 'Jungle Green',
        delivery: 'FREE delivery with in 4 days',
        buy: '400+ bought in past month',
        store:'Vivo',
        display:'*  16.94 cm (6.67" inch) FHD+ AMOLED Capacitive multi-touch display 120Hz refresh rate, 394 ppi',
        camera:'*   Dual 64MP+2MP Rear Camera | 16MP Selfie Camera Rear flash, Rear Aura Light',
        battery:'*  4800 mAh with 44W fast charging',
    },
    {
        id: 6,
        image: require('../../assets/Vivo/vivo6.jpeg'),
        name: 'Y56 5G',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹17,999',
        color: 'Orange Shimmer',
        delivery: 'FREE delivery with in 4 days',
        buy: '100+ bought in past month',
        store:'Vivo',
        display:'*  16.72 cm (6.58" inch) FHD+ LCD Display with eye protection mode to protect from blue light',
        camera:'*  Dual 50MP+2MP Rear Camera | 16MP Selfie Camera with rear flash, night mode',
        battery:'*  5000mAh battery with 18W fast charging',
    },
    {
        id: 7,
        image: require('../../assets/Vivo/vivo7.jpeg'),
        name: 'Y75 5G',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹18,999',
        color: 'Glowing Galaxy',
        delivery: 'FREE delivery with in 4 days',
        buy: '200+ bought in past month',
        store:'Vivo',
        display:'*  16.71cm (6.58") FHD+ Display',
        camera:'*  50MP+2MP+2MP Rear Camera | 16MP Selfie Camera',
        battery:'*  18W fast charging with 5000mAh battery (Type-C)',
    },
    {
        id: 8,
        image: require('../../assets/Vivo/vivo8.jpeg'),
        name: 'Y16',
        storage: '64 GB',
        Ram: '4GB',
        Price: '₹8,999',
        color: 'Stellar Black',
        delivery: 'FREE delivery with in 4 days',
        buy: '300+ bought in past month',
        store:'Vivo',
        display:'*  16.55 cm (6.51" inch) HD+ LCD Display',
        camera:'*  13MP+2MP Rear Camera | 5MP Selfie Camera',
        battery:'*  5000mAh battery',
    },
    {
        id: 9,
        image: require('../../assets/Vivo/vivo9.jpeg'),
        name: 'V29 5G',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹30,669',
        color: 'Black',
        delivery: 'FREE delivery with in 4 days',
        buy: '50+ bought in past month',
        store:'Vivo',
        display:'*  17.22 cm (6.78 inch) Full HD+ Display',
        camera:'*  64MP + 8MP | 50MP Front Camera',
        battery:'*  5000 mAh Battery 80 | W of charging power that charges 1-50% in just 18 minutes',
    },
    {
        id: 10,
        image: require('../../assets/Vivo/vivo10.png'),
        name: 'Y100A 5G',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹21,999',
        color: 'Twilight Gold',
        delivery: 'FREE delivery with in 4 days',
        buy: '40+ bought in past month',
        store:'Vivo',
        display:'*  16.20 cm (6.38" inch) FHD+ AMOLED Display',
        camera:'*  Triple 64MP+2MP+2MP Rear Camera | 16MP Selfie Camera',
        battery:'*  44W fast charging with 4500mAh battery',
    },
    {
        id: 11,
        image: require('../../assets/Vivo/vivo11.jpeg'),
        name: 'T2 5G',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹17,999',
        color: 'Velocity Wave',
        delivery: 'FREE delivery with in 4 days',
        buy: '70+ bought in past month',
        store:'Vivo',
        display:'*  16.21 cm (6.38 inch) Full HD+ Display',
        camera:'*  64 MP (OIS) + 2MP | 16MP Front Camera',
        battery:'*  4500 mAh Battery',
    },
    {
        id: 12,
        image: require('../../assets/Vivo/vivo12.jpeg'),
        name: 'Y17s',
        storage: '64 GB',
        Ram: '4GB',
        Price: '₹10,499',
        color: 'Forest Green',
        delivery: 'FREE delivery with in 3 days',
        buy: '100+ bought in past month',
        store:'Vivo',
        display:'*  16.55 cm (6.56" inch) LCD Capacitive multi-touch display 60Hz refresh rate, 269 ppi',
        camera:'*  Dual 50MP+2MP (Bokesh) Rear Camera | 8MP Selfie Camera Rear flash light, night portrait, video',
        battery:'*  5000 mAh Battery',
    },
    {
        id: 13,
        image: require('../../assets/Vivo/vivo13.jpeg'),
        name: 'V29e 5G',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹25,800',
        color: 'Artistic Blue',
        delivery: 'FREE delivery with in 4 days',
        buy: '50+ bought in past month',
        store:'Vivo',
        display:'*  17.22 cm (6.78 inch) Full HD+ Display',
        camera:'*  64MP + 8MP | 50MP Front Camera',
        battery:'*  5000 mAh Battery',
    },
    {
        id: 14,
        image: require('../../assets/Vivo/vivo14.jpeg'),
        name: 'Y28 5G ',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹16,999',
        color: 'Glitter Aqua',
        delivery: 'FREE delivery with in 4 days',
        buy: '200+ bought in past month',
        store:'Vivo',
        display:'*  6.56 inches (16.66cm) LCD Capacitive multi-touch display 90Hz refresh rate, 269 ppi',
        camera:'*  Dual 50MP+2MP Rear Camera | 8MP Selfie Camera Rear flash, slow-mo',
        battery:'*  5000 mAh Li-ion battery with 15W charging',
    },
    {
        id: 15,
        image: require('../../assets/Vivo/vivo15.jpeg'),
        name: 'Y22',
        storage: '128 GB',
        Ram: '4GB',
        Price: '₹11,499',
        color: 'Metaverse Green',
        delivery: 'FREE delivery with in 3 days',
        buy: '100+ bought in past month',
        store:'Vivo',
        display:'*  16.63 cm (6.55" inch) HD+ LCD Display',
        camera:'*  50MP+2MP Rear Camera | 8MP Selfie Camera',
        battery:'*  18W fast charging with 5000mAh battery',
    },
    {
        id: 16,
        image: require('../../assets/Vivo/vivo16.jpeg'),
        name: 'V29e 5G',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹24,320',
        color: 'Artistic RED',
        delivery: 'FREE delivery with in 5 days',
        buy: '300+ bought in past month',
        store:'Vivo',
        display:'*  17.22 cm (6.78 inch) Full HD+ Display',
        camera:'*  64MP + 8MP | 50MP Front Camera',
        battery:'*  5000 mAh Battery',
    },
]

const Vivo = () => {
    const navigation = useNavigation()
    const cartItems = useSelector(state => state.cart2.cartItems);

    const renderItem = ({ item, index }) => {
        return (
            <View style={style.listview}>
                <Image source={item.image} style={style.image2} />
                <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Checkout2',{ selectedItem: item })}>
                    <Text style={style.txt3}>{item.store} {item.name}{'(' + item.storage +' '+ item.Ram + ')'}</Text>
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
                <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Vivo </Text>
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

export default Vivo

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