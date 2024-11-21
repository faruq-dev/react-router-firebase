import Layout from "./layout/Layout";
import { useNavigation } from "react-router-dom";
import Loading from "../components/Loading";

const App = () => {
  const navigation = useNavigation();
  
  if (navigation.state === "loading"){
    return <Loading/>
  }
  return (
    <>
      <Layout/>
    </>
  );
};

export default App;
