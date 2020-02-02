import { useEffect, useState } from 'react'
import _ from 'lodash'
import useFetchProclaimers from '../hooks/useFetchProclaimers'
//import Store from '../context/Store'

const useProclaimerList = (listId) => {
  const [ proclaimerList, setProclaimerList ] = useState([])
  const proclaimers = useFetchProclaimers()
  //const [ {proclaimers} ] = useContext(Store)
  //console.log(proclaimers)
  useEffect(() => {
    const newProclaimers = proclaimers.filter(proclaimer => 
      _.includes(proclaimer.lists, listId)
    )
    
    setProclaimerList(newProclaimers)
    
  }, [listId, proclaimers])

  return proclaimerList
}

export default useProclaimerList
