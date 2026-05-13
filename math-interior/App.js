import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Arithmetic from "./Arithmetic";
import Power from "./Power";
import Results from "./Results";

const Stack = createNativeStackNavigator();

export default function App() {


  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Arithmetic" component={Arithmetic} />
        <Stack.Screen name="Power" component={Power} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
