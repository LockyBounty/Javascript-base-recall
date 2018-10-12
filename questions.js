var selectElementsStartingWithA = function (array) {
    let a = array;
    let b = [];
    for (i = 0; i < array.length; i++) {
        console.log(a[i].charAt(0));
        if (a[i].charAt(0) === 'a') {
            /* charAt(0) pour verif le premier caractere de la chaine */
            b.push(a[i]);
        }
    }
    return b;
}

var selectElementsStartingWithVowel = function (array) {
    let a = array;
    let b = [];
    for (i = 0; i < array.length; i++) {
        if (a[i].charAt(0).match(/[aeiou]/gi)) {
            /* .match(/[aeiou]/gi) pour verif si c'est une voyelle, 
            sans tenir compte de la case */
            
            b.push(a[i]);
        }
    }
    return b;
}

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
        console.log(a);
        c.push(a);
        /*On met le string traité dans le tab après la boucle 2 */
    }
    return c;
}

var everyPossiblePair = function (array) {
    
    let b = [];
    for (i = array.length -1; i >= 1; i--) {    
        for (j = 0; j < array.length -1; j++) {
            let a = [];
            if (array[j] !== array[i] ) {
                a.push(array[i], array[j]);
                console.log(i, j);
                
                 b.push(a);
            }
        }
    }
    return b;
}

var allElementsExceptFirstThree = function (array) {
    /*On filtre le tab en ne prenant qu'après le 3eme element */
    return array.filter(num => num > 3);
}

var addElementToBeginning = function (array, element) {
    let a = array;
    a.unshift(element);
    return a;
}

var sortByLastLetter = function (array) {
    return 'Write your method here';
}

var getFirstHalf = function (string) {
    return 'Write your method here';
}

var makeNegative = function (number) {
    /* -Math.abs() met la valeur absolue en negatif */
    return -Math.abs(number);
}

var numberOfPalindromes = function (array) {
    /*un palindrome c'est un mot qui peut se lire dans 2 sens
     donc le but c'est d'inverser chaque mot et de comparer
     avec lui-meme*/
    let a = array;
    let count = 0;
    for (i = 0; i < a.length; i++) {
        /* split('') pour decouper chaque car. du string et les 
         * mettre en tab
         * reverse() pour inverser ce tab
         * join('') pour réunir les caracteres sans rien entre */
        if (a[i].split('').reverse().join('')=== a[i]) {
            count++;
        }
    }
    return count ;
}

var shortestWord = function (array) {

    return 'Write your method here';
}

var longestWord = function (array) {
    return 'Write your method here';
}

var sumNumbers = function (array) {
    return 'Write your method here';
}

var repeatElements = function (array) {
    return 'Write your method here';
}

var stringToNumber = function (string) {
    return 'Write your method here';
}

var calculateAverage = function (array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function (array) {
    return 'Write your method here';
}

var convertArrayToObject = function (array) {
    return 'Write your method here';
}

var getAllLetters = function (array) {
    return 'Write your method here';
}

var swapKeysAndValues = function (object) {
    return 'Write your method here';
}

var sumKeysAndValues = function (object) {
    return 'Write your method here';
}

var removeCapitals = function (string) {
    return 'Write your method here';
}

var roundUp = function (number) {
    return 'Write your method here';
}

var formatDateNicely = function (date) {
    return 'Write your method here';
}

var getDomainName = function (string) {
    return 'Write your method here';
}

var titleize = function (string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function (string) {
    return 'Write your method here';
}

var squareRoot = function (number) {
    return 'Write your method here';
}

var factorial = function (number) {
    return 'Write your method here';
}

var findAnagrams = function (string) {
    return 'Write your method here';
}

var convertToCelsius = function (number) {
    return 'Write your method here';
}

var letterPosition = function (array) {
    return 'Write your method here';
}