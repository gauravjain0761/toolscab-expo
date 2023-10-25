//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/Colors';
import { Header } from '../../components';

// create a component
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <Text>HomeScreen</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
});

//make this component available to the app
export default HomeScreen;
