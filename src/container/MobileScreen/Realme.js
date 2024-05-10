import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { StarRatingDisplay } from 'react-native-star-rating-widget'

const Data = [
    {
        id: 1,
        image: require('../../assets/Realme/me1.jpeg'),
        name: 'narzo N53',
        storage: '64 GB',
        Ram: '4GB',
        Price: '₹7,499',
        color: 'Feather Gold',
        delivery: 'FREE delivery with in 4 days',
        buy: '100+ bought in past month',
        store:'realme',
        display:'*  16.71 cm (6.58 inch) Full HD+ Display',
        camera:'*  50MP AI camera | 8MP Front Camera',
        battery:'*  5000 mAh Battery',
    },
    {
        id: 2,
        image: require('../../assets/Realme/me2.jpeg'),
        name: 'NARZO 70 Pro 5G',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹19,999',
        color: 'Glass Green',
        delivery: 'FREE delivery with in 3 days',
        buy: '500+ bought in past month',
        store:'realme',
        display:'*  6.67 Inches; 120 Hz AMOLED FHD+, Resolution: 2412 x 1080 pixels',
        camera:'* 50MP Flagship Sony IMX890 Night vision camera with OIS | 8MP Camera and 2MP lens, 16MP Front (Selfie) Camera',
        battery:'*  5000mAh high performance battery and 67W Flashchage, 50% charge in 11 min',
    },
    {
        id: 3,
        image: require('../../assets/Realme/me3.jpeg'),
        name: 'narzo N55',
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹10,280',
        color: 'Prime Black',
        delivery: 'FREE delivery with in 3 days',
        buy: '2k+ bought in past month',
        store:'realme',
        display:'*  Large 6.72” Full screen display',
        camera:'*   64MP primary AI camera ',
        battery:'*  With fast 33W SUPERVOOC charging, the realme narzo N55 charges up the massive 5000mAh battery',
    },
    {
        id: 4,
        image: require('../../assets/Realme/me4.jpeg'),
        name: '12 5G',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹16,529',
        color: 'Woodland Green',
        delivery: 'FREE delivery with in 4 days',
        buy: '260+ bought in past month',
        store:'realme',
        display:'*  17.07 cm (6.72 inch) Full HD+ Display || 950 nits Sunlight Display',
        camera:'*   108MP + 2MP | 8MP Front Camera || 108 MP 3X Zoom',
        battery:'*  5000 mAh Battery, 45 W SUPERVOOC Charge | 5000 mAh Massive Battery',
    },
    {
        id: 5,
        image: require('../../assets/Realme/me5.jpeg'),
        name: 'narzo 60X 5G',
        storage: '128 GB',
        Ram: '4GB',
        Price: '₹12,999',
        color: 'Nebula Purple',
        delivery: 'FREE delivery with in 3 days',
        buy: '5k+ bought in past month',
        store:'realme',
        display:'*  16.94 cm (6.67" inch) FHD+ AMOLED Capacitive multi-touch display 120Hz refresh rate, 394 ppi',
        camera:'*   50MP Primary Camera',
        battery:'*  33 W Powerful SUPERVOOC Charge, 30 minutes charge for 50% | 5000mAh massive battery',
    },
    {
        id: 6,
        image: require('../../assets/Realme/me6.jpeg'),
        name: 'C31',
        storage: '32 GB',
        Ram: '3GB',
        Price: '₹6,640',
        color: 'Light Silver',
        delivery: 'FREE delivery with in 4 days',
        buy: '150+ bought in past month',
        store:'realme',
        display:'*  16.56 cm (6.52 Inch) HD Display',
        camera:'*  13MP + 2MP + 0.3MP Rear Camera | 5MP Front Camera',
        battery:'*  5000 mAh Battery',
    },
    {
        id: 7,
        image: require('../../assets/Realme/me7.jpeg'),
        name: 'C53',
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹8,699',
        color: 'Champion Gold',
        delivery: 'FREE delivery with in 2 days',
        buy: '200+ bought in past month',
        store:'realme',
        display:'*  16.71cm (6.58") FHD+ Display',
        camera:'*  108MP+8MP Rear Camera | 16MP Selfie Camera',
        battery:'*  18W fast charging with 5000mAh battery (Type-C)',
    },
    {
        id: 8,
        image: require('../../assets/Realme/me8.jpeg'),
        name: 'C67 5G',
        storage: '128 GB',
        Ram: '4GB',
        Price: '₹11,173',
        color: 'Sunny Oasis',
        delivery: 'FREE delivery with in 4 days',
        buy: '90+ bought in past month',
        store:'realme',
        display:'*  6.5-inch LCD display with HD+ resolution (1600 x 720 pixels)',
        camera:'*  Dual camera setup with a 50MP main sensor and a 2MP depth sensor | 8MP Selfie Camera',
        battery:'*  5000mAh battery with 33W fast charging',
    },
    {
        id: 9,
        image: require('../../assets/Realme/me9.jpeg'),
        name: 'C55',
        storage: '64 GB',
        Ram: '6GB',
        Price: '₹8,489',
        color: 'Sunshower',
        delivery: 'FREE delivery with in 3 days',
        buy: '400+ bought in past month',
        store:'realme',
        display:'*  17.07 cm (6.72) 90 Hz FHD+ display ',
        camera:'*  64MP + 2MP | 8MP Front Camera, 64 MP AI Camera',
        battery:'*  5000 mAh Battery, Powerful SUPERVOOC Charge, With a 33 W SUPEVOOC charge',
    },
    {
        id: 10,
        image: require('../../assets/Realme/me10.jpeg'),
        name: 'C35',
        storage: '64 GB',
        Ram: '4GB',
        Price: '₹8,851',
        color: 'Glowing Green',
        delivery: 'FREE delivery with in 4 days',
        buy: '40+ bought in past month',
        store:'realme',
        display:'*  16.76 cm (6.6 inch) Full HD+ Display',
        camera:'*  50MP + 2MP + 0.3MP | 8MP Front Camera',
        battery:'*  5000 mAh Lithium Polymer Battery',
    },
    {
        id: 11,
        image: require('../../assets/Realme/me11.jpeg'),
        name: 'GT Neo 3',
        storage: '256 GB',
        Ram: '12GB',
        Price: '₹24,690',
        color: 'Asphalt Black',
        delivery: 'FREE delivery with in 4 days',
        buy: '200+ bought in past month',
        store:'realme',
        display:'*  16.21 cm (6.38 inch) Full HD+ Oled Display',
        camera:'*  50MP + 8MP + 2MP | 16MP Front Camera',
        battery:'*  4500 mAh Lithium Ion Battery',
    },
    {
        id: 12,
        image: require('../../assets/Realme/me12.jpeg'),
        name: '10',
        storage: '128GB',
        Ram: '8GB',
        Price: '₹14,499',
        color: 'Clash White',
        delivery: 'FREE delivery with in 3 days',
        buy: '80+ bought in past month',
        store:'realme',
        display:'*  16.26 cm (6.4 inch) Full HD+ Display',
        camera:'*  50MP + 2MP | 16MP Front Camera',
        battery:'*  5000 mAh Battery',
    },
    {
        id: 13,
        image: require('../../assets/Realme/me13.jpeg'),
        name: '11 5G',
        storage: '256 GB',
        Ram: '8GB',
        Price: '₹17,740',
        color: 'Glory Gold',
        delivery: 'FREE delivery with in 2 days',
        buy: '500+ bought in past month',
        store:'realme',
        display:'*  17.07 cm (6.72 inch) Full HD+ Display | Dynamic Ultra Smooth Display,',
        camera:'*  108MP with 3x Zoom Camera + 2MP | 16MP Front Camera,',
        battery:'*  5000 mAh + 67 W SUPERVOOC',
    },
    {
        id: 14,
        image: require('../../assets/Realme/me14.jpeg'),
        name: '	C30s ',
        storage: '32 GB',
        Ram: '2GB',
        Price: '₹6,429',
        color: 'Stripe Blue',
        delivery: 'FREE delivery with in 3 days',
        buy: '50+ bought in past month',
        store:'realme',
        display:'*  6.56 inches (16.66cm) LCD ',
        camera:'*  8MP Rear Camera | 5MP Front Camera',
        battery:'*  5000 mAh Lithium Ion Battery',
    },
    {
        id: 15,
        image: require('../../assets/Realme/me15.jpeg'),
        name: '11x 5G',
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹14,989',
        color: 'Midnight Black',
        delivery: 'FREE delivery with in 4 days',
        buy: '100+ bought in past month',
        store:'realme',
        display:'*  16.63 cm (6.55" inch) HD+ LCD Display',
        camera:'*  64MP AI Camera | 8MP Selfie Camera',
        battery:'*  18W fast charging with 5000mAh battery',
    },
    {
        id: 16,
        image: require('../../assets/Realme/me16.jpeg'),
        name: 'C11',
        storage: '32 GB',
        Ram: '2GB',
        Price: '₹6,450',
        color: 'Cool Blue',
        delivery: 'FREE delivery with in 3 days',
        buy: '300+ bought in past month',
        store:'realme',
        display:'*  16.51 cm 6.5 inch LCD',
        camera:'*  8MP 5MP Front Camera',
        battery:'*  5000 mAh Battery',
    },
]

const Realme = () => {
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
                <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Realme </Text>
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

export default Realme

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
        fontSize: 14,
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