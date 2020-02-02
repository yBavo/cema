import React, {useEffect, useState } from 'react'
//import { Table } from 'semantic-ui-react'
import useProclaimerList2 from '../../hooks/useProclaimerList2'
//import Store from '../../context/Store'
import useFindDates from '../../hooks/date/useFindDates'
import { monthStr } from '../../data'
import { Header } from 'semantic-ui-react';

//let counter = 0;

const Schedule = ({list}) => {
  const [date, setDate] = useState(null)
  const [lists, setLists] = useState(null)
  const titre = list.nom
  const proclaimers = useProclaimerList2(list.id)
  const dateMonth = useFindDates()
  
  useEffect(() => {
    const newDate =
      <div style={liste}>
        <Header>Date</Header>
        {dateMonth.map((date,i) => (
          <div key={date.getDate()} style={cellDate}>
            <p>{`${date.getDate()} ${monthStr[date.getMonth()].substr(0,3)}`}</p>
          </div>
        ))}
      </div>
    setDate(newDate)

    const newLists = 
    <div style={liste}>
        <Header>{titre}</Header>
        {proclaimers.map((proclaimer,i) => (
          <div key={proclaimer.name.last+i} style={cell}>
            <p>{`${proclaimer.name.last} ${proclaimer.name.first[0]}.`}</p>
          </div>
        ))}
      </div>
    setLists(newLists)
    
  },[dateMonth, proclaimers, titre])
  
  return (
    <div style={{display: 'flex'}}>
      {date}
      {lists}
    </div>
  )
}

const liste = {
  display: 'flex',
  flexDirection: 'column'
}

const cell = {
  //display: 'flex',
  //flexDirection: 'column',
  width: '150px',
  border: '1px solid black',
  textAlign: 'center',
  //boxSizing: 'content-box'
  padding: '2px'
}
const cellDate = {
  display: 'inline-flex',
  flexDirection: 'column',
  width: '50px',
  border: '1px solid black',
  boxSizing: 'content-box',
  padding: '2px',
  backgroundColor: 'gray'
}

export default Schedule
