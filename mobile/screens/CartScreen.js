import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";

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

export function CartScreen() {
  const [count, setCount] = useState(0);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ColoredScreen>
        <View style={styles.progressBar}>
          <StepItem number={1} label="Panier" />
          <StepItem number={2} label="Connexion" />
          <StepItem number={3} label="Adresse" />
          <StepItem number={4} label="Reception" />
          <StepItem number={5} label="Paiement" />
        </View>
        <View style={styles.myCart}>
          <Image source={bicycleImage} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>Cannondale - vélo Route</Text>
            <Text style={styles.dateOfRent}>
              Date de location: 12/05 au 15/05
            </Text>
            <Button
              title="Voir le produit"
              onPress={() => {
                // Code pour afficher plus d'informations sur le produit
              }}
            />
          </View>
          <View style={styles.moreLessProduct}>
            <Button
              title="+"
              onPress={() => {
                setCount(count + 1);
              }}
            />
            <Text style={styles.productCount}>{count}</Text>
            <Button
              title="-"
              onPress={() => {
                setCount(count - 1);
              }}
            />
            <Button
              title="Supprimer"
              onPress={() => {
                // Code pour supprimer le produit du panier
              }}
            />
          </View>
          <Text style={styles.price}>1750 €</Text>
        </View>
      </ColoredScreen>
    </ScrollView>
  );
}

function StepItem({ number, label }) {
  return (
    <View style={styles.step}>
      <View style={styles.borderStepPoint}>
        <View style={styles.stepPoint}></View>
      </View>
      <Text>
        {number}-{label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%", // Notez que 'vw' n'est pas utilisé en React Native
  },
  step: {
    alignItems: "center",
  },
  stepPoint: {
    borderWidth: 1,
    borderColor: "#99bdd8",
    backgroundColor: "#35bdd8",
    width: 30,
    height: 30,
    borderRadius: 15, // Pour obtenir un cercle, utilisez la moitié de la largeur/hauteur
  },
  borderStepPoint: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#22bdd8",
    borderRadius: 25, // Pour obtenir un cercle, utilisez la moitié de la largeur/hauteur
    width: 60,
    height: 60, // Vous pouvez ajuster la taille en fonction de vos besoins
    marginBottom: 10, // Vous pouvez ajuster la marge en fonction de vos besoins
  },
  myCart: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dateOfRent: {
    fontSize: 14,
    color: "#888",
  },
  moreLessProduct: {
    flexDirection: "row",
    alignItems: "center",
  },
  productCount: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

import bicycleImage from "../assets/bike.png";
