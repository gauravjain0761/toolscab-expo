//import liraries
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { CartList, FooterView, Header, PaymentView } from "../../components";
import { styles } from "./CartScreenStyle";

// create a component
const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Header isMainScreen={false} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 120 }}>
        <View style={styles.mainStyle}>
          <Text style={styles.headerText}>Rendikorvx</Text>
          <View style={styles.unLineStyle} />
          <Text style={styles.headerSubText}>Korvis kokku 2 toodet</Text>
          <View style={styles.cartStyle}>
            <View style={{ flex: 1, marginRight: 18 }}>
              {[0, 1].map(() => {
                return <CartList />;
              })}
            </View>
            <View style={styles.paymentStyle}>
              <PaymentView />
            </View>
          </View>
        </View>
        <View style={{ height: 150 }} />
        <FooterView />
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default CartScreen;
