import React, { useEffect, useState } from 'react'
//import { Table } from 'semantic-ui-react'
import useBuildSchedule from '../../hooks/useBuildSchedule'
import useFetchLists from '../../hooks/useFetchLists'
//import Store from '../../context/Store'
//import Schedule from '../../components/schedule/Schedule'
import Cell from '../../components/schedule/Cell'
//import Day from '../components/Day'

const Schedules = () => {
  const lists = useFetchLists()
  //const proclaimers = useFetchProclaimers()
  //const [{lists}] = useContext(Store)
  const schedules = useBuildSchedule()
  const [renderSchedule, setRenderSchedule] = useState(null)

  useEffect(() => {
    console.log('SCHEDULES',schedules)
    console.log('SCHEDULES',lists)
  },[schedules,lists])

  
  return (
    <div >
      {/* {renderSchedules} */}
      <Cell />
      {renderSchedule}
      {/* {lists.map((list, i) =>
        <Schedule key={list+i} list={list}/>
      )} */}
    </div>
  )
}

export default Schedules