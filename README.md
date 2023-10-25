Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will add 'ay' to the end of words that begin with a consonant."
Code: pigLatin("b");
Expected Output: "bay"

Test: "It will add consonants until the first vowel to the end of the word followed by "ay""
Code: pigLatin("scoop");
Expected Output: "oopscay"

Test: "It will move 'qu' to the end of the word and add 'ay'"
Code: pigLatin("quick");
Expected Output: "ickquay"