import { Text, View } from "react-native";

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

export function LoginScreen() {
  return (
    <ColoredScreen>
      <Text>LoginScreen!</Text>
    </ColoredScreen>
  );
}
