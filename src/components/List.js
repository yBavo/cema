import React, { useContext, useState, useEffect } from 'react'
import _ from 'lodash'
import Store from '../context/Store'
import ProclaimerForm from './proclaimer/ProclaimerForm'


const List = () => {
  const [{lists}] = useContext(Store)
  const [{proclaimers}] = useContext(Store)
  const [listName, setListName] = useState({})
  
  useEffect(() => {
    const newListName = lists.map(list => (
        {[list.id]: proclaimers.filter(proclaimer => _.findIndex(proclaimer.lists, l => l === list.id) >= 0)}
      ))
    
    setListName(newListName.reduce((obj, item) => ({...obj, ...item}), {}))

  }, [lists, proclaimers])

  const autoStr = 'auto '
  const autoColumns = autoStr.repeat(lists.length)
  
  console.log('autoColumns',autoColumns)
  
  return(
    <>
      <h2>List</h2>
      <div style={{ display: 'grid',
                    gridTemplateColumns: `${autoColumns}`,
                    gridGap: '5px',
                    padding: '10px'}}>
        
        { lists.map(list => (
            <div key={list.id} style={depContainer} >
              <div style={proHeader}>{`${list.nom}`} <span style={{float: "right"}}> {`(total: ${_.size(listName[list.id])})` || ""}</span></div>
              { _.size(listName) && 
                listName[list.id].map(proclaimer => (
                  <div key={list.id + proclaimer.id} style={cell}>
                    {proclaimer.name.last} {proclaimer.name.first[0]}.
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </>
  )
}

const depContainer = {
  minWidth: '130px'
}

const proHeader = {
  backgroundColor: '#2196F3',
  padding: '0 5px 0'
}

const cell = {
  position: 'relative',
  top: '-1px',
  border: '2px solid black'
}
export default List
