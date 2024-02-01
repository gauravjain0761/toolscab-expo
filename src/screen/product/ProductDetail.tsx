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
import React, { useEffect, useRef, useState } from "react";
import {
  CommonMapView,
  CommonModalWeb,
  FooterView,
  Header,
  ImageModalWeb,
  LoginPaymentModalWeb,
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
import { useDispatch, useSelector } from "react-redux";
import {
  getProductLocationAction,
  getProductSpecsAction,
} from "../../actions/catalogueAction";
import { getAsyncToken, getAsyncUserInfo } from "../../helper/asyncStorage";
import { navigate } from "../../navigations/RootNavigation";
import { addItemToCartAction } from "../../actions/cartAction";
import { getHtmlMethod, getPaymentMethods } from "../../actions/authAction";
import { useIsFocused } from "@react-navigation/native";
import RenderHtml from "react-native-render-html";

type Props = {};

const ProductDetail = (props: Props) => {
  const navigationRef = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const scrollViewRef = useRef(ScrollView);

  const [selectedTab, setselectedTab] = useState(1);
  const [htmlView, setHtmlView] = useState("");
  const [tabIndex1, setTabIndex1] = useState(false);
  const [tabIndex2, setTabIndex2] = useState(false);
  const [tabIndex3, setTabIndex3] = useState(false);
  const [moreShow, setMoreShow] = useState(false);
  const [commonModalWebShow, setCommonModalWebShow] = useState(false);
  const [loginPaymentModalWebShow, setLoginPaymentModalWebShow] =
    useState(false);
  const [selectShowValue, setSelectShowValue] = useState(1);
  const [locationId, setLocationId] = useState("");
  const [pricefoShow, setPricefoShow] = useState(false);
  const { productDetails, getProductSpecs, getProductLocations } = useSelector(
    (state) => state.catalogue
  );
  const { getPaymentList } = useSelector((state) => state.cart);
  const [imageId, setImageId] = useState(productDetails?.photo_ids?.[0]);
  const [showImage, setShowImage] = useState(false);

  console.log("productDetails", productDetails);

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

  const onBtnPress = async (item: any) => {
    const customer = await getAsyncUserInfo();
    setLocationId(item);
    if (customer == null) {
      setSelectShowValue(1);
      setCommonModalWebShow(true);
    } else if (getPaymentList.length == 0) {
      setSelectShowValue(2);
      setCommonModalWebShow(true);
    } else {
      onCardItemClick(item);
    }
  };

  const onCardItemClick = async (item: any) => {
    const customer = await getAsyncUserInfo();
    const obj = {
      params: {
        product_id: productDetails?.product_id,
        customer_id: customer,
        location_id: item,
      },
      onSuccess: (res: any) => {
        setLoginPaymentModalWebShow(true);
      },
      onFailure: () => {},
    };
    dispatch(addItemToCartAction(obj));
  };

  const RenderMapRow = ({ name, city, location_id }: any) => {
    if (Platform.OS === "web") {
      return (
        <View>
          <Text style={styles.rendermapText}>{city}</Text>
          <View style={styles.rendermapView}>
            <View style={{ flex: 1, marginTop: 5 }}>
              <Text style={styles.renderText}>{name}</Text>
              <Text style={styles.rendersubText}>Ahtri 9</Text>
              <Text style={styles.rendersubValueText}>10151 TALLINN</Text>
            </View>
            <CommonGreenBtn
              title="Broneeri"
              onPress={() => onBtnPress(location_id)}
              style={styles.btnRender}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={styles.rendermapTextMob}>{city}</Text>
          <View style={styles.rendermapViewMob}>
            <View style={{ flex: 1, marginTop: 5 }}>
              <Text style={styles.renderTextMob}>{name}</Text>
              <Text style={styles.rendersubTextMob}>Ahtri 9</Text>
              <Text style={styles.rendersubValueTextMob}>10151 TALLINN</Text>
            </View>
          </View>
          <View style={styles.btnViewStyle}>
            <View style={styles.lineView} />
            <CommonGreenBtn
              title="Broneeri"
              onPress={() => onBtnPress(location_id)}
              style={styles.btnRenderMob}
            />
          </View>
        </View>
      );
    }
  };

  console.log("productDetails", productDetails?.photo_ids?.[0]);

  useEffect(() => {
    if (productDetails) {
      onProductSpecsPress();
      onProductLocationPress();
      onWebViewPress();
      getPayment();
    }
  }, [productDetails, isFocused]);

  const getPayment = async () => {
    const customer = await getAsyncUserInfo();
    if (customer !== null) {
      const obj = {
        params: {
          customer_id: customer,
        },
        onSuccess: (res: any) => {},
        onFailure: () => {},
      };
      dispatch(getPaymentMethods(obj));
    }
  };

  const onProductSpecsPress = () => {
    const obj = {
      params: {
        product_id: productDetails?.product_id,
      },
      onSuccess: (res: any) => {},
      onFailure: () => {},
    };
    dispatch(getProductSpecsAction(obj));
  };
  const onProductLocationPress = () => {
    const obj = {
      params: {
        product_id: productDetails?.product_id,
      },
      onSuccess: (res: any) => {},
      onFailure: () => {},
    };
    dispatch(getProductLocationAction(obj));
  };

  const onWebViewPress = () => {
    const obj = {
      params: {
        title: `ProductContent/${productDetails?.product_id}`,
      },
      onSuccess: (res: any) => {
        setHtmlView(res);
      },
      onFailure: () => {},
    };
    dispatch(getHtmlMethod(obj));
  };

  return Platform.OS == "web" ? (
    <View style={styles.container}>
      <Header isMainScreen={false} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} ref={scrollViewRef}>
        <View style={styles.mainContainer}>
          <HeaderBottomPathView
            heading={" Seadmed "}
            //@ts-ignore
            heading1={`/ ${productDetails?.brand} `}
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
                  uri: `https://api.toolscab.ee/PhotoBinary/ProductPhoto?product_photo_id=${productDetails?.photo_ids?.[0]}&maxWidth=500&maxHeight=500`,
                }}
                style={styles.imageProduct}
                resizeMode="contain"
              />
              <FlatList
                data={productDetails?.photo_ids}
                horizontal
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setShowImage(true);
                        setImageId(item);
                      }}
                    >
                      <ImageBackground
                        defaultSource={icons.defultIcon}
                        resizeMode="contain"
                        source={{
                          uri: `https://api.toolscab.ee/PhotoBinary/ProductPhoto?product_photo_id=${item}&maxWidth=500&maxHeight=500`,
                        }}
                        style={styles.bottomImages}
                      ></ImageBackground>
                    </TouchableOpacity>
                  );
                }}
              />
              <Text
                style={styles.des}
                numberOfLines={
                  !moreShow ? 5 : productDetails?.description?.length
                }
              >
                {productDetails?.description}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  {
                    moreShow && scrollViewRef?.current.scrollTo(200);
                  }
                  setMoreShow(!moreShow);
                }}
              >
                <Text style={styles.seeMoreTextWeb}>{`${
                  moreShow ? "Show less" : "Show more"
                }`}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rightView}>
              <Text style={styles.title1}>{productDetails?.brand}</Text>
              <Text style={styles.mainTitle}>
                {productDetails?.product_name}
              </Text>
              <View style={styles.botomLine} />
              <View style={styles.priceView}>
                <View>
                  {productDetails?.banner && (
                    <View style={styles.bannerView}>
                      <Text style={styles.bannerText}>
                        {productDetails?.banner}
                      </Text>
                    </View>
                  )}
                  <Text style={styles.zeroText}>
                    {productDetails?.price ? productDetails?.price : "00"}
                    <Text style={{ fontSize: 60 }}></Text>
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
                    <Text style={styles.valueText}>
                      {productDetails?.price_layout?.minute_1440}€ / 24h
                    </Text>
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
                    <View style={styles.showProductView}>
                      <Text style={styles.showProductText}>
                        {"Miinimumhind"}
                      </Text>
                      <Text style={styles.showProductText}>
                        {productDetails?.price_layout?.minimum}€
                      </Text>
                    </View>
                    <View style={[styles.showProductView, { marginBottom: 5 }]}>
                      <Text style={styles.showProductText}>
                        {"Broneering esimesed 15 min"}
                      </Text>
                      <Text style={styles.showProductText}>{"Tasuta"}</Text>
                    </View>
                    <View style={[styles.showProductView, { marginBottom: 5 }]}>
                      <Text style={styles.showProductText}>
                        {"Broneering pärast 15 min"}
                      </Text>
                      <Text style={styles.showProductText}>
                        {productDetails?.price_layout?.booking}€/min
                      </Text>
                    </View>
                    <View style={[styles.showProductView, { marginBottom: 5 }]}>
                      <Text style={styles.showProductText}>{"Minut"}</Text>
                      <Text style={styles.showProductText}>
                        {productDetails?.price_layout?.minute_1}€
                      </Text>
                    </View>
                    <View style={[styles.showProductView, { marginBottom: 5 }]}>
                      <Text style={styles.showProductText}>{"Tund"}</Text>
                      <Text style={styles.showProductText}>
                        {productDetails?.price_layout?.minute_60}€
                      </Text>
                    </View>
                    <View style={[styles.showProductView, { marginBottom: 5 }]}>
                      <Text style={styles.showProductText}>{"Päev"}</Text>
                      <Text style={styles.showProductText}>
                        {productDetails?.price_layout?.minute_1440}€
                      </Text>
                    </View>

                    {/* {dataList.map((item: any) => {
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
                    })} */}
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
                    scrollViewRef?.current.scrollTo(600);
                    setselectedTab(2);
                  }}
                />
                {/* <CommonGreenBtn
                  title="Leia kapp"
                  onPress={() => {}}
                  style={styles.btnView}
                /> */}
              </View>
              {/* <Text style={styles.btnBottomText}>{productDetails?.banner}</Text> */}
              <View style={styles.botomLine} />
              {productDetails?.kitProducts_ &&
                productDetails?.kitProducts_?.length !== 0 && (
                  <View>
                    <Text style={styles.title2}>Komplekt sisaldab</Text>
                    {productDetails?.kitProducts_?.map((element, index) => {
                      return <Text style={styles.des2}>{element}</Text>;
                    })}
                  </View>
                )}
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
              onPress={() => {
                onWebViewPress(), setselectedTab(3);
              }}
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
            {selectedTab == 1 && (
              <View style={styles.tab1View}>
                <FlatList
                  data={getProductSpecs}
                  renderItem={({ item, index }) => {
                    const last = getProductSpecs[getProductSpecs.length - 1];
                    return (
                      <>
                        <RenderRow title={item?.name} value={item?.value} />
                        {last?.name !== item?.name && (
                          <View style={styles.whiteLineHalf} />
                        )}
                      </>
                    );
                  }}
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
                  <FlatList
                    data={getProductLocations}
                    renderItem={({ item }) => {
                      if (item) {
                        return (
                          <RenderMapRow
                            name={item?.spot}
                            city={item?.city}
                            location_id={item?.location_id}
                          />
                        );
                      }
                      return;
                    }}
                  />
                </View>
              </View>
            )}
            {selectedTab == 3 && (
              <View style={styles.tab1View}>
                <RenderHtml
                  contentWidth={SCREEN_WIDTH}
                  source={{
                    html: `${htmlView}`,
                  }}
                />
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
        <CommonModalWeb
          isVisible={commonModalWebShow}
          onClose={() => setCommonModalWebShow(false)}
          tabValue={selectShowValue}
        />
        <LoginPaymentModalWeb
          isVisible={loginPaymentModalWebShow}
          onClose={() => setLoginPaymentModalWebShow(false)}
          oncomfirmPress={() => {
            setLoginPaymentModalWebShow(false);
            navigationRef.navigate(screenName.cartScreen);
          }}
        />
        <ImageModalWeb
          sourceId={imageId}
          isVisible={showImage}
          onClose={() => {
            setShowImage(false);
          }}
        />
      </ScrollView>
    </View>
  ) : (
    <View style={styles.container}>
      <ScrollView style={styles.container} ref={scrollViewRef}>
        <View style={styles.contentView}>
          <Text style={styles.titleDes}>{productDetails?.brand}</Text>
          <Text style={styles.title}>{productDetails?.product_name}</Text>
          <Image
            source={{
              uri: `https://api.toolscab.ee/PhotoBinary/ProductPhoto?product_photo_id=${productDetails?.photo_ids?.[0]}&maxWidth=900&maxHeight=900`,
            }}
            style={styles.mainImage}
          />
          <View style={styles.bottomView}>
            <View>
              <View style={{ flex: 1 }}>
                {productDetails?.banner && (
                  <View style={styles.bannerViewMob}>
                    <Text style={styles.bannerTextMob}>
                      {productDetails?.banner}
                    </Text>
                  </View>
                )}

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
                  {" "}
                  <Text style={{ fontSize: 52 }}>
                    {productDetails?.price ? productDetails?.price : "00"}
                  </Text>
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
                  {productDetails?.price_layout?.minute_1440}€ / 24h
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
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: 5,
                  }}
                >
                  <Text style={{ ...defaultFont(400, 13, colors.black) }}>
                    {"Miinimumhind"}
                  </Text>
                  <Text style={{ ...defaultFont(400, 13, colors.black) }}>
                    {productDetails?.price_layout?.minimum}€
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: 5,
                  }}
                >
                  <Text style={{ ...defaultFont(400, 13, colors.black) }}>
                    {"Broneering esimesed 15 min"}
                  </Text>
                  <Text style={{ ...defaultFont(400, 13, colors.black) }}>
                    {"Tasuta"}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: 5,
                  }}
                >
                  <Text style={{ ...defaultFont(400, 13, colors.black) }}>
                    {"Broneering pärast 15 min"}
                  </Text>
                  <Text style={{ ...defaultFont(400, 13, colors.black) }}>
                    {productDetails?.price_layout?.booking}€/min
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: 5,
                  }}
                >
                  <Text style={{ ...defaultFont(400, 13, colors.black) }}>
                    {"Minut"}
                  </Text>
                  <Text style={{ ...defaultFont(400, 13, colors.black) }}>
                    {productDetails?.price_layout?.minute_1}€
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: 5,
                  }}
                >
                  <Text style={{ ...defaultFont(400, 13, colors.black) }}>
                    {"Tund"}
                  </Text>
                  <Text style={{ ...defaultFont(400, 13, colors.black) }}>
                    {productDetails?.price_layout?.minute_60}€
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: 5,
                  }}
                >
                  <Text style={{ ...defaultFont(400, 13, colors.black) }}>
                    {"Päev"}
                  </Text>
                  <Text style={{ ...defaultFont(400, 13, colors.black) }}>
                    {productDetails?.price_layout?.minute_1440}€
                  </Text>
                </View>

                {/* {dataList.map((item: any) => {
                  return (
                    <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 5, }} >
                      <Text style={{ ...defaultFont(400, 12, colors.black) }}>
                        {item?.name}
                      </Text>
                      <Text style={{ ...defaultFont(400, 12, colors.black) }}>
                        {item?.subTitle}
                      </Text>
                    </View>
                  );
                })} */}
                <Text
                  style={{
                    ...defaultFont(400, 14, colors.filterText),
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
          {productDetails?.kitProducts_ &&
            productDetails?.kitProducts_?.length !== 0 && (
              <View>
                <View style={{ marginVertical: heightPercentageToDP(2) }}>
                  {productDetails?.kitProducts_?.map((element, index) => {
                    return <Text style={styles.prodDes2}>{element}</Text>;
                  })}
                </View>

                <View style={styles.botomLineMob} />
              </View>
            )}

          <View style={styles.btnRowMob}>
            <CommonGreenBtn
              title="Rendi"
              onPress={() => {
                scrollViewRef?.current.scrollTo(650);
                setTabIndex2(true);
              }}
              style={{ width: "40%" }}
            />
            {/* <CommonGreenBtn
              title="Leia kapp"
              onPress={() => {}}
              style={{
                backgroundColor: colors.white,
                borderColor: colors.black,
                marginLeft: 10,
                width: "40%",
              }}
            /> */}
          </View>
          <Text style={styles.btnBottomTextMob}>{productDetails?.banner}</Text>

          <Text
            style={styles.desProduct}
            numberOfLines={!moreShow ? 5 : productDetails?.description?.length}
          >
            {productDetails?.description}
          </Text>
          <TouchableOpacity
            onPress={() => {
              {
                moreShow && scrollViewRef?.current.scrollTo(200);
              }
              setMoreShow(!moreShow);
            }}
          >
            <Text style={styles.seeMoreTexr}>{`${
              moreShow ? "Show less" : "Show more"
            }`}</Text>
          </TouchableOpacity>
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
                <FlatList
                  data={getProductSpecs}
                  renderItem={({ item, index }) => {
                    const last = getProductSpecs[getProductSpecs.length - 1];
                    return (
                      <>
                        <RenderRow title={item?.name} value={item?.value} />
                        {last?.name !== item?.name && (
                          <View style={styles.whiteLineHalf} />
                        )}
                      </>
                    );
                  }}
                />
                {/* <Text
                  style={{
                    ...defaultFont(400, 16, colors.blackType),
                    fontFamily: "arial-regular",
                  }}
                >
                  Tehnilised andmed
                </Text> */}
                {/* <View style={styles.whiteLine} /> */}
                <View style={{ height: 30 }} />
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
                <FlatList
                  data={getProductLocations}
                  renderItem={({ item }) => {
                    return (
                      <RenderMapRow
                        name={item?.spot}
                        city={item?.city}
                        location_id={item?.location_id}
                      />
                    );
                  }}
                />
              </View>
            </View>
          )}
          <View style={[styles.boxStyleMob, { marginTop: 13 }]}>
            <View style={styles.boxBodyMob}>
              <Text style={styles.boxBodyText}>Kasutamine</Text>
              <TouchableOpacity
                onPress={() => {
                  onWebViewPress();
                  setTabIndex3(!tabIndex3);
                }}
              >
                <Image source={icons.downarrow} style={styles.downarrowMob} />
              </TouchableOpacity>
            </View>
          </View>
          {tabIndex3 && (
            <View style={styles.tab1View}>
              <Text style={{ alignSelf: "center" }}>{htmlView}</Text>
            </View>
          )}

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
                  listStyle={{ ...defaultFont(400, 13, colors.filterText) }}
                  titleStyle={{
                    ...defaultFont(700, 16, colors.black),
                    marginBottom: 10,
                  }}
                  labelStyle={{
                    ...defaultFont(400, 13, colors.black),
                    marginBottom: 5,
                  }}
                />
              );
            }}
          />
          <View style={{ height: 50 }} />
        </View>
        <CommonModalWeb
          isVisible={commonModalWebShow}
          onClose={() => setCommonModalWebShow(false)}
          tabValue={selectShowValue}
        />
        <LoginPaymentModalWeb
          isVisible={loginPaymentModalWebShow}
          onClose={() => setLoginPaymentModalWebShow(false)}
          oncomfirmPress={() => {
            setLoginPaymentModalWebShow(false);
            navigationRef.navigate(screenName.cartScreen);
          }}
        />
        <FooterView />
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
