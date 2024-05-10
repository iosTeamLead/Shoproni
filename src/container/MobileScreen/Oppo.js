import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { StarRatingDisplay } from 'react-native-star-rating-widget'

const Data = [
    {
        id: 1,
        image: require('../../assets/Oppo/oppo1.jpeg'),
        name: `A16e `,
        storage: '64 GB',
        Ram: '4GB',
        Price: '₹8,999',
        color: 'Midnight Black',
        delivery: 'FREE delivery with in 4 days',
        buy: '150+ bought in past month',
        store:'Oppo',
        display:'*  16.55cm (6.52") HD+ Big Screen',
        camera:'*  13-megapixel (f/2.2)  AI Dual camera with classic film filters| 5-megapixel (f/2.4) Front Camera',
        battery:'*  4230mAh Long lasting Battery |Super-Power Saving Mode',
    },
    {
        id: 2,
        image: require('../../assets/Oppo/oppo2.jpeg'),
        name: 'A57',
        storage: '64 GB',
        Ram: '4GB',
        Price: '₹10,499',
        color: 'Glowing Green',
        delivery: 'FREE delivery with in 3 days',
        buy: '100+ bought in past month',
        store:'Oppo',
        display:'*  6.56" inch (16.66cm) HD+ Waterdrop Notch Colour Rich Display with 1612x720 pixels | Side Fingerprint Sensor + AI Face Unlock | Large Screen to Body ratio of 89.8%',
        camera:'* 8MP Front Camera | 13MP +2MP Rear Dual Camera with Night Filter + AI Portrait Retouching',
        battery:'* 5000 mAh Battery with 33W SUPERVOOC Charging with Optimized Night Charging',
    },
    {
        id: 3,
        image: require('../../assets/Oppo/oppo3.jpeg'),
        name: 'A38',
        storage: '128 GB',
        Ram: '4GB',
        Price: '₹9,999',
        color: 'Glowing Black',
        delivery: 'FREE delivery with in 3 days',
        buy: '300+ bought in past month',
        store:'Oppo',
        display:'*  6.56" HD 90Hz Waterdrop Display with 1612x720 pixels & Side Fingerprint Sensor',
        camera:'*   50MP + 2MP Rear AI Camera | 5MP Front Camera',
        battery:'*  5000 mAh Battery with 33W SUPERVOOC Charging',
    },
    {
        id: 4,
        image: require('../../assets/Oppo/oppo4.jpeg'),
        name: 'A59 5G',
        storage: '128 GB',
        Ram: '4GB',
        Price: '₹13,999',
        color: 'Starry Black',
        delivery: 'FREE delivery with in 4 days',
        buy: '300+ bought in past month',
        store:'Oppo',
        display:'*  Dive into rich, true to life colours of 6.56" HD+ 90Hz Waterdrop Display with 1612x720 pixels',
        camera:'*  300% Ultra volume mode + 36-Month Fluency Protection with 13MP AI Rear Camera (13MP Main + 2MP Bokeh Portrait) | 8MP Front Camera',
        battery:'*   5000 mAh battery',
    },
    {
        id: 5,
        image: require('../../assets/Oppo/oppo5.jpeg'),
        name: `F25 Pro 5G ${'\n'}`,
        storage: '256 GB',
        Ram: '8GB',
        Price: '₹25,999',
        color: 'Ocean Blue',
        delivery: 'FREE delivery with in 3 days',
        buy: '200+ bought in past month',
        store:'Oppo',
        display:'*  17.02cm (6.7"Inch) AMOLED Display and Ultra-narrow bezel with Screen-to-body ratio: 93.4% .FHD+ Resolution with 2412×1080 Pixels , with 1Billion Colours and 120Hz Refresh Rate.',
        camera:'*  32MP IMX615 Sony sensor Front Selfie Camera| Triple Rear Camera 64MP Main Camera + 8MP Sony IMX355 ultra wide angle camera + 2MP Macro Camera | Supporting video recording at 4K ultra-clear resolution and 30fps.',
        battery:'*  5000 mAh Battery',
    },
    {
        id: 6,
        image: require('../../assets/Oppo/oppo6.jpeg'),
        name: 'A79 5G',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹17,499',
        color: 'Mystery Black',
        delivery: 'FREE delivery with in 2 days',
        buy: '300+ bought in past month',
        store:'Oppo',
        display:'*  6.72" FHD+ 90Hz Waterdrop Display with 1080x2040 pixels. Large Screen to Body ratio of 91.4%',
        camera:'*  50MP AI Rear Camera ( 50MP Main + 2MP Portrait ) | 8MP Front Camera',
        battery:'* 5000 mAh Battery with All-Day AI Power Saving + 33W SUPERVOOC Charging with 5-layer charging protection to make charging safer ',
    },
    {
        id: 7,
        image: require('../../assets/Oppo/oppo7.jpeg'),
        name: 'Find X2',
        storage: '256 GB',
        Ram: '12GB',
        Price: '₹49,990',
        color: 'Black',
        delivery: 'FREE delivery with in 4 days',
        buy: '100+ bought in past month',
        store:'Oppo',
        display:'*  17.01 centimeters (6.7-inch) OLED curved screen with 120Hz ultra-high refresh rate, QHD+ display 3168 x 1440 pixels resolution, 513 ppi pixel density',
        camera:'*  48MP (Sony IMX586 Sensor) wide-angle lens (f/1.7 aperture) rear camera, 12MP (Sony IMX708 Sensor) ultra-wide-angle lens (f/2.2 aperture), 13MP (f/2.4 aperture) telephoto camera | 32MP front facing camera',
        battery:'*   Innovative 65W SuperVOOC flash charging brings the 4260 mAh battery to 40% in just 10 minutes,',
    },
    {
        id: 8,
        image: require('../../assets/Oppo/oppo8.jpeg'),
        name: 'A78',
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹15,499',
        color: 'Aqua Green',
        delivery: 'FREE delivery with in 3 days',
        buy: '50+ bought in past month',
        store:'Oppo',
        display:'*  6.4" FHD+ AMOLED 90Hz Punch Hole Display with 2400x1080 pixels & In-Display Fingerprint Sensor',
        camera:'*  50MP Main Camera (f/1.8 Aperture, FOV: 77 Degree, 5P Lens, Auto Focus Supported, Open Ring Focus, Portrait 1 and 2) + 2MP (f/2.4 Aperture, FOV: 89 Degree, 3P + IR Lens, Fixed Focus Prime)',
        battery:'*  5000 mAh Battery with 67W SUPERVOOC Charging',
    },
    {
        id: 9,
        image: require('../../assets/Oppo/oppo9.jpeg'),
        name: 'A18',
        storage: '64 GB',
        Ram: '4GB',
        Price: '₹8,999',
        color: 'Glowing Black',
        delivery: 'FREE delivery with in 4 days',
        buy: '100+ bought in past month',
        store:'Oppo',
        display:'*  6.56" HD 90Hz Waterdrop Display with 1612x720 pixels & Side Fingerprint Sensor',
        camera:'*  8MP + 2MP Bokeh Rear AI Camera | 5MP Front Camera',
        battery:'*  Large 5000 mAh Battery',
    },
    {
        id: 10,
        image: require('../../assets/Oppo/oppo10.jpeg'),
        name: `Reno7 Pro 5G ${'\n'}`,
        storage: '256 GB',
        Ram: '12GB',
        Price: '₹31,900',
        color: 'Startrails Blue',
        delivery: 'FREE delivery with in 4 days',
        buy: '200+ bought in past month',
        store:'Oppo',
        display:'*  16.51 cm (6.5 inch) Full HD+ AMOLED Display',
        camera:'*  50MP + 8MP + 2MP | 32MP Front Camera',
        battery:'*  4500 mAh Lithium-ion Polymer Battery',
    },
    {
        id: 11,
        image: require('../../assets/Oppo/oppo11.jpeg'),
        name: `F23 5G `,
        storage: '256 GB',
        Ram: '8GB',
        Price: '₹22,999',
        color: 'Cool Black,',
        delivery: 'FREE delivery with in 3 days',
        buy: '50+ bought in past month',
        store:'Oppo',
        display:'*  6.72" inch (17.07cm) FHD+ Punch-hole 120Hz Display with 2400x1080 pixels. Large Screen to Body ratio of 91.4%',
        camera:'*  64MP Triple Camera ( 64MP Main + 2MP Monochrome + 2MP Microscope ) with AI Color Portrait and Dual View Video | 32MP Front Camera',
        battery:'*  5000 mAh Battery with 67W SUPERVOOC Charging',
    },
    {
        id: 12,
        image: require('../../assets/Oppo/oppo12.jpeg'),
        name: `Reno 11 5G ${'\n'}`,
        storage: '128 GB',
        Ram: '8GB',
        Price: '₹27,730',
        color: 'Wave Green',
        delivery: 'FREE delivery with in 4 days',
        buy: '200+ bought in past month',
        store:'Oppo',
        display:'*  17.02 cm (6.7 inch) Full HD+ Display',
        camera:'*  50MP + 8MP + 32MP| 32 MP Front Camera',
        battery:'*  5000 mAh Battery',
    },
    {
        id: 13,
        image: require('../../assets/Oppo/oppo13.jpeg'),
        name: `Reno2 Z ${'\n'}`,
        storage: '256 GB',
        Ram: '8GB',
        Price: '₹22,999',
        color: 'Sky White',
        delivery: 'FREE delivery with in 2 days',
        buy: '100+ bought in past month',
        store:'Oppo',
        display:'*  Capacitive Touchscreen, Multi-touch,Pixel Density 395 ppi,Aspect Ratio 19.5:9',
        camera:'*  48MP Quadcam with Zoom: 48MP+8MP+2MP+2MP rear camera with 119 degrees wide angle, ultra Steady mode, portrait mode | 16MP front camera',
        battery:'*  4000 mAh Battery',
    },
    {
        id: 14,
        image: require('../../assets/Oppo/oppo14.jpeg'),
        name: 'A12 ',
        storage: '32 GB',
        Ram: '3GB',
        Price: '₹7,499',
        color: 'Black',
        delivery: 'FREE delivery with in 4 days',
        buy: '200+ bought in past month',
        store:'Oppo',
        display:'*  15.79 centimeters (6.2-inch) HD+ waterdrop screen display with 1520 x 720 pixels resolution, 270 ppi pixel density and 16M color support',
        camera:'*  13MP+2MP AI rear dual camera with filters, AI beautification, bokeh, HDR, dazzle color mode | 5MP front camera',
        battery:'*  4230mAH Lithium-ion Polymer Batteryg',
    },
    {
        id: 15,
        image: require('../../assets/Oppo/oppo15.jpeg'),
        name: 'A77',
        storage: '64 GB',
        Ram: '4GB',
        Price: '₹10,999',
        color: 'Sunset Orange',
        delivery: 'FREE delivery with in 3 days',
        buy: '200+ bought in past month',
        store:'Oppo',
        display:'*  6.56" inch (16.66cm) HD+ Waterdrop Notch Colour Rich Display with 1612x720 pixels | IPX4 Water Resistant & IP5X Dust Resistant | Side Fingerprint Senso',
        camera:'*  8MP Front Camera | 50MP + 2MP Rear AI Dual Camera',
        battery:'*  5000 mAh Battery with 33W SUPERVOOC Charging',
    },
    {
        id: 16,
        image: require('../../assets/Oppo/oppo16.jpeg'),
        name: `Reno8 Pro 5G ${'\n'}`,
        storage: '256 GB',
        Ram: '12GB',
        Price: '₹35,850',
        color: 'Glazed Green',
        delivery: 'FREE delivery with in 2 days',
        buy: '100+ bought in past month',
        store:'Oppo',
        display:'*  17.02 cm (6.7 inch) Full HD+ AMOLED Display',
        camera:'*  50MP + 8MP + 2MP | 32MP Front Camera',
        battery:'*  4500 mAh Lithium-ion Polymer Battery',
    },
]

const Oppo = () => {
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
                <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Oppo </Text>
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

export default Oppo

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