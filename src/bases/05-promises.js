import { getHeroById } from "./bases/04-import-export-funciones-arrays";

// const promesa = new Promise((resolve, reject) => {
//  setTimeout( ()=> {
//     const hero = getHeroById(2);
//     //console.log(hero);
//     reject( hero );
//  }, 2000 )
// });
// promesa.then( (hero) =>{
//     console.log('hero promise', hero);
// })
// .catch( err => console.error(err));

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroById(id);
      if (p1) {
        resolve(p1);
      }
      reject("No se pudo encontrar el héroe");
    }, 2000);
  });
};

getHeroByIdAsync(10)
  .then((heroe) => {
    console.log("Hero", heroe);
  })
  .catch((error) => {
    console.error(error);
  });
