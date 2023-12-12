//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
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
  ProductFilterModalMobile,
  ProductView,
} from "../../components";
import { hp, screen_height, screen_width } from "../../helper/globalFunctions";
import { SCREEN_WIDTH, commonFontStyle } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import HeaderBottomPathView from "../../components/reusableComponent/HeaderBottomPathView";
import { icons } from "../../theme/Icons";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./CatalogueFilterStyle";
import { checkList, filterData } from "../../helper/constantData";
import { useDispatch, useSelector } from "react-redux";
import {
  getCatalogueCategoryProductsAction,
  getCatalogueCategorySearchAction,
  getCatalogueFilterFormAction,
  getProductAction,
  postcatalogueFilterProductAction,
} from "../../actions/catalogueAction";
import CommonGreenBtn from "../../components/reusableComponent/CommonGreenBtn";

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
      onFailure: () => { },
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
      onFailure: () => { },
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
          numColumns={3}
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
          numColumns={3}
          keyExtractor={(_i, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ProductView
                index={index}
                icon={item?.icon}
                title={item?.product_name}
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
  const [filterModal, setFilterModal] = useState(false);
  const [catalogueFilter, setCatalogueFilter] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const [brandList, setBrandsList] = useState([]);
  const [catalogueId, setCatalogueId] = useState([]);

  const dispatch = useDispatch();
  const {
    catalogueCategorySearchList: catalogueList,
    catalogueCategoryProductList: CategoryProductList,
  } = useSelector((state) => state.catalogue);

  useEffect(() => {
    const obj = {
      onSuccess: (res: any) => { },
      onFailure: () => { },
    };
    dispatch(getCatalogueCategorySearchAction(obj));
    const obj1 = {
      onSuccess: (res: any) => {
        setCatalogueFilter(res);
      },
      onFailure: () => { },
    };
    dispatch(getCatalogueFilterFormAction(obj1));
  }, []);

  const onSelectPress = (item: any) => {
    setCatalogueId(item);
  };
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
      onFailure: () => { },
    };
    dispatch(postcatalogueFilterProductAction(obj));
  };
  const onResetFilterPress = () => {
    setBrandsList([]), setCityList([]), setTypeList([]);
    setCatalogueId([]);
    setShowProduct([]);
  };
  const onBrandPress = (res) => {
    const update = brandList.filter((item) => item === res);
    if (update?.length) {
      const update = brandList.filter((item) => item !== res);
      setBrandsList(update);
    } else {
      setBrandsList([...brandList, res]);
    }
  };
  const onCitysPress = (res) => {
    const update = cityList.filter((item) => item === res);
    if (update?.length) {
      const update = cityList.filter((item) => item !== res);
      setCityList(update);
    } else {
      setCityList([...cityList, res]);
    }
  };
  const onTypePress = (res) => {
    const update = typeList.filter((item) => item === res);
    if (update?.length) {
      const update = typeList.filter((item) => item !== res);
      setTypeList(update);
    } else {
      setTypeList([...typeList, res]);
    }
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
      onFailure: () => { },
    };
    dispatch(getCatalogueCategoryProductsAction(obj));
  };

  const onFilterPressMobile = (res) => {
    const upfdate = catalogueList?.filter(
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
      onFailure: () => { },
    };
    dispatch(postcatalogueFilterProductAction(obj));
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
          {/* <View style={styles.leftView}>
            <Text style={styles.leftHeaderText}>Tootekategooriad</Text>
            {catalogueList?.map((item: any) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    onSelectPress(item);
                  }}
                >
                  <Text
                    style={[
                      styles.leftHeaderItemText,
                      {
                        fontFamily:
                          //@ts-ignore
                          // showProduct[0]?.brand === item?.category_title ||
                          catalogueId?.category_title === item?.category_title
                            ? fontFamily.articulat_bold
                            : fontFamily.articulat_normal,
                      },
                    ]}
                  >
                    {item?.category_title}
                  </Text>
                </TouchableOpacity>
              );
            })}
            <Text style={[styles.leftHeaderText, { marginTop: hp(32) }]}>
              Filtreeri
            </Text>
            <DropDownMenu />
            <View style={{ marginTop: 16 }}>
              <CheckboxView
                title={"kaubamärgid"}
                list={catalogueFilter?.brands}
                selectData={brandList}
                onPressItem={(item) => onBrandPress(item)}
              />
              <CheckboxView
                title={"linnad"}
                list={catalogueFilter?.cities}
                selectData={cityList}
                onPressItem={(item) => onCitysPress(item)}
              />
              <CheckboxView
                title={"tüübid"}
                list={catalogueFilter?.types}
                selectData={typeList}
                onPressItem={(item) => onTypePress(item)}
              />
            </View>
            <CommonGreenBtn
              title="kohaldadas"
              onPress={() => {
                onFilterPress();
              }}
              style={{
                borderColor: colors.headerBG,
                marginLeft: 10,
                width: widthPercentageToDP(7),
                marginTop: 50,
              }}
            />
            <CommonGreenBtn
              title="lähtestada"
              onPress={() => {
                onResetFilterPress();
              }}
              style={{
                borderColor: colors.headerBG,
                marginLeft: 10,
                width: widthPercentageToDP(7),
                marginTop: 20,
              }}
            />
          </View> */}
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
export default CatalogueFilter;
