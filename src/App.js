import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import HomePage from './pages/HomePage/HomePage';
import Games from "./pages/GameList/Games";
import News from "./pages/News/News";
import GameDetails from "./pages/GameDetails/Game";
import ScrollToTop from "./utils/ScrollToTop";


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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage isDarkTheme={isDarkTheme}/>} />
          <Route path="/games" element={<Games isDarkTheme={isDarkTheme}/>} />
          <Route path="/news" element={<News isDarkTheme={isDarkTheme}/>} /> <Route path="/game/:id" element={<GameDetails isDarkTheme={isDarkTheme}/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
