/**
 * TODO: Aca soolo vemos los tipos de datos en TS.
 * * Tipos de datos basicos o primitivos:
 * * number
 * * string
 * * boolean
 * * null
 * * undefined
 * ! Tipos no primitivos:
 * ! object
 * ! array
 * ! tuple (tuplas)
 * ! any --> permite cualquier tipo de dato
 * ! enum
 * ! union --> similar al any pero mas acotado
 * ! literal
 */


// * THIS IS A NUMBER
let myNumber: number;
myNumber = 123;
//console.log(myNumber);

//* THIS IS A STRING
let myString: string;
myString = "Hola bebe";
//console.log(string);

//* THIS IS A BOOLEAN
let myBoolean: boolean;
myBoolean = myNumber === 123 ? true : false;
//console.log(boolean);

//! THIS IS AN OBJECT
let house: {
  street: string;
  streetCode: number;
  watchmen: boolean;
  family: {
    father: { name: string; age: number; work: boolean };
    mother: { name: string; age: number; work: boolean };
    sister: { name: string; age: number; work: boolean };
    girlfriend: { name: string; age: number; work: boolean };
    goneli: { name: string; age: number; work: boolean };
    maki: { name: string; age: number; work: boolean };
  };
} = {
  street: "av cordoba",
  streetCode: 3949,
  watchmen: false,
  family: {
    father: {
      name: "Williams",
      age: 60,
      work: true,
    },
    mother: {
      name: "Nepmile",
      age: 55,
      work: true,
    },
    sister: {
      name: "Andrea",
      age: 20,
      work: true,
    },
    girlfriend: {
      name: "Nay",
      age: 22,
      work: true,
    },
    goneli: {
      name: "Eliecer",
      age: 24,
      work: true,
    },
    maki: {
      name: "Maki",
      age: 2,
      work: false,
    },
  },
};
//console.log(house);

//! THIS IS ARRAY

//TODO: THIS IS AN ARRAY OF NUMBERS
let numbers: number[];
numbers = [1, 2, 3, 4];
//console.log(numbers);

//TODO: THIS IS AN ARRAY OF STRINGS
let strings: string[];
strings = ["a", "b", "c", "d", "e"];
//console.log(strings);

//TODO: THIS IS AN ARRAY OF ANY TYPES
let mix: any[];
mix = ["a", "b", 1, 2, true];
//console.log(mix);

//! THIS IS A TUPLA
let chair: [string, string, number] = ["oficina", "rojo", 8];
chair[2] = 4;
//console.log(chair);

//? Tambien se puede hacer de la siguiente manera para que sea mas dinamico

type chairs = [string, string, number];

let chair1: chairs = ["plaza", "verde", 2];
let chair2: chairs = ["casa", "azul", 3];
let chair3: chairs = ["playa", "morado", 4];

//console.log(chair1);
//console.log(chair2);
//console.log(chair3);

//! THIS IS AN ENUM
enum monedas {
  euro,
  dolar,
  yen,
  pesos,
}
enum animal {
  mamifero,
  anfibio,
  reptil,
  ave,
  pez,
}

let cat = {
  raza: "comun",
  edad: 2,
  especie: animal.mamifero,
};
//console.log(cat)

//! THIS IS AN UNION
//? Tambien se puede usar este tipo de datos en otros lugares, ejemplo type chairs = [number | boolean];

let numeroOrBoolean: number | boolean;
numeroOrBoolean = true;
numeroOrBoolean = -123123.123123;
//console.log(numeroOrBoolean)

//! THIS IS A LITERAL (se le asigna un tipo de dato, en este caso es tipo gato)
let macosta: "gato";
