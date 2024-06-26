import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Modal from "react-native-modal";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_DRAWER, USER_LOGOUT } from "../../actions/dispatchTypes";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { TextInput } from "react-native";
import { defaultFont } from "../../theme/Fonts";

import { screenName } from "../../helper/constants";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { navigate } from "../../navigations/RootNavigation";
import { clearAsync, getAsyncUserInfo } from "../../helper/asyncStorage";
import { getProfileMethods } from "../../actions/authAction";
import _ from "lodash";

type Props = {
  isVisible: boolean;
};

const AppDrawerModalMobile = ({ isVisible }: Props) => {
  const dispatch = useDispatch();
  const { getProfileList } = useSelector((state) => state.profile);

  const onClose = () => {
    dispatch({ type: TOGGLE_DRAWER, payload: false });
  };

  useEffect(() => {
    const getProfileList = async () => {
      const customer = await getAsyncUserInfo();
      if (customer !== null) {
        const obj = {
          params: {
            customer_id: customer,
          },
          onSuccess: (res: any) => {},
          onFailure: () => {},
        };
        dispatch(getProfileMethods(obj));
      }
    };
    getProfileList();
  }, []);

  return (
    <Modal
      animationOut={"slideOutRight"}
      animationIn={"slideInRight"}
      animationInTiming={500}
      animationOutTiming={500}
      style={{ margin: 0 }}
      backdropColor={colors.headerBG}
      backdropOpacity={1}
      isVisible={isVisible}
    >
      <View style={styles.mainContainer}>
        <SafeAreaView>
          <View style={styles.headerDrawer}>
            <TouchableOpacity
              onPress={() => {
                navigate(screenName.homeScreen), onClose();
              }}
            >
              <Image source={icons.appLogo} style={styles.appLogo} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onClose()}>
              <Image source={icons.closeIcon} style={styles.menuIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.searchView}>
            <Image
              source={icons.search}
              style={{
                height: 18,
                width: 18,
                resizeMode: "contain",
                tintColor: colors.white,
              }}
            />
            <TextInput
              placeholder="Otsi seadet"
              placeholderTextColor={colors.white}
              style={styles.imput}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigate(screenName.catalogueFilter), onClose();
            }}
            style={styles.row}
          >
            <Text style={styles.rowText}>Seadmed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.rowText}>Asukohad</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.row}
            onPress={() => {
              navigate(screenName.ourOfUsScreen);
              onClose();
            }}
          >
            <Text style={styles.rowText}>Meist</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.row}
            onPress={() => {
              navigate(screenName.faqScreen);
              onClose();
            }}
          >
            <Text style={styles.rowText}>KKK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.row}
            onPress={() => {
              navigate(screenName.rentalConditionsScreen);
              onClose();
            }}
          >
            <Text style={styles.rowText}>Renditingimused</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.row}
            onPress={() => {
              navigate(screenName.contactScreen);
              onClose();
            }}
          >
            <Text style={styles.rowText}>Kontakt</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.row} onPress={() => {}}>
            <Text style={styles.rowText}>EST</Text>
          </TouchableOpacity> */}

          <View style={styles.line} />

          <TouchableOpacity
            style={styles.row}
            onPress={() => {
              !_.isEmpty(getProfileList)
                ? navigate(screenName.profileScreen)
                : navigate(screenName.loginScreenMobile);
              onClose();
            }}
          >
            <Image
              source={icons.userIcone}
              style={[styles.userIconeStyle, { tintColor: colors.white }]}
            />
            <Text style={[styles.rowText, { textTransform: "uppercase" }]}>
              {!_.isEmpty(getProfileList)
                ? `Tere ${getProfileList?.first_name}`
                : "SISENE"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.row}
            onPress={() => {
              navigate(screenName.cartScreen);
              onClose();
            }}
          >
            <Image
              source={icons.cartIcon}
              style={[styles.userIconeStyle, { tintColor: colors.white }]}
            />
            <Text style={styles.rowText}>OSTUKORV</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.row}
            onPress={() => {
              clearAsync();
              dispatch({ type: USER_LOGOUT });
              navigate(screenName.homeScreen);
              onClose();
            }}
          >
            <Image
              source={icons.logout}
              style={[styles.userIconeStyle, { tintColor: colors.white }]}
            />
            <Text style={styles.rowText}>Logi välja</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default AppDrawerModalMobile;

const styles = StyleSheet.create({
  appLogo: {
    width: 122,
    height: 22,
    resizeMode: "contain",
    marginLeft: hp(2),
    marginTop: 10,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.headerBG,
  },
  menuIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    marginHorizontal: hp(2),
    marginVertical: 10,
  },
  headerDrawer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchView: {
    marginHorizontal: hp(3),
    marginTop: hp(6),
    marginBottom: hp(2),
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: hp(2),
  },
  imput: {
    flex: 1,
    marginLeft: 10,
    height: 50,
    ...defaultFont(400, 16, colors.white),
  },
  row: {
    paddingHorizontal: hp(4),
    paddingVertical: hp(1),
    flexDirection: "row",
    alignItems: "center",
  },
  rowText: {
    ...defaultFont(400, 16, colors.white),
  },
  line: {
    height: 1,
    backgroundColor: colors.filterText,
    marginHorizontal: hp(3),
    marginVertical: hp(2),
  },
  userIconeStyle: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 20,
  },
});
