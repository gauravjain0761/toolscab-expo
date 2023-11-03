//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, useWindowDimensions, Image, ScrollView, } from "react-native";
import { colors } from "../../theme/Colors";
import { FooterView, ProductFilterModal, Productcart, } from "../../components";
import { screenName } from "../../helper/constants";
import { icons } from "../../theme/Icons";
import { navigationRef } from "../../navigations/MainNavigator";
import { defaultFont } from "../../theme/Fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";

const filterData = [
    {
        id: 1,
        name: "Pesurid",
        icon: icons.image1,
        productList: [
            { id: 1, icon: icons.image6, title: "Pesurid", label: "Loe lisaks" },
            { id: 2, icon: icons.image1, title: "KARCHER Puzzi 10/1", label: "Tekstiilipesur", aircon: 3240, volumeflow: 1, hoselength: 1, },
            { id: 3, icon: icons.image8, title: "KARCHER SC 1", label: "Aurupesur", aircon: 3240, volumeflow: 1, hoselength: 1, },
            { id: 4, icon: icons.image9, title: "KARCHER SC 2", label: "Aurupesur", aircon: 3240, volumeflow: 1, hoselength: 1, },
            { id: 5, icon: icons.image8, title: "KARCHER Puzzi 10/1", label: "Tekstiilipesur", aircon: 3240, volumeflow: 1, hoselength: 1, },
            { id: 6, icon: icons.image1, title: "KARCHER Puzzi 10/1", label: "Aurupesur", aircon: 3240, volumeflow: 1, hoselength: 1, },
            { id: 7, icon: icons.image9, title: "KARCHER SC 2", label: "Aurupesur", aircon: 3240, volumeflow: 1, hoselength: 1, },
        ],
    },
    { id: 2, name: "Tolmuimejad", icon: icons.image2 },
    { id: 3, name: "Saed", icon: icons.image4 },
    { id: 4, name: "Puhurid", icon: icons.image3 },
    { id: 5, name: "Trellid", icon: icons.image5 },
    { id: 6, name: "Lõikurid", icon: icons.image7 },
];

const checkList = [
    {
        id: 1,
        title: "Saadavus:",
        list: [
            { id: 1, name: "Kõik" },
            { id: 2, name: "Praegu saadaval" },
        ],
    },
    {
        id: 2,
        title: "Tootja",
        list: [
            { id: 1, name: "Karcher" },
            { id: 2, name: "Makita" },
        ],
    },
    {
        id: 3,
        title: "Tüüp",
        list: [
            { id: 1, name: "Akutoitel" },
            { id: 2, name: "Juhtmega" },
        ],
    },
];
// create a component


const SubProducts = () => {
    const { height } = useWindowDimensions();
    const [showProduct, setShowProduct] = useState([]);
    const [filterModal,setFilterModal]=useState(false)

    return (

        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Pesurid</Text>
                <FlatList
                    data={filterData[0].productList}
                    numColumns={2}
                    keyExtractor={(_i, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <Productcart
                                index={index}
                                icon={item?.icon}
                                title={item?.title}
                                label={item?.label}
                                onSelectPress={() => navigationRef.navigate(screenName.productDetail)}
                                mainView={false}
                                aircon={item?.aircon}
                                volumeflow={item?.volumeflow}
                                hoselength={item?.hoselength}
                            />
                        );
                    }}
                />
                <FooterView />
            </ScrollView>
            <TouchableOpacity style={styles.filterView} onPress={()=>setFilterModal(true)}>
                <Image style={styles.filterIcon} source={require('../../assets/icon/filterMobileIcon.png')} />
            </TouchableOpacity>
        <ProductFilterModal isVisible={filterModal} onClose={()=>setFilterModal(false)}/>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    // mobile
    title: {
        ...defaultFont('600_o', 32, colors.black),
        marginTop: heightPercentageToDP(6),
        marginBottom: heightPercentageToDP(4),
        textAlign: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    filterView: {
        position: 'absolute',
        bottom: heightPercentageToDP(2),
        paddingLeft: heightPercentageToDP(2)
    },
    filterIcon: {
        height: 75, width: 75, resizeMode: 'contain'
    }


});

//make this component available to the app
export default SubProducts;
