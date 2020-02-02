//import {/*useState, useEffect, */useContext} from 'react'
import firebase from '../firebase'
import {
  ADD_PROCLAIMER,
  /*EDIT_PROCLAIMER, */
  GET_PROCLAIMERS/*,
  GET_LIST_PROCLAIMERS, 
  REMOVE_PROCLAIMER*/
} from './actionsType'

import Store from '../context/Store'

const dbCollection = firebase.firestore().collection('proclamateurs')

export const addProclaimer = async (user) => {
  console.log('ADDING', user)
  return dbCollection
    .add(user)
}

export const editProclaimer = async (user, id) => {
  console.log('EDITING', user)
  return dbCollection
    .doc(id)
    .update(user)
}

/*
export const useGetProclaimers = (proclaimers) => {
  const {dispatch} = useContext(Store)

  dispatch({
    type: GET_PROCLAIMERS,
    proclaimers
  })
}

export const getListProclaimer = (list) => {
  return;
}*/

export const removeProclaimer = async (id) => {
  console.log('REMOVING', id)
  return dbCollection
    .doc(id)
    .delete()
}
