import { useState, useEffect, useContext } from 'react'
import firebase from '../firebase'
import _ from 'lodash'
import Store from '../context/Store'
import { POPULATE_DEPARTEMENTS } from '../actions/actionsType'

//let counter = 0
//let counter2 = 0

const useFetchDepartements = () => {
  const [departements, setDepartements] = useState([])
  const [,dispatch] = useContext(Store)
  
  useEffect(() => {
    return (
      firebase
        .firestore()
        .collection('departements')
        .onSnapshot(snapshot => {
          const newDepartements = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
            //[doc.id] : doc.data()
          })) 
          
          console.log('FETCH_DEPARTEMENT', newDepartements)
          //
          setDepartements(newDepartements)
          // Dispatch to the store
          dispatch({
            type: POPULATE_DEPARTEMENTS,
            departements: newDepartements
          })
        })
    )
  }, [dispatch])
    
  return departements
}

export default useFetchDepartements
