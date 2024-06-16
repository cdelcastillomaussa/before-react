const personajes = ["Goku", "Vegito", "Trunks"];

const [, , p3] = personajes;
console.log(p3);

const returnArray = () => {
  return ["ABC", 123];
};
const [letras, numeros] = returnArray();
console.log(letras, numeros);

const setState = (valor) => {
  return [
    valor,
    () => {
      console.log("hello word!");
    },
  ];
};

const [nombre, setNombre] = setState("Gohan");
console.log(nombre);
setNombre();
