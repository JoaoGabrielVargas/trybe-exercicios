import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

function UserList(props) {
  const { form } = useContext(FormContext);
  console.log(form)
  return (
    <ul>
      {
        form.map((user) => <li>
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.city}</p>
          <p>{user.module}</p>
        </li>)
      }
    </ul>
  )
}

export default UserList;