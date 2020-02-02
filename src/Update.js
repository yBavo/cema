import React, { useEffect } from 'react'
import useFetchProclaimers from './hooks/useFetchProclaimers'
import firebase from './firebase'
const Update = () => {
  const proclaimers = useFetchProclaimers()
  const l = [
    { 
      Sono: { 
        lists: ['no5da8PJONWAo5P9pbYy', 'HdUgv1JxeCFxFDA21XCM', 'J1qhVEyhSxyafoBcIp7l']
      }
    },
    { Micro: { lists: ['VBnXOFCW1wtrsvQYuAAJ', 'y4ume6iq6gIULdEeXtk7'] }},
    { Accueil: { lists: ['WSa0rfW6qh0Fu1wSpEq3', 'VBnXOFCW1wtrsvQYuAAJ', 'y4ume6iq6gIULdEeXtk7']}}
  ]

  const l2 = [
    {Sono: 'Sonooo'},
    {Micro: 'Microoo'}
  ]

  const l3 = {
    Sono: {
      lists: ['no5da8PJONWAo5P9pbYy', 'HdUgv1JxeCFxFDA21XCM', 'J1qhVEyhSxyafoBcIp7l']
    },
    Micro: { 
      lists: ['VBnXOFCW1wtrsvQYuAAJ', 'y4ume6iq6gIULdEeXtk7']
    },
    Accueil: { 
      lists: ['WSa0rfW6qh0Fu1wSpEq3']
    }
  }
  //const d = 'Sono'
  //console.log(l3[d])

  
  proclaimers.map(pro => 
    pro.deps.map(dep => {
      //console.log(pro.id, pro.name.first, dep)
      
      firebase
        .firestore()
        .collection('proclamateurs')
        .doc(pro.id)
        .update(l3[dep])
      
        
      return null
    })
  )
  
  /*useEffect(() => {
    proclaimers.map(pro => 
      pro.deps.map(dep => {
        console.log(dep)
        if(dep === 'accueil'){
          console.log(pro.id, pro.name.first, dep)
          firebase
          .firestore()
          .collection('proclamateurs')
          .update(pro.id.deps[0],'Accueil')
        }
        
      })
    )

  }, [])*/

  return (
    <div>
      <h1>Update</h1>
      
    </div>
  )
}

export default Update
