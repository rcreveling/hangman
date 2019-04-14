var imgContainer = document.getElementById("hangman");
var startBtn = document.getElementById("startBtn");
var words = ["Hannibal", "Murdock", "Face", "Bad Attitude Baracus", "Amy", "Templeton", "John", "Decker", "Tawnia", "Crane"];
var textArea = document.getElementById("textArea");
var inputField = document.getElementById("guessInput");
var wrongLetters = document.getElementById("wrongLetters")
var theWord = "";
var innerArr = [""];
var rightLetters = [];




function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;


    // This next line will just add it to the <body> tag
    imgContainer.appendChild(img);
    return;
}

/* <button onclick=
    "show_image('http://google.com/images/logo.gif',
                 276,
                 110,
                 'Google Logo');">Add Google Logo</button>  */
function indexes(source, find) {
    if (!source) {
        return [];
    }
    // if find is empty string return all indexes.
    if (!find) {
        // or shorter arrow function:
        // return source.split('').map((_,i) => i);
        return source.split('').map(function (_, i) { return i; });
    }
    var result = [];
    for (i = 0; i < source.length; ++i) {
        // If you want to search case insensitive use 
        // if (source.substring(i, i + find.length).toLowerCase() == find) {
        if (source.substring(i, i + find.length) == find) {
            result.push(i);
        }
    }
    return result;
}
// SOURCE: https://stackoverflow.com/questions/3410464/how-to-find-indices-of-all-occurrences-of-one-string-in-another-in-javascript/15123641 //


function checkLetter(guess) {
    console.log("made it");


    if ([...theWord].includes(guess)) {

        var indexesOfGuess = indexes(theWord, guess);
        console.log(indexesOfGuess)
        for (x = 0; x < indexesOfGuess.length; x++) {

            var a = indexesOfGuess[x];
            innerArr[a] = guess;
            textArea.innerHTML = innerArr;
        }
        // for (x = 0; x < theWord.length; x++) {

        //     var i = theWord.indexOf(guess)




        //     innerArr.forEach((el, j) => {
        //         if (j === i) {
        //             innerArr[i] = guess;
        //             textArea.innerHTML = innerArr;
        //         }
        //         console.log(j, i)
        //         // if (innerArr.indexOf(j) === i) { innerArr[i] = guess; }
        //     }


        // innerArr.filter(Afunction(innerArr[i]));
        // innerArr[x] = guess;



        //         )
        // }
    }
    // ----kinda works---- //
    // if (guess.toLowerCase() === theWord[i].toLowerCase()) {
    //     console.log(i)

    //     innerArr[i].push(guess);
    //     var startIndex = i;
    //     var numberOfItemstoRemove = 0;
    //     console.log(innerArr.splice(startIndex, numberOfItemstoRemove, guess))

    //     textArea.innerHTML = innerArr;

    // }

    // if ([theWord].includes(guess, 0)) {
    //     console.log("made it 2")
    //     for (i = 0; i < innerArr.length; i++) {
    //         console.log("made it 3");
    //         if (innerArr[i] === guess) {
    //             innerArr[i].replace("_", guess);
    //             console.log("made it 4");
    //             textArea.innerHTML = innerArr;
    //         }
    //     }
    // }
    // --
    // for (var j = 0; j < theWord.length; j++) {

    //     if (theWord[j].toLowerCase() === guess.toLowerCase()) {
    //         console.log(innerArr[j]);
    //         innerArr[j].push(guess);
    //         remainingLetters--;
    //         console.log("hit");
    //         return theWord;
    //     }

    //     else {
    //         show_image();
    //         wrongLetters.append(guess);
    //         return;
    //     }
    // }
}

inputField.onkeyup = function (event) {
    if (event.key === "Enter") {

        var guess = inputField.value;

        checkLetter(guess);

    }
}

function start() {

    x = Math.floor(Math.random() * words.length);
    theWord = words[x];
    console.log(words[x]);
    console.log(innerArr);

    function hideWord() {
        for (i = 0; i < words[x].length; i++) {
            innerArr[i] = ["_"];
        }


    }

    hideWord();
    textArea.innerHTML = innerArr;
    return theWord;

}

var remainingLetters = theWord.length;