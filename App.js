import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TryCodeScreen from "./src/screens/TryCodeScreens";
import HomeScreen from "./src/screens/HomeScreens";
import MainNavigator from "./src/Navigator/MainNavigator";
const App = () => {
  return (
    <SafeAreaProvider>
      <MainNavigator/>
    </SafeAreaProvider>
  )
}
export default App;