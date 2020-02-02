import { useState, useEffect, useContext } from 'react'
import firebase from '../firebase'
import Store from '../context/Store'
import { FETCH_LISTS } from '../actions/actionsType'

let counter = 0
let counter2 = 0

const useFetchLists = () => {
  const [lists, setLists] = useState([])
  const [,dispatch] = useContext(Store)
  
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('listes')
      .orderBy('ordre', 'asc')
      .onSnapshot(snapshot => {
        const newLists = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setLists(newLists)
        dispatch({
          type: FETCH_LISTS,
          lists: newLists
        })
        console.log(`MOUNTED useFetchLists ${++counter}`)
      })
    
    return () => {
      console.log(`UNMOUNTED useFetchLists ${++counter2}`)  
      return unsubscribe
    }
  }, [dispatch])
    
  return lists
}

export default useFetchLists
