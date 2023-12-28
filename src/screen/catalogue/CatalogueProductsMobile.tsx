//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import {
  FooterView,
  ProductFilterModalMobile,
  ProductView,
} from "../../components";
import { screenName } from "../../helper/constants";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./CatalogueProductsMobileStyle";
import { useDispatch, useSelector } from "react-redux";
import { getProductAction, postcatalogueFilterProductAction } from "../../actions/catalogueAction";


// create a component
const CatalogueProductsMobile = () => {
  const navigationRef = useNavigation();
  const [filterModal, setFilterModal] = useState(false);
  const {
    catalogueCategorySearchList: catalogueList,
    catalogueCategoryProductList: CategoryProductList,
  } = useSelector((state) => state.catalogue);
  const dispatch = useDispatch();


  const onFilterPressMobile = (res: any) => {
    const upfdate = catalogueList?.filter((item) => item?.product_category_id == res?.product_category_id);

    const obj = {
      data: res,
      data1: {
        brand: upfdate[0]?.category_title,
      },
      onSuccess: (res: any) => {
        setFilterModal(false)
        // navigationRef.navigate(screenName.catalogueProductsMobile)
      },
      onFailure: () => { },
    };
    dispatch(postcatalogueFilterProductAction(obj));
  };
  const onProductPressMobile = (item: any) => {
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
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{CategoryProductList?.[0]?.brand}</Text>
        <FlatList
          data={CategoryProductList}
          numColumns={2}
          // horizontal
          keyExtractor={(_i, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ProductView
                index={index}
                icon={item?.icon}
                title={item?.product_name}
                label={item?.brand}
                product_category_id={`https://api.toolscab.ee/PhotoBinary/ProductPhoto?product_photo_id=${item?.first_photo_id}&maxWidth=300&maxHeight=300`}
                onSelectPress={() =>
                  onProductPressMobile(item)
                }
                mainView={false}
                banner={item?.banner}
                aircon={item?.aircon || 0}
                volumeflow={item?.volumeflow || 0}
                hoselength={item?.hoselength || 0}
              />
            );
          }}
        />
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
          onFilterPressMobile(res)
        }}
      />
    </View>
  );
};

//make this component available to the app
export default CatalogueProductsMobile;
