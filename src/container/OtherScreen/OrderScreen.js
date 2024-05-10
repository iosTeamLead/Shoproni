import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrderScreen = () => {
    const [orderedProducts, setOrderedProducts] = useState([]);

    useEffect(() => {
        const fetchOrderedProducts = async () => {
            try {
                const savedProducts = await AsyncStorage.getItem('orderedProducts');
                if (savedProducts) {
                    setOrderedProducts(JSON.parse(savedProducts));
                }
            } catch (error) {
                console.error('Error fetching ordered products:', error);
            }
        };

        fetchOrderedProducts();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Ordered Products</Text>
                    {orderedProducts.map((product, index) => (
                        <View key={index} style={styles.productItem}>
                            <Text>{product.name}</Text>
                            <Text>{product.price}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    productItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
});

export default OrderScreen;
