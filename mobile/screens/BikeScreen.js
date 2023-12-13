import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import { useQuery, gql } from "@apollo/client";
import Swiper from "react-native-swiper";

const GET_BIKES = gql`
  query GetAllBike {
    getAllBike {
      id
      name
      imageId {
        url
      }
      bikeCategoriesId {
        name
      }
    }
  }
`;

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
  const { data } = useQuery(GET_BIKES);
  console.log(data);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* Premier Swiper */}
        <Text>Vélo électrique</Text>
        <Swiper
          style={[styles.wrapper, { height: windowDimensions.height * 0.26 }]} // Utilisez la hauteur de l'écran pour définir la hauteur du Swiper
          showsButtons={false}
          showsPagination={true}
          dotStyle={styles.paginationDot}
          activeDotStyle={styles.activePaginationDot}
        >
          {data.GetAllBike.filter(
            (bike) => bike.bikeCategoriesId.name === "Vélo électrique"
          ).map((bike) =>
            console.log(bike)(
              <ColoredScreen>
                <Text>{bike.name}</Text>
                <Image
                  source={bike.imageId[0].url}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    margin: "5%",
                  }}
                />
              </ColoredScreen>
            )
          )}

          <ColoredScreen>
            <Image
              source={require("../assets/bike.png")}
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

        {/* Deuxième Swiper */}
        <Text>VTT</Text>
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

        {/* Troisième Swiper */}
        <Text>Vélo professionnel</Text>
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
        <Text>Vélo Vintage</Text>
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
        <Text>Accessoires</Text>
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
