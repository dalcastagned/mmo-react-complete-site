import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import Home from './pages/HomePage/Home';
import Games from "./pages/GameList/Games";
import News from "./pages/News/News";


function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(true)

  useEffect(() => {
    if (localStorage.getItem("theme") === 'true') {
      setIsDarkTheme(true)
    } else {
      setIsDarkTheme(false)
    }
  }, []);


  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyle />
        <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/games" element={<Games isDarkTheme={isDarkTheme}/>} />
          <Route path="/news" element={<News/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
