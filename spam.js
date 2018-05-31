let fs = require('fs');

let getCategory = (line) => line.startsWith('ham') ? 'ham' : 'spam';
let lines = [];

fs.readFileSync('spam.csv')
    .toString()
    .split(/\r?\n/)
    .forEach(function(line){
        let category = getCategory(line);
        //console.log(category);

        line = line.substring(category.length + 1);
        let words = line.split(/[\.,"' ]+/g); 
        let lowerCaseWords = words.map((w) => w.toLowerCase());
        let cleanWords = lowerCaseWords.filter((w) => w != '');
        //console.log(cleanWords);
        lines.push({category: category, text: line, words: cleanWords});

        //let elementsCount = (line) => line.reduce (function ())
    });
//console.log(lines);

spamNumber = lines.reduce((sum, el) => el.category == 'spam' ? sum + 1 : sum, 0);
hamNumber = lines.reduce((sum, el) => el.category == 'ham' ? sum + 1 : sum, 0);

console.log(spamNumber);
console.log(hamNumber);

// See https://regexr.com/ to debug regular expressions