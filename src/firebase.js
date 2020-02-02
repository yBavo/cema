import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB0rJuGLXLdEgg8PxGl_Y6QH1StTYAAzWU",
  authDomain: "cema-list.firebaseapp.com",
  databaseURL: "https://cema-list.firebaseio.com",
  projectId: "cema-list",
  storageBucket: "cema-list.appspot.com",
  messagingSenderId: "440844822233",
  appId: "1:440844822233:web:e822efd8e4859749bd00c8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//const db = firebase.firestore().collection('proclamateurs')

/*firebase
  .firestore()
  .collection('proclamateurs')
  .add({
    name: {
      first:'Antoine',
      last:'Arnault'
    },
    deps: ['Sono'],
    lastDateUsed:{Audio:'', Video:'', Estrade:''},
    restrictions:[]
  })
  db.add({
    name: {
      first:'Benoit',
      last:'Baulieu'
    },
    deps: ['Micro'],
    lastDateUsed:{microGauche:'', microDroite:''},
    restrictions:[]
  })
  db.add({
    name: {
      first:'Carl',
      last:'Côté'
    },
    deps: ['Sono'],
    lastDateUsed:{Audio:'', Video:'', Estrade:''},
    restrictions:[]
  })
  db.add({
    name: {
      first:'David',
      last:'Dovignon'
    },
    deps: ['Micro'],
    lastDateUsed:{microGauche:'', microDroite:''},
    restrictions:[]
  })
  db.add({
    name: {
      first:'Éric',
      last:'Etrier'
    },
    deps: ['accueil'],
    lastDateUsed:{accueil:''},
    restrictions:[]
  })
  db.add({
    name: {
      first:'Frank',
      last:'Fauteux'
    },
    deps: ['Micro'],
    lastDateUsed:{ microGauche:'', microDroite:''},
    restrictions:[]
  })
  db.add({
    name: {
    first:'Gaston',
    last:'Goyette'
  },
  deps: ['Accueil'],
  lastDateUsed:{ Accueil:''},
  restrictions:[]
  })
  db.add({
    name: {
      first:'Gilles',
      last:'Gaudreau'
    },
    deps: ['Micro'],
    lastDateUsed:{microGauche:'', microDroite:''},
    restrictions:[]
  })
  db.add({
    name: {
      first:'Hugo',
      last:'Hertel'
    },
    deps: ['Sono'],
    lastDateUsed:{Audio:'', Video:'', Estrade:''},
    restrictions:[]
  })
  db.add({
    name: {
      first:'Ivon',
      last:'Indiana'
    },
    deps: ['Micro'],
    lastDateUsed:{microGauche:'', microDroite:''},
    restrictions:[]
  })
  db.add({
    name: {
      first:'John',
      last:'Jordan'
    },
    deps: ['accueil'],
    lastDateUsed:{accueil:''},
    restrictions:[]
  })
  db.add({
    name: {
      first:'Kévin',
      last:'Kiwi'
    },
    deps: ['Micro'],
    lastDateUsed:{ microGauche:'', microDroite:''},
    restrictions:[]
  })
  db.add({
    name: {
    first:'Jason',
    last:'Jean'
  },
  deps: ['Accueil'],
  lastDateUsed:{ Accueil:''},
  restrictions:[]
  })
db.add({
  name: {
    first:'Yvan',
    last:'Yvanovich'
  },
  deps: ['Micro'],
  lastDateUsed:{ MicroGauche:'', MicroDroite:''},
  restrictions:[]
})
db.add({
  name: {
    first:'Louis',
    last:'Largo'
  },
  deps: ['Accueil', 'Micro'],
  lastDateUsed:{Accueil:''},
  lists: ['WSa0rfW6qh0Fu1wSpEq3','VBnXOFCW1wtrsvQYuAAJ','y4ume6iq6gIULdEeXtk7'],
  restrictions:[]
})
db.add({
  name: {
    first:'Oscar',
    last:'Odile'
  },
  deps: ['Accueil', 'Micro'],
  lastDateUsed:{Accueil:''},
  lists: ['WSa0rfW6qh0Fu1wSpEq3','VBnXOFCW1wtrsvQYuAAJ','y4ume6iq6gIULdEeXtk7'],
  restrictions:[]
})
db.add({
  name: {
    first:'Stéphan',
    last:'Sovio'
  },
  deps: ['Accueil', 'Micro'],
  lastDateUsed:{Accueil:''},
  lists: ['WSa0rfW6qh0Fu1wSpEq3','VBnXOFCW1wtrsvQYuAAJ','y4ume6iq6gIULdEeXtk7'],
  restrictions:[]
})
db.add({
  name: {
    first:'Will',
    last:'Willow'
  },
  deps: ['Accueil', 'Micro'],
  lastDateUsed:{Accueil:''},
  lists: ['WSa0rfW6qh0Fu1wSpEq3','VBnXOFCW1wtrsvQYuAAJ','y4ume6iq6gIULdEeXtk7'],
  restrictions:[]
})
db.add({
  name: {
    first:'Thierry',
    last:'Tango'
  },
  deps: ['Sono'],
  lastDateUsed:{Audio:'', Video:'', Estrade:''},
  lists: ['no5da8PJONWAo5P9pbYy', 'HdUgv1JxeCFxFDA21XCM', 'J1qhVEyhSxyafoBcIp7l'],
  restrictions:[]
})
db.add({
  name: {
    first:'Luc',
    last:'Ladouceur'
  },
  deps: ['Sono'],
  lastDateUsed:{Audio:'', Video:'', Estrade:''},
  lists: ['no5da8PJONWAo5P9pbYy', 'HdUgv1JxeCFxFDA21XCM', 'J1qhVEyhSxyafoBcIp7l'],
  restrictions:[]
})
db.add({
  name: {
    first:'Zachari',
    last:'Zidane'
  },
  deps: ['Sono'],
  lastDateUsed:{Audio:'', Video:'', Estrade:''},
  lists: ['no5da8PJONWAo5P9pbYy', 'HdUgv1JxeCFxFDA21XCM', 'J1qhVEyhSxyafoBcIp7l'],
  restrictions:[]
})
db.add({
  name: {
    first:'Patrick',
    last:'Poisson'
  },
  deps: ['Sono'],
  lastDateUsed:{Audio:'', Video:'', Estrade:''},
  lists: ['no5da8PJONWAo5P9pbYy', 'HdUgv1JxeCFxFDA21XCM', 'J1qhVEyhSxyafoBcIp7l'],
  restrictions:[]
})
db.add({
  name: {
    first:'Quebec',
    last:'Quirion'
  },
  deps: ['Micro'],
  lastDateUsed:{ MicroGauche:'', MicroDroite:''},
  lists: ['VBnXOFCW1wtrsvQYuAAJ', 'y4ume6iq6gIULdEeXtk7'],
  restrictions:[]
})
db.add({
  name: {
    first:'Sylvain',
    last:'Silvio'
  },
  deps: ['Micro'],
  lastDateUsed:{ MicroGauche:'', MicroDroite:''},
  lists: ['VBnXOFCW1wtrsvQYuAAJ', 'y4ume6iq6gIULdEeXtk7'],
  restrictions:[]
})
db.add({
  name: {
    first:'Rémond',
    last:'Renaud'
  },
  deps: ['Micro'],
  lastDateUsed:{ MicroGauche:'', MicroDroite:''},
  lists: ['VBnXOFCW1wtrsvQYuAAJ', 'y4ume6iq6gIULdEeXtk7'],
  restrictions:[]
})
db.add({
  name: {
    first:'Mathieu',
    last:'Moisant'
  },
  deps: ['Micro'],
  lastDateUsed:{ MicroGauche:'', MicroDroite:''},
  lists: ['VBnXOFCW1wtrsvQYuAAJ', 'y4ume6iq6gIULdEeXtk7'],
  restrictions:[]
})
db.add({
  name: {
    first:'Xavier',
    last:'Xilo'
  },
  deps: ['Micro'],
  lastDateUsed:{ MicroGauche:'', MicroDroite:''},
  lists: ['VBnXOFCW1wtrsvQYuAAJ', 'y4ume6iq6gIULdEeXtk7'],
  restrictions:[]
})
db.add({
  name: {
    first:'Victor',
    last:'Varian'
  },
  deps: ['Micro'],
  lastDateUsed:{ MicroGauche:'', MicroDroite:''},
  lists: ['VBnXOFCW1wtrsvQYuAAJ', 'y4ume6iq6gIULdEeXtk7'],
  restrictions:[]
})
db.add({
  name: {
    first:'Nick',
    last:'Nadeau'
  },
  deps: ['Micro'],
  lastDateUsed:{ MicroGauche:'', MicroDroite:''},
  lists: ['VBnXOFCW1wtrsvQYuAAJ', 'y4ume6iq6gIULdEeXtk7'],
  restrictions:[]
})
db.add({
  name: {
    first:'Ursul',
    last:'Urbain'
  },
  deps: ['Micro'],
  lastDateUsed:{ MicroGauche:'', MicroDroite:''},
  lists: ['VBnXOFCW1wtrsvQYuAAJ', 'y4ume6iq6gIULdEeXtk7'],
  restrictions:[]
})
db.add({
  name: {
    first:'Milou',
    last:'Maheux'
  },
  deps: ['Micro'],
  lastDateUsed:{ MicroGauche:'', MicroDroite:''},
  lists: ['VBnXOFCW1wtrsvQYuAAJ', 'y4ume6iq6gIULdEeXtk7'],
  restrictions:[]
})
db.add({
  name: {
    first:'Pascal',
    last:'Pouliot'
  },
  deps: ['Micro'],
  lastDateUsed:{ MicroGauche:'', MicroDroite:''},
  lists: ['VBnXOFCW1wtrsvQYuAAJ', 'y4ume6iq6gIULdEeXtk7'],
  restrictions:[]
})
/*
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
*/

export default firebase
