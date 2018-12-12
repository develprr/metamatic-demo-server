const Database = {};

Database.getCars = () => [
  {
    'id': 1,
    'model': 'Audi',
    'speed': 170,
    'color': 'black',
    'price': 28500,
    'marketShare': []
  },
  {
    'id': 2,
    'model': 'Porsche',
    'speed': 250,
    'color': 'white',
    'price': 61000,
    'marketShare': []
  },
  {
    'id': 3,
    'model': 'Tesla',
    'speed': 280,
    'color': 'green',
    'price': 79000,
    'marketShare': []
  },
  {
    'id': 4,
    'model': 'Ferrari',
    'speed': 320,
    'color': 'red',
    'price': 344000,
    'marketShare': []
  },
  {
    'id': 5,
    'model': 'Lamborghini',
    'speed': 334,
    'color': 'yellow',
    'price': 521000,
    'marketShare': []
  },
  {
    'id': 6,
    'model': 'Bugatti',
    'speed': 420,
    'color': 'blue',
    'price': 1591000,
    'marketShare': []
  }
];

Database.getCarsMap = () => Database.getCars().reduce((map, car) => {
  map[car.id] = car;
return map;
}, {});

Database.getCarById = (id) => Database.getCarsMap()[id];

module.exports = Database;
