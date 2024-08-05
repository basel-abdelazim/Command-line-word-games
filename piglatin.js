const phrase = process.argv.slice(2).join(' ');
function pigLatinTranslator(word) {  
    const vowels = /[aeiou]/i;  
    if (vowels.test(word[0])) {  
        return word + "way";  
    } else if (word.length > 1 && !vowels.test(word[0])) {
        const firstVowelIndex = word.search(vowels);  
        return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + "ay";  
    }  
    return word;
}
const translatedWords = phrase.split(' ').map(pigLatinTranslator);  
console.log(translatedWords.join(' ')); 