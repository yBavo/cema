import React, { useContext, useState } from 'react'
import Store from '../context/Store'


const Page2 = () => {
  console.log(useContext(Store))
  const [{lists}, dispatch] = useContext(Store)
  const [name, setName] = useState('')
  
  const submit = (e) => {
    e.preventDefault()

    if(name){
      dispatch({
        type: 'ADD_LIST',
        nom: name
      })
      setName('')
    }
    
    return;
  }

  return (
    <div>
      <h1>Page 2</h1>
      <form onSubmit={submit}>
        <input
          type='text'
          placeholder='Full name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add</button>
      </form>
      {lists.map(list => (
        <div key={list.id}>
          {list.nom}
        </div>
      ))}
    </div>
  )
}

export default Page2
