import { useState, useEffect } from "react";

export default function hook() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Agrega un event listener para el evento resize
    window.addEventListener("resize", handleResize);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  return {
    screenWidth,
  };
}