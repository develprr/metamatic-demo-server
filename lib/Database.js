const fs = require("fs");

const Database = {};

Database.loadJson = (name) => {
  const file = "json/" + name + ".json";
  const path = __dirname + "/../" + file;
  return JSON.parse(fs.readFileSync(path, "utf8"));
}

Database.getCars = () => Database.loadJson("car-app/cars");

Database.getCarsMap = () => Database.getCars().reduce((map, car) => {
  map[car.id] = car;
return map;
}, {});

Database.getCarById = (id) => Database.getCarsMap()[id];

module.exports = Database;
