//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
} from "react-native";
import { colors } from "../../theme/Colors";
import {
  CheckboxView,
  DropDownMenu,
  FooterView,
  Header,
  ProductFilterModal,
  Productcart,
} from "../../components";
import { hp, screen_height, screen_width } from "../../helper/globalFunctions";
import { SCREEN_WIDTH, commonFontStyle } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import HeaderBottomPathView from "../../components/common/HeaderBottomPathView";
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
      {
        id: 2,
        icon: icons.image1,
        title: "KARCHER Puzzi 10/1",
        label: "Tekstiilipesur",
        aircon: 3240,
        volumeflow: 1,
        hoselength: 1,
      },
      {
        id: 3,
        icon: icons.image8,
        title: "KARCHER SC 1",
        label: "Aurupesur",
        aircon: 3240,
        volumeflow: 1,
        hoselength: 1,
      },
      {
        id: 4,
        icon: icons.image9,
        title: "KARCHER SC 2",
        label: "Aurupesur",
        aircon: 3240,
        volumeflow: 1,
        hoselength: 1,
      },
      {
        id: 5,
        icon: icons.image8,
        title: "KARCHER Puzzi 10/1",
        label: "Tekstiilipesur",
        aircon: 3240,
        volumeflow: 1,
        hoselength: 1,
      },
      {
        id: 6,
        icon: icons.image1,
        title: "KARCHER Puzzi 10/1",
        label: "Aurupesur",
        aircon: 3240,
        volumeflow: 1,
        hoselength: 1,
      },
      {
        id: 7,
        icon: icons.image9,
        title: "KARCHER SC 2",
        label: "Aurupesur",
        aircon: 3240,
        volumeflow: 1,
        hoselength: 1,
      },
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

const ProductcartList = ({ setShowProduct, mainView, showProduct }: any) => {
  const onSelectPress = (item: any) => {
    setShowProduct(item);
  };
  return (
    // Platform.OS == 'web' ?
    <View>
      <Text
        style={{
          marginBottom: 30,
          ...commonFontStyle(fontFamily.bold, 30, colors.black),
        }}
      >
        {mainView ? "Meie seadmed" : showProduct?.name}
      </Text>
      {mainView ? (
        <FlatList
          data={filterData}
          numColumns={3}
          keyExtractor={(_i, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <Productcart
                icon={item.icon}
                title={item.name}
                onSelectPress={() => onSelectPress(item)}
                mainView={true}
              />
            );
          }}
        />
      ) : (
        <FlatList
          data={showProduct?.productList}
          numColumns={3}
          keyExtractor={(_i, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Productcart
                index={index}
                icon={item?.icon}
                title={item?.title}
                label={item?.label}
                onSelectPress={() =>
                  navigationRef.navigate(screenName.productDetail)
                }
                mainView={false}
                aircon={item?.aircon}
                volumeflow={item?.volumeflow}
                hoselength={item?.hoselength}
              />
            );
          }}
        />
      )}
    </View>
    // :
    // <View>

    // </View>
  );
};

