import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home"
import Discover from "./screens/Discover"
import Item from './screens/Item';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="Item" component={Item} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

