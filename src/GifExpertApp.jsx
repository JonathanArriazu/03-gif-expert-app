import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One Punch Man"]);

    const onAddCategory= (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories( [newCategory, ...categories] );
    }

  return (
    <>
        {/* Titulo */}
        <h1>Gif Expert App</h1>

        {/* Input */}
        <AddCategory 
            //onSetCategories={setCategories} {/* onSetCategory es una propiedad del componente AddCategory, la cual va a recibir a setCategories */}
            onNewCategory={ onAddCategory }
        /> 

        {/* Listado de Gif */}

            {
                categories.map( (category) => (
                        <GifGrid category={category} key={category}/>
                ))
            }

    </>
  )
}
