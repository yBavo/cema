import { useEffect, useState, useContext } from 'react'
import firebase from '../firebase'
import Store from '../context/Store'
import { POPULATE_PROCLAIMER } from '../actions'

let counter = 0
let counter2 = 0

const useFetchProclaimers = () => {
  const [ proclaimers, setProclaimers ] = useState([])
  const [,dispatch] = useContext(Store)
  
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('proclamateurs')
      .orderBy('name.last', 'asc')
      .onSnapshot(snapshot => {
        const newProclaimers = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        //
        setProclaimers(newProclaimers)
        // 
        dispatch({
          type: POPULATE_PROCLAIMER,
          proclaimers: newProclaimers
        })
        console.log(`MOUNTED useFetchProclaimers ${++counter}`)
      })
    
    return () => {
      console.log(`UNMOUNTED useFetchProclaimers ${++counter2}`)
      return unsubscribe
    }
  }, [dispatch])
  
  return proclaimers
}

export default useFetchProclaimers