import { StatusBar } from 'expo-status-bar';
import { Identification } from './screens/Identification';
import Home from './screens/Home';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <Identification /> */}
      <Home name={"Username"} />
    </>
  );
}