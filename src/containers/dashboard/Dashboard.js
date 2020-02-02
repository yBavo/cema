import fr from 'date-fns/locale/fr';
import React, { useState } from 'react';
import useDateFirstMonthReunion from '../../hooks/date/useDateFirstMonthReunion';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Container } from 'semantic-ui-react';
registerLocale('fr', fr)


const Dasboard = () => {
  //useFetchProclaimers()
  //useFetchLists()
  const [page, setPage] = useState(1)
  
  const date = new Date()
  const add = 0
  
  const firstDate = useDateFirstMonthReunion(date.getMonth()+add)

  

  return (
    <>
      <h1>Dashboard</h1>
      <DatePicker
        showPopperArrow={false}
        selected={firstDate}
        //onChange={date => setStartDate(date)}
        locale="fr"
        dateFormat="EE d MMMM yy"
      />
      {/* <GridExampleStretched /> */}
      {/* <Schedules /> */}
      
    </>
  )
}

export default Dasboard