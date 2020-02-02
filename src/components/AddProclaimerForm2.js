import React, { useState, useContext, useEffect } from 'react'
import { Form, Button, Input, Dropdown } from 'semantic-ui-react'
import _ from 'lodash'
import useFetchDepFromList from '../hooks/useFetchDepFromList'
import Store from '../context/Store'

const AddProclaimerForm = () => {
  const [{departements}] = useContext(Store)
  const [{lists}] = useContext(Store)
  //const listByDep = useFetchDepFromList([])
  const [name, setName] = useState('')
  const [listByDep, setListByDep] = useState('')
  const [email, setEmail] = useState('')
  const [depValue, setDepValue] = useState([])
  const [listValue, setListValue] = useState([])
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [optionsDep, setOptionsDep] = useState([])
  const [optionsList, setOptionsList] = useState([])
  const [depList, setDepList] = useState([])

  // Build Departements Options
  useEffect(() => {
    const newOptions = departements.map((dep, key) => ({
      key: dep.nom + key,
      text: dep.nom,
      value: dep.id
    }))
    setOptionsDep(newOptions)
  }, [departements])

  // Build Lists Options
  useEffect(() => {
    const newOptions = lists.map((list, key) => ({
      key: list.id,
      text: list.nom,
      value: list.id
    }))
    setOptionsList(newOptions)
  }, [lists])
  
  // Build List's Departements Object
  useEffect(() => {
    if(departements.length && lists.length){
      const newDepList = _.reduce(departements, (deps, dep) => {
        const newList = lists.filter(list => list.departements === dep.id).map(list => list.id)
        return { 
          ...deps,
          [dep.id]: newList
        }
      }, {})
      
      setDepList(newDepList)
    }
  }, [departements, lists])

  // Build Departements's List Object
  useEffect(() => {
    if(departements.length && lists.length){
      const newListByDep = _.reduce(lists, (prevList, list) => {
        const newDep = departements.filter(dep => dep.id === list.departements)[0].id
        
        return {
          ...prevList,
          [list.id]: newDep
        }
      }, {})

      setListByDep(newListByDep)
    }
  }, [lists, departements])


  const onDepValueChange = ({value}) => {
    setDepValue(value)

    // Update list
    let diff = null
    let newList = []

    if(depValue.length < value.length){                         // Add
      console.log('Add')
      const i = value.length-1                                    // Find index of value
      diff = _.difference(depList[value[i]], listValue)           // Find difference
      newList = diff.length ? [...listValue, ...diff] : newList   // Create new list*/
    }else{                                                      // Remove
      console.log('Remove')
      diff = _.difference(depValue, value)                        // Find difference
      newList = _.difference(listValue, depList[diff[0]])         // Create new list*/
    }

    diff.length && setListValue(newList)                        // Update Lists
  }

  const onListValueChange = ({value, options}) => {
    //console.log(options)
    setListValue(value)                        // Update Lists
    /*
                  [ DEP ]                       [ VALUE ]                     
      1 - []                      <>  ['Micro - Gauche']                    =>  Add['Micro']
      2 - ['Micro']               <>  ['Micro - Gauche', 'Micro - Droite']  =>  Add[]
      3 - ['Micro']               <>  ['Micro - Droite']                    =>  Sub[]
      3 - ['Micro - Droite']                    <>  []                                    =>  Sub['Micro']
    */
    // Update list
    let diff = []
    let newList = []
    
    console.log(listValue,value)
    if(listValue.length < value.length){                          // Add
      console.log('ADD')
      const i = value.length-1                                      // Find index of value
      const dep = listByDep[value[i]]             // Find departement
      console.log('dep', dep)
      console.log('depValue', depValue)
      diff = _.difference([dep], depValue)                          // Find difference
      console.log('DIFF',diff)
      newList = diff.length ? [...depValue, diff] : newList      // Create new list
      diff.length && setDepValue(newList)                           // Update Lists
    }else{                                                        // Remove
      diff = _.difference(listValue, value)[0]                      // Find difference      ex: "HdUgv1JxeCFxFDA21XCM" === "Vidéo"
      
      const depId = listByDep[diff]                                   // Find departement
      
      if(depList[depId].length === _.difference(depList[depId], value).length){
        const newDepValue = depValue.filter(value => value !== depId)
        setDepValue(newDepValue)
      }
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Add User IN')
    setErrorName(true)
    if(name){
      setErrorName(false)
      console.log('Add User', name)
      const [first, last] = name.split(' ')
      //console.log(state.proclaimers)
      /*firebase
        .firestore()
        .collection('proclamateurs')
        .add({
          name: {
            first,
            last
          },
          deps,
          lastDateUsed
        })
        .then(() => {
        */  setName('')/*
        })*/
    }
  }
  
  return (
    <Form onSubmit={onSubmit}>
      
      <Form.Group>
        <Form.Field required error={errorName} width={8}>
          <label>Prénom Nom</label>
          <Input
            placeholder='Prénom Nom'
            value={name}
            name='name'
            onChange={e => setName(e.target.value)}
          />
        </Form.Field>

        <Form.Field error={errorEmail} width={8}>
          <label>Email</label>
          <Input
            placeholder='email@email.com'
            value={email}
            name='email'
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Field>
      </Form.Group>

      <Form.Group>
        <Form.Field width={8}>
          <label>Départements</label>
          <Dropdown
            placeholder='Ajout de départements'
            fluid multiple selection
            options={optionsDep}
            onChange={(e,key) => onDepValueChange(key)}
            value={depValue}
          />
        </Form.Field>

        <Form.Field width={8}>
          <label>Listes</label>
          <Dropdown
            placeholder='Ajout de listes'
            fluid multiple selection 
            options={optionsList}
            onChange={(e,key) => onListValueChange(key)}
            value={listValue}
          />
        </Form.Field>
      </Form.Group>
    
      <Button primary type='submit'>Sauvegarder</Button>
    </Form>
  )
}

export default AddProclaimerForm