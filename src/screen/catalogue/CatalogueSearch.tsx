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
  TextInput,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../theme/Colors";
import {
  FooterView,
  Header,
  ProductFilterModalMobile,
  ProductView,
} from "../../components";
import { SCREEN_WIDTH, commonFontStyle } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import HeaderBottomPathView from "../../components/reusableComponent/HeaderBottomPathView";
import { icons } from "../../theme/Icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { styles } from "./CatalogueFilterStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  catalogueCategorySearchAction,
  getCatalogueCategoryProductsAction,
  getCatalogueCategorySearchAction,
  getCatalogueFilterFormAction,
  getProductAction,
  postcatalogueFilterProductAction,
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
  const [filterModal, setFilterModal] = useState(false);
  const [catalogueFilter, setCatalogueFilter] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const [brandList, setBrandsList] = useState([]);
  const [catalogueId, setCatalogueId] = useState([]);
  const isFocused = useIsFocused();

  const dispatch = useDispatch();
  const {
    catalogueCategorySearchList: catalogueList,
    catalogueCategoryProductList: CategoryProductList,
    catalogueSearchList,
  } = useSelector((state) => state.catalogue);

  useEffect(() => {
    const obj1 = {
      onSuccess: (res: any) => {
        setCatalogueFilter(res);
      },
      onFailure: () => {},
    };
    dispatch(getCatalogueFilterFormAction(obj1));
    setShowProduct([]);
  }, [isFocused]);

  const onFilterPress = () => {
    const obj = {
      data: {
        product_category_id: catalogueId?.product_category_id,
        statuses: ["Online"],
        cities: cityList,
        brands: brandList,
        types: typeList,
      },
      data1: {
        brand: catalogueId?.category_title,
      },
      onSuccess: (res: any) => {
        const finalADD = [
          // {
          //   brand: catalogueId?.category_title,
          // },
          ...res,
        ];
        setShowProduct(finalADD);
      },
      onFailure: () => {},
    };
    dispatch(postcatalogueFilterProductAction(obj));
  };

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

  const onFilterPressMobile = (res) => {
    const upfdate = catalogueSearchList?.filter(
      (item) => item?.product_category_id == res?.product_category_id
    );

    const obj = {
      data: res,
      data1: {
        brand: upfdate[0]?.category_title,
      },
      onSuccess: (res: any) => {
        setFilterModal(false);
        navigationRef.navigate(screenName.catalogueProductsMobile);
      },
      onFailure: () => {},
    };
    dispatch(postcatalogueFilterProductAction(obj));
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
            placeholder="typing search here.... "
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
            placeholder="typing search here.... "
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
       {catalogueSearchList.length > 0 && <Text style={styles.title}>Meie seadmed</Text>}
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
        />
        {/* <Image
          source={icons.imageBg}
          resizeMode="cover"
          style={styles.imageBgStyleMob}
        ></Image> */}
        <View style={{height:200}}/>
        <FooterView />
      </ScrollView>
      {/* <TouchableOpacity
        style={styles.filterView}
        onPress={() => setFilterModal(true)}
      >
        <Image style={styles.filterIcon} source={icons.filterMobileIcon} />
      </TouchableOpacity> */}
      <ProductFilterModalMobile
        isVisible={filterModal}
        onClose={() => setFilterModal(false)}
        onFilterPressMobile={(res) => {
          onFilterPressMobile(res);
        }}
      />
    </View>
  );
};

//make this component available to the app
export default CatalogueSearch;
