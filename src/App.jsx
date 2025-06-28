import { useState, useEffect } from "react";
import "./App.scss";
import phrases from "./data/phrases.json";
import { randomItem } from "./lib/util";
import Card from "./components/Card";
import fondo_dia from "./Assets/fondo_dia.png";
import fondo_noche from "./Assets/fondo_noche..png";
import CheckDarkMode from "./components/Checbox_darkmode";
import swal from "sweetalert";

import wand_efect from "./Assets/wand_efect.mp3";
import useSound from "use-sound";

function App() {
  const [playSound] = useSound(wand_efect);
 

  useEffect(() => {
 

    swal("Da click a la varita mágica!", {
      buttons: false,
      timer: 2500,
    });
  }, []); 

  const [phrase, setPhrase] = useState(randomItem(phrases));
  const [backgroundImg, setBackgroundImg] = useState(fondo_dia);
  const [darkMode, setDarkMode] = useState(false);

  /* const images = [fondo_dia,fondo_noche] */

  function handleChange() {
    setPhrase(randomItem(phrases));
    playSound();
  }

  function handleDarkModeToggle() {
    setDarkMode((prev) => !prev);
    setBackgroundImg((prev) => (prev === fondo_dia ? fondo_noche : fondo_dia));
  }

  const styles = {
    backgroundImage: `url(${backgroundImg})`,
  };

  return (
    <div className="container-total" style={styles}>

      
      <div className="darkmode-top-right">
        <CheckDarkMode onToggle={handleDarkModeToggle} />
      </div>

      

      <Card key={phrase.phrase} phrase={phrase} onChange={handleChange}></Card>
        
    </div>
  );
}

export default App;
