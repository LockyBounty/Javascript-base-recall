var selectElementsStartingWithA = function (array) {
    let a = array;
    let b = [];
    for (i = 0; i < array.length; i++) {
        console.log(a[i].charAt(0));
        if (a[i].charAt(0) === 'a') {

            b.push(a[i]);
        }
    }
    return b;
}
/* charAt(0) pour verif le premier caractere de la chaine */

var selectElementsStartingWithVowel = function (array) {
    let a = array;
    let b = [];
    for (i = 0; i < array.length; i++) {
        if (a[i].charAt(0).match(/[aeiou]/gi)) {

            b.push(a[i]);
        }
    }
    return b;
}
/* .match(/[aeiou]/gi) pour verif si c'est une voyelle, 
 *sans tenir compte de la casse */

var removeNullElements = function (array) {
    let a = array;
    let b = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] !== null) {
            b.push(a[i]);
        }
    }
    return b;
}

var removeNullAndFalseElements = function (array) {
    let a = array;
    let b = [];

    for (i = 0; i < a.length; i++) {
        if (a[i] !== null && a[i] !== false) {
            b.push(a[i]);
        }
        /*console.log(b);*/
    }
    return b;
}

var reverseWordsInArray = function (array) {
    let b = [];
    let c = [];
    for (i = 0; i < array.length; i++) {
        b = array[i];
        let a = "";
        /* on declare a ici pour le reset a chaque 
         * fois qu'un string a ete traite */
        for (j = b.length - 1; j >= 0; j--) {
            /*Ne pas oublier le -1 sur .length
             * lorsqu'on utilise le decremental car
             * sinon va mettre un undefined value*/
            a += b[j];
        }
        /*console.log(a);*/
        c.push(a);
        /*On met le string traite dans le tab apres la boucle 2 */
    }
    return c;
}

var everyPossiblePair = function (array) {

    let b = [];
    let c = [];
    for (i = array.length - 1; i >= 1; i--) {
        for (j = 0; j < array.length - 1; j++) {
            let a = [];
            if (array[j] !== array[i]) {
                a.push(array[i], array[j]);
                b.push(a);
            }
        }
        c = b.map(x => x.sort()); /*trie chaque bloc d'element par alpha. */
    }
    return c;
}

var allElementsExceptFirstThree = function (array) {

    return array.slice(3, array.length);
}
/*On coupe le tab en ne prenant qu'apr�s le 3eme element */

var addElementToBeginning = function (array, element) {
    let a = array;
    a.unshift(element);
    return a;
}

var sortByLastLetter = function (array) {

    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}
/* .sort(fct) pour travailler chaque mot dans le tab
 *la fct va trier selon le charCodeAt(num)
 *a - b : tri ordre apha; b - a : tri ordre apha inverse*/

var getFirstHalf = function (string) {
    /* substring pour decouper la string aux 2 points donnes */
    return string.substring(0, Math.round(string.length / 2));
}

var makeNegative = function (number) {
    /* -Math.abs() met la valeur absolue en negatif */
    return -Math.abs(number);
}

var numberOfPalindromes = function (array) {

    let a = array;
    let count = 0;
    for (i = 0; i < a.length; i++) {

        if (a[i].split('').reverse().join('') === a[i]) {
            count++;
        }
    }
    return count;
}

/*un palindrome c'est un mot qui peut se lire dans 2 sens
 *donc le but c'est d'inverser chaque mot et de le comparer
 * avec lui-meme */
/* .split('') pour decouper chaque car. du string et les mettre en tab
 * .reverse() pour inverser ce tab
 * .join('') pour reunir les caracteres sans rien entre */

var shortestWord = function (array) {
    /*<v1>*/
    /*let a = array;
    let b = "";
    let c = [];
    let d = "";
    for (i = 0; i < a.length ; i++) {
        b = a[i];
        for (j = a.length-1; j >= 0; j--) {
            if (a[j].length < b.length) {
                c.splice(0,1, a[j]);
                //console.log(c);/
            }
            d = c[0];
        }
    }*/

    /*<v2> en une seule ligne: 1/filter pour verif si string
     *2/ sort pour trier et pour comparer av fct flech�e
     *3/ renvoyer la val [0]*/
    return array.filter(e => typeof e === 'string').sort((a, b) => a.length - b.length)[0];
}

var longestWord = function (array) {

    return array.filter(e => typeof e === 'string').sort((a, b) => b.length - a.length)[0];
}
/*meme chose que pour le precedent, sauf qu'on a
 *trie a l'envers, et renvoye la val [0] du tab*/

var sumNumbers = function (array) {

    return array.reduce(function (a, b) {
        return a + b
    }, 0);
}

/* reduce permet d'agir sur toutes les valeurs d'un tab
     *et d'en renvoyer une seule valeur, 
     *le "0" de fin c'est la valeur par defaut, si on ne le met pas,
     *on a une erreur/
     /version flechee => array.reduce((a,b)=> a+b, 0 )*/

var repeatElements = function (array) {
    let a = array;
    let b = array;
    let c = a.concat(b);
    return c;
}
/*on concatene valeurs de "a" et "b" dans un nouv. tab. "c" */


var stringToNumber = function (string) {
    return parseInt(string);
}

var calculateAverage = function (array) {
    return array.reduce((a, b) => (a + b)) / array.length;
}

var getElementsUntilGreaterThanFive = function (array) {
    return array.slice(0, 6);
}

