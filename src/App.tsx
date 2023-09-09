import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header/Header.js";
import { AuthentificationContextProvider } from "./context/AuthentificationContext";
import { BookingCatSitterContextProvider } from "./context/BookingCatSitterContext";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer.js";

const App = () => {
  return (
    <div className="App">
      <AuthentificationContextProvider>
        <BookingCatSitterContextProvider>
          <BrowserRouter>
            <Header />
            <Content />
            <Footer />
          </BrowserRouter>
        </BookingCatSitterContextProvider>
      </AuthentificationContextProvider>
    </div>
  );
};

export default App;
