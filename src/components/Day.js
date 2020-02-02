import React, { useContext } from 'react'
import {monthStr} from '../data'
import Store from '../context/Store'

const Day = ({reunion}) => {
  console.log(reunion)
  const date = `${reunion.date.getDate()} ${monthStr[reunion.date.getMonth()].substr(0,3)}`
  const [{lists}] = useContext(Store)

  return (
    <div style={{ display: 'grid',
      gridTemplateColumns: 'auto auto auto auto auto auto auto',
      gridGap: '0px',
      padding: '0px',
      border: '2px solid orange'}}>
      <div style={{minWidth: '60px'}}>{date}</div>
      { lists.map(list => (
        <div key={date+list.id} style={depContainer} >
          { reunion[list.id].map(proclaimer => (
              <div style={{ border:'2px solid blue'}} key={date+list.id+proclaimer.first+proclaimer.last}>
                {proclaimer.last} {proclaimer.first[0]}.
              </div>
            ))
          }
        </div>
      ))}
    </div>
  )
}

const depContainer = {
  minWidth: '130px',
  
}

const proHeader = {
  backgroundColor: '#2196F3',
  padding: '0 5px 0'
}

export default Day
