import { useState, useEffect } from 'react'
import { dateOn } from '../../data'

const useDateFirstMonthReunion = (month=new Date().getMonth(), year=new Date().getFullYear()) => {
  const [firstDate, setFirstDate] = useState(null)
  
  useEffect(() => {
    const day = 1
    const date = new Date(year, month, day)
    const addDate = date.getDay() > dateOn[0] ? 7 - date.getDay() + dateOn[0] : dateOn[0] - date.getDay()
    
    setFirstDate(new Date(year, month, day + addDate))
  }, [month, year])
  
  return firstDate
}

export default useDateFirstMonthReunion
