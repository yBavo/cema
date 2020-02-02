import React, {useState} from 'react'

const AddDepartementForm = () => {
  const [name, setName] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <div>
      <h2>Ajout de Département</h2>
      <form onSubmit={onSubmit}>
        <label>Nom </label>
        <input
          type='text'
          placeholder=' Département'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <label>Rang </label>
        <input type='number' min='0'/>
      </form>
    </div>
  )
}

export default AddDepartementForm