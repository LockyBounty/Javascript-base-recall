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
    console.log(a);
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
    return 'Write your method here';
}

var everyPossiblePair = function (array) {
    return 'Write your method here';
}

var allElementsExceptFirstThree = function (array) {
    return 'Write your method here';
}

var addElementToBeginning = function (array, element) {
    return 'Write your method here';
}

var sortByLastLetter = function (array) {
    return 'Write your method here';
}

var getFirstHalf = function (string) {
    return 'Write your method here';
}

var makeNegative = function (number) {
    return 'Write your method here';
}

var numberOfPalindromes = function (array) {
    return 'Write your method here';
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