import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FooterView, Header } from '../../components'
import { colors } from '../../theme/Colors'
import { hp, screen_width, wp } from '../../helper/globalFunctions'
import HeaderBottomPathView from '../../components/common/HeaderBottomPathView'
import { icons } from '../../theme/Icons'
import { FlatList } from 'react-native'
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily } from '../../helper/constants'
import CommonGreenBtn from '../../components/common/CommonGreenBtn'

type Props = {}

const ProductDetail = (props: Props) => {
    const [selectedTab, setselectedTab] = useState(1)

    return (
        <View style={styles.container}>
            <Header isMainScreen={false} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.mainContainer}>
                    <HeaderBottomPathView heading="Kodu / seadmed / pesurid / KARCHER Puzzi 10/1" />
                    <View style={styles.mainContentView}>
                        <View >
                            <Image source={icons.image1} style={styles.imageProduct} />
                            <FlatList data={[0, 1, 2, 3]} horizontal
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={styles.bottomImages} />
                                    )
                                }}
                            />
                            <Text style={styles.des}>Polstri- ja põrandaotsikuga Puzzi 10/1 sobib eriti hästi suuremate ja keskmiste pindade hügieeniliseks puhastamiseks. 1 baari suuruse piserdusrõhuga kannab süvapesuseade hoolt tekstiilpindade säästva sügavpuhastuse eest ja annab eriti polstrite ja vaipkatete puhastamisel veenvaid tulemusi. Tänu kitsale põrandaotsikule sobib seade suurepäraselt ka kitsamates ruumitingimustes töötamiseks. Ning tänu painduvale kummiraaklile saab muretult puhastada ka möbleeritud pindasid. Süvapesuseade on varustatud integreeritud juhtmekonksu ja käsitööriistade ning imemisvooliku kinnitusega.</Text>
                        </View>
                        <View style={styles.rightView}>
                            <Text style={styles.title1}>Tekstiilipesur</Text>
                            <Text style={styles.mainTitle}>KARCHER Puzzi 101</Text>
                            <View style={styles.botomLine} />
                            <View style={styles.priceView}>
                                <View>
                                    <Text style={{ ...commonFontStyle(fontFamily.semiBold, 100, colors.Roheline2), letterSpacing: -5, }}>0<Text style={{ fontSize: 60 }}>.22</Text><Text style={commonFontStyle(fontFamily.semiBold, 26, colors.Roheline2)}>€</Text></Text>
                                    <View style={[styles.priceView, { position: 'absolute', bottom: 15, width: '100%', paddingLeft: 20 }]}>
                                        <Text style={commonFontStyle(fontFamily.articulat_regular, 12, colors.filterText)}>26€ / 24h</Text>
                                        <Text style={commonFontStyle(fontFamily.articulat_regular, 14, colors.headerBG)}>Minut</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, marginLeft: 30, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image style={styles.arrowImage} source={require('../../assets/icon/bottomArrow.png')} />
                                    <Text style={commonFontStyle(fontFamily.articulat_regular, 14, colors.black)}>Kuidas hind kujuneb ?</Text>
                                </View>
                            </View>
                            <View style={styles.botomLine} />
                            <View style={styles.btnRow}>
                                <CommonGreenBtn title='Rendi' onPress={() => { }} />
                                <CommonGreenBtn title='Leia kapp' onPress={() => { }} style={{
                                    backgroundColor: colors.white,
                                    borderColor: colors.black,
                                    marginLeft: 10
                                }} />
                            </View>
                            <Text style={styles.btnBottomText}>Renditingimused</Text>
                            <View style={styles.botomLine} />
                            <Text style={styles.title2}>Komplekt sisaldab</Text>
                            <Text style={styles.des2}>Tekstiilipesur</Text>
                            <Text style={styles.des2}>Voolik</Text>
                            <Text style={styles.des2}>Pesuaine</Text>
                        </View>

                    </View>

                </View>
                <View style={styles.mainContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => setselectedTab(1)} style={[styles.tabView, { borderBottomColor: selectedTab == 1 ? colors.roheline : 'transparent' }]}>
                            <Text style={styles.tabText}>Tehnilised andmed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setselectedTab(2)} style={[styles.tabView, { borderBottomColor: selectedTab == 2 ? colors.roheline : 'transparent' }]}>
                            <Text style={styles.tabText}>Saadavus</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setselectedTab(3)} style={[styles.tabView, { borderBottomColor: selectedTab == 3 ? colors.roheline : 'transparent' }]}>
                            <Text style={styles.tabText}>Kasutamine</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.middleMainView}>
                    <View style={styles.mainContainer}>

                    </View>
                </View>
                <FooterView />
            </ScrollView>
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    mainContainer: {
        width: screen_width * 0.75,
        alignSelf: "center",
        marginTop: hp(60),
    },
    bodyHeader: {
        alignItems: "flex-start",
    },
    unLineStyle: {
        width: screen_width * 0.75,
        borderWidth: 1,
        height: 2,
        borderColor: "#F5F1EF",
        marginVertical: hp(50),
    },
    mainContentView: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    imageProduct: {
        height: 350,
        width: (screen_width * 0.75) / 1.7,
        resizeMode: 'contain',
    },
    bottomImages: {
        width: 100,
        height: 55,
        backgroundColor: colors.grey_1,
        marginRight: 15
    },
    des: {
        ...commonFontStyle(fontFamily.articulat_normal, 14, colors.black),
        lineHeight: 21,
        marginTop: 20,
        width: (screen_width * 0.75) / 1.7
    },
    title1: {
        ...commonFontStyle(fontFamily.articulat_normal, 14, colors.black),
    },
    rightView: {
        flex: 1,
        marginLeft: 50,
    },
    mainTitle: {
        ...commonFontStyle(fontFamily.semiBold, 28, colors.black),
    },
    botomLine: {
        height: 1,
        backgroundColor: colors.homecartBG
    },
    priceView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    arrowImage: {
        height: 32, width: 32, resizeMode: 'contain', marginRight: 10
    },
    btnRow: {
        flexDirection: 'row',
        marginTop: 20
    },
    btnBottomText: {
        ...commonFontStyle(fontFamily.articulat_regular, 12, colors.black),
        paddingVertical: 10
    },
    title2: {
        ...commonFontStyle(fontFamily.articulat_bold, 14, colors.black),
        marginTop: 10,
        marginBottom: 3
    },
    des2: {
        ...commonFontStyle(fontFamily.articulat_regular, 12, colors.headerBG),
    },
    middleMainView: {
        backgroundColor: colors.homecartBG,
        paddingVertical: 60
    },
    tabView: {
        width: '30%',
        borderBottomWidth: 3,
        borderBottomColor: 'transparent',
        alignItems: 'center',
        paddingVertical: 5
    },
    tabText: {
        ...commonFontStyle(fontFamily.articulat_regular, 18, colors.headerBG)
    }
})