import React, { useContext } from 'react'
import Store from '../context/Store'


const Dasboard = () => {
  const {users} = useContext(Store)
    
  return (
    <div>
      <h1>Play Ground 2</h1>
      {/* {users.map(user => (
        <div key={user.id}>
          {user.nom}
        </div>
      ))} */}
    </div>
  )
}

export default Dasboard
