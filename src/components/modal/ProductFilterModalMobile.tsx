//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
// import Modal from "react-native-modal";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { defaultFont } from "../../theme/Fonts";
import DropDownMenu from "../reusableComponent/DropDownMenu";
import CheckboxView from "../reusableComponent/CheckboxView";
import { useSelector } from "react-redux";
import CommonGreenBtn from "../reusableComponent/CommonGreenBtn";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  onFilterPressMobile: (res: any) => void;
  
};

// create a component
const ProductFilterModalMobile = ({
  isVisible,
  onClose,
  onFilterPressMobile,
}: Props) => {
  const [catalogueId, setCatalogueId] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const [brandList, setBrandsList] = useState([]);

  const {
    catalogueCategorySearchList: catalogueList,
    catalogueCategoryProductList: CategoryProductList,
    catalogueCategoryFilterList: catalogueFilterList,
  } = useSelector((state) => state.catalogue);

  const onSelectPress = (item: any) => {
    setCatalogueId(item);
  };

  const onResetFilterPress = () => {
    setBrandsList([]), setCityList([]), setTypeList([]);
    setCatalogueId([]);
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
  
  const onFilterPress = () => {
    if(catalogueId?.product_category_id == undefined){
      onClose()
    }else{
      const obj = {
        product_category_id: catalogueId?.product_category_id,
        statuses: ["Online"],
        cities: cityList,
        brands: brandList,
        types: typeList,
      };
      onFilterPressMobile(obj);
    }
   
  };

  return (
    <Modal transparent visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.bodyContent}>
          <ScrollView style={{ flex: 1 }}>
            <Text
              style={{
                ...defaultFont(700, 17, colors.black),
                marginBottom: 15,
              }}
            >
              Tootekategooriad
            </Text>
            {catalogueList?.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    onSelectPress(item);
                  }}
                >
                  <Text
                    style={[
                      {
                        ...defaultFont(400, 17, colors.black),
                        marginBottom: 8,
                        fontFamily:
                          //@ts-ignore
                          // showProduct[0]?.brand === item?.category_title ||
                          catalogueId?.category_title !== item?.category_title
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
            <Text
              style={{
                ...defaultFont(700, 17, colors.black),
                marginTop: 30,
              }}
            >
              Filtreeri
            </Text>
            <View style={{ height: 13 }} />
            <DropDownMenu />
            <View style={{ marginTop: 12 }}>
              <CheckboxView
                title={"kaubamärgid"}
                list={catalogueFilterList?.brands}
                selectData={brandList}
                onPressItem={(item) => onBrandPress(item)}
              />
              <CheckboxView
                title={"linnad"}
                list={catalogueFilterList?.cities}
                selectData={cityList}
                onPressItem={(item) => onCitysPress(item)}
              />
              <CheckboxView
                title={"tüübid"}
                list={catalogueFilterList?.types}
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
                width: widthPercentageToDP(30),
                marginTop: 50,
              }}
            />
            <View style={{ height: 190 }} />
          </ScrollView>

          <TouchableOpacity
            style={styles.filterView}
            onPress={() => {
              onResetFilterPress(), onClose();
            }}
          >
            <Image style={styles.filterIcon} source={icons.filterClose} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: heightPercentageToDP(13),
  },
  bodyContent: {
    // width: screen_width * 0.32,
    // paddingHorizontal: 45,
    backgroundColor: colors.white,
    flex: 1,
    paddingLeft: widthPercentageToDP(6),
  },
  filterView: {
    position: "absolute",
    bottom: heightPercentageToDP(14),
    paddingLeft: heightPercentageToDP(2),
  },
  filterIcon: {
    height: 75,
    width: 75,
    resizeMode: "contain",
  },
});

//make this component available to the app
export default ProductFilterModalMobile;
