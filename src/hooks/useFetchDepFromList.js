import { useState, useEffect/*, useContext*/ } from 'react'
import firebase from '../firebase'
import _ from 'lodash'
//import Store from '../context/Store'
//import { FETCH_LISTS } from '../actions/actionsType'

/*let counter = 0
let counter2 = 0*/

const useFetchDepFromList = () => {
  const [listDep, setListDep] = useState([])
  //const [,dispatch] = useContext(Store)
  
  useEffect(() => {
    return (
      firebase
        .firestore()
        .collection('listes')
        .onSnapshot(snapshot => {
          /*const newListDep = snapshot.docs.map(doc => ({
            [doc.id] : doc.data().departements,
            [doc.data().nom] : doc.data().departements
          }))
          console.log('useFetchDepFromList',newListDep)*/
          const newListDep = _.reduce(snapshot.docs, (docs, doc) => (
            { 
              ...docs,
              [doc.data().nom] : doc.data().departements
            }
          ), {})
          
          console.log('useFetchDepFromList REDUCE',newListDep )
          setListDep(newListDep)
          /*dispatch({
            type: FETCH_LISTS,
            lists: newLists
          })*/
          
        })
    )
    
    /*return () => {
      console.log(`UNMOUNTED useFetchLists ${++counter2}`)  
      return unsubscribe
    }*/
  }, [/*dispatch*/])
    
  return listDep
}

export default useFetchDepFromList
