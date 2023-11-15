//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, useWindowDimensions, Image, ScrollView, } from "react-native";
import { colors } from "../../theme/Colors";
import { FooterView, ProductFilterModalMobile, ProductView, } from "../../components";
import { screenName } from "../../helper/constants";
import { icons } from "../../theme/Icons";
import { defaultFont } from "../../theme/Fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

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


// create a component
const CatalogueProductsMobile = () => {
  const navigationRef = useNavigation()

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
                            <ProductView
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
                <Image style={styles.filterIcon} source={icons.filterMobileIcon} />
            </TouchableOpacity>
        <ProductFilterModalMobile isVisible={filterModal} onClose={()=>setFilterModal(false)}/>

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
export default CatalogueProductsMobile;
