import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import {
  CommonMapView,
  FooterView,
  Header,
  ProductView,
} from "../../components";
import { colors } from "../../theme/Colors";
import { hp, screen_width, wp } from "../../helper/globalFunctions";
import HeaderBottomPathView from "../../components/reusableComponent/HeaderBottomPathView";
import { icons } from "../../theme/Icons";
import { FlatList } from "react-native";
import { SCREEN_WIDTH, commonFontStyle } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import CommonGreenBtn from "../../components/reusableComponent/CommonGreenBtn";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { defaultFont } from "../../theme/Fonts";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./ProductDetailStyle";
import { dataList } from "../../helper/constantData";
import { useSelector } from "react-redux";

type Props = {};

const ProductDetail = (props: Props) => {
  const navigationRef = useNavigation();

  const [selectedTab, setselectedTab] = useState(1);
  const [tabIndex1, setTabIndex1] = useState(false);
  const [tabIndex2, setTabIndex2] = useState(false);
  const [tabIndex3, setTabIndex3] = useState(false);
  const [pricefoShow, setPricefoShow] = useState(false);
  const { productDetails } = useSelector((state) => state.catalogue);
  const [imageId, setImageId] = useState(productDetails?.photo_ids?.[0]);

  console.log("productDetails", productDetails,imageId);
  const {
    catalogueCategorySearchList: catalogueList,
    catalogueCategoryProductList: CategoryProductList,
  } = useSelector((state) => state.catalogue);

  console.log("CategoryProductList", CategoryProductList);

  const RenderRow = ({ title, value }: any) => {
    if (Platform.OS == "web") {
      return (
        <View style={styles.renderRowWeb}>
          <View style={{ width: "80%", paddingLeft: 40 }}>
            <Text style={styles.renderRowTextWeb}>{title}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>{value}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.renderRowMob}>
          <View style={styles.renderRowViewMob}>
            <Text style={{ ...defaultFont("600_o", 13, colors.blackType) }}>
              {title}
            </Text>
          </View>
          <View />
          <View style={{ flex: 0.7 }}>
            <Text>{value}</Text>
          </View>
        </View>
      );
    }
  };

  const RenderMapRow = ({}: any) => {
    if (Platform.OS === "web") {
      return (
        <View>
          <Text style={styles.rendermapText}>Vahemaa 1.20km</Text>
          <View style={styles.rendermapView}>
            <View style={{ flex: 1, marginTop: 5 }}>
              <Text style={styles.renderText}>
                {"Automaat Tallinna Nautica keskus"}
              </Text>
              <Text style={styles.rendersubText}>Ahtri 9</Text>
              <Text style={styles.rendersubValueText}>10151 TALLINN</Text>
            </View>
            <CommonGreenBtn
              title="Broneeri"
              onPress={() => {}}
              style={styles.btnRender}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={styles.rendermapTextMob}>Vahemaa 1.20km</Text>
          <View style={styles.rendermapViewMob}>
            <View style={{ flex: 1, marginTop: 5 }}>
              <Text style={styles.renderTextMob}>
                {"Automaat Tallinna Nautica keskus"}
              </Text>
              <Text style={styles.rendersubTextMob}>Ahtri 9</Text>
              <Text style={styles.rendersubValueTextMob}>10151 TALLINN</Text>
            </View>
          </View>
          <View style={styles.btnViewStyle}>
            <View style={styles.lineView} />
            <CommonGreenBtn
              title="Broneeri"
              onPress={() => {}}
              style={styles.btnRenderMob}
            />
          </View>
        </View>
      );
    }
  };

  return Platform.OS == "web" ? (
    <View style={styles.container}>
      <Header isMainScreen={false} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.mainContainer}>
          <HeaderBottomPathView
            heading={" Seadmed "}
            //@ts-ignore
            heading1={`/ ${CategoryProductList?.[0]?.brand} `}
            heading2={`/ ${productDetails?.product_name}`}
            onHeadingPress={() =>
              navigationRef.navigate(screenName.catalogueFilter)
            }
            onHeadingPress1={() =>
              navigationRef.navigate(screenName.catalogueFilter)
            }
            onHeadingMainPress={() => {
              navigationRef.navigate(screenName.homeScreen);
            }}
          />
          <View style={styles.mainContentView}>
            <View>
              <Image
                defaultSource={icons.defultIcon}
                source={{
                  uri: `https://api.toolscab.ee/PhotoBinary/ProductPhoto?product_photo_id=${imageId}&maxWidth=100&maxHeight=100`,
                }}
                style={styles.imageProduct}
                resizeMode="contain"
              />
              <FlatList
                data={productDetails?.photo_ids}
                horizontal
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity onPress={() => setImageId(item)}>
                      <ImageBackground
                       defaultSource={icons.defultIcon}
                        source={{
                          uri: `https://api.toolscab.ee/PhotoBinary/ProductPhoto?product_photo_id=${item}&maxWidth=100&maxHeight=100`,
                        }}
                        style={styles.bottomImages}
                      ></ImageBackground>
                    </TouchableOpacity>
                  );
                }}
              />
              <Text style={styles.des}>{productDetails?.description}</Text>
            </View>
            <View style={styles.rightView}>
              <Text style={styles.title1}>{productDetails?.brand}</Text>
              <Text style={styles.mainTitle}>
                {productDetails?.product_name}
              </Text>
              <View style={styles.botomLine} />
              <View style={styles.priceView}>
                <View>
                  <Text style={styles.zeroText}>
                    0<Text style={{ fontSize: 60 }}>.22</Text>
                    <Text style={styles.zeroTextDoller}>€</Text>
                  </Text>
                  <View
                    style={[
                      styles.priceView,
                      {
                        position: "absolute",
                        bottom: 15,
                        width: "100%",
                        paddingLeft: 20,
                      },
                    ]}
                  >
                    <Text style={styles.valueText}>26€ / 24h</Text>
                    <Text style={styles.minText}>Minut</Text>
                  </View>
                </View>
                <View style={styles.arrowViewStyle}>
                  <TouchableOpacity
                    onPress={() => setPricefoShow(!pricefoShow)}
                  >
                    <Image
                      style={styles.arrowImage}
                      source={icons.bottomArrow}
                    />
                  </TouchableOpacity>
                  <Text style={styles.arrowText}>Kuidas hind kujuneb ?</Text>
                </View>
              </View>
              {pricefoShow && (
                <>
                  <View
                    style={[
                      styles.botomLineMob,
                      { marginTop: 8, marginBottom: 19 },
                    ]}
                  />
                  <View style={{ marginHorizontal: widthPercentageToDP(1.5) }}>
                    {dataList.map((item: any) => {
                      return (
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            marginBottom: 5,
                          }}
                        >
                          <Text
                            style={{
                              ...commonFontStyle(
                                fontFamily.articulat_regular,
                                12,
                                colors.black
                              ),
                            }}
                          >
                            {item?.name}
                          </Text>
                          <Text
                            style={{
                              ...commonFontStyle(
                                fontFamily.articulat_regular,
                                12,
                                colors.black
                              ),
                            }}
                          >
                            {item?.subTitle}
                          </Text>
                        </View>
                      );
                    })}
                    <Text
                      style={{
                        ...commonFontStyle(
                          fontFamily.articulat_regular,
                          12,
                          colors.filterText
                        ),
                        marginTop: 15,
                      }}
                    >
                      Rendi lõpphind arvutatakse rendi kestuse põhjal. Lühikeste
                      rentide eest mis maksavad alla 3,29€, võetakse
                      miinimumtasu. Soodustusi rakendatakse peale seda.
                    </Text>
                  </View>
                </>
              )}
              <View style={styles.botomLine} />
              <View style={styles.btnRow}>
                <CommonGreenBtn
                  title="Rendi"
                  onPress={() => {
                    navigationRef.navigate(screenName.productLocations);
                  }}
                />
                <CommonGreenBtn
                  title="Leia kapp"
                  onPress={() => {}}
                  style={styles.btnView}
                />
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setselectedTab(1)}
              style={[
                styles.tabView,
                {
                  borderBottomColor:
                    selectedTab == 1 ? colors.roheline : "transparent",
                },
              ]}
            >
              <Text style={styles.tabText}>Tehnilised andmed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setselectedTab(2)}
              style={[
                styles.tabView,
                {
                  borderBottomColor:
                    selectedTab == 2 ? colors.roheline : "transparent",
                },
              ]}
            >
              <Text style={styles.tabText}>Saadavus</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setselectedTab(3)}
              style={[
                styles.tabView,
                {
                  borderBottomColor:
                    selectedTab == 3 ? colors.roheline : "transparent",
                },
              ]}
            >
              <Text style={styles.tabText}>Kasutamine</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.middleMainView}>
          <View style={[styles.mainContainer, { marginTop: 0 }]}>
            {(selectedTab == 1 || selectedTab == 3) && (
              <View style={styles.tab1View}>
                <Text style={styles.tab1TextStyle}>Tehnilised andmed</Text>
                <View style={styles.whiteLine} />
                <RenderRow
                  title={"Maksimaalne puhastatav pind (m²/h)"}
                  value={"20 - 25"}
                />
                <View style={styles.whiteLineHalf} />
                <RenderRow title={"Õhuvoolu hulk (l/s)"} value={"74"} />

                <View style={styles.whiteLine} />
                <RenderRow title={"Vaakum (mbar/kPa)"} value={"254 / 25,4"} />
                <View style={styles.whiteLineHalf} />
                <RenderRow title={"Pihustusmäär (l/min)"} value={"1"} />

                <View style={styles.whiteLine} />
                <RenderRow title={"Pihustusrõhk (bar)"} value={"1"} />
                <View style={styles.whiteLineHalf} />
                <RenderRow
                  title={"Puhta/musta vee paak (l)"}
                  value={"10 / 9"}
                />
                <View style={styles.whiteLine} />
                <RenderRow title={"Turbiini võimsus (W)"} value={"1250"} />
                <View style={styles.whiteLineHalf} />
                <RenderRow title={"Pumba võimsus (W)"} value={"40"} />

                <View style={styles.whiteLine} />
                <RenderRow
                  title={"Toitepinge (V/Hz)"}
                  value={"220 - 240 / 50 - 60"}
                />
                <View style={styles.whiteLineHalf} />
                <RenderRow
                  title={"Kaal ilma lisatarvikuteta (kg)"}
                  value={"10,5"}
                />

                <View style={styles.whiteLine} />
                <RenderRow title={"Kaal, sh pakend (kg)"} value={"16,1"} />
                <View style={styles.whiteLineHalf} />
                <RenderRow
                  title={"Mõõdud (pikkus x laius x kõrgus) (mm)"}
                  value={"690 x 325 x 440"}
                />
              </View>
            )}
            {selectedTab == 2 && (
              <View style={styles.tab2View}>
                <CommonMapView width={widthPercentageToDP(45)} />
                <View style={styles.tab2ViewStyle}>
                  <Text style={styles.tab2ViewText}>
                    Sisesta oma asukoht ning leia endale lähim kapp:
                  </Text>
                  <View style={styles.tab2MainStyle}>
                    <TextInput placeholder="" style={{ flex: 1, height: 45 }} />
                    <Image source={icons.search} style={styles.searchIcon} />
                  </View>
                  <View style={styles.checkboxView}>
                    <Image
                      source={icons.checkbox}
                      style={styles.checkboxIcon}
                    />
                    <Text style={styles.checkboxText}>
                      Tuvasta asukoht automaatselt
                    </Text>
                  </View>
                  <RenderMapRow />
                  <RenderMapRow />
                  <RenderMapRow />
                  <RenderMapRow />
                </View>
              </View>
            )}
          </View>
        </View>
        <View style={styles.mainContainer}>
          <Text
            style={commonFontStyle(
              fontFamily.articulat_regular,
              24,
              colors.black
            )}
          >
            Viimati vaadatud seadmed
          </Text>
          <FlatList
            style={{ marginTop: 20, marginBottom: 50 }}
            data={[
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
                id: 4,
                icon: icons.image9,
                title: "KARCHER SC 2",
                label: "Aurupesur",
                aircon: 3240,
                volumeflow: 1,
                hoselength: 1,
              },
            ]}
            numColumns={3}
            keyExtractor={(_i, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <ProductView
                  index={item?.id}
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
        </View>
        <FooterView />
      </ScrollView>
    </View>
  ) : (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.contentView}>
          <Text style={styles.titleDes}>{productDetails?.brand}</Text>
          <Text style={styles.title}>{productDetails?.product_name}</Text>
          <Image source={{ uri: `https://api.toolscab.ee/PhotoBinary/ProductPhoto?product_photo_id=${productDetails?.photo_ids?.[0]}&maxWidth=100&maxHeight=100`,}} style={styles.mainImage} />
          <View style={styles.bottomView}>
            <View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    ...commonFontStyle(
                      fontFamily.semiBold,
                      90,
                      colors.Roheline2
                    ),
                    letterSpacing: -2.5,
                  }}
                >
                  0<Text style={{ fontSize: 52 }}>.22</Text>
                  <Text
                    style={commonFontStyle(
                      fontFamily.semiBold,
                      21,
                      colors.Roheline2
                    )}
                  >
                    €
                  </Text>
                </Text>
              </View>
              <View
                style={[
                  styles.priceViewMob,
                  {
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    paddingLeft: 20,
                  },
                ]}
              >
                <Text
                  style={commonFontStyle(
                    fontFamily.articulat_regular,
                    10,
                    colors.filterText
                  )}
                >
                  26€ / 24h
                </Text>
                <Text
                  style={commonFontStyle(
                    fontFamily.articulat_regular,
                    11,
                    colors.headerBG
                  )}
                >
                  Minut
                </Text>
              </View>
            </View>
            <View
              style={{
                marginLeft: 30,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => setPricefoShow(!pricefoShow)}>
                <Image
                  style={styles.arrowImageMob}
                  source={icons.bottomArrow}
                />
              </TouchableOpacity>
              <Text
                style={commonFontStyle(
                  fontFamily.articulat_regular,
                  11.4,
                  colors.black
                )}
              >
                Kuidas hind kujuneb ?
              </Text>
            </View>
          </View>

          {pricefoShow && (
            <>
              <View
                style={[
                  styles.botomLineMob,
                  { marginTop: 8, marginBottom: 19 },
                ]}
              />
              <View style={{ marginHorizontal: widthPercentageToDP(1.5) }}>
                {dataList.map((item: any) => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        marginBottom: 5,
                      }}
                    >
                      <Text style={{ ...defaultFont(400, 12, colors.black) }}>
                        {item?.name}
                      </Text>
                      <Text style={{ ...defaultFont(400, 12, colors.black) }}>
                        {item?.subTitle}
                      </Text>
                    </View>
                  );
                })}
                <Text
                  style={{
                    ...defaultFont(400, 12, colors.filterText),
                    marginTop: 15,
                  }}
                >
                  Rendi lõpphind arvutatakse rendi kestuse põhjal. Lühikeste
                  rentide eest mis maksavad alla 3,29€, võetakse miinimumtasu.
                  Soodustusi rakendatakse peale seda.
                </Text>
              </View>
            </>
          )}
          <View
            style={[
              styles.botomLineMob,
              { marginTop: pricefoShow ? heightPercentageToDP(3) : 8 },
            ]}
          />

          <Text
            style={[styles.prodDes2, { marginTop: heightPercentageToDP(2) }]}
          >
            Tekstiilipesur
          </Text>
          <Text style={styles.prodDes2}>Voolik</Text>
          <Text
            style={[styles.prodDes2, { marginBottom: heightPercentageToDP(2) }]}
          >
            Pesuaine
          </Text>
          <View style={styles.botomLineMob} />
          <View style={styles.btnRowMob}>
            <CommonGreenBtn
              title="Rendi"
              onPress={() => {
                navigationRef.navigate(screenName.productLocations);
              }}
              style={{ width: "40%" }}
            />
            <CommonGreenBtn
              title="Leia kapp"
              onPress={() => {}}
              style={{
                backgroundColor: colors.white,
                borderColor: colors.black,
                marginLeft: 10,
                width: "40%",
              }}
            />
          </View>
          <Text style={styles.btnBottomTextMob}>Renditingimused</Text>
          <Text style={styles.desProduct}>
           {productDetails?.description}
          </Text>
          <View style={styles.boxStyleMob}>
            <View style={styles.boxBodyMob}>
              <Text style={styles.boxBodyText}>Tehnilised andmed</Text>
              <TouchableOpacity
                onPress={() => {
                  setTabIndex1(!tabIndex1);
                }}
              >
                <Image
                  source={icons.downarrow}
                  style={[
                    styles.downarrowMob,
                    { transform: [{ rotate: tabIndex1 ? "180deg" : "0deg" }] },
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>
          {tabIndex1 && (
            <>
              <View style={styles.tab1ViewMob}>
                <Text
                  style={{
                    ...defaultFont(400, 16, colors.blackType),
                    fontFamily: "arial-regular",
                  }}
                >
                  Tehnilised andmed
                </Text>
                <View style={styles.whiteLine} />
                <RenderRow
                  title={"Maksimaalne puhastatav pind (m²/h)"}
                  value={"20 - 25"}
                />
                <View style={styles.whiteLineHalf} />
                <RenderRow title={"Õhuvoolu hulk (l/s)"} value={"74"} />

                <View style={styles.whiteLine} />
                <RenderRow title={"Vaakum (mbar/kPa)"} value={"254 / 25,4"} />
                <View style={styles.whiteLineHalf} />
                <RenderRow title={"Pihustusmäär (l/min)"} value={"1"} />

                <View style={styles.whiteLine} />
                <RenderRow title={"Pihustusrõhk (bar)"} value={"1"} />
                <View style={styles.whiteLineHalf} />
                <RenderRow
                  title={"Puhta/musta vee paak (l)"}
                  value={"10 / 9"}
                />

                <View style={styles.whiteLine} />
                <RenderRow title={"Turbiini võimsus (W)"} value={"1250"} />
                <View style={styles.whiteLineHalf} />
                <RenderRow title={"Pumba võimsus (W)"} value={"40"} />

                <View style={styles.whiteLine} />
                <RenderRow
                  title={"Toitepinge (V/Hz)"}
                  value={"220 - 240 / 50 - 60"}
                />
                <View style={styles.whiteLineHalf} />
                <RenderRow
                  title={"Kaal ilma lisatarvikuteta (kg)"}
                  value={"10,5"}
                />

                <View style={styles.whiteLine} />
                <RenderRow title={"Kaal, sh pakend (kg)"} value={"16,1"} />
                <View style={styles.whiteLineHalf} />
                <RenderRow
                  title={"Mõõdud (pikkus x laius x kõrgus) (mm)"}
                  value={"690 x 325 x 440"}
                />
                <View style={{ height: 50 }} />
              </View>
            </>
          )}

          <View style={[styles.boxStyleMob, { marginTop: 13 }]}>
            <View style={styles.boxBodyMob}>
              <Text style={styles.boxBodyText}>Saadavus</Text>
              <TouchableOpacity onPress={() => setTabIndex2(!tabIndex2)}>
                <Image source={icons.downarrow} style={styles.downarrowMob} />
              </TouchableOpacity>
            </View>
          </View>
          {tabIndex2 && (
            <View style={styles.tab2ViewMob}>
              <View style={styles.tab2ViewStyleMob}>
                <Text style={styles.tab2ViewTextMob}>
                  Sisesta oma asukoht ning leia endale lähim kapp:
                </Text>
                <View style={styles.tab2MainStyleMob}>
                  <TextInput placeholder="" style={{ flex: 1, height: 45 }} />
                  <Image source={icons.search} style={styles.searchIconMob} />
                </View>
                <View style={styles.checkboxViewMob}>
                  <Image
                    source={icons.checkbox}
                    style={styles.checkboxIconMob}
                  />
                  <Text style={styles.checkboxTextMob}>
                    Tuvasta asukoht automaatselt
                  </Text>
                </View>
                <RenderMapRow />
                <RenderMapRow />
                <RenderMapRow />
                <RenderMapRow />
              </View>
            </View>
          )}
          <View style={[styles.boxStyleMob, { marginTop: 13 }]}>
            <View style={styles.boxBodyMob}>
              <Text style={styles.boxBodyText}>Kasutamine</Text>
              <Image source={icons.downarrow} style={styles.downarrowMob} />
            </View>
          </View>

          <Text style={styles.devicesText}>Viimati vaadatud seadmed</Text>
          <FlatList
            style={{ marginTop: 20, marginBottom: 50, alignSelf: "center" }}
            data={[
              {
                id: 2,
                icon: icons.image1,
                title: "KARCHER Puzzi 10/1",
                label: "Tekstiilipesur",
                aircon: 3240,
                volumeflow: 1,
                hoselength: 1,
              },
            ]}
            horizontal
            keyExtractor={(_i, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <ProductView
                  index={item?.id}
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
                  listStyle={{ ...defaultFont(400, 12, colors.filterText) }}
                  titleStyle={{
                    ...defaultFont(700, 14, colors.black),
                    marginBottom: 10,
                  }}
                  labelStyle={{
                    ...defaultFont(400, 12, colors.black),
                    marginBottom: 5,
                  }}
                />
              );
            }}
          />
          <View style={{ height: 50 }} />
        </View>
        <FooterView />
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
