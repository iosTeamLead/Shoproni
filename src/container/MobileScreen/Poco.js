import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { StarRatingDisplay } from 'react-native-star-rating-widget'

const Data = [
    {
        id: 1,
        image: require('../../assets/Poco/poco1.jpeg'),
        name: `M6 Pro 5G ${'\n'} `,
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹10,998',
        color: 'Forest Green',
        delivery: 'FREE delivery with in 4 days',
        buy: '250+ bought in past month',
        store:'Poco',
        display:'*  17.24cm FHD+ 90Hz AdaptiveSync display',
        camera:'*  50MP f/1.8 AI Dual camera with classic film filters| 8MP Front Camera',
        battery:'*  5000mAh(typ) battery with 22.5W charger in-box',
    },
    {
        id: 2,
        image: require('../../assets/Poco/poco2.jpeg'),
        name: 'C65',
        storage: '256 GB',
        Ram: '8GB',
        Price: '₹8,999',
        color: 'Matte Black',
        delivery: 'FREE delivery with in 3 days',
        buy: '200+ bought in past month',
        store:'Poco',
        display:'*  17.12 cm (6.74 inch) HD+ Display',
        camera:'* 50MP + AI Lens + 2MP | 8MP Front Camera',
        battery:'*  5000 mAh Battery',
    },
    {
        id: 3,
        image: require('../../assets/Poco/poco3.jpeg'),
        name: 'C55',
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹6,499',
        color: 'Cool Blue',
        delivery: 'FREE delivery with in 3 days',
        buy: '300+ bought in past month',
        store:'Poco',
        display:'*  6.71" HD+ Large display , 120 Hz touch sampling rate',
        camera:'*   50MP AI Dual camera with Primary sensor',
        battery:'*  5000mAh Battery ',
    },
    {
        id: 4,
        image: require('../../assets/Poco/poco4.jpeg'),
        name: 'C51',
        storage: '64 GB',
        Ram: '4GB',
        Price: '₹11,999',
        color: 'Royal Blue',
        delivery: 'FREE delivery with in 4 days',
        buy: '250+ bought in past month',
        store:'Poco',
        display:'*  6.52" large HD+ Scratch Resistant Display',
        camera:'*  8MP AI dual camera with Primary sensor',
        battery:'*   5000 mAh battery',
    },
    {
        id: 5,
        image: require('../../assets/Poco/poco5.jpeg'),
        name: `X6 Neo 5G ${'\n'}`,
        storage: '256 GB',
        Ram: '12GB',
        Price: '₹18,058',
        color: 'Astral Black',
        delivery: 'FREE delivery with in 3 days',
        buy: '400+ bought in past month',
        store:'Poco',
        display:'*  16.94 cm (6.67 inch) Full HD+ Display',
        camera:'*  108MP + 2MP | 16MP Front Camera',
        battery:'*  5000 mAh Battery',
    },
    {
        id: 6,
        image: require('../../assets/Poco/poco6.jpeg'),
        name: 'C61',
        storage: '64 GB',
        Ram: '4GB',
        Price: '₹7,049',
        color: 'Blue',
        delivery: 'FREE delivery with in 2 days',
        buy: '50+ bought in past month',
        store:'Poco',
        display:'*  17.04 cm (6.71 inch) HD+ Display || Vibrant Display,',
        camera:'*  8MP Rear Camera | 5MP Front Camera',
        battery:'*  5000 mAh Battery ',
    },
    {
        id: 7,
        image: require('../../assets/Poco/poco7.jpeg'),
        name: 'M6 5G',
        storage: '256 GB',
        Ram: '8GB',
        Price: '₹12,745',
        color: 'Orion Blue',
        delivery: 'FREE delivery with in 4 days',
        buy: '200+ bought in past month',
        store:'Poco',
        display:'*  6.74-inch (1600 x 720 pixels) HD+ 20:9 aspect ratio display, 90Hz refresh rate',
        camera:'*  50MP AI Dual Camera | 16MP Selfie Camera',
        battery:'*   5000mAh battery ',
    },
    {
        id: 8,
        image: require('../../assets/Poco/poco8.jpeg'),
        name: 'M5',
        storage: '64 GB',
        Ram: '4GB',
        Price: '₹7,409',
        color: 'Power Black',
        delivery: 'FREE delivery with in 3 days',
        buy: '200+ bought in past month',
        store:'Poco',
        display:'*  16.55 cm (6.51" inch) HD+ LCD Display',
        camera:'*  13MP+2MP Rear Camera | 5MP Selfie Camera',
        battery:'*  5000mAh battery',
    },
    {
        id: 9,
        image: require('../../assets/Poco/poco9.jpeg'),
        name: 'X6 5G',
        storage: '512 GB',
        Ram: '12GB',
        Price: '₹23,199',
        color: 'Snowstorm White',
        delivery: 'FREE delivery with in 4 days',
        buy: '50+ bought in past month',
        store:'Poco',
        display:'*  16.94 cm (6.67 inch) Display',
        camera:'*  64MP + 8MP + 2MP | 16MP Front Camera',
        battery:'*  5100 mAh Battery',
    },
    {
        id: 10,
        image: require('../../assets/Poco/poco10.jpeg'),
        name: 'F1',
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹11,499',
        color: 'Steel Blue',
        delivery: 'FREE delivery with in 4 days',
        buy: '40+ bought in past month',
        store:'Poco',
        display:'*  Poco F1 smartphone comes with a 6.18 inch full HD display',
        camera:'*  12MP+5MP AI dual camera  | 20MP front camera  ',
        battery:'*  4000mAh battery',
    },
    {
        id: 11,
        image: require('../../assets/Poco/poco11.jpeg'),
        name: `M4 Pro 5G ${'\n'}`,
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹15,410',
        color: 'Yellow',
        delivery: 'FREE delivery with in 3 days',
        buy: '200+ bought in past month',
        store:'Poco',
        display:'*  16.76 cm (6.6 inch) Full HD+ Display;',
        camera:'*   50MP + 8MP | 16MP Front Camera',
        battery:'*  5000 mAh Battery',
    },
    {
        id: 12,
        image: require('../../assets/Poco/poco12.jpeg'),
        name: 'M2 Pro',
        storage: '64 GB',
        Ram: '6GB',
        Price: '₹10,999',
        color: 'Green and Greener',
        delivery: 'FREE delivery with in 4 days',
        buy: '100+ bought in past month',
        store:'Poco',
        display:'*  6.67-inch full-HD+ LCD display with Gorilla Glass',
        camera:'*  48MP + 8MP + 5MP + 2MP, 16MP Front Camera',
        battery:'*  5000 Milliamp Hours',
    },
    {
        id: 13,
        image: require('../../assets/Poco/poco13.jpeg'),
        name: `X5 Pro 5G ${'\n'}`,
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹19,789',
        color: 'Yellow,',
        delivery: 'FREE delivery with in 2 days',
        buy: '300+ bought in past month',
        store:'Poco',
        display:'*  16.94 cm (6.67 inch) Full HD+ Display',
        camera:'*  108MP + 8MP + 2MP | 16MP Front Camera',
        battery:'*  5000 mAh Battery',
    },
    {
        id: 14,
        image: require('../../assets/Poco/poco14.jpeg'),
        name: 'X3 Pro ',
        storage: '128 GB',
        Ram: '6GB',
        Price: '₹16,990',
        color: 'Steel Blue',
        delivery: 'FREE delivery with in 4 days',
        buy: '200+ bought in past month',
        store:'Poco',
        display:'*  16.94 cm (6.67 inch) Full HD+ Display',
        camera:'*  48MP + 8MP + 2MP + 2MP | 20MP Front Camera',
        battery:'*  5160 mAh Lithium-ion Polymer Batteryg',
    },
    {
        id: 15,
        image: require('../../assets/Poco/poco15.jpeg'),
        name: 'F5 5G',
        storage: '256 GB',
        Ram: '8GB',
        Price: '₹29,990',
        color: 'Snowstorm White',
        delivery: 'FREE delivery with in 3 days',
        buy: '150+ bought in past month',
        store:'Poco',
        display:'*  16.94 cm (6.67 inch) Full HD+ Display',
        camera:'*  64MP (OIS) + 8MP + 2MP | 16MP Front Camera',
        battery:'*  5000 mAh Battery',
    },
    {
        id: 16,
        image: require('../../assets/Poco/poco16.jpeg'),
        name: 'C31',
        storage: '32 GB',
        Ram: '3GB',
        Price: '₹6,490',
        color: 'Royal Blue',
        delivery: 'FREE delivery with in 2 days',
        buy: '100+ bought in past month',
        store:'Poco',
        display:'*  Display Size 16.59 cm (6.53 inch) Resolution 1600 x 720 Pixels Resolution Type HD',
        camera:'*  13MP + 2MP + 2MP Primary Camera Features Triple Rear Camera Setup | 5MP Front Camera',
        battery:'*  5000 Milliamp Hours',
    },
]

const Poco = () => {
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
                <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Poco </Text>
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

export default Poco

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