var convertArrayToObject = function (array) {
    /*on peut convertir tab vers obj ainsi : {...array} 
     *ca numerote les elements...
     *mais ce n'est pas ce qui est demande ici/
     */

    let objetArray = {};

    for (i = 0; i < array.length; i += 2) {
        /* on jump de deux places pour ne pas superposer les valeurs de l'array */
        objetArray[array[i]] = array[i + 1];
        /*On attribue a la key (qui a recu la valeur de l'array[i]) sa value qui est array +1  */
        console.log(objetArray)
    }
    return objetArray;
}

var getAllLetters = function (array) {
    array = array.join("").split("").sort();
    let myObj = new Set(array);
    array = Array.from(myObj);

    return array;
}

var swapKeysAndValues = function (object) {
    let swapObj = {};

    Object.keys(object).forEach(keyLocky =>
        swapObj[object[keyLocky]] = keyLocky
    );
    // console.log(object);
    // console.log(swapObj);

    return swapObj;
}
/*Object.keys(...) met ttes les keys dans un array,
 *Object.values(...) met ttes les valeurs dans un array, 
 * On travaille toutes les keys de object avec .forEach(), 
 * on pourrait aussi utiliser à la place de forEach: for(let key in object){...}
 * */

var sumKeysAndValues = function (object) {
    let sumcles = 0;
    let sumvaleurs = 0;
    let concatenation = [];
    sumcles = Object.keys(object).map(x => parseInt(x));
    sumvaleurs = Object.values(object).map(x => parseInt(x));;
    concatenation = sumcles.concat(sumvaleurs);
    let sum = concatenation.reduce((a, b) => a + b);

    // console.log(Object.keys(object));
    // console.log(sumcles);
    // console.log(sumvaleurs);
    // console.log(sum);
    return sum;
}
/*1/ On convertit en numerique
  2/ On concatene les deux parties
  3/ On additionne ttes les valeurs de l'array cree 
  */

var removeCapitals = function (string) {
    let a = string.split("");
    let b = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] === a[i].toLowerCase() || a[i] === "") {
            b += a[i];
        }
    }
    return b;
}
/*ici on prend tant que les caract. sont minuscules 
 * et/ou egale a espace blanc */

var roundUp = function (number) {
    return Math.ceil(number);
}

var formatDateNicely = function (date) {

    return `${date.toLocaleDateString('fr-FR')}`;
}

/*INFOS. methodes pour date :
var date = new Date();
------------------------
date.toLocaleString();       // -> "2/1/2013 7:37:08 AM" Selon ou on est, sinon preciser
date.toLocaleDateString();   // -> "2/1/2013" Selon ou on est
date.toLocaleTimeString();  // -> "7:38:05 AM" Selon ou on est
date.getFullYear() - Returns the 4-digit year
date.getMonth() - Returns a zero-based integer (0-11) representing the month of the year.
date.getDate() - Returns the day of the month (1-31).
date.getDay() - Returns the day of the week (0-6). 0 is Sunday, 6 is Saturday.
date.getHours() - Returns the hour of the day (0-23).
date.getMinutes() - Returns the minute (0-59).
date.getSeconds() - Returns the second (0-59).
date.getMilliseconds() - Returns the milliseconds (0-999).
date.getTimezoneOffset() - Returns the number of minutes between the machine local time and UTC.
*/



var getDomainName = function (string) {
    let a = string.replace(/.*@/gi, "");
    let b = a.substring(0, a.lastIndexOf("."));

    return b;
}

/*remplace par "" tout ce qu'il y a avant "@", "@" compris
 * .subtring() pour couper la chaine aux valeurs donnees
 * .lastIndexOf() va renvoyer la position de la derniere occurence 
 * du caractere donnee, ds le cas ici, "."  ds la chaine ou tab*/


var titleize = function (string) {
    /*let a = string.split(" ");
    let d;
    let regx = /\b\w+/gm;
    // console.log(a);

    let b = a.map(function (x) {
        if (x.length > 3 ) {
            return (x.charAt(0).toUpperCase() + x.substring(1, x.length))
        } else {
            return (x)
        }
    });
    let c = b.join(' ');*/

    let regx = /^(?=the)\w+/gim;
    let c = string;
    console.log(c.match(regx));
    
    return c;
}
/*Attention a bien mettre l'espace entre quotes, detail qui peut jouer des tours*/

var checkForSpecialCharacters = function (string) {
    let a = string;
    let specChar = /[!@#$%^&*(),.?":{}|<>]/;
    //regex des caracteres speciaux
    let result = specChar.test(a);
    //console.log(result);
    return result;
}

var squareRoot = function (number) {
    return number ** (1 / 2);
}

var factorial = function (number) {
    let a = 1;
    if (number === 0) {
        a = 1;
    } else {
        for (i = number; i > 0; i--) {
            a = a * i;
        }
    }
    return a;
}

var findAnagrams = function (string) {
    /*let a = string.split("");
    let b = [];
    for (i = 0; i < a.length; i++) {
        for (j = a.length - 1; i >= 0; i--) {
            if (i !== j) {
                b = a[i] + a[j];
                
            }
            console.log(b);
        }
    }*/
    /*boucle infinie*/
    return b;
}

var convertToCelsius = function (number) {
    return Math.round((number - 32) * (5 / 9));
}

var letterPosition = function (array) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    return array.map(num => alphabet.indexOf(num.toLowerCase()) + 1);
}

/*indexOf(num.toLowerCase()) va renvoyer la valeur num de l'index dans
le string de la var "alphabet" */