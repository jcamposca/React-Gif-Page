import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {

    const [images, setImagen] = useState([]) 
    const [isLoading, setIsLoading] = useState(true) 

    const getImagenes = async() => {
        const newImagen = await getGifs(categoria);
        setImagen(newImagen);
        setIsLoading(false);
    }

    useEffect( () => {
        getImagenes();
    },[])


    return {
        images,
        isLoading
    }
}
