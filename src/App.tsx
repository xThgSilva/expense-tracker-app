import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import Identification from './screens/Identification';
import Home from './screens/Home';
import RegisterExpense from './screens/RegisterExpense';
import AllExpenses from './screens/AllExpenses';
import Configurations from './screens/Configurations';
import Loading from './screens/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { handleGetName } from './services/service';

export type AppScreens = {
  Identification: undefined;
  Home: undefined;
  RegisterExpense: undefined;
  AllExpenses: undefined;
  Configurations: undefined;
};

export default function App() {
  const [savedName, setSavedName] = useState<string | null | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadName = async () => {
      const name = await handleGetName();
      setSavedName(name);
    };

    loadName();
  }, []);

  if (loading) {
    return <Loading
      savedName={savedName}
      setLoading={setLoading}
    />;
  }
  const Stack = createNativeStackNavigator<AppScreens>();

  return (
    <NavigationContainer>
      <StatusBar style='inverted'/>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!savedName && (
          <Stack.Screen name='Identification' component={Identification} />
        )}
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='RegisterExpense' component={RegisterExpense} />
        <Stack.Screen name='AllExpenses' component={AllExpenses} />
        <Stack.Screen name='Configurations' component={Configurations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}