import heroes, { owners } from "../data/heroes";
// console.log(owners);
// console.log(heroes);

export const getHeroById = (id) => {
  return heroes.find((element) => element.id === id);
};
// console.log(getHeroById(2));

const getHeroesByOwner = (owner) => {
  return heroes.filter((item) => item.owner === owner);
};

// console.log(getHeroesByOwner("Marvel"));
