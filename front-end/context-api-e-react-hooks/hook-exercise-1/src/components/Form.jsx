import React, { useContext, useState } from 'react';
import FormContext from '../context/FormContext';

function Form(props) {

  const [ form, setForm ] = useState({
    name: '',
    age: 0,
    city: '',
    module: '',
  })

  const { addNewUser } = useContext(FormContext)

  const handleChange = (event) => {
    const { value, name } = event.target  
      setForm((prevState) => ({ ...prevState, [name]: value }) )
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewUser({
      name: form.name,
      age: form.age,
      city: form.city,
      module: form.module
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={form.name}
        name="name"
        placeholder='Nome'
        onChange={handleChange}
      />
      <input
        type="number"
        value={form.age}
        name="age"
        placeholder='Idade'
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        value={form.city}
        placeholder="Cidade"
        onChange={handleChange}
      />
      <input type="radio" 
          name="module" 
          value="Fundamentos" 
          onChange={handleChange}>
        
      </input>
      <input type="radio" 
          name="module" 
          value="Front-End" 
          onChange={handleChange}>
        
      </input>
      <input type="radio" 
          name="module" 
          value="Back-End" 
          onChange={handleChange}>
        
      </input>
      <input type="radio" 
          name="module" 
          value="Ciência da Computação" 
          onChange={handleChange}>
      
      </input>
      <button type="submit">
        Enviar
      </button>
    </form>
  )
}

export default Form;