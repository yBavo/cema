import { useEffect, useState, useContext } from 'react'
import _ from 'lodash'
import useFindDates from './date/useFindDates'
import { dateOn, nPersLists, indexLastPers } from '../data'
import useDateFirstMonthReunion from './date/useDateFirstMonthReunion'
import Store from '../context/Store'
import { ADD_SCHEDULE } from '../actions'
//import AfficherDate from '../AfficherDate'
//import useProclaimerList from './useProclaimerList'
//import AfficherDate from '../AfficherDate'
//let counter = 0

const useBuildSchedule = (month=new Date().getMonth(), year=new Date().getFullYear()) => {
  const [schedule, setSchedule] = useState([])
  const dates = useFindDates(month, year)
  const firstDateReunion = useDateFirstMonthReunion()
  const [{lists}] = useContext(Store)
  const [{proclaimers}] = useContext(Store)
  const [,dispatch] = useContext(Store)
  //const [{indexLastPers}] = useContext(Store)
  //const list1 = useProclaimerList('no5da8PJONWAo5P9pbYy')

  useEffect(() => {
    // S'il y a une date, une firstDateReunion, une liste et une liste de proclamateur...
    if(dates.length && firstDateReunion && lists.length && proclaimers.length){
      const date1 = new Date(dates[0])
      
      /* 
        Controle, si besoin,
        pour trouver la premiere reunion de la semaine
      */
      // Si jour de la semaine est different de la premiere journee de semaine 
      if(date1.getDay() !== dateOn[0]){
        console.log(`${date1.getDay()} !=== ${dateOn[0]}`)
        console.log('Faut trouver la premiere reunion de la semaine!!!')
      }
      
      let lastPersIndex = indexLastPers
      
      // La nouvelle schedule
      const newSchedule = dates.map(date => {       // Pour toutes les dates
        const day = date.getDay()                     // Jour de la semaine "0 .. 6"
        let newList = {}
        
        /* Pour toute les listes */
        _.forEach(lists, list => {
          // La liste de personne dans cette liste
          const newNamesList = proclaimers.filter(proclaimer => (
            _.find(proclaimer.lists, pList => pList === list.id) === list.id
          ))
          // Nombre de personnes pour la liste
          const nPers = nPersLists[`day${day}`][list.id]
          let nPersCounter = 0                            // Conteur de personne
          
          const newName = []

          // Tant que le nombre de personne n'est pas atteind
          while (nPersCounter < nPers ) {
            newName.push(newNamesList[lastPersIndex[list.id]].name)       // 6334324: ['Hal1', 'Hal2']
            lastPersIndex[list.id] = lastPersIndex[list.id] + 1 >= newNamesList.length ? 0 : lastPersIndex[list.id] + 1
            nPersCounter++
          }
          
          // Save
          newList = {
            ...newList,
            [list.id]: newName
          }
        })

        return {
          Visible: true,
          MergeWeek: false,
          Title: '',
          ...newList,
          date
        }        
      })

      setSchedule(newSchedule)

      dispatch({
        type: ADD_SCHEDULE,
        schedule: newSchedule
      })
    }
  }, [dates, firstDateReunion, lists, proclaimers, dispatch])
  //console.log('USE_BUILD_SCHEDULE',schedule)
  return schedule
}

export default useBuildSchedule