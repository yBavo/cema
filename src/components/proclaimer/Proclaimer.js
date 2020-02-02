import React, { useState } from 'react'
import ProclaimerForm from './ProclaimerForm'
//import Store from '../context/Store'
import useFetchProclaimers from '../../hooks/useFetchProclaimers'
import useFetchLists from '../../hooks/useFetchLists'
import useFetchDepartements from '../../hooks/useFetchDepartements'
//import { Header } from 'semantic-ui-react'


const AddProclaimer = () => {
  const proclaimers = useFetchProclaimers()
  const lists = useFetchLists()
  const departements = useFetchDepartements()
  const [userEdit, setUserEdit] = useState({})

  console.log('ADD_PROCLAIMER',userEdit)
  return (
    <div>
      <h2>{typeof userEdit.name != "undefined" ? 'Editer un proclamateur' : 'Ajouter un proclamateur'}</h2>
      <ProclaimerForm userEdit={userEdit} />
      <br />
      <div style={depContainer}>
        <div style={proHeader}>Proclamateurs {proclaimers.length || ""}</div>
        <div>
          {proclaimers.map(proclaimer => (
            <div key={proclaimer.id} onClick={() => setUserEdit(proclaimer)}>
              {`${proclaimer.name.last} ${proclaimer.name.first[0]}.`}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const depContainer = {
  minWidth: '130px'
}

const proHeader = {
  backgroundColor: '#2196F3',
  padding: '0 5px 0'
}

export default AddProclaimer
