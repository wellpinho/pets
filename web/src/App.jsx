import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Container from "./components/container";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
