import { StatusBar } from 'expo-status-bar';
import Identification from './screens/Identification';
import Home from './screens/Home';
import RegisterExpense from './screens/RegisterExpense';
import AllExpenses from './screens/AllExpenses';
import Configurations from './screens/Configurations';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type AppScreens = {
  Identification: undefined;
  Home: { name: string };
  RegisterExpense: undefined;
  AllExpenses: undefined;
  Configurations: undefined;
};

export default function App() {
  const Stack = createNativeStackNavigator<AppScreens>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Identification' component={Identification} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='RegisterExpense' component={RegisterExpense} />
        <Stack.Screen name='AllExpenses' component={AllExpenses} />
        <Stack.Screen name='Configurations' component={Configurations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}