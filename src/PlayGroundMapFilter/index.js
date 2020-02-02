import React from 'react'

const schedules = [
  {
    no5da8PJONWAo5P9pbYy:[{
      first: "Antoine",
      last: "Arnault"
    }],
    HdUgv1JxeCFxFDA21XCM:[{
      first: "Antoine",
      last: "Arnault"
    }],
    J1qhVEyhSxyafoBcIp7l:[{
      first: "Antoine",
      last: "Arnault"
    }],
    VBnXOFCW1wtrsvQYuAAJ:[{
      first: "Benoit",
      last: "Baulieu"
    }],
    y4ume6iq6gIULdEeXtk7:[{
      first: "Benoit",
      last: "Baulieu"
    }],
    WSa0rfW6qh0Fu1wSpEq3:[{
      first: "Éric",
      last: "Etrier"
    },{
      first: "Gaston",
      last: "Goyette"
    }],
    date: 'Mon Dec 02 2019'
  },{
    no5da8PJONWAo5P9pbYy:[{
      first: "Carl",
      last: "Côté"
    }],
    HdUgv1JxeCFxFDA21XCM:[{
      first: "Carl",
      last: "Côté"
    }],
    J1qhVEyhSxyafoBcIp7l:[{
      first: "Carl",
      last: "Côté"
    }],
    VBnXOFCW1wtrsvQYuAAJ:[{
      first: "David",
      last: "Dovignon"
    },{
      first: "Éric",
      last: "Etrier"
    }],
    y4ume6iq6gIULdEeXtk7:[{
      first: "David",
      last: "Dovignon"
    },{
      first: "Éric",
      last: "Etrier"
    }],
    WSa0rfW6qh0Fu1wSpEq3:[{
      first: "Jason",
      last: "Jean"
    },{
      first: "John",
      last: "Jordan"
    }],
    date: 'Sat Dec 07 2019'
  },{
    no5da8PJONWAo5P9pbYy:[{
      first: "Patrick",
      last: "Poisson"
    }],
    HdUgv1JxeCFxFDA21XCM:[{
      first: "Patrick",
      last: "Poisson"
    }],
    J1qhVEyhSxyafoBcIp7l:[{
      first: "Patrick",
      last: "Poisson"
    }],
    VBnXOFCW1wtrsvQYuAAJ:[{
      first: "Ivon",
      last: "Indiana"
    }],
    y4ume6iq6gIULdEeXtk7:[{
      first: "Ivon",
      last: "Indiana"
    }],
    WSa0rfW6qh0Fu1wSpEq3:[{
      first: "Éric",
      last: "Etrier"
    },{
      first: "Gaston",
      last: "Goyette"
    }],
    date: 'Mon Dec 16 2019'
  }
]
const lists = ['no5da8PJONWAo5P9pbYy', 'HdUgv1JxeCFxFDA21XCM', 'J1qhVEyhSxyafoBcIp7l', 'VBnXOFCW1wtrsvQYuAAJ', 'y4ume6iq6gIULdEeXtk7', 'WSa0rfW6qh0Fu1wSpEq3']
const date = schedules.map(day => (
  <div key={day.date} style={{border: '2px solid black'}}>
    {day.date}
  </div>
))

const list = 'y4ume6iq6gIULdEeXtk7'
/*********************************************/
const schedule = schedules.map(day => (
  day[list]
))
/*********************************************/

const schedule2 = lists.map(list => console.log(list))

//console.log(schedule)

const index = () => {
  const list = schedule.map(day => (
    day.map(p => (
      <div key={day} style={{border: '2px solid black'}}>
        {p.last} {p.first}
      </div>
    ))
  ))

  return (
    <div>
      <h1>PlayGround MAP FILTER</h1>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div>{date}</div>
        <div>{list}</div>
      </div>
    </div>
    
  )
}

export default index
