import { useState } from "react"
import "./app.css";
import Card from "./components/card";
import Header from "./components/header";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Footer from "./components/footer";


function App() {  
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeTheme = () =>{
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={changeTheme}
      size={20}
    />
      <Header/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default App
