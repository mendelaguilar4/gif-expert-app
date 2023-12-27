import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categories) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Obtener imágenes.
  const getImages = async() => {
    const newImages = await getGifs(categories);
    setImages(newImages);
    setIsLoading(false);
  }

  // Genera nuevas categorias.
    useEffect(() => {
      getImages();
    }, [])
  
    return {
        images,
        isLoading
    }
}
