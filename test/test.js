let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function () {
  describe("#palindrome", function () {
    it("Should return false for a non-palindrome.", function () {
      let nopalindrome = new Phrase("apple");
      assert(!nopalindrome.palindrome());
    })

    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", function () {
      let mixedCasePalindrome = new Phrase("RaceCar");
      assert(mixedCasePalindrome.palindrome());
    });

    it("should return true for a palindrome with punctuation", function () {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });
  });
  describe("#letters", function () {
    it("should return only letters", function () {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual("MadamImAdam", punctuatedPalindrome.letters());
    });

    it("should return the empty string on no match", function () {
      let noLetters = new Phrase("1234.56");
      assert.strictEqual(noLetters.letters(), "");
    });
  });
});