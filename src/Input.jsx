import React, { useState } from 'react';

function Input(){
    const [useName, setUseName] = useState('')

    function handleChange(event){
        
        const {name, value} = event.target;
        setUseName(value)
        console.log(name);

    }
    return(
        <form>
            <input onChange={handleChange} value={useName} name='inputName' />
            <p>{useName}</p>
        </form>
    )
}


export default Input;