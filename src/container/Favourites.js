import React from 'react';
import { View, Text, SafeAreaView, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addCartItem } from '../reduxToolkit/slice/Addtocart'; 

const Favourites = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  const navigation = useNavigation();
  const dispatch = useDispatch(); 

  const addItemToCart = (item) => {
    dispatch(addCartItem(item)); // Dispatch the addCartItem action with the selected item
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={[styles.description, { color: 'black' }]}>{item.track}</Text>
        <Text style={styles.description}>{item.Price}</Text>
        <TouchableOpacity onPress={() => addItemToCart(item)} style={{ backgroundColor: 'green', borderRadius: 5, height: 35, justifyContent: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 10, marginTop: 10 }}>
          <Text style={{ color: 'white' }}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Image source={require('../assets/Favempty2.png')} style={styles.emptyImage} />
        <Text style={styles.emptyText}>There are no favorite items</Text>

        <TouchableOpacity style={styles.shopbutton} onPress={()=>navigation.navigate('Home')}>
          <Text style={styles.emptyText2}>SHOP NOW</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/back.png')} style={{ width: 30, height: 30, alignSelf: 'flex-start', marginLeft: 20 }} />
          </TouchableOpacity>
          <Text style={styles.title2}>Favourites</Text>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => navigation.navigate('ShopCart')}>
              <Image source={require('../assets/bag.png')} resizeMode='contain' style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        {favorites.length === 0 ? renderEmpty() : (
          <FlatList
            data={favorites}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.list}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  list: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  item: {
    marginBottom: 20,
    // backgroundColor: '#b87e6c',
    borderRadius: 10,
    elevation: 2,
    padding: 10,
  },
  image: {
    resizeMode:'contain',
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title2: {
    color: 'gray',
    fontSize: 20,
    fontWeight: '500'
  },
  description: {
    fontSize: 16,
    color: 'green',
  },
  emptyContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    alignContent:'center',
    // backgroundColor:'red',
    height:500

  },
  emptyImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  emptyText2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  shopbutton:{
    width:"40%",
    alignSelf:'center',
    alignItems:'center',
    borderWidth:1,borderColor:'red',
    backgroundColor:'red',
    marginTop:40,
    padding:20
  }
});

export default Favourites;
