import React, { useContext, useEffect, useState } from 'react'
import uuid from 'react-uuid'
//import Store from '../context/Store'
import Store from '../context/Store'


const Page3 = () => {
  const [{proclaimers}, dispatch] = useContext(Store)
  const [name, setName] = useState('')
  
  const submit = (e) => {
    e.preventDefault()

    if(name){
      dispatch({
        type: 'ADD_USER',
        name: name
      })
      setName('')
    }

    return;
  }

  return (
    <div>
      <h1>Page 3</h1>
      <form onSubmit={submit}>
        <input
          type='text'
          placeholder='Full name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add</button>
      </form>
      {
        proclaimers.map(user => ( 
          <div key={user.id}>
            {user.name.first}
          </div>
        ))
      }
    </div>
  )
}

export default Page3
