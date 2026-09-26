import { StatusBar } from 'expo-status-bar';
import { Identification } from './screens/Identification';
import Home from './screens/Home';
import RegisterExpense from './screens/RegisterExpense';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <Identification /> */}
      <Home name={"Username"} />
      {/* <RegisterExpense /> */}
    </>
  );
}