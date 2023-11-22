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
import { heightPercentageToDP } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./CatalogueFilterStyle";
import { checkList, filterData } from "../../helper/constantData";
import { useDispatch, useSelector } from "react-redux";
import {
  getCatalogueCategoryProductsAction,
  getCatalogueCategorySearchAction,
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
      onSuccess: (res: any) => {
        const finalADD = [
          {
            brand: item?.category_title,
          },
          ...res,
        ];

        setShowProduct(finalADD);
      },
      onFailure: () => {},
    };
    dispatch(getCatalogueCategoryProductsAction(obj));
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
                label={item?.brand}
                onSelectPress={() =>
                  //@ts-ignore
                  navigationRef.navigate(screenName.productDetail)
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
  const dispatch = useDispatch();
  const {
    catalogueCategorySearchList: catalogueList,
    catalogueCategoryProductList: CategoryProductList,
  } = useSelector((state) => state.catalogue);

  useEffect(() => {
    const obj = {
      onSuccess: (res: any) => {},
      onFailure: () => {},
    };
    dispatch(getCatalogueCategorySearchAction(obj));
  }, []);

  const onSelectPress = (item: any) => {
    const obj = {
      params: {
        category_id: item?.product_category_id,
      },
      onSuccess: (res: any) => {
        const finalADD = [
          {
            brand: item?.category_title,
          },
          ...res,
        ];

        setShowProduct(finalADD);
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
        />
        <View style={styles.containerBody}>
          <View style={styles.leftView}>
            <Text style={styles.leftHeaderText}>Tootekategooriad</Text>
            {catalogueList?.map((item:any) => {
              return (
                <TouchableOpacity onPress={()=>{onSelectPress(item)}}>
                  <Text
                    style={[
                      styles.leftHeaderItemText,
                      {
                        fontFamily:
                          //@ts-ignore
                          showProduct[0]?.brand === item?.category_title
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
              {checkList.map((item) => {
                return <CheckboxView title={item.title} list={item.list} />;
              })}
            </View>
          </View>
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
          data={filterData}
          numColumns={2}
          keyExtractor={(_i, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ProductView
                icon={item.icon}
                title={item.name}
                onSelectPress={() =>
                  //@ts-ignorez
                  navigationRef.navigate(screenName.catalogueProductsMobile)
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
      <TouchableOpacity
        style={styles.filterView}
        onPress={() => setFilterModal(true)}
      >
        <Image style={styles.filterIcon} source={icons.filterMobileIcon} />
      </TouchableOpacity>
      <ProductFilterModalMobile
        isVisible={filterModal}
        onClose={() => setFilterModal(false)}
      />
    </View>
  );
};

//make this component available to the app
export default CatalogueFilter;
