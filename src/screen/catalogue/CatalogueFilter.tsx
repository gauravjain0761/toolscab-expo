//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
} from "react-native";
import { colors } from "../../theme/Colors";
import { FooterView, Header, ProductView } from "../../components";

import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import HeaderBottomPathView from "../../components/reusableComponent/HeaderBottomPathView";
import { icons } from "../../theme/Icons";

import { useNavigation } from "@react-navigation/native";
import { styles } from "./CatalogueFilterStyle";

import { useDispatch, useSelector } from "react-redux";
import {
  getCatalogueCategoryProductsAction,
  getCatalogueCategorySearchAction,
  getProductAction,
} from "../../actions/catalogueAction";

// create a component
const ProductcartList = ({
  setShowProduct,
  mainView,
  showProduct,
  listData,
}: any) => {
  const navigationRef = useNavigation();
  const dispatch = useDispatch();

  const onSelectPress = (item: any) => {
    const obj = {
      params: {
        category_id: item?.product_category_id,
      },
      data1: {
        brand: item?.category_title,
      },
      onSuccess: (res: any) => {
        const finalADD = [
          // {
          //   brand: item?.category_title,
          // },
          ...res,
        ];

        setShowProduct(finalADD);
      },
      onFailure: () => {},
    };
    dispatch(getCatalogueCategoryProductsAction(obj));
  };

  const onProductPress = (item: any) => {
    const obj = {
      params: {
        product_id: item?.product_id,
        // product_id: 1,

        include_photo_ids: true,
      },
      onSuccess: (res: any) => {
        navigationRef.navigate(screenName.productDetail);
      },
      onFailure: () => {},
    };
    dispatch(getProductAction(obj));
  };

  return (
    <View>
      <Text
        style={{
          marginBottom: 30,
          ...commonFontStyle(fontFamily.bold, 30, colors.black),
        }}
      >
        {mainView ? "Meie seadmed" : showProduct[0]?.brand}
      </Text>
      {mainView ? (
        <FlatList
          data={listData}
          numColumns={4}
          keyExtractor={(_i, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <ProductView
                icon={item.icon}
                product_category_id={`https://api.toolscab.ee/PhotoBinary/CategoryPhoto?category_id=${item?.product_category_id}&maxWidth=300&maxHeight=300`}
                title={item?.category_title}
                onSelectPress={() => onSelectPress(item)}
                mainView={true}
              />
            );
          }}
        />
      ) : (
        <FlatList
          data={showProduct}
          numColumns={4}
          keyExtractor={(_i, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ProductView
                index={index}
                icon={item?.icon}
                title={item?.product_name}
                banner={item?.banner}
                product_category_id={`https://api.toolscab.ee/PhotoBinary/ProductPhoto?product_photo_id=${item?.first_photo_id}&maxWidth=300&maxHeight=300`}
                label={item?.brand}
                onSelectPress={() =>
                  //@ts-ignore
                  onProductPress(item)
                }
                mainView={false}
                aircon={item?.aircon || 0}
                volumeflow={item?.volumeflow || 0}
                hoselength={item?.hoselength || 0}
              />
            );
          }}
        />
      )}
    </View>
  );
};

const CatalogueFilter = () => {
  const navigationRef = useNavigation();
  const [showProduct, setShowProduct] = useState([]);

  const dispatch = useDispatch();
  const { catalogueCategorySearchList: catalogueList } = useSelector(
    (state) => state.catalogue
  );

  useEffect(() => {
    const obj = {
      onSuccess: (res: any) => {},
      onFailure: () => {},
    };
    dispatch(getCatalogueCategorySearchAction(obj));
  }, []);

  const onCataloguePressMobile = (res) => {
    const obj = {
      params: {
        category_id: res?.product_category_id,
      },
      data1: {
        brand: res?.category_title,
      },
      onSuccess: (res: any) => {
        navigationRef.navigate(screenName.catalogueProductsMobile);
      },
      onFailure: () => {},
    };
    dispatch(getCatalogueCategoryProductsAction(obj));
  };

  return Platform.OS == "web" ? (
    <View style={styles.container}>
      <Header isMainScreen={false} />
      <View style={styles.mainStyleWeb}>
        <HeaderBottomPathView
          heading={" Seadmed "}
          //@ts-ignore
          heading1={`/ ${showProduct[0]?.brand}`}
          onHeadingPress={() => setShowProduct([])}
          onHeadingMainPress={() => {
            navigationRef.navigate(screenName.homeScreen);
          }}
        />
        <View style={styles.containerBody}>
          <View style={styles.rightView}>
            {showProduct?.length == 0 ? (
              <ProductcartList
                listData={catalogueList}
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
        <View style={styles.showProductStyle}>
          <ImageBackground
            source={icons.imageBg}
            resizeMode="contain"
            style={styles.imageBgStyleWeb}
          >
            <Text
              style={styles.imageTextWeb}
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
          data={catalogueList}
          numColumns={2}
          keyExtractor={(_i, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ProductView
                icon={icons.image1}
                title={item?.category_title}
                product_category_id={`https://api.toolscab.ee/PhotoBinary/CategoryPhoto?category_id=${item?.product_category_id}&maxWidth=300&maxHeight=300`}
                onSelectPress={() =>
                  //@ts-ignorez
                  onCataloguePressMobile(item)
                }
                mainView={true}
              />
            );
          }}
        />
        <Image
          source={icons.imageBg}
          resizeMode="cover"
          style={styles.imageBgStyleMob}
        ></Image>
        <FooterView />
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default CatalogueFilter;
