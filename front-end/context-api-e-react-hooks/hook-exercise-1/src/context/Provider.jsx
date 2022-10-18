import React, { useState } from 'react';
import FormContext from './FormContext';

function Provider(props) {
  const [form, setForm] = useState([{
    name: '',
    age: 0,
    city: '',
    module: '',
  }]);

  const addNewUser = (user) => {
    setForm((prevState)=> ([...prevState, user ]))
  }

  const contextValue = {
    form, 
    setForm,
    addNewUser
  }

  return (
    <FormContext.Provider value={ contextValue }>
      { props.children }
    </FormContext.Provider>
  )

}

export default Provider;
