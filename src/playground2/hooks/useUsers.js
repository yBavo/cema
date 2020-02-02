import { useState} from 'react'

const users = [
  {
    id:1,
    nom: 'Bob'
  },
  {
    id:2,
    nom: 'Alphonso'
  }
]

const useUsers = () => {
  const [users, setUsers] = useState()

  setUsers(users)

  return users
}

export default useUsers
