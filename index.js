// Reverse string
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
}

function emailParts(email) {
  let processedContent = email.toLowerCase();
  return processedContent.split('@');
}

function Phrase(sentense) {
  this.content = sentense;

  this.processedContent = function() {
    return this.processor(this.content);
  }

  this.processor = function (string) {
    return string.toLowerCase();
  }

  // Returns true for the palindrome otherwise return false
  this.palindrome = function palindrome() {
    
    return this.processedContent() === this.processedContent().reverse();
  }

  this.louder = function () {
    return this.content.toUpperCase();
  }
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  //Override inherited function
  this.processedContent = function() {
    return this.processor(this.translation);
  }
}

// Inheritance TranslatedPhrase inherit from Phrase
TranslatedPhrase.prototype = new Phrase();

String.prototype.palindrome = function () {
  return new Phrase(this).palindrome();
}

// Blank method
String.prototype.isBlank = function () {
  let regexblank = new RegExp("^\\s*$");
  return !!regexblank.exec(this);
}

// Last member of an Array
Array.prototype.getLast = function () {
  return this.slice(-1);
}