import { useEffect, useState } from 'react'
//import _ from 'lodash'
//import Store from '../context/Store'
import firebase from '../firebase'

const useProclaimerList = (listId) => {
  const [ proclaimers, setProclaimers ] = useState([])
  //const [,dispatch] = useContext(Store)
  
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('proclamateurs')
      .orderBy('name.last', 'asc')
      .where("lists", "array-contains", listId)
      .onSnapshot(snapshot => {
        const newProclaimers = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        //
        setProclaimers(newProclaimers)
      })
    
    return () => unsubscribe
  }, [listId])

  return proclaimers
}

export default useProclaimerList
