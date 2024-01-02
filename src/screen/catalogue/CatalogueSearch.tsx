//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../theme/Colors";
import { FooterView, Header, ProductView } from "../../components";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import { icons } from "../../theme/Icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { styles } from "./CatalogueFilterStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  catalogueCategorySearchAction,
  getCatalogueCategoryProductsAction,
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
        {mainView
          ? listData.length > 0
            ? "Meie seadmed"
            : ""
          : showProduct[0]?.brand}
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
          ListEmptyComponent={() => {
            return (
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    ...commonFontStyle(
                      fontFamily.articulat_medium,
                      18,
                      colors.black
                    ),
                  }}
                >
                  Toodet ei leitud
                </Text>
              </View>
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

const CatalogueSearch = () => {
  const navigationRef = useNavigation();
  const [showProduct, setShowProduct] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const isFocused = useIsFocused();

  const dispatch = useDispatch();
  const { catalogueSearchList } = useSelector((state) => state.catalogue);

  useEffect(() => {
    setShowProduct([]);
  }, [isFocused]);

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

  const onSearchPress = () => {
    setShowProduct([]);
    const obj = {
      params: {
        search: searchValue,
        includeImages: true,
      },
      onSuccess: (res: any) => {},
      onFailure: () => {},
    };
    dispatch(catalogueCategorySearchAction(obj));
  };

  return Platform.OS == "web" ? (
    <View style={styles.container}>
      <Header isMainScreen={false} />
      <View style={[styles.mainStyleWeb, {}]}>
        <View style={styles.tab2MainStyleWeb}>
          <TextInput
            placeholder="otsing"
            style={styles.textInputStyleWeb}
            value={searchValue}
            onChangeText={(text) => setSearchValue(text)}
            placeholderTextColor={colors.whiteGray}
          />
          <TouchableOpacity
            style={styles.searchViewWeb}
            onPress={() => onSearchPress()}
          >
            <Image source={icons.search} style={styles.searchIconWeb} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerBody}>
          <View style={styles.rightView}>
            {showProduct?.length == 0 ? (
              <ProductcartList
                listData={catalogueSearchList}
                mainView={true}
                setShowProduct={setShowProduct}
              />
            ) : (
              <ProductcartList mainView={false} showProduct={showProduct} />
            )}
          </View>
        </View>
      </View>
      <View style={{ height: 50 }} />
      <View style={{ justifyContent: "flex-end", top: 280 }}>
        <FooterView />
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.tab2MainStyleMob}>
          <TextInput
            placeholder="otsing"
            style={styles.textInputStyleMob}
            value={searchValue}
            onChangeText={(text) => setSearchValue(text)}
            placeholderTextColor={colors.whiteGray}
          />
          <TouchableOpacity
            style={styles.searchViewMob}
            onPress={() => onSearchPress()}
          >
            <Image source={icons.search} style={styles.searchIconMob} />
          </TouchableOpacity>
        </View>
        {catalogueSearchList.length > 0 && (
          <Text style={styles.title}>Meie seadmed</Text>
        )}

        <FlatList
          data={catalogueSearchList}
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
          ListEmptyComponent={() => {
            return (
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    marginTop: 30,
                    ...defaultFont(500, 18, colors.black),
                  }}
                >
                  Toodet ei leitud
                </Text>
              </View>
            );
          }}
        />
        <View style={{ height: 200 }} />
        <FooterView />
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default CatalogueSearch;
