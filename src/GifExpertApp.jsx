import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {

        // Validar si existe categoria.
        if(categories.includes(newCategory)) return;
        
        setCategories([newCategory, ...categories]);
    }

  return (
    <>

        <h1>GifExpertApp</h1>

        <AddCategory
            onNewCategory={value => onAddCategory(value)}
        />
        
            {
                categories.map((categories) => (
                    <GifGrid 
                        key={categories} 
                        categories={categories} 
                    />
                ))
            }

    </>
  )
}
