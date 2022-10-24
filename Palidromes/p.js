// A Palindrome is -- a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function palindrome(str){
    //string.split() is used to break string and convet it to an array of letters
    //.reverse() reversers the letters in the array
    //to make the array into a string again use .join()
    const checker = str.split("").reverse().join("");

    // this is how you reverse the "word" now we want to check it

    if (checker === str) {
        return true;
        // so if the word is the same both ways: example (eye and eye) then it is a palidrome
    } else{
        return false;
    }
}


const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8000);
