import { useState, useEffect, useDeferredValue } from "react";
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
  const [showPhrase, setShowPhrase] = useState(false);

  const [pendingImg, setPendingImg] = useState(null);
  const [isImgLoading, setIsImgLoading] = useState(false);

  useEffect(() => {
    if (!pendingImg) return;
    const img = new window.Image();
    img.src = pendingImg;
    img.onload = () => {
      setBackgroundImg(pendingImg);
      setIsImgLoading(false);
      setPendingImg(null);
    };
  }, [pendingImg]);

  const deferredImg = useDeferredValue(backgroundImg);

  /* const images = [fondo_dia,fondo_noche] */

  function handleChange() {
    setPhrase(randomItem(phrases));
    playSound();
    setShowPhrase(true);
  }

  function handleDarkModeToggle() {
    setDarkMode((prev) => !prev);

    const nextImg = backgroundImg === fondo_dia ? fondo_noche : fondo_dia;
    setPendingImg(nextImg);
    setIsImgLoading(true);
  }

  const styles = {
    backgroundImage: `url(${deferredImg})`,
  };

  return (
    <div className="container-total" style={styles}>
      <div className="darkmode-top-right">
        <CheckDarkMode onToggle={handleDarkModeToggle} />
      </div>

      <Card
        key={phrase.phrase}
        phrase={phrase}
        onChange={handleChange}
        showPhrase={showPhrase}
      ></Card>
    </div>
  );
}

export default App;
