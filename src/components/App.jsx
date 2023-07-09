import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "shared/sharedLayout/SharedLayout";
import Movies from "../pages/movies/Movies";
import Home from "../pages/home/Home";

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
