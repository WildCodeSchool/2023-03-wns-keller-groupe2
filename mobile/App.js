import * as React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./screens/HomeScreen.js";
import { BikeScreen } from "./screens/BikeScreen.js";
import { CartScreen } from "./screens/CartScreen.js";
import { LoginScreen } from "./screens/LoginScreen.js";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const Tab = createBottomTabNavigator();
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Acceuil") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Vélos") {
                iconName = focused ? "bicycle" : "bicycle-outline";
              } else if (route.name === "Panier") {
                iconName = focused ? "cart" : "cart-outline";
              } else if (route.name === "Connexion") {
                iconName = focused ? "log-in" : "log-in-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "dodgerblue",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Acceuil" component={HomeScreen} />
          <Tab.Screen name="Vélos" component={BikeScreen} />
          <Tab.Screen name="Panier" component={CartScreen} />
          <Tab.Screen name="Connexion" component={LoginScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
