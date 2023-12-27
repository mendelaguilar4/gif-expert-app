import {useState} from 'react';

// Desestructuración.
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    // Se desestructura de event.
    const onInputChange = ({target}) => {
        // console.log(event);
        setinputValue(target.value)
    }

    const onSubmit = (event) => {
        // Previene el submit del form.
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        // Categories se almacenan categorias anteriores para no sobreescribir el arreglo. 

        // setCategories(categories => [inputValue, ...categories]);

        // Limpiando input.
        setinputValue('');

        onNewCategory(inputValue.trim());
        
    }

  return (
    <form onSubmit={onSubmit}>
        <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={ onInputChange }
        />
    </form>
  )
}
