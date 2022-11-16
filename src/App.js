import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoutesList from "./components/RoutesList";
import Theme from "./styles/theme";

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Header />
        <RoutesList />
        <Footer />
      </BrowserRouter>
    </Theme>
  );
}

export default App;
