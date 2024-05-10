import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { StarRatingDisplay } from 'react-native-star-rating-widget'

const Data = [
    {
        id: 1,
        image: require('../../assets/Moto/moto1.jpeg'),
        name: `G84 5G ${'\n'}` ,
        storage: '256 GB',
        Ram: '12GB',
        Price: '₹19,415',
        color: 'Midnight Blue',
        delivery: 'FREE delivery with in 4 days',
        buy: '200+ bought in past month',
        store:'Motorola',
        display:'*  6.55" Ultra Vivid 120 Hz 10-Bit Billion Colour pOLED Display',
        camera:'*  50MP (OIS) + 8MP | 16MP Front Camera ',
        battery:'*  5000 mAh battery+30 W TurboPower charger',
    },
    {
        id: 2,
        image: require('../../assets/Moto/moto2.jpeg'),
        name: 'G24',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹9,115',
        color: 'Glacier Blue',
        delivery: 'FREE delivery with in 3 days',
        buy: '200+ bought in past month',
        store:'Motorola',
        display:'*  6.6" IPS LCD HD+ HiD 120Hz display | 500 nits HBM',
        camera:'* dual rear camera unit headlined by a 50-megapixel main sensor',
        battery:'*  6,000mAh battery with 33W fast charging support',
    },
    {
        id: 3,
        image: require('../../assets/Moto/moto3.jpeg'),
        name: 'G34 5G',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹13,600',
        color: 'Charcoal Black',
        delivery: 'FREE delivery with in 3 days',
        buy: '200+ bought in past month',
        store:'Motorola',
        display:'*  6.5" IPS LCD HD+ HiD 120Hz display | 500 nits HBM',
        camera:'*   50 MP Quad Pixel camera |16 MP Selfie Camera',
        battery:'*  5000 Milliamp Hours',
    },
    {
        id: 4,
        image: require('../../assets/Moto/moto4.jpeg'),
        name: 'G04 4G',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹7,984',
        color: 'Satin Blue',
        delivery: 'FREE delivery with in 2 days',
        buy: '100+ bought in past month',
        store:'Motorola',
        display:'*  6.56" IPS LCD | Hid Display : HD+ (1612 x 720p) | 269ppi',
        camera:'*   16MP AI Camera',
        battery:'*  5000 Milliamp Hours',
    },
    {
        id: 5,
        image: require('../../assets/Moto/moto5.jpeg'),
        name: `Edge 40 5G ${'\n'}`,
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹24,069',
        color: 'Peach Fuzz',
        delivery: 'FREE delivery with in 4 days',
        buy: '50k+ bought in past month',
        store:'Motorola',
        display:'*  16.64 cm (6.55 inch) Full HD+ Display.',
        camera:'*   50MP + 13MP | 32MP Front Camera.',
        battery:'*  5000 mAh Battery',
    },
    {
        id: 6,
        image: require('../../assets/Moto/moto6.jpeg'),
        name: 'G32',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹10,990',
        color: 'Rose Gold',
        delivery: 'FREE delivery with in 3 days',
        buy: '300+ bought in past month',
        store:'Motorola',
        display:'*  16.51 cm (6.5) FHD+ Ultra-wide display and a refresh rate of 90 Hz',
        camera:'*  50 MP primary camera with an 8 MP ultra-wide lens',
        battery:'*  5000mAh battery with 18W fast charging',
    },
    {
        id: 7,
        image: require('../../assets/Moto/moto7.jpeg'),
        name: 'G14 4G',
        storage: '128 GB',
        Ram: '4GB',
        Price: '₹8,419',
        color: 'Pale Lilac',
        delivery: 'FREE delivery with in 2 days',
        buy: '100+ bought in past month',
        store:'Motorola',
        display:'*  16.51 cm (6.5) Full HD+ display with a 20:9 aspect ratio',
        camera:'*  50 MP Quad Pixel camera',
        battery:'* 5000 mAh battery.',
    },
    {
        id: 8,
        image: require('../../assets/Moto/moto8.jpeg'),
        name: 'razr 40',
        storage: '256 GB',
        Ram: '8GB',
        Price: '₹44,999',
        color: 'Sage Green',
        delivery: 'FREE delivery with in 4 days',
        buy: '500+ bought in past month',
        store:'Motorola',
        display:'*  Main display: 6.9"" FHD+ pOLED display External display: 1.5"" OLED display',
        camera:'*  64MP (f/1.7, 0.7μm or 16MP 1.4μm Quad Pixel) | 32MP selfie camera 32MP (f/2.4, 0.7μm or 1.4μm@8MP Quad Pixel)',
        battery:'*  4200mAh non-removable',
    },
    {
        id: 9,
        image: require('../../assets/Moto/moto9.jpeg'),
        name: 'E13',
        storage: '64 GB',
        Ram: '2GB',
        Price: '₹5,903',
        color: 'Cosmic Black',
        delivery: 'FREE delivery with in 4 days',
        buy: '50+ bought in past month',
        store:'Motorola',
        display:'*  16.5cm (6.5") display ',
        camera:'*  13MP Al-powered camera system',
        battery:'*  5000 mAh durable battery',
    },
    {
        id: 10,
        image: require('../../assets/Moto/moto10.jpeg'),
        name: `Edge 30 5G ${'\n'}`,
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹34,998',
        color: 'Viva Magenta',
        delivery: 'FREE delivery with in 3 days',
        buy: '200+ bought in past month',
        store:'Motorola',
        display:'*  16.64 cm (6.55 inch) Full HD+ Display ',
        camera:'*  50MP + 13MP + 2MP | 32MP Front Camera',
        battery:'*   4400 mAh Lithium Battery',
    },
    {
        id: 11,
        image: require('../../assets/Moto/moto11.jpeg'),
        name: 'G54 5G',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹18,940',
        color: 'Mint Green',
        delivery: 'FREE delivery with in 4 days',
        buy: '170+ bought in past month',
        store:'Motorola',
        display:'*  16.51 cm (6.5 inch) Full HD+ Display || 120 Hz with 16.6 cm FHD+ Display',
        camera:'*  50MP (OIS) + 8MP | 16MP Front Camera',
        battery:'*  6000 Milliamp Hours',
    },
    {
        id: 12,
        image: require('../../assets/Moto/moto12.jpeg'),
        name: `Edge 40 5G ${'\n'}`,
        storage: '256 GB',
        Ram: '12GB',
        Price: '₹28,890',
        color: 'Caneel Bay',
        delivery: 'FREE delivery with in 5 days',
        buy: '100+ bought in past month',
        store:'Motorola',
        display:'*  16.64 cm (6.55 inch) Full HD+ Display',
        camera:'*  50MP + 13MP | 32MP Front Camera',
        battery:'*  5000 mAh Battery',
    },
    {
        id: 13,
        image: require('../../assets/Moto/moto13.jpeg'),
        name: 'G71 5G',
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹17,790',
        color: 'Neptune Green',
        delivery: 'FREE delivery with in 2 days',
        buy: '150+ bought in past month',
        store:'Motorola',
        display:'*  16.26 cm (6.4 inch) Full HD+ Display',
        camera:'*  64MP + 8MP | 50MP Front Camera',
        battery:'*  5000 mAh Battery',
    },
    {
        id: 14,
        image: require('../../assets/Moto/moto14.jpeg'),
        name: 'Moto g22',
        storage: '64 GB',
        Ram: '4GB',
        Price: '₹7,599',
        color: 'Iceberg Blue',
        delivery: 'FREE delivery with in 4 days',
        buy: '200+ bought in past month',
        store:'Motorola',
        display:'*  6.51 inches (16.51cm) LCD Capacitive multi-touch display 90Hz refresh rate',
        camera:'*  50MP + 8MP + 2MP + 2MP | 16MP Front Camera',
        battery:'*  5000 mAh Lithium Ion Battery',
    },
    {
        id: 15,
        image: require('../../assets/Moto/moto15.jpeg'),
        name: `Edge 20 5G ${'\n'}`,
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹19,999',
        color: 'Cyber Teal',
        delivery: 'FREE delivery with in 4 days',
        buy: '150+ bought in past month',
        store:'Motorola',
        display:'*  17.0 cm (6.693 inch) Full HD+ Display',
        camera:'*  108MP + 8MP + 2MP | 32MP Front Camera',
        battery:'*  5000 mAh Battery',
    },
    {
        id: 16,
        image: require('../../assets/Moto/moto16.jpeg'),
        name: 'G7 ',
        storage: '64 GB',
        Ram: '4GB',
        Price: '₹8,250',
        color: 'Black',
        delivery: 'FREE delivery with in 5 days',
        buy: '100+ bought in past month',
        store:'Motorola',
        display:'*  15.75 cm (6.2 inch) Full HD+ Display',
        camera:'*  12MP + 5MP | 8MP Front Camera',
        battery:'*  3000 mAh Battery',
    },
]

const Moto = () => {
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
                <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Motorola </Text>
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

export default Moto

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
        fontSize: 16,
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