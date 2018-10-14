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
        if (a[i] !== null && a[i] !== false)
        {
            b.push(a[i]);
        }
        console.log(b);
    }
    return b;
}

var reverseWordsInArray = function (array) {
    let b = [];
    let c = [];
    for (i = 0; i < array.length; i++) {
        b = array[i];
        let a = "";
        /* on declare a ici pour le reset à chaque 
         * fois qu'un string a ete traité */
        for (j = b.length - 1; j >= 0; j--) {
            /*Ne pas oublier le -1 sur .length
             * lorsqu'on utilise le decremental car
             * sinon va mettre un undefined value*/
           a += b[j];
        }
        /*console.log(a);*/
        c.push(a);
        /*On met le string traité dans le tab après la boucle 2 */
    }
    return c;
}

var everyPossiblePair = function (array) {
    
    let b = [];
    let c = [];
    for (i = array.length -1; i >= 1; i--) {    
        for (j = 0; j < array.length -1; j++) {
            let a = [];
            if (array[j] !== array[i] ) {
                a.push(array[i], array[j]);
                b.push(a);
            }
        }
        c = b.map(x=> x.sort()); /*trie chaque bloc d'element par alpha. */
    }
    return c;
}

var allElementsExceptFirstThree = function (array) {
    
    return array.slice(3,array.length);
}
/*On coupe le tab en ne prenant qu'après le 3eme element */

var addElementToBeginning = function (array, element) {
    let a = array;
    a.unshift(element);
    return a;
}

var sortByLastLetter = function (array) {

    return array.sort((a,b)=> a.charCodeAt(a.length-1) - b.charCodeAt(b.length -1));
}
/* .sort(fct) pour travailler chaque mot dans le tab
*la fct va trier selon le charCodeAt(num)
*a - b : tri ordre apha; b - a : tri ordre apha inversé*/

var getFirstHalf = function (string) {
    /* substring pour decouper la string aux 2 points donnés */
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
        
        if (a[i].split('').reverse().join('')=== a[i]) {
            count++;
        }
    }
    return count ;
}

/*un palindrome c'est un mot qui peut se lire dans 2 sens
*donc le but c'est d'inverser chaque mot et de le comparer
* avec lui-meme */
/* .split('') pour decouper chaque car. du string et les mettre en tab
* .reverse() pour inverser ce tab
* .join('') pour réunir les caracteres sans rien entre */

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
     *2/ sort pour trier et pour comparer av fct flechée
     *3/ renvoyer la val [0]*/
    return array.filter(e => typeof e === 'string').sort((a, b) => a.length - b.length)[0];
}

var longestWord = function (array) {

    return array.filter(e => typeof e === 'string').sort((a, b) => b.length - a.length)[0];
}
/*meme chose que pour le precedent, sauf qu'on a
 *trié à l'envers, et renvoyé la val [0] du tab*/

var sumNumbers = function (array) {
    
    return array.reduce(function(a, b){return a+b }, 0);
}

/* reduce permet d'agir sur toutes les valeurs d'un tab
     *et d'en renvoyer une seule valeur, 
     *le "0" c'est la valeur par defaut, si on ne le met pas,
     *on a une erreur/
     /version fléchée => array.reduce((a,b)=> a+b, 0 )*/

var repeatElements = function (array) {
    let a = array;
    let b = array;
    let c = a.concat(b);
    return c;
}
/*on concatène valeurs de "a" et "b" dans un nouv. tab. "c" */


var stringToNumber = function (string) {
    return parseInt(string);
}

var calculateAverage = function (array) {
    return array.reduce((a, b)=> (a + b))/array.length;
}

var getElementsUntilGreaterThanFive = function (array) {
    return array.slice(0, 6);
}

var convertArrayToObject = function (array) {
    /*on peut convertir tab vers obj ainsi : {...array} 
     *ça numérote les elements...
     *mais ce n'est pas ce qui est demandé ici/
      */
    return array;
}

var getAllLetters = function (array) {
    let a = array;
    let b = [];
    let c = [];
    for (i = 0; i < a.length; i++) {
        c = a[i].split("");
        b = b.concat(c);
    }
    b.sort();
    return b;
}

var swapKeysAndValues = function (object) {
    return 'Write your method here';
}

var sumKeysAndValues = function (object) {
    return 'Write your method here';
}

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
/*ici on prend, tant que les caract. sont minuscules 
 * et/ou égale à espace blanc */

var roundUp = function (number) {
    return Math.ceil(number);
}

var formatDateNicely = function (date) {
    
    return `${date.toLocaleDateString()}`;
}

/*INFOS. methodes pour date :
var date = new Date();
------------------------
date.toLocaleString();       // -> "2/1/2013 7:37:08 AM"
date.toLocaleDateString();   // -> "2/1/2013"
date.toLocaleTimeString();  // -> "7:38:05 AM"
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
 * .subtring() pour couper la chaine aux valeurs données
 * .lastIndexOf() va renvoyer la position de la derniere occurence 
 * du caractere donnée, ds le cas ici, "."  ds la chaine ou tab*/


var titleize = function (string) {
    let a = string.split("");
    let b = a.filter(x => x.charAt[1].toUpperCase)

    return b;
}

var checkForSpecialCharacters = function (string) {
    let a = 'abcdefghijklmnopqrstuvwxyz';
    let b = a.toUpperCase();
    let c = '0123456789';
    console.log(a, b, c);
    let checkSp;
    if (string.indexOf(a) > -1) {
        console.log("abba");
        checkSp = true;
    } else {
        checkSp = false;
    }
    return checkSp;
}

var squareRoot = function (number) {
    return number ** (1/2) ;
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
    return string;
}

var convertToCelsius = function (number) {
    return Math.round((number-32)*(5/9));
}

var letterPosition = function (array) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    return array.map(num => alphabet.indexOf(num.toLowerCase())+1);
}

/*indexOf(num.toLowerCase()) va renvoyer la valeur num de l'index dans
le string de la var "alphabet" */