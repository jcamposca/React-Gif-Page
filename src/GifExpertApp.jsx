import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [category, setCategory] = useState(['One Punch'])

    const añadirCategory = (value) => {

        if(category.includes(value)) return;

        setCategory([value, ...category])
    }

    return (

        <>
            <h1>GifExpertApp</h1>

            <AddCategory añadirCategory={añadirCategory}/>

            <ol>
                {
                    category.map((categoria) => (

                        <GifGrid key={categoria} categoria={categoria} />

                    ))

                }
            </ol>
        </>

    )

}
