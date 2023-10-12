import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Hunter x Hunter", "One Punch Man"]);

    const onAddCategory= (newCategory) => {
        setCategories( [newCategory, ...categories])
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
        {/* <button onClick={onAddNewCategory}>Agregar</button> */}
        <ol>
            {categories.map( (category) => {
                return <li key={category}>{category}</li>
            } )}
        </ol>
            {/* Gif item */}
    </>
  )
}
