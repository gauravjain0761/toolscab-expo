import { useMemo, useRef, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import type { Region } from "react-native-maps";
import { icons } from "../../theme/Icons";
// create a component

const CommonMapView = ({ width }: any) => {
  const [region, setRegion] = useState<Region | null>(null);

  const mapRef = useRef<MapView>(null);

  const loadingFallback = useMemo(() => {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }, []);

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
        style={{ height: 390, width: 1102, borderWidth: 30 }}
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
      </MapView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 390,
    width: 1102,
    alignSelf: "center",
    borderEndStartRadius: 40,
    borderBottomLeftRadius: 40,
    borderWidth: 1,
  },
  imageStyle: {
    width: 50,
    height: 50,
  },
});

//make this component available to the app
export default CommonMapView;
