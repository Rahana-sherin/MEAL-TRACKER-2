import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Authentication/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Pages/Cart";
import Menu from "./Pages/Menu";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
