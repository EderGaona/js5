console.log(document.title);



//1 Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const ej1 = document.getElementById('gen-1');
ej1.innerText = 'Generasión 1 Pokimon'

//2 Cambia el color de fondo de la primera generación de Pokimon.


const ej2 = document.querySelector('.infocard-list.infocard-list-pkmn-lg');
ej2.style.background = '#ccc';
//console.log(ej2)

//3 Imprime por consola la URL de la página.

let ej3;

ej3= document.URL

console.log(ej3);

//4 Imprime por consola el dominio de la página.

let ej4 ;

ej4= document.domain;
console.log("hola", ej4);


//5 Imprime por consola todos los nodos de imagen.

const ej5= document.querySelectorAll('.infocard-lg-img');

console.log(ej5);

//6 Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

const ej6= document.querySelectorAll('.img-fixed.img-sprite');


for (let i = 0; i < ej6.length; i++) {
    ej6[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}

//7 Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

const ej7= document.querySelectorAll('.itype.flying');

console.log(ej7)

const ej72= document.querySelectorAll('.infocard-lg-data.text-muted');
//ej7.infocard-lg-data.text-muted.style.background = '#111';





//infocard-lg-data text-muted





