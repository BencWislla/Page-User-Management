import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import { Menu } from "./components/Menu";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, * {
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  }


  body{
    min-height: 100vh;
    min-width: 100vh;

  }



  `;
function App() {
  return (
    <>
      <GlobalStyle />
      <Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Menu>
    </>
  );
}

export default App;
