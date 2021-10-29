// 1 ESERCIZIO
console.log('Esercizio 1:');
var n = 100;
 console.log('variabile uguale a '+n);
for(i=0;i<10;i++){ 
    n -= 3 
    console.log(i+1 +' iterazione: '+n);
}

console.log('\n')

// 2 ESERCIZIO
console.log('Esercizio 2:');
var stringa1 = "Leone";
var stringa2 = "Leotta";

for(var i=0; i<stringa1.length, i<stringa2.length; i++){
    if(stringa1.charAt(i) == stringa2.charAt(i)){
        console.log("Le due lettere sono uguali: "+stringa1.charAt(i)+ " "+stringa2.charAt(i));
}
}
console.log('\n')

//3 ESERCIZIO 
console.log('Esercizio 3:');
var stringa = ' ';
    for(i=0; i<14; i++){
         stringa += (i*3) + ' ';
    }
     console.log(stringa)


console.log('\n');

//4 ESERCIZIO
console.log('Esercizio 4:');
for(i=0; i<40; i+=2){
    console.log(i);
}

console.log('\n');

 //5 ESERCIZIO
console.log('Esercizio 5:\n'+'vedi pagina web');
	 document.write('<table border=1 cellpadding = 10>');
          for (let i=1; i<=10; i++) {
            document.write('<tr>')
             document.write('<th>');
                document.write('Tabellina del '+i)
             document.write('</th>');
            for (let j=0; j<=10; j++) {
              document.write('<td>');
              document.write(i*j);
              document.write('</td>');
            }
            document.write('</tr>');
          }
          document.write('</table>');
 

console.log('\n')

//6 ESERCIZIO
console.log('Esercizio 6:');
var count = 0;
var stringa3 = "Il mare calmo e tranquillo";
var vocali = ["a","e","i","o","u"];
stringa3 = stringa3.toLowerCase();
for(i=0;i<stringa3.length;i++){
    if(vocali.includes(stringa3[i])){
        count +=1;
    }
}
console.log('N. vocali: '+count);


console.log('\n');


/*

7)Data la stringa "Hello World" cercare il carattere più piccolo ed il più grande in ordine alfabetico.

8)Data la stringa "Carrozzella", eliminare tutte le doppie.

9)Calcolare i primi 10 numero della successione di Fibonacci.

10)Calcolare il fattoriale del numero.

11)Stampare le lettere dell’alfabeto.

12)Stampare a video la seguente figura. Ogni riga aggiunte un *:
        *
        ***
		****
		*****
		******
		*******
		********
		*********
		**********
		***********

*/

//7 ESERCIZIO
console.log('Esercizio 7:');
var stringa4 = "Hello World";
stringa4 = stringa4.toLowerCase();

//Funzione max carattere
function maxValore(a, n)
    {
           
        //Inizializzo valore max ad 'A'
        let max = 'A';
       
        //Cerco il numero max
        for (let i = 0; i < n; i++)
            if (a[i].charCodeAt() > max.charCodeAt())
                max = a[i];
       
        //Ritorna l'elemento max
        return max;
    }

       //Funzione min carattere
    function minValore(a, n)
    {
        //Inizializzo valore min a 'z'
        let min = 'z';
       
        //Cerco il numero min
        for (let i = 0; i < n -1; i++)
            if (a[i].charCodeAt() < min.charCodeAt())
                min = a[i];
       
        //Ritorna l'elemento min
        return min;
    }

       
   
var size = stringa4.length;

console.log("Il carattere più grande è: " + maxValore(stringa4,size));
console.log("Il carattere più piccolo è: " + minValore(stringa4,size)+ " (space)")


console.log('\n');

//8 ESERCIZIO
console.log('Esercizio 8:');
var stringa5 = "Carrozzella";
console.log("Stringa originale: "+stringa5)
function removeDuplicateCharacters(string){
 return string
 .split('')
	.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
	})
	.join('');
  
}
console.log("Stringa senza doppie: "+removeDuplicateCharacters(stringa5));

console.log('\n');





//9 ESERCIZIO
console.log('Esercizio 9:');
const fib = (n) => {
    const fibarray = [0,1];

    for(var i=2; i<n;i++){
        fibarray.push(fibarray[i-2]+fibarray[i-1]);
    }
    return fibarray;
}
console.log('I primi 10 numeri della serie di Fibonacci sono: '+fib(10))


console.log('\n')

//10 ESERCIZIO 
console.log('Esercizio 10:');
 function fatt(n)
  { 
    var i,f 
    f=1
    for(i=n;i>1;i--)
    {
       f=f*i
    }
    return f
  }
  console.log('Il fattoriale è: '+fatt(7));
  




console.log('\n')

//11 ESERCIZIO
console.log('Esercizio 11:');
for(i=97,a='';i<123;){
    
    a += String.fromCharCode(i++) + ' ';
}
console.log(a.toUpperCase())
console.log('\n')

//12 ESERCIZIO
console.log('Esercizio 12:'); 
var stringa = ' ';
for(i=0;i<15;i++){
    stringa += (' * ')+ ' ';
    console.log(stringa);
}