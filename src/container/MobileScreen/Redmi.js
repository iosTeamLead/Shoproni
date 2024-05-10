import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { StarRatingDisplay } from 'react-native-star-rating-widget'

const Data = [
    {
        id: 1,
        image: require('../../assets/Redmi/redmi1.jpeg'),
        name: `13C 5G ${'\n'} `,
        storage: '128 GB',
        Ram: '4GB',
        Price: '₹10,999',
        color: 'Startrail Green',
        delivery: 'FREE delivery with in 4 days',
        buy: '5K+ bought in past month',
        store:'Redmi',
        display:'* 6.74" HD+ 90Hz display with Corning Gorilla Glass 3 Protection, 600nits in High Brightness mode',
        camera:'*  50MP AI Dual camera with Primary sensor of f/1.8 (4-in-1 super pixel) with the following modes: Photo | Portrait | Night | Video | 50MP mode | Time-lapse | Classic film filters | Frame | HDR | Google lens | Voice Shutter |',
        battery:'*  5000mAh(typ) battery with 22.5W charger in-box',
    },
    {
        id: 2,
        image: require('../../assets/Redmi/redmi2.jpeg'),
        name: '12 5G',
        storage: '128 GB',
        Ram: '4GB',
        Price: '₹11,999',
        color: 'Matte Black',
        delivery: 'FREE delivery with in 3 days',
        buy: '3K+ bought in past month',
        store:'Poco',
        display:'*  Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection',
        camera:'* 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera',
        battery:'* 5000mAh(typ) battery with 22.5W charger in-box',
    },
    {
        id: 3,
        image: require('../../assets/Redmi/redmi3.jpeg'),
        name: 'A2',
        storage: '64 GB',
        Ram: '2GB',
        Price: '₹5,299',
        color: 'Aqua Blue',
        delivery: 'FREE delivery with in 3 days',
        buy: '5K+ bought in past month',
        store:'Redmi',
        display:'*  Large 16.5 cm HD+ display with Scratch resistant glass | 400nits peak brightness | 120Hz Touch sampling Rate',
        camera:'*   8MP Dual camera with Portrait mode | 5MP Front camera',
        battery:'*  5000mAh(typ) battery with 10W charger in-box ',
    },
    {
        id: 4,
        image: require('../../assets/Redmi/redmi4.jpeg'),
        name: 'A3',
        storage: '64 GB',
        Ram: '3GB',
        Price: '₹6,999',
        color: 'Olive Green',
        delivery: 'FREE delivery with in 4 days',
        buy: '500+ bought in past month',
        store:'Redmi',
        display:'*  Large 17.04 cm 90Hz dot display with Corning Gorilla Glass 3 protection | 500nits peak brightness | 180Hz Touch sampling Rate',
        camera:'*  8MP AI Dual camera with Google lens, Portrait mode and classic film filters| 5MP Front camera',
        battery:'*   5000mAh(typ) battery abd 10W charger in-box with USB Type-C',
    },
    {
        id: 5,
        image: require('../../assets/Redmi/redmi5.jpeg'),
        name: `A1`,
        storage: '32 GB',
        Ram: '2GB',
        Price: '₹6,499',
        color: 'Light Blue',
        delivery: 'FREE delivery with in 3 days',
        buy: '40+ bought in past month',
        store:'Redmi',
        display:'*  16.56cm HD+ Scratch resistant display',
        camera:'*  8MP Dual camera | 5MP Front camera',
        battery:'*   5000 mAh large battery with 10W in-box charger',
    },
    {
        id: 6,
        image: require('../../assets/Redmi/redmi6.jpeg'),
        name: `Note 13 5G ${'\n'}`,
        storage: '256 GB',
        Ram: '8GB',
        Price: '₹19,999',
        color: 'Stealth Black',
        delivery: 'FREE delivery with in 4 days',
        buy: '1K+ bought in past month',
        store:'Redmi',
        display:'*  6.67" FHD+ pOLED (1080x2400) Ultra-narrow bezels Display with 120Hz Refresh rate; 1000nits peak brightness; Corning Gorilla Glass 5 Display Protection',
        camera:'*  108MP 3X in-sensor zoom AI Triple Camera with 8MP Ultra Wide sensor and 2MP Macro camera| 16MP Front camera',
        battery:'*  5000 mAh large battery with 33W fast charger in-box and Type-C connectivity',
    },
    {
        id: 7,
        image: require('../../assets/Redmi/redmi7.jpeg'),
        name: '12C',
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹8,499',
        color: 'Matte Black',
        delivery: 'FREE delivery with in 4 days',
        buy: '500+ bought in past month',
        store:'Redmi',
        display:'*  Large 17cm HD+ display with Scratch resistant Glass and Oleophobic coating | 500nits peak brightness',
        camera:'*  50MP f/1.8 AI Dual camera with Portrait mode & Night Mode | 5MP Selfie camera',
        battery:'*   5000mAh(typ) battery with 10W charger in-box ',
    },
    {
        id: 8,
        image: require('../../assets/Redmi/redmi8.jpeg'),
        name: `Note 12 Pro+ 5G ${'\n'}`,
        storage: '256 GB',
        Ram: '12GB',
        Price: '₹31,999',
        color: 'Iceberg Blue',
        delivery: 'FREE delivery with in 2 days',
        buy: '50+ bought in past month',
        store:'Redmi',
        display:'*  16.94 cm (6.67 inch) Full HD+ Display',
        camera:'*  200MP + 8MP + 2MP | 16MP Front Camera',
        battery:'*  5000 mAh battery',
    },
    {
        id: 9,
        image: require('../../assets/Redmi/redmi9.jpeg'),
        name: `Note 12 5G ${'\n'}`,
        storage: '256 GB',
        Ram: '8GB',
        Price: '₹18,999',
        color: 'Frosted Green',
        delivery: 'FREE delivery with in 4 days',
        buy: '50+ bought in past month',
        store:'Redmi',
        display:'*  FHD+ AMOLED (1080x2400) Display with 120Hz Refresh rate; 1200nits peak brightness; 240Hz Touch sampling rate',
        camera:'*  48MP AI Triple camera setup with 8MP Ultra Wide sensor and 2MP Macro camera| 13MP Front camera',
        battery:'*  5000 mAh large battery with 33W fast charger in-box and Type-C connectivity',
    },
    {
        id: 10,
        image: require('../../assets/Redmi/redmi10.jpeg'),
        name: `Note 13 Pro+ ${'\n'}`,
        storage: '512 GB',
        Ram: '12GB',
        Price: '₹35,999',
        color: 'Fusion Black',
        delivery: 'FREE delivery with in 3 days',
        buy: '100+ bought in past month',
        store:'Redmi',
        display:'*  6.67 Inches; 120 Hz 3D Curved AMOLED 1.5K Display with Corning Gorilla Glass Victus; Resolution: 2712 x 1220 Pixels',
        camera:'*  200MP Main Camera with Samsung ISOCELL HP3 sensor (OIS + EIS supported), 8MP Ultrawide and 2MP Macro | 16MP Front (Selfie) Camera; 7P lens, Dual LED Flash  ',
        battery:'*  5000 mAh large battery',
    },
    {
        id: 11,
        image: require('../../assets/Redmi/redmi11.jpeg'),
        name: `11 Prime 5G ${'\n'}`,
        storage: '64 GB',
        Ram: '4GB',
        Price: '₹12,999',
        color: 'Chrome Silver',
        delivery: 'FREE delivery with in 3 days',
        buy: '130+ bought in past month',
        store:'Redmi',
        display:'*  90Hz FHD+(1080x2400) AdaptiveSync Display; 16.71centimeters; 20:9 aspect ratio',
        camera:'*  50MP AI Dual camera | 8MP Front camera',
        battery:'*  5000 mAh large battery with 18W fast charging support and 22.5W fast charger in-box with Type-C connectivity',
    },
    {
        id: 12,
        image: require('../../assets/Redmi/redmi12.jpeg'),
        name: `Note 11S ${'\n'}`,
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹17,499',
        color: 'Horizon Blue',
        delivery: 'FREE delivery with in 4 days',
        buy: '100+ bought in past month',
        store:'Redmi',
        display:'* 90Hz FHD+ (1080x2400) AMOLED display; 16.33 centimeters (6.43 inch); 20:9 aspect ratio',
        camera:'*  108 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens| 16 MP Front camera',
        battery:'*  5000 mAh large battery with 33W Pro fast charger ',
    },
    {
        id: 13,
        image: require('../../assets/Redmi/redmi13.jpeg'),
        name: `10A Sport ${'\n'}`,
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹10,999',
        color: 'Sea Blue,',
        delivery: 'FREE delivery with in 2 days',
        buy: '70+ bought in past month',
        store:'Redmi',
        display:'*  HD+(1600x700) IPS LCD display; 15.58 centimeters (6.53 inch); 20:9 aspect ratio',
        camera:'*  13MP Rear Camera | 5MP Front Camera',
        battery:'*  5000 mAh large battery with 10W fast charger',
    },
    {
        id: 14,
        image: require('../../assets/Redmi/redmi14.jpeg'),
        name: `Note 10S ${'\n'}`,
        storage: '64 GB',
        Ram: '6GB',
        Price: '₹14,999',
        color: 'Deep Sea Blue',
        delivery: 'FREE delivery with in 3 days',
        buy: '50+ bought in past month',
        store:'Redmi',
        display:'*  FHD+ (1080x2400) AMOLED Dot display; 16.33 centimeters (6.43 inch); 20:9 aspect ratio',
        camera:'*  64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens| 13 MP Front camera',
        battery:'*  5000 mAh large battery with 33W fast charger',
    },
   
]

const Redmi = () => {
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
                <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Redmi </Text>
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

export default Redmi

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