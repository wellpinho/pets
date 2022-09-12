import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import { UserProvider } from "./context/UserContext";
import Container from "./components/container";
import FlashMessage from "./components/flashMessage";
import Profile from "./components/profile";
import MyPets from "./components/pets";
import AddPet from "./components/pets/add";
import EditPet from "./components/pets/editePet";
import PetDetails from "./components/pets/details";

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
            <Route path="/users/profile" element={<Profile />} />
            <Route path="/pets/mypets" element={<MyPets />} />
            <Route path="/pets/add" element={<AddPet />} />
            <Route path="/pets/edit/:id" element={<EditPet />} />
            <Route path="/pets/:id" element={<PetDetails />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
