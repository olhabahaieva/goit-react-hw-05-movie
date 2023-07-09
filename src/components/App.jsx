import { Route, Routes } from "react-router-dom";
import SharedLayout from "shared/sharedLayout";
import Movies from "../pages/movies";
import Home from "../pages/home";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path="/" element={SharedLayout}></Route>
        <Route index element={Home}></Route>
        <Route path="movies" element={Movies}></Route>
      </Routes>
    </div>
  );
};
