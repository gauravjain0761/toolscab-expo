import { useMemo, useRef, useState } from "react";
import { StyleSheet, View, Text, Image, Platform } from "react-native";
import MapView, { Marker } from "react-native-maps";
import type { Region } from "react-native-maps";
import { icons } from "../../theme/Icons";
import { useSelector } from "react-redux";
// create a component

const CommonMapView = ({ width }: any) => {
  const [region, setRegion] = useState<Region | null>(null);
  const { productDetails, getProductSpecs, getProductLocations } = useSelector(
    (state) => state.catalogue
  );
  const mapRef = useRef<MapView>(null);

  const loadingFallback = useMemo(() => {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }, []);

  if (Platform.OS == 'web') {
    return (
      <View style={[styles.container, { width: width ? width : 1102, height: width ? width : 390 }]}>
        <MapView
          ref={mapRef}
          provider="google"
          mapType="none"
          initialRegion={{
            latitude: 59.3442016958775,
            longitude: 18.038256636812825,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={Platform.OS =='web' ? styles.mapView: styles.mapViewMob}
          customMapStyle={{ borderRadius: 40 }}
          // zoomEnabled={false}
          onRegionChange={setRegion}
          loadingFallback={loadingFallback}
          googleMapsApiKey={"AIzaSyDEjeEjROHSLP3YfRln7Sk1GxUQSTGOGCI"}
        >
         {getProductLocations.map((item)=>{
          return<Marker
          coordinate={{
            latitude: item?.lat,
            longitude: item?.long,
          }}
        >
          <View style={{ position: "absolute", top: "50%", left: "20%" }}>
            <Image source={icons.mapImg} style={styles.imageStyle} />
          </View>
        </Marker>
         }) }
        </MapView>
      </View>
    );
  } else {
    return (
      <View style={[styles.container, { width: "100%", height: 100 }]}>
        {/* <MapView
          ref={mapRef}
          provider="google"
          mapType="none"
          initialRegion={{
            latitude: 59.3442016958775,
            longitude: 18.038256636812825,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.mapViewMob}
          customMapStyle={{ borderRadius: 40 }}
          zoomEnabled={false}
          onRegionChange={setRegion}
          loadingFallback={loadingFallback}
          googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}
        >
          <Marker
            coordinate={{
              latitude: 59.3442016958775,
              longitude: 58.038256636812825,
            }}
          >
            <View style={{ position: "absolute", top: "50%", left: "20%" }}>
              <Image source={icons.mapImg} style={styles.imageStyle} />
            </View>
          </Marker>
  
          <Marker
            coordinate={{
              latitude: 59.3442016958775,
              longitude: 18.038256636812825,
            }}
          >
            <View style={{ position: "absolute", top: "50%", left: "50%" }}>
              <Image source={icons.mapImg} style={styles.imageStyle} />
            </View>
          </Marker>
        </MapView> */}
      </View>
    );
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 390,
    width: 1102,
    alignSelf: "center",
    borderEndStartRadius: 40,
    borderBottomLeftRadius: 40,
    // borderWidth: 1,
  },
  mapView: {
    height: 390, width: 1102, borderWidth: 30
  },
  mapViewMob: {
    height: 380, width: "100%", borderWidth: 1
  },
  imageStyle: {
    width: 50,
    height: 50,
  },
});

//make this component available to the app
export default CommonMapView;
