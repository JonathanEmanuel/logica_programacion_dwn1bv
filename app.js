const pre = document.querySelector('pre');
const ul = document.querySelector('ul');

/* let nombre = 'Juan';
let apellido = 'Ruiz';
let edad = 23;
let soltero = true;
let lenguejes = ['HTML', 'CSS', 'JavaScript'];
 */
//                0         1         2         3         4
let = estudiantes = ['Sofia', 'Nataly', 'Ulises', 'Franco', 'Gabriel'];

// Agrego un elemnto al array
estudiantes[5] = 'Lucas';

// Modifico un elemento del array
estudiantes[1] = 'Miike';
estudiantes.push('Mailen');
estudiantes.push('Emanuel');

console.log(estudiantes);

for(let i=0; i< estudiantes.length; i++){
    ul.innerHTML += '<li>' + estudiantes[i] + '</li>';
}

/* let i = 0;
let n = estudiantes.length;
console.log('Longitud del array ', n);
while( i < n){
    ul.innerHTML += '<li>' + estudiantes[i] + '</li>';
    i++;
}

 */

//pre.innerText = estudiantes;

