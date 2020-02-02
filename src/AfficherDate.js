import { dayStr, monthStr } from './data'

const AfficherDate = (date) => (
  console.log(`${dayStr[date.getDay()].substr(0,3)} ${date.getDate()} ${monthStr[date.getMonth()].substr(0,3)} ${date.getFullYear()}`)
)

export default AfficherDate
