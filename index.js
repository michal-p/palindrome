module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  //Returns true for a palindrome, false otherwise
  this.letters = function () {
    // let theLetters = [];
    // const regexLetters = /[a-zA-Z]/i;
    // Array.from(this.content).forEach(char => {
    //   if (char.match(regexLetters)) {
    //     theLetters.push(char);
    //   }      
    // });

    //return Array.from(this.content).filter(c => c.match(/[a-zA-Z]/i)).join("");

    return (this.content.match(/[a-z]/gi) || []).join("");
  }
}