import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import Swiper from "react-native-swiper";

function ColoredScreen({ children }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#99bdd8",
      }}
    >
      {children}
    </View>
  );
}

export function BikeScreen() {
  const windowDimensions = useWindowDimensions();
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* Premier Swiper */}
        <Text>Electric Bike</Text>
        <Swiper
          style={[styles.wrapper, { height: windowDimensions.height * 0.26 }]} // Utilisez la hauteur de l'écran pour définir la hauteur du Swiper
          showsButtons={false}
          showsPagination={true}
          dotStyle={styles.paginationDot}
          activeDotStyle={styles.activePaginationDot}
        >
          <ColoredScreen>
            <Text>BikeScreen 1.1</Text>
            <Image
              source={require("../assets/bicycle.png")}
              style={{ maxWidth: "100%", maxHeight: "100%", margin: "5%" }}
            />
          </ColoredScreen>
          <ColoredScreen>
            <Text>BikeScreen 1.2</Text>
            <Image
              source={require("../assets/bike.png")}
              style={{ maxWidth: "100%", maxHeight: "100%", margin: "5%" }}
            />
          </ColoredScreen>
          <ColoredScreen>
            <Text>BikeScreen 1.3</Text>
            <Image
              source={require("../assets/bicycle.png")}
              style={{ maxWidth: "100%", maxHeight: "100%", margin: "5%" }}
            />
          </ColoredScreen>
        </Swiper>

        {/* Deuxième Swiper */}
        <Text>Vintage Bike</Text>
        <Swiper
          style={[styles.wrapper, { height: windowDimensions.height * 0.26 }]}
          showsButtons={false}
          showsPagination={true}
          dotStyle={styles.paginationDot}
          activeDotStyle={styles.activePaginationDot}
        >
          <ColoredScreen>
            <Text>BikeScreen 1.3</Text>
            <Image
              source={require("../assets/bicycle.png")}
              style={{ maxWidth: "100%", maxHeight: "100%", margin: "5%" }}
            />
          </ColoredScreen>
          <ColoredScreen>
            <Text>BikeScreen 1.3</Text>
            <Image
              source={require("../assets/bicycle.png")}
              style={{ maxWidth: "100%", maxHeight: "100%", margin: "5%" }}
            />
          </ColoredScreen>
          <ColoredScreen>
            <Text>BikeScreen 1.3</Text>
            <Image
              source={require("../assets/bicycle.png")}
              style={{ maxWidth: "100%", maxHeight: "100%", margin: "5%" }}
            />
          </ColoredScreen>
        </Swiper>

        {/* Troisième Swiper */}
        <Text>Professional Bike</Text>
        <Swiper
          style={[styles.wrapper, { height: windowDimensions.height * 0.26 }]}
          showsButtons={false}
          showsPagination={true}
          dotStyle={styles.paginationDot}
          activeDotStyle={styles.activePaginationDot}
        >
          <ColoredScreen>
            <Image
              source={require("../assets/bicycle.png")}
              style={{ maxWidth: "100%", maxHeight: "100%", margin: "5%" }}
            />
          </ColoredScreen>
          <ColoredScreen>
            <Image
              source={require("../assets/bicycle.png")}
              style={{ maxWidth: "100%", maxHeight: "100%", margin: "5%" }}
            />
          </ColoredScreen>
          <ColoredScreen>
            <Image
              source={require("../assets/bicycle.png")}
              style={{ maxWidth: "100%", maxHeight: "100%", margin: "5%" }}
            />
          </ColoredScreen>
        </Swiper>

        {/* Quatriéme Swiper */}
        <Text>Mountain Bike</Text>
        <Swiper
          style={[styles.wrapper, { height: windowDimensions.height * 0.26 }]}
          showsButtons={false}
          showsPagination={true}
          dotStyle={styles.paginationDot}
          activeDotStyle={styles.activePaginationDot}
        >
          <ColoredScreen>
            <Image
              source={require("../assets/bicycle.png")}
              style={{ maxWidth: "100%", maxHeight: "100%", margin: "5%" }}
            />
          </ColoredScreen>
          <ColoredScreen>
            <Image
              source={require("../assets/bicycle.png")}
              style={{ maxWidth: "100%", maxHeight: "100%", margin: "5%" }}
            />
          </ColoredScreen>
          <ColoredScreen>
            <Image
              source={require("../assets/bicycle.png")}
              style={{ maxWidth: "100%", maxHeight: "100%", margin: "5%" }}
            />
          </ColoredScreen>
        </Swiper>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activePaginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#007aff",
    marginHorizontal: 5,
  },
});
