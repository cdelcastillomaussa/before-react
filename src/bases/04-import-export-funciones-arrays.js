import heroes, { owners } from "../data/heroes";
console.log(heroes);
console.log(owners);

const getHeroById = (id) => {
  return heroes.find((element) => element.id === id);
};
console.log(getHeroById(2));

const getHeroesByOwner = (owner) => {
  return heroes.filter((item) => item.owner === owner);
};

console.log(getHeroesByOwner("Marvel"));
