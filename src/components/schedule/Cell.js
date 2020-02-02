import React, {/* useState*/ } from 'react'
import { Select } from 'semantic-ui-react'


const proclaimers = [
  { key: 1, text: 'Bob', value: 1 },
  { key: 2, text: 'Pob', value: 2 },
  { key: 3, text: 'Vob', value: 3 },
  { key: 4, text: 'Lob', value: 4 },
  { key: 5, text: 'Mob', value: 5 },
  { key: 6, text: 'Fob', value: 6 },
  { key: 7, text: 'Rob', value: 7 },
  { key: 8, text: 'Wob', value: 8 },
  { key: 9, text: 'Zob', value: 9 },
]


/*const handleChange = (e,setName) => {

  //console.log(e.target.textContent)
  setName(e.target.textContent)
}*/

const Cell = () => {
  //const [name, setName] = useState('')

  return (
    <Select style={{minWidth: '12em'}}
      //onChange={(e) => setName(e.target.textContent)}//handleChange(e,setName)}
      placeholder={proclaimers[0].text}
      options={proclaimers}
      selection
    />
  )
}

export default Cell
