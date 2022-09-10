import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Container from "./components/container";
import { UserProvider } from "./context/UserContext";
import FlashMessage from "./components/flashMessage";

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <FlashMessage />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
