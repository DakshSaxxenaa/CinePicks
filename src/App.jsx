import { Provider } from "react-redux";
import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import appStore from "./utils/appStore";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Provider store={appStore}>
      <Header/>
      <Container/>
      <Footer/>
    </Provider>
    </>
  );
}

export default App;
