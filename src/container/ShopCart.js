import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem, clearCart } from '../reduxToolkit/slice/Addtocart';
import { decrement, increment, selectCount } from '../reduxToolkit/slice/counterSlice';
import { useTranslation } from 'react-i18next';

const ShopCart = () => {
  const { t,i18n } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [cartItems, setCartItems] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(true);


  useEffect(() => {
    const storeCount = async () => {
      try {
        await AsyncStorage.setItem('count', JSON.stringify(count));
      } catch (error) {
        console.error('Error storing count in AsyncStorage:', error);
      }
    };

    storeCount();
  }, [count]);

  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const storedCartItems = await AsyncStorage.getItem('cartItems');
        if (storedCartItems) {
          setCartItems(JSON.parse(storedCartItems));
          setIsCartEmpty(false);
        }
      } catch (error) {
        console.error('Error loading cart items from AsyncStorage:', error);
      }
    };

    loadCartItems();
  }, []);

  const removeItem = (index) => {
    // Remove item from Redux store
    dispatch(removeCartItem(cartItems[index]));

    // Update cart items state
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);

    // Check if cart is empty
    if (updatedCartItems.length === 0) {
      setIsCartEmpty(true);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      dispatch(decrement());
    }
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    setIsCartEmpty(true);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <Image source={item?.image} style={styles.image} />
        {/* <Text style={styles.title}>{item?.title}</Text> */}
        <Text style={styles.description}>Price : {item?.Price}</Text>
        <TouchableOpacity onPress={() => removeItem(index)} style={{ backgroundColor: 'red', borderRadius: 5, height: 35, justifyContent: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 10, marginTop: 10 }}>
          <Text style={{ color: 'white' }}>{t('common.remove.cart')}</Text>
        </TouchableOpacity>

        <View style={styles.vewitem}>
          <Text style={styles.title}>Qty : </Text>
          <View style={styles.qtyview}>
            <TouchableOpacity style={styles.button} onPress={handleDecrement}>
              <Text style={styles.text3}>-</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{count}</Text>
            <TouchableOpacity style={styles.button} onPress={handleIncrement}>
              <Text style={styles.text3}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const handlePlaceOrder = async () => {
    try {
      // Store item price in AsyncStorage
      await AsyncStorage.setItem('selectedItemPrice', JSON.stringify(cartItems[0]?.Price));
    
      // Navigate to Address screen
      navigation.navigate('Address');
    } catch (error) {
      console.error('Error storing selected item price in AsyncStorage:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex:1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/back.png')} style={{ width: 30, height: 30, alignSelf: 'flex-start' }} />
        </TouchableOpacity>
        <Text style={styles.title}>{t('common.shopbag')}</Text>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
            <Image source={require('../assets/heart.png')} resizeMode='contain' style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {isCartEmpty ? (
        <View style={styles.emptyCartContainer}>
          <Image source={require('../assets/shopbag.png')} resizeMode='stretch' style={styles.emptyCartImage} />
          <Text style={styles.emptyCartText}>{t('common.empty.bag')}</Text>
          <Text style={styles.emptyCartText}>{t('common.empty.bag2')}</Text>
          <Text style={styles.emptyCartText}>{t('common.empty.bag3')}</Text>
        </View>
      ) : (
        <FlatList  style={{marginTop:10}}
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      )}

      {!isCartEmpty && (
        <View style={{ justifyContent: 'center', bottom: 10, height: '8%', flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
          <TouchableOpacity style={{ width: '40%', backgroundColor: 'orange', height: '80%', margin: 10, top: 5, borderRadius: 20 }} onPress={handleClearCart}>
            <Text style={styles.text2}>{t('added.to.cart')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePlaceOrder} style={{ width: '40%', backgroundColor: 'red', height: '80%', margin: 10, top: 5, borderRadius: 20 }}>
            <Text style={styles.text2}>{t('common.place.order')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    borderRadius: 10,
    // marginBottom: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500'
  },
  text2: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '800',
    color: '#fff', marginTop: 10
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    padding: 5,marginBottom:10
  },
  icon: {
    height: 35,
    width: 35,
  },
  description: {
    fontSize: 20,
    color: 'green',
  },
  emptyCartContainer: {
    height:"100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCartImage: {
    height: 120,
    width: 120,
    // top: -30
  },
  emptyCartText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center'
  },

  qtyview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: 10
  },
  vewitem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginTop: 10,
    
    // height: '15%',
  },
  text3: {
    color: 'red',
    fontSize: 20,
    top: -8,
    margin: 20,
  },
  button: {
    backgroundColor: '#aecc9d',
    borderRadius: 10,
    height: 60,
    width: '30%',
    alignSelf: 'center',
    alignItems: 'center',
  }
});

export default ShopCart;
