// import React, { Component, Fragment, useState } from 'react';
// import { TouchableOpacity, Text, Linking, View, Image, ImageBackground, BackHandler } from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import styles from './scanStyle';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera";
import styles from "./QRCodeScannerScreenStyle";
import CommonGreenBtn from "../../components/reusableComponent/CommonGreenBtn";
import { useNavigation, useRoute } from "@react-navigation/native";
import { screenName } from "../../helper/constants";
import { useDispatch } from "react-redux";
import { getStartRentalsAction } from "../../actions/cartAction";
import { colors } from "../../theme/Colors";
const QRCodeScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedValue, setScannedValue] = useState([]);
  const navigationRef = useNavigation();
  const dispatch = useDispatch();
  const { params } = useRoute();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    return () => {
      setScannedValue([]);
      setScanned(false);
    };
  }, []);

  const onActivePress = (item) => {
    const obj = {
      data: {
        rental_id: params?.itemData?.rental_id,
        qr_codes: scannedValue,
      },
      onSuccess: (res: any) => {
        setScannedValue([]);
        setScanned(false);
        navigationRef.navigate(screenName.profileScreen);
      },
      onFailure: () => {
        setScannedValue([]);
        setScanned(false);
      },
    };

    dispatch(getStartRentalsAction(obj));
  };

  const handleBarCodeScanned = ({ type, data }) => {
    const scannerData = [];
    setScanned(true);
    const updateData = scannedValue.filter((item) => item == data);    
    if (updateData.length == 0) {
      setScannedValue((prevArray) => [...prevArray,data]);
    } else {
      setScannedValue((prevArray) => [...prevArray]);
    }
  };

  const renderCamera = () => {
    return (
      <View
        style={[
          styles.cameraContainer,
          {
            borderWidth: scanned ? 4 : 0,
            borderColor: scanned ? colors.Roheline2 : colors.black,
          },
        ]}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.camera}
        />
      </View>
    );
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Kaamera luba ei antud</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {renderCamera()}
      {params?.itemData?.lockers.length - scannedValue.length != 0 && (
        <CommonGreenBtn
          // disabled={scanned}
          title={`Skaneeri QR ${
            params?.itemData?.lockers.length - scannedValue.length
          }`}
          onPress={() => setScanned(false)}
          style={[styles.button, { marginTop: 20 }]}
        />
      )}
      <CommonGreenBtn
        disabled={params?.itemData?.lockers.length - scannedValue.length != 0}
        title={"Esita"}
        onPress={() => onActivePress()}
        style={[styles.button, { marginTop: 20 }]}
      />
    </View>
  );
};

export default QRCodeScannerScreen;
