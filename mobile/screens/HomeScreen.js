import { ScrollView, Text, Image, View } from "react-native";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

export function HomeScreen() {
  const navigation = useNavigation();
  const goToBikeScreen = () => {
    navigation.navigate("Bike"); // Naviguer vers l'écran BikeScreen
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ColoredScreen>
        <Image
          source={require("../assets/Logo.png")}
          style={{ maxWidth: "100%", maxHeight: "100%", margin: "5%" }}
        />
        <Button
          title="Louez votre Vélo"
          onPress={goToBikeScreen}
          style={{ borderRadius: 5, margin: "10%" }}
        />
        <Text
          style={{
            margin: "5%",
            textAlign: "center",
            maxWidth: "90%",
            fontSize: 18,
          }}
        >
          Rent Bike est une solution de location de vélos qui rend vos
          déplacements urbains pratiques et écologiques. Que vous soyez un
          habitant local ou un touriste en visite, notre service de location de
          vélos vous permet d'explorer la ville à votre rythme. Imaginez-vous
          pédalant le long des rues pittoresques, découvrant des quartiers
          animés et des sites emblématiques en chemin.
        </Text>
      </ColoredScreen>
    </ScrollView>
  );
}
