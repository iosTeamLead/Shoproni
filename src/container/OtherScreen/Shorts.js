import { View, Text, FlatList, Dimensions, StyleSheet, TouchableOpacity, Image, Share, RefreshControl } from 'react-native'
import React, { useState, useRef } from 'react'
import Video from 'react-native-video'
import Icons from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Feather'

const initialData = [
    {
        id: 1,
        video: require('../../assets/video/video1.mp4'),
        title:"@nature video",
        hastag:'#nature video',
        user:'tester Demo'
    },
    {
        id: 2,
        video: require('../../assets/video/video2.mp4'),
        title:"@Shopping",
        hastag:'#online-Shopping',
        user:'Shoproni'
    },
    {
        id: 3,
        video: require('../../assets/video/video3.mp4'),
        title:"@Love-birds",
        hastag:'#Feeling-great',
        user:'Shivu'
    },
    {
        id: 4,
        video: require('../../assets/video/video4.mp4'),
        title:"@Husband_Wife",
        hastag:'#couples #Husband_Wife',
        user:'Golu'
    },
    {
        id: 5,
        video: require('../../assets/video/video5.mp4'),
        title:"@Friends ",
        hastag:'#Friendship Goal',
        user:'Usafyer'
    },
    {
        id: 6,
        video: require('../../assets/video/video6.mp4'),
        title:"@River rafting'",
        hastag:'#River rafting',
        user:'Manjeet'
    },
    {
        id: 7,
        video: require('../../assets/video/video7.mp4'),
        title:"@Romantic couple",
        hastag:'#Couples Goal',
        user:'Demo'
    },
    {
        id: 8,
        video: require('../../assets/video/video8.mp4'),
        title:"@Oldsongs",
        hastag:'#Oldsongs #hindiSongs',
        user:'Pardhan'
    },
    {
        id: 9,
        video: require('../../assets/video/video9.mp4'),
        title:"@Zudio ",
        hastag:'#online Shopping #99',
        user:'Zudio'
    },
    {
        id: 10,
        video: require('../../assets/video/video10.mp4'),
        title:"@Yaari",
        hastag:'#Yaari #Friends ',
        user:'Gourav'
    },
    {
        id: 11,
        video: require('../../assets/video/video11.mp4'),
        title:"@Brotherhood",
        hastag:'#Brotherhood #Brothers',
        user:'Lucky'
    },
    {
        id: 12,
        video: require('../../assets/video/video12.mp4'),
        title:"@Couplegoal",
        hastag:'#Couplegoal #Newcouple',
        user:'user Demo'
    },
    {
        id: 13,
        video: require('../../assets/video/video13.mp4'),
        title:"@Long Drive",
        hastag:'#Long Drive #Couples',
        user:'Sonu '
    },
    {
        id: 14,
        video: require('../../assets/video/video14.mp4'),
        title:"@OldSongs",
        hastag:'#oldsongs #Lata_ji',
        user:'Kapil '
    },
]

const Shorts = () => {
    const [data, setData] = useState(initialData)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [replayCount, setReplayCount] = useState(0)
    const [likedStatus, setLikedStatus] = useState(Array(initialData.length).fill(false)) 
    const [followStatus, setFollowStatus] = useState(Array(initialData.length).fill(false))
    const [refreshing, setRefreshing] = useState(false)

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 80
    }

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setSelectedIndex(viewableItems[0].index)
            setReplayCount(0) 
        }
    }).current

    const handleVideoEnd = () => {
        if (replayCount < 2) {
            setReplayCount(replayCount + 1)
            setSelectedIndex(selectedIndex) 
        }
    }

    const toggleLike = (index) => {
        const newLikedStatus = [...likedStatus]
        newLikedStatus[index] = !newLikedStatus[index]
        setLikedStatus(newLikedStatus)
    }

    const toggleFollow = (index) => {
        const newFollowStatus = [...followStatus]
        newFollowStatus[index] = !newFollowStatus[index]
        setFollowStatus(newFollowStatus)
    }

    const openShareMenu = async () => {
        try {
            await Share.share({
                message: 'Check out this awesome video!',
            })
        } catch (error) {
            console.error('Error sharing:', error)
        }
    }

    const shuffleData = (array) => {
        let currentIndex = array.length, randomIndex
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }
        return array
    }

    const onRefresh = () => {
        setRefreshing(true)
        const shuffledData = shuffleData([...data])
        setData(shuffledData)
        setRefreshing(false)
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={style.videostyle}>
                <Video
                    style={style.videostyle}
                    source={item.video}
                    paused={selectedIndex !== index}
                    resizeMode='cover'
                    onEnd={handleVideoEnd}
                    repeat={selectedIndex === index && replayCount < 2} 
                />
                <TouchableOpacity style={[style.iconContainer, { position: 'absolute', backgroundColor: 'rgba(0,0,0,.1)' }]}
                    onPress={() => {
                        if (selectedIndex === index) {
                            setSelectedIndex(-1)
                        } else {
                            setSelectedIndex(index)
                        }
                    }}>
                    {selectedIndex !== index ? (
                        <Icons name="pausecircle" size={60} />
                    ) : null}
                    <View style={{ width: '100%', position: 'absolute', bottom: 10 }}>
                        <Text style={{ fontSize: 16, color: 'white', fontWeight: "600", marginLeft: 20 }}>{item.title}</Text>
                        <Text style={{ fontSize: 16, color: 'white', fontWeight: "600", marginLeft: 20 }}>{item.hastag}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Image source={require('../../assets/Profile1.png')} style={{ height: 30, width: 30, tintColor: 'white', marginLeft: 10 }} />
                            <Text style={{ fontSize: 16, color: 'white', fontWeight: "600", marginLeft: 10 }}>{item.user}</Text>
                            <TouchableOpacity 
                                style={{ 
                                    borderRadius: 10, 
                                    borderWidth: 1, 
                                    borderColor: 'white', 
                                    justifyContent: "center", 
                                    alignSelf: 'center', 
                                    marginLeft: 30, 
                                    width: 90, 
                                    padding: 3 
                                }}
                                onPress={() => toggleFollow(index)}
                            >
                                <Text style={{ fontSize: 16, color: 'white', fontWeight: "600", alignSelf: 'center' }}>
                                    {followStatus[index] ? 'Following' : 'Follow'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ position: "absolute", right: 15, bottom: '20%' }}>
                        <TouchableOpacity onPress={() => toggleLike(index)}>
                            <Icons name={likedStatus[index] ? "heart" : "hearto"} size={40} color={likedStatus[index] ? 'red' : 'white'} />
                            <Text style={{ fontSize: 16, color: 'white', fontWeight: "600", marginBottom: 20 }}>1.5k</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icons name="wechat" size={40} color={'white'} />
                            <Text style={{ fontSize: 16, color: 'white', fontWeight: "600", marginBottom: 20 }}>150</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openShareMenu}>
                            <Icon name="send" size={40} color={'white'} />
                            <Text style={{ fontSize: 16, color: 'white', fontWeight: "600", marginBottom: 20 }}>100</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="more-vertical" size={40} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>
    )
}

export default Shorts

const style = StyleSheet.create({
    videostyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    iconContainer: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
})
