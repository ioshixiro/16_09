function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let sortedStr1 = str1.split('').sort();
    let sortedStr2 = str2.split('').sort();

    for (let i = 0; i < sortedStr1.length; i++) {
        if (sortedStr1[i] !== sortedStr2[i]) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("house", "home")); 

// masala 2

function replaceLetter(word, let, new_let){
    word = word.split('');
    if(!let in word){
        console.log("Letter not found.");
        return 0;
    }

    for(let i = 0; i < word.length; i++){
        if(word[i] == let){
            word[i] = new_let;
        }
    }

    console.log(word.join(''));
}

replaceLetter("qwerty100", "e", "3");

// masala 3

function doubleAllNumbers(string){
    string = string.split("");
    for(let i = 0; i < string.length; i++){
        if(!isNaN(+string[i])){
            string[i] *= 2;
        }
    }

    console.log(string.join(""));
}

doubleAllNumbers("qw3rty100");

// masala 4

function isSubString(string, start, end){
    if(+string.length === +end){
        console.log("True");
    }else{
        console.log("False");
    }
}

isSubString("Hello", 0, 5);

// masala 5

function isSubString(string, start, end){
    console.log(string = string.substring(start, end));
}

isSubString("Hello", 1, 4);

// masala 6

function replaceWithNumber(string) {
    string = string.split("");
    for (let i = 0; i < string.length; i++) {
        let charCode = string[i].charCodeAt(0); //?
        if (charCode == 65 || charCode == 69 || charCode == 73 || charCode == 79 || charCode == 85 || charCode == 97 || charCode == 101 ||charCode == 105 ||charCode == 111 ||charCode == 117) {string[i] = "_";  // Replace vowel with "_"
        }
    }
    console.log(string.join(""));
}

replaceWithNumber("qwertyuiop");

// masala 7

function reversedWords(word){
    if(word.length < 6){
        console.log("Input longer word.");
        return 0;
    }
    let arr_length = word.length / 3;
    let arr3_length = word.length - arr_length * 2;

    console.log(word.slice(0, arr_length).split("").reverse().join("")),
    console.log(word.slice(arr_length, arr_length*2).split("").reverse().join(""));
    console.log(word.slice(arr_length*2, -1).split("").reverse().join(""));
}

reversedWords("Hello World");

// masala 8

function countWords(word){
    word = word.trim();
    word.split("");
    let count = 1;
    for(let i = 0; i < word.length; i++){
        if(word[i] == " "){
            count++;
        }
    }
    console.log(count);
}

countWords("      Hello World");

// masala 9

function countWords(word){
    word = word.trim();
    word.split("");
    let count = 1;
    for(let i = 0; i < word.length; i++){
        if(word[i] == " "){
            count++;
        }
    }
    console.log(count);
}

countWords("      Hello World");

// masala 10

function removeWhiteSpaces(word){
    word = word.trim();
    console.log(word);
}

removeWhiteSpaces("      Hello World       ");

// masala 11

function uppercaseEveryThird(string) {
    let result = string.split('');

    for (let i = 2; i < result.length; i += 3) {
        result[i] = result[i].toUpperCase();
    }

    console.log(result.join(""));
}

let modifiedString = uppercaseEveryThird("qwertyuiop");

// masala 12

function checkIsTwice(word) {
    let chars = word.split("");
    
    chars = chars.sort();
    
    for (let i = 0; i < chars.length - 1; i++) {
        if (chars[i] === chars[i + 1]) {
            console.log("False");
            return 0;
        }
    }
    
    console.log("True");
}

checkIsTwice("Hello World");

// masala 13

function displayWordsStartingWith(word) {
    word = word.split(" ");
    let check_letter = "";
    console.log(word)

    for (let i = 0; i < word.length; i++) {
        check_letter = word[i][0];
        if(isNaN(check_letter)){
            console.log(word[i]);
        }
    }
}

displayWordsStartingWith("H3llo w0rl6 6ow a4e 7ou d01ng today?");

// masala 14

function removeNumbers(word){
    word = word.split("");
    for(let i = 0; i < word.length; i++){
        if(!isNaN(word[i])){
            word[i] = "";
        }
    }
    console.log(word.join(""));
}

removeNumbers("qw3ertyu10p");

// masala 15

function collectOddEvenWords(sentence) {
    sentence = sentence.split(" ");

    let evenIndexWords = [];
    let oddIndexWords = [];

    for (let i = 0; i < sentence.length; i++) {
        if (i % 2 === 0) {
            evenIndexWords.push(sentence[i]);
        } else {
            oddIndexWords.push(sentence[i]);
        }
    }

    console.log("even index:", evenIndexWords.join(" "));
    console.log("odd index:", oddIndexWords.join(" "));
}

collectOddEvenWords("H3llo w0rl6 6ow a4e 7ou d01ng today?");

// masala 16

function reverceCases(word){
    word = word.split("");
    for(let i = 0; i < word.length; i++){
        if(word[i] === word[i].toLowerCase()){
            word[i] = word[i].toUpperCase();
        }else if(word[i] === word[i].toUpperCase()){
            word[i] = word[i].toLowerCase();
        }
    }
    console.log(word.join(""));
}

reverceCases("Hello World");