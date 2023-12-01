// import React, { Component, Fragment, useState } from 'react';
// import { TouchableOpacity, Text, Linking, View, Image, ImageBackground, BackHandler } from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import styles from './scanStyle';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import styles from './QRCodeScannerScreenStyle';
import CommonGreenBtn from '../../components/reusableComponent/CommonGreenBtn';
const QRCodeScannerScreen=()=>{
//     const [scan,setScan]=useState(false)
//     const [scanResult,setScanResult]=useState(false)
//     const [result,setResult]=useState(false)

//    const onSuccess = (e) => {
//         const check = e.data.substring(0, 4);
//         console.log('scanned data' + check);
//         setResult(e)
//         setScan(false)
//         setScanResult(true)
//         if (check === 'http') {
//             Linking.openURL(e.data).catch(err => console.error('An error occured', err));
//         } else {
//             setResult(e)
//             setScan(false)
//             setScanResult(true)
//         }
//     }

//   const  activeQR = () => {
//         setScan(true)
//     }
//    const scanAgain = () => {
//         setScan(true)
//         setScanResult(false)
//     }
//     return (
//         <View style={styles.scrollViewStyle}>
//             <Fragment>
//                 <View style={styles.header}>
//                     <TouchableOpacity onPress={()=> BackHandler.exitApp()}>
//                         <Image source={require('./assets/back.png')} style={{height: 36, width: 36}}></Image>
//                     </TouchableOpacity>
//                     <Text style={styles.textTitle}>Scan QR Code</Text>
//                 </View>
//                 {!scan && !scanResult &&
//                     <View style={styles.cardView} >
//                         <Image source={require('./assets/camera.png')} style={{height: 36, width: 36}}></Image>
//                         <Text numberOfLines={8} style={styles.descText}>Please move your camera {"\n"} over the QR Code</Text>
//                         <Image source={require('./assets/qr-code.png')} style={{margin: 20}}></Image>
//                         <TouchableOpacity onPress={activeQR} style={styles.buttonScan}>
//                             <View style={styles.buttonWrapper}>
//                             <Image source={require('./assets/camera.png')} style={{height: 36, width: 36}}></Image>
//                             <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>Scan QR Code</Text>
//                             </View>
//                         </TouchableOpacity>
//                     </View>
//                 }
//                 {scanResult &&
//                     <Fragment>
//                         <Text style={styles.textTitle1}>Result</Text>
//                         <View style={scanResult ? styles.scanCardView : styles.cardView}>
//                             <Text>Type : {result.type}</Text>
//                             <Text>Result : {result.data}</Text>
//                             <Text numberOfLines={1}>RawData: {result.rawData}</Text>
//                             <TouchableOpacity onPress={scanAgain} style={styles.buttonScan}>
//                                 <View style={styles.buttonWrapper}>
//                                     <Image source={require('./assets/camera.png')} style={{height: 36, width: 36}}></Image>
//                                     <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>Click to scan again</Text>
//                                 </View>
//                             </TouchableOpacity>
//                         </View>
//                     </Fragment>
//                 }
//                 {scan &&
//                     <QRCodeScanner
//                         reactivate={true}
//                         showMarker={true}
//                         // ref={(node) => { this.scanner = node }}
//                         onRead={onSuccess}
//                         topContent={
//                             <Text style={styles.centerText}>
//                                Please move your camera {"\n"} over the QR Code
//                             </Text>
//                         }
//                         bottomContent={
//                             <View>
//                                 <ImageBackground source={require('./assets/bottom-panel.png')} style={styles.bottomContent}>
//                                     <TouchableOpacity style={styles.buttonScan2} 
//                                         onPress={() => this.scanner.reactivate()} 
//                                         onLongPress={() => this.setState({ scan: false })}>
//                                         <Image source={require('./assets/camera2.png')}></Image>
//                                     </TouchableOpacity>
//                                 </ImageBackground>
//                             </View>
//                         }
//                     />
//                 }
//             </Fragment>
//         </View>
//     );
const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const renderCamera = () => {
    return (
      <View style={styles.cameraContainer}>
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
        <Text style={styles.text}>Camera permission not granted</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"Welcome to the Barcode\nScanner App!"}</Text>
      <Text style={styles.paragraph}>Scan a barcode to start your job.</Text>
      {renderCamera()}

      <CommonGreenBtn
        disabled={scanned}
                  title="Scan QR"
                  onPress={() => setScanned(false)}
                  style={styles.button}
                />
    </View>
  );
}

export default QRCodeScannerScreen