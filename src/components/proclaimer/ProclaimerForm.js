import _ from 'lodash'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Dropdown, Form, Input } from 'semantic-ui-react'
import Store from '../../context/Store'
import firebase from '../../firebase'
import { addProclaimer, editProclaimer, removeProclaimer } from '../../actions/proclaimer'

let counter = 0

const ProclaimerForm = ({userEdit}) => {
  const [{departements}] = useContext(Store)
  const [{lists}] = useContext(Store)
  //const listByDep = useFetchDepFromList([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [depValue, setDepValue] = useState([])
  const [listValue, setListValue] = useState([])
  const [restrictionsValue, setRestrictionsValue] = useState([])
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [optionsDep, setOptionsDep] = useState([])
  const [optionsList, setOptionsList] = useState([])
  const [listByDep, setListByDep] = useState('')
  const [depList, setDepList] = useState([])
  const [edition, setEdition] = useState(false)
  
  //
  useEffect(() => {
    const newName = typeof userEdit.name != "undefined" ? userEdit.name.first + ' ' + userEdit.name.last : ''
    const newEmail = typeof userEdit.email != "undefined" ? userEdit.email : ''
    const newDeps = typeof userEdit.departements != "undefined" ? userEdit.departements : []
    const newLists = typeof userEdit.lists != "undefined" ? userEdit.lists : []
    const newRestrictions = typeof userEdit.restrictions != "undefined" ? userEdit.restrictions : []
    const newEdition = typeof userEdit.name != "undefined" ? true : false

    setName(newName)
    setEmail(newEmail)
    setDepValue(newDeps)
    setListValue(newLists)
    setRestrictionsValue(newRestrictions)
    setEdition(newEdition)
    setErrorName(typeof userEdit.name == "undefined" ? errorName : false)
    setErrorEmail(typeof userEdit.email == "undefined" ? errorEmail : false)
  }, [userEdit])
  
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

  const optionsRestriction = [
    {key: 1, text: 'la semaine', value: 'la semaine'},
    {key: 2, text: 'la fin de semaine', value: 'la fin de semaine'},
    {key: 3, text: 'période indéterminé', value: 'période indéterminé'},
    {key: 4, text: 'De:  - À:' , value: 'dea'},
  ]
  const onDepValueChange = ({value}) => {
    setDepValue(value)

    // Update list
    let diff = null
    let newList = []

    if(depValue.length < value.length){                         // Add
      const i = value.length-1                                    // Find index of value
      diff = _.difference(depList[value[i]], listValue)           // Find difference
      newList = diff.length ? [...listValue, ...diff] : newList   // Create new list*/
    }else{                                                      // Remove
      diff = _.difference(depValue, value)                        // Find difference
      newList = _.difference(listValue, depList[diff[0]])         // Create new list*/
    }

    diff.length && setListValue(newList)                          // Update Lists
  }

  const onListValueChange = ({value}) => {
    setListValue(value)                                           // Update Lists
    
    // Update list
    let diff = []
    let newList = []
    
    if(listValue.length < value.length){                          // Add
      const i = value.length-1                                      // Find index of value
      const depId = listByDep[value[i]]                             // Find departement
      
      diff = _.difference([depId], depValue)                        // Find difference
      newList = diff.length ? [...depValue, ...diff] : newList      // Create new list
      
      diff.length && setDepValue(newList)                           // Update Lists
    }else{                                                        // Remove
      diff = _.difference(listValue, value)[0]                      // Find difference      ex: "HdUgv1JxeCFxFDA21XCM" === "Vidéo"
      
      const depId = listByDep[diff]                                 // Find departement
      
      if(depList[depId].length === _.difference(depList[depId], value).length){
        const newDepValue = depValue.filter(value => value !== depId)
        setDepValue(newDepValue)
      }
    }
  }

  const reset = (e) => {
    //e.preventDefault()

    setName('')
    setEmail('')
    setDepValue([])
    setListValue([])
    setRestrictionsValue([])
    setEdition(false)
    setErrorName(false)
    setErrorEmail(false)
  }

  const onRemove = (e) => {
    removeProclaimer(userEdit.id)
      .then((res) => {
        console.log('ON_REMOVE', res)
        reset()
      })

  }
  const onSubmit = (e) => {
    e.preventDefault()
    
    setErrorName(true)
    
    if(name){
      setErrorName(false)
      
      const [first, last] = name.split(' ')
      const newUser = {
        name: {
          first,
          last
        },
        departements: [...depValue],
        email,
        lists: [...listValue],
        lastDateUsed: {},
        restrictions: []
      }
      console.log('EDITION?: ', edition)
      if (!edition){
        addProclaimer(newUser)
          .then((res) => {
            console.log('RES',res)
            return (
              setName(''),
              setEmail(''),
              setDepValue([]),
              setListValue([]),
              setRestrictionsValue([])
            )}
          )
      }else{
        editProclaimer(newUser, userEdit.id)
          .then((res) => {
            console.log('RES',res)
            return (
              setName(''),
              setEmail(''),
              setDepValue([]),
              setListValue([]),
              setRestrictionsValue([])
            )}
          )
      }
      
    }
  }
  
  return (
    <div>
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
              loading={!optionsDep.length}
              disabled={!optionsDep.length}
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
              loading={!optionsList.length}
              disabled={!optionsList.length}
              renderLabel={(label) => ({ color: 'green', content:`${label.text}`, icon: 'check' })}
            />
          </Form.Field>
        </Form.Group>
      
        <Form.Field>
          <label>Restrictions</label>
          <Dropdown
            placeholder='Restrictions pendant...'
            fluid multiple selection
            options={optionsRestriction}
            onChange={(e,key) => setRestrictionsValue(key.value)}
            value={restrictionsValue}
            loading={!optionsRestriction.length}
            disabled={!optionsRestriction.length}
          />
        </Form.Field>
          
        <Button.Group fluid>
          <Button primary type='submit'>Sauvegarder</Button>
          <Button.Or />
          <Button onClick={(e) => reset(e)}>Annuler</Button>
        </Button.Group>
        
        
      </Form>
      {edition && <Button negative onClick={(e) => onRemove(e)}>Supprimer</Button>}
    </div>
    
  )
}

export default ProclaimerForm