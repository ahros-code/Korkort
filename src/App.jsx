import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout/Layout.jsx";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />} />
    </Routes>
  );
}

export default App;
