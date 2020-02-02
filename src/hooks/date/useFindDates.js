import { useState, useEffect } from 'react'
import { dateOn } from '../../data'
//import AfficherDate from '../../AfficherDate'
let counter = 0;

const useFindDates = (month=null, year=null, day = 1) => {
  const [dates, setDates] = useState([])
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    year = year || new Date().getFullYear()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    month = month || new Date().getMonth()
    const endDate = new Date(year, month+1, 0)
    const dateReunions = dateOn
    const newDates = []

    for (let addDay = 0; addDay < endDate.getDate(); addDay++) {
      const currentDate = new Date(year, month, day + addDay)
      const newDateReunons = dateReunions.filter(dateReunion => dateReunion === currentDate.getDay()).length ? currentDate : null
      
      if (newDateReunons) {
        newDates.push(newDateReunons)
      }
    }
    console.log(`useFindDates ${++counter}`)
    setDates(newDates)
  }, [year, month, day])
  
  return dates
}

export default useFindDates
