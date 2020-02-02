
export const dateOn = [1, 6]

export const nPersLists = {
  day1: {
    WSa0rfW6qh0Fu1wSpEq3: 2,
    no5da8PJONWAo5P9pbYy: 1,
    J1qhVEyhSxyafoBcIp7l: 1,
    VBnXOFCW1wtrsvQYuAAJ: 1,
    y4ume6iq6gIULdEeXtk7: 1,
    HdUgv1JxeCFxFDA21XCM: 1
  },
  day6: {
    WSa0rfW6qh0Fu1wSpEq3: 2,
    no5da8PJONWAo5P9pbYy: 1,
    J1qhVEyhSxyafoBcIp7l: 1,
    VBnXOFCW1wtrsvQYuAAJ: 2,
    y4ume6iq6gIULdEeXtk7: 2,
    HdUgv1JxeCFxFDA21XCM: 1
  }
}

export const indexLastPers = {
  WSa0rfW6qh0Fu1wSpEq3: 0,
  no5da8PJONWAo5P9pbYy: 0,
  J1qhVEyhSxyafoBcIp7l: 4,
  VBnXOFCW1wtrsvQYuAAJ: 0,
  y4ume6iq6gIULdEeXtk7: 0,
  HdUgv1JxeCFxFDA21XCM: 2
}

export const specialWeek = [
  {
    id: 1,
    title: 'Assemblée Circonscription',
    date: ['9/11/19', '31/03/19'],
    day: [6],
    rules: 'rulesSpecialWeekDefault'
  },
  {
    id: 2,
    title: 'Assemblée Régionale',
    date: ['9/07/19', '10/07/19', '11/07/19'],
    day: [5, 6, 7],
    rules: 'rulesSpecialWeekDefault'
  },
  {
    id: 3,
    title: 'Visite surveillant',
    date: ['9/07/19', '10/07/19', '10 - 14/12/19'],
    day: [2, 6],
    rules: 'rulesSpecialVisite'
  },
  {
    id: 4,
    title: 'Mémorial',
    date: ['19/04/19'],
    day: [],
    rules: 'rulesSpecialWeekDefault'
  }
]

export const rulesSpecialWeekDefault = {
  dateOnWeekend: {
    week: 'nothing',
    weekend:'only special'
  },
  dateOnWeek: {
    week: 'only special',
    weekend: 'as default'
  }
}

export const rulesSpecialVisite = {
  week: {
    Accueil: 2,
    Audio: 1,
    Estrade: 1,
    MicroGauche: 1,
    MicroDroite: 1,
    day: [2],
    Video: 1
  },
  weekend: {
    Accueil: 2,
    Audio: 1,
    Estrade: 1,
    MicroGauche: 1,
    MicroDroite: 1,
    day: [6],
    Video: 1
  }
}

export const restrictions = {
  PabloJustin: {
    date: [],
    dateFrom: ['1/10/19'],
    dateTo: [''],
    day: [[6]],
    quarter: [],
    what: ['no go on day'],
    actionToDo: ['swap']
  },
  PabloJean: {
    date: [],
    dateFrom: ['1/10/19'],
    dateTo: [''],
    day: [],
    quarter: [],
    what: ['remove from list'],
    actionToDo: ['remove'],
    list: ['Estrade']
  },
  PabloSam: {
    date: [],
    dateFrom: ['28/8/19'],
    dateTo: [''],
    day: [1],
    quarter: [],
    what: ['no go on week'],
    actionToDo: ['swap for weekend']
  },
  PabloBob: {
    dateFrom: ['1/9/19'],
    dateTo: ['7/9/19'],
    day: [],
    quarter: [],
    what: ['no go for days'],
    actionToDo: ['on hold']
  },
  PabloBenoit: {
    dateFrom: ['1/9/19'],
    dateTo: [''],
    day: [1],
    quarter: [1],
    what: ['no go on quarter'],
    actionToDo: ['on hold']
  },
}
/*
const schedule2 = [
  {
    date:'2019/10/10',
    Accueil: ['Pablo1', 'Pablo2'],
    Audio: ['Bob1'],
    Estrade: ['Pol1'],
    MergeWeek: false,
    MicroGauche: ['Hal1', 'Hal2'],
    MicroDroite: ['Gal1','Gal2'],
    Title: '',
    Video: ['Rob1'],
    Visible: true,
  }
]

const schedule3 = {
  102019:[
    {
      Date:'2019/10/10',
      Accueil: ['Pablo1', 'Pablo2'],
      Audio: ['Bob1'],
      Estrade: ['Pol1'],
      Micro_Gauche: ['Hal1', 'Hal2'],
      Micro_Droite: ['Gal1','Gal2'],
      Title: '',
      Video: ['Rob1'],
      Visible: true,
    },
    {
      Date:'2019/10/10',
      Accueil: ['Pablo1', 'Pablo2'],
      Audio: ['Bob1'],
      Video: ['Rob1'],
      Estrade: ['Pol1'],
      MicroGauche: ['Hal1', 'Hal2'],
      MicroDroite: ['Gal1','Gal2']
    },
    {
      Date:'2019/10/10',
      Visible: true,
      MergeWeek: false,
      MergeTitle: '',
      4234324: ['Bob1'],
      8965657: ['Rob1'],
      4233924: ['Pol1'],
      6334324: ['Hal1', 'Hal2'],
      1234324: ['Gal1','Gal2'],
      9234324: ['Pablo1', 'Pablo2']
    }
  ]
}
*/
export const firstDayWeek = 1
export const monthStr = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
export const dayStr = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']