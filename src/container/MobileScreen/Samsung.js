import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { StarRatingDisplay } from 'react-native-star-rating-widget'

const Data = [
    {
        id: 1,
        image: require('../../assets/Samsung/sam1.jpeg'),
        name: `Galaxy A15 5G ${'\n'} `,
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹19,499',
        color: 'Blue',
        delivery: 'FREE delivery with in 4 days',
        buy: '400+ bought in past month',
        store:'Samsung',
        display:'*  16.39 Centimeters (6.5"Inch) Super AMOLED Display with 19.5:9 Aspect Ratio, FHD+ Resolution with 1080 x 2340 Pixels',
        camera:'*  50MP (F1.8) Main Wide Angle Camera + 5MP (F2.2) Ultra Wide Camera + 2MP (F2.4) Macro Camera | 13MP (F2.0) Front Camera',
        battery:'*  5000mAh Lithium-ion Battery',
    },
    {
        id: 2,
        image: require('../../assets/Samsung/sam2.jpeg'),
        name: `Galaxy M14 4G ${'\n'}`,
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹11,999',
        color: 'Arctic Blue',
        delivery: 'FREE delivery with in 2 days',
        buy: '100+ bought in past month',
        store:'Samsung',
        display:'*  17.08 Centimeters (6.7"Inch) PLS LCD Display, FHD+ Resolution with 1080 x 2400 Pixels',
        camera:'*  50 MP (F1.8) Main Wide Angle + 2 MP (F2.4) Macro + 2 MP (F2.4) Depth | 13MP (F2.0) Front Camera',
        battery:'*  5000mAh Lithium-ion Battery ',
    },
    {
        id: 3,
        image: require('../../assets/Samsung/sam3.jpeg'),
        name: `Galaxy A14 5G ${'\n'}`,
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹15,999',
        color: 'Dark Red',
        delivery: 'FREE delivery with in 3 days',
        buy: '300+ bought in past month',
        store:'Samsung',
        display:'*  6.6 FHD+ LCD display (1080 X 2408) with a 20:9 aspect ratio for cinematic viewing',
        camera:'*   50+2+2MP High Resolution Camera',
        battery:'*  5000mAh Battery ',
    },
    {
        id: 4,
        image: require('../../assets/Samsung/sam4.jpeg'),
        name: `Galaxy A34 5G ${'\n'}`,
        storage: '256 GB',
        Ram: '8GB',
        Price: '₹26,499',
        color: 'Awesome Violet',
        delivery: 'FREE delivery with in 4 days',
        buy: '400+ bought in past month',
        store:'Samsung',
        display:'*  16.65 centimeters (6.6-inch) FHD+ Super AMOLED display, FHD+ resolution with 1080 x 2340 pixels ',
        camera:'* 48MP(OIS)+8MP+5MP Triple camera setup - 48MP (F1.8) Main Camera with OIS + 8MP (F2.2) Ultra wide camera + 5MP (F2.4) depth camera | 13MP (F2.2) front camera',
        battery:'*   5000 mAh battery',
    },
    {
        id: 5,
        image: require('../../assets/Samsung/sam5.jpeg'),
        name: `Galaxy A55 5G ${'\n'}`,
        storage: '256 GB',
        Ram: '8GB',
        Price: '₹42,999',
        color: 'Awesome Iceblue',
        delivery: 'FREE delivery with in 4 days',
        buy: '50+ bought in past month',
        store:'Samsung',
        display:'*  16.83 Centimeters (6.6"Inch) Super AMOLED Display with 19.5:9 Aspect Ratio, FHD+ Resolution with 2340 x 1080 Pixels',
        camera:'*  50MP (F1.8) Main Wide Angle Camera + 12MP (F2.2) Ultra Wide Camera + 5MP (F2.4) Macro Camera | 32MP (F2.2) Front Camera',
        battery:'*  5000mAh Lithium-ion Battery ',
    },
    {
        id: 6,
        image: require('../../assets/Samsung/sam6.jpeg'),
        name: `Galaxy A35 5G ${'\n'}`,
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹30,999',
        color: 'Awesome Iceblue',
        delivery: 'FREE delivery with in 3 days',
        buy: '200+ bought in past month',
        store:'Samsung',
        display:'*  16.83 Centimeters (6.6"Inch) Super AMOLED Display with 19.5:9 Aspect Ratio, FHD+ Resolution with 2340 x 1080 Pixels',
        camera:'*  50MP (F1.8) Main Wide Angle Camera + 8MP (F2.2) Ultra Wide Camera + 5MP (F2.4) Macro Camera | 13MP (F2.2) Front Camera ',
        battery:'*  5000mAh Lithium-ion Battery ',
    },
    {
        id: 7,
        image: require('../../assets/Samsung/sam7.jpeg'),
        name: `Galaxy A33 5G ${'\n'}`,
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹20,000',
        color: 'Awesome Peach',
        delivery: 'FREE delivery with in 4 days',
        buy: '50+ bought in past month',
        store:'Samsung',
        display:'*  162.1mm (6.4") FHD+ U-Cut 90Hz Smooth Super AMOLED Display',
        camera:'*  48MP Quad Camera with OIS',
        battery:'*   5000 mAH long lasting Battery',
    },
    {
        id: 8,
        image: require('../../assets/Samsung/sam8.jpeg'),
        name: `Galaxy M04 ${'\n'}`,
        storage: '128 GB',
        Ram: '4GB',
        Price: '₹8,999',
        color: 'Light Green',
        delivery: 'FREE delivery with in 3 days',
        buy: '2K+ bought in past month',
        store:'Samsung',
        display:'*  16.55 centimeters (6.5-inch) LCD, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color',
        camera:'*  13MP+2MP Dual camera setup- True 13MP (F2.2) main camera + 2MP (F2.4) | 5MP (F2.2) front came',
        battery:'*  5000mAh battery',
    },
    {
        id: 9,
        image: require('../../assets/Samsung/sam9.jpeg'),
        name: `Galaxy S20 FE 5G ${'\n'}`,
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹26,839',
        color: 'Cloud Navy',
        delivery: 'FREE delivery with in 2 days',
        buy: '200+ bought in past month',
        store:'Samsung',
        display:'*  6.5-inch(16.40 centimeters) Infinity-O Super AMOLED Display with 120Hz Refresh rate, 1080 x 2400 (FHD+) Resolution',
        camera:'*  Triple Rear Camera Setup - 12MP (Dual Pixel) OIS F1.8 Wide Rear Camera + 8MP OIS Tele Camera + 12MP Ultra Wide | 30X Space Zoom, Single Take & Night Mode | 32MP F2.2 Front Punch Hole Camera',
        battery:'*  4500 mAh battery',
    },
    {
        id: 10,
        image: require('../../assets/Samsung/sam10.jpeg'),
        name: `Galaxy A54 5G ${'\n'}`,
        storage: '256 GB',
        Ram: '8GB',
        Price: '₹35,499',
        color: 'Violet',
        delivery: 'FREE delivery with in 4 days',
        buy: '200+ bought in past month',
        store:'Samsung',
        display:'*  16.31 centimeters (6.4-inch) FHD+ Super AMOLED display, FHD+ resolution with 1080 x 2340 pixels , 401 PPI with 16M colours',
        camera:'*  50MP(OIS)+12MP+5MP Triple camera setup - 50MP (F1.8) Main Camera with OIS + 12MP (F2.2) Ultra wide camera + 5MP (F2.4) depth camera | 32MP (F2.2) front camera  ',
        battery:'*  5000 mAh battery (Non-removable) with Super Fast Charging',
    },
    {
        id: 11,
        image: require('../../assets/Samsung/sam11.jpeg'),
        name: `Galaxy M13${'\n'}`,
        storage: '64 GB',
        Ram: '4GB',
        Price: '₹9,999',
        color: 'Midnight Blue',
        delivery: 'FREE delivery with in 3 days',
        buy: '300+ bought in past month',
        store:'Samsung',
        display:'*  16.72 centimeters (6.6-inch) FHD+ LCD - infinity O Display, FHD+ resolution with 1080 x 2408 pixels resolution',
        camera:'*   50MP+5MP+2MP Triple camera setup- True 50MP (F1.8) main camera +5MP(F2.2)+ 2MP (F2.4) | 8MP (F2.2) front cam',
        battery:'*  6000mAh lithium-ion battery',
    },
    {
        id: 12,
        image: require('../../assets/Samsung/sam12.jpeg'),
        name: `Galaxy F54 5G ${'\n'}`,
        storage: '256 GB',
        Ram: '8GB',
        Price: '₹24,669',
        color: 'Stardust Silver',
        delivery: 'FREE delivery with in 3 days',
        buy: '500+ bought in past month',
        store:'Samsung',
        display:'*  6.7-inch FHD+ (1080×2400 pixels) Super AMOLED Plus Infinity-O Display with 120Hz refresh rate',
        camera:'*  108MP rear camera + 8MP ultra-wide angle camera + 2MP depth sensor | 32MP Front Camera',
        battery:'*  6000 mAh Battery',
    },
    {
        id: 13,
        image: require('../../assets/Samsung/sam13.jpeg'),
        name: `Galaxy S22 5G ${'\n'}`,
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹38,040',
        color: 'Green',
        delivery: 'FREE delivery with in 3 days',
        buy: '300+ bought in past month',
        store:'Samsung',
        display:'*  Stunning 120Hz Dynamic AMOLED 2X display',
        camera:'*   108 MP 1/1.33″ sensor, 0.8μm pixels, 85-degree field of view',
        battery:'*  3700 mAh Battery',
    },
    {
        id: 14,
        image: require('../../assets/Samsung/sam14.jpeg'),
        name: `Galaxy S23 5G ${'\n'}`,
        storage: '256 GB',
        Ram: '8GB',
        Price: '₹69,999',
        color: 'Phantom Black',
        delivery: 'FREE delivery with in 4 days',
        buy: '100+ bought in past month',
        store:'Samsung',
        display:'*  6.1” Dynamic AMOLED 2X Infinity-O FHD+ Flat Screen. 120Hz Adaptive Refresh Rate',
        camera:'*  Main Camera: 50MP Wide | Front Camera: 12MP',
        battery:'*  3,900mAh',
    },
    {
        id: 15,
        image: require('../../assets/Samsung/sam15.jpeg'),
        name: `Galaxy A05${'\n'}`,
        storage: '64 GB',
        Ram: '4GB',
        Price: '₹8,699',
        color: 'Black',
        delivery: 'FREE delivery with in 2 days',
        buy: '50+ bought in past month',
        store:'Samsung',
        display:'*   17.13 Centimeters (6.7"Inch) PLS LCD Display, HD+ Resolution with 720 x 1600 Pixels',
        camera:'*   50MP (F1.8) Main Camera with Auto Focus + 2MP (F2.4) Depth Camera | 8MP (F2.0) Front Camer',
        battery:'*  5000mAh Lithium-ion Battery',
    },
    {
        id: 16,
        image: require('../../assets/Samsung/sam16.jpeg'),
        name: `Galaxy S24 Ultra5G ${'\n'}`,
        storage: '256 GB',
        Ram: '12GB',
        Price: '₹1,29,999',
        color: 'Titanium Black',
        delivery: 'FREE delivery with in 4 days',
        buy: '50+ bought in past month',
        store:'Samsung',
        display:'*  Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 17.25cm (6.8") flat display',
        camera:'*  12MP + 200MP wide-angle 2x optical , Quality Zoom + 50MP 5x optical & 10x optical quality zoom + 10MP 3x optical zoom Features Four Rear Camera Setup | 12MP Front Camera',
        battery:'*  5000 mAh Battery',
    },
]

const Samsung = () => {
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
                <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Samsung</Text>
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

export default Samsung

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