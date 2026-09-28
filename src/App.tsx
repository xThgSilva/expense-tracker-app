import { StatusBar } from 'expo-status-bar';
import { Identification } from './screens/Identification';
import Home from './screens/Home';
import RegisterExpense from './screens/RegisterExpense';
import AllExpenses from './screens/AllExpenses';
import Configurations from './screens/Configurations';

export default function App() {
  return (
    <>
      {/* <Identification /> */}
      {/* <Home name={"Username"} /> */}
      {/* <RegisterExpense /> */}
      {/* <AllExpenses /> */}
      <Configurations />
    </>
  );
}