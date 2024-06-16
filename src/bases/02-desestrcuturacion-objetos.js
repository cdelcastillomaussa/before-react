//desestructuracion
//Asignacion Desesttructurante
const person = {
  firstName: "Carlos",
  age: 24,
  password: "jupiter007",
};

const setContext = ({
  firstName,
  age,
  lastName = "Del Castillo",
  password,
}) => {
  return {
    clave: password,
    anios: age,
    fullName: firstName + " " + lastName,
    location: {
      latitude: 8.997665,
      longitude: 67.99821,
    },
  };
};
const {
  clave,
  anios,
  fullName,
  location: { latitude, longitude },
} = setContext(person);
console.log(clave, anios, fullName);
console.log(latitude, longitude);