const ProductFilter = () => {
  const { height } = useWindowDimensions();
  const [showProduct, setShowProduct] = useState([]);
  const [filterModal, setFilterModal] = useState(false);

  return Platform.OS == "web" ? (
    <View style={styles.container}>
      <Header isMainScreen={false} />
      <View
        style={{
          width: screen_width * 0.75,
          alignSelf: "center",
          marginTop: hp(60),
        }}
      >
        <HeaderBottomPathView
          heading={" Seadmed "}
          heading1={`/ ${showProduct?.name}`}
          onHeadingPress={() => setShowProduct([])}
        />
        <View style={styles.containerBody}>
          <View style={styles.leftView}>
            <Text style={styles.leftHeaderText}>Tootekategooriad</Text>
            {filterData.map((item) => {
              return (
                <TouchableOpacity>
                  <Text
                    style={[
                      styles.leftHeaderItemText,
                      {
                        fontFamily:
                          showProduct?.name === item?.name
                            ? fontFamily.articulat_bold
                            : fontFamily.articulat_normal,
                      },
                    ]}
                  >
                    {item?.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
            <Text style={[styles.leftHeaderText, { marginTop: hp(32) }]}>
              Filtreeri
            </Text>
            <DropDownMenu />
            <View style={{ marginTop: 16 }}>
              {checkList.map((item) => {
                return <CheckboxView title={item.title} list={item.list} />;
              })}
            </View>
          </View>
          <View style={styles.rightView}>
            {showProduct?.length == 0 ? (
              <ProductcartList
                mainView={true}
                setShowProduct={setShowProduct}
              />
            ) : (
              <ProductcartList mainView={false} showProduct={showProduct} />
            )}
          </View>
        </View>
      </View>
      {showProduct?.length == 0 ? (
        <View
          style={{ marginTop: 115, alignItems: "center", marginBottom: 65 }}
        >
          <ImageBackground
            source={icons.imageBg}
            resizeMode="contain"
            style={{
              width: screen_width * 0.65,
              height: screen_height * 0.35,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...commonFontStyle(
                  fontFamily.articulat_regular,
                  14,
                  colors.white
                ),
              }}
            >{`See sektsioon siin on lihtsalt sellejaoks, et lehte kuidagi ära lõpetada\nja ülemisele osale jalgu anda. Siia võib panna Vaata lisaks sektsiooni või blogipostitused`}</Text>
          </ImageBackground>
        </View>
      ) : (
        <View style={{ marginTop: 90 }} />
      )}
      <View style={{ justifyContent: "flex-end" }}>
        <FooterView />
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Meie seadmed</Text>
        <FlatList
          data={filterData}
          // data={filterData[0]?.productList}
          numColumns={2}
          keyExtractor={(_i, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Productcart
                icon={item.icon}
                title={item.name}
                onSelectPress={() =>
                  navigationRef.navigate(screenName.subProducts)
                }
                mainView={true}
              />
            );
          }}
        />
        <Image
          source={icons.imageBg}
          resizeMode="cover"
          style={{
            width: SCREEN_WIDTH - heightPercentageToDP(4),
            height: SCREEN_WIDTH - heightPercentageToDP(4),
            alignSelf: "center",
            marginVertical: heightPercentageToDP(4),
            marginBottom: heightPercentageToDP(6),
            borderTopRightRadius: 48,
            borderBottomLeftRadius: 48,
          }}
        ></Image>
        <FooterView />
      </ScrollView>
      <TouchableOpacity
        style={styles.filterView}
        onPress={() => setFilterModal(true)}
      >
        <Image
          style={styles.filterIcon}
          source={require("../../assets/icon/filterMobileIcon.png")}
        />
      </TouchableOpacity>
      <ProductFilterModal
        isVisible={filterModal}
        onClose={() => setFilterModal(false)}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  // mobile
  title: {
    ...defaultFont("600_o", 32, colors.black),
    marginTop: heightPercentageToDP(6),
    marginBottom: heightPercentageToDP(4),
    textAlign: "center",
  },
  filterView: {
    position: "absolute",
    bottom: heightPercentageToDP(2),
    paddingLeft: heightPercentageToDP(2),
  },
  filterIcon: {
    height: 75,
    width: 75,
    resizeMode: "contain",
  },

  // web
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  containerBody: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  leftView: {
    flex: 0.3,
    alignItems: "flex-start",
    // height: screen_height * 0.62,
  },
  leftHeaderText: {
    marginBottom: 10,
    ...commonFontStyle(fontFamily.articulat_bold, 14, colors.black),
  },
  leftHeaderItemText: {
    lineHeight: 21,
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.black),
  },
  rightView: {
    flex: 1,
  },
});

//make this component available to the app
export default ProductFilter;
