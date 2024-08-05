const phrase = process.argv[2];  
const shift = parseInt(process.argv[3]);
function caesarCipher(text, shift) {  
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';  
    const alphabetLength = alphabet.length;  
    return text.split('').map(char => {  
        const lowerChar = char.toLowerCase();  
        const isUpperCase = (char !== lowerChar);  
        const index = alphabet.indexOf(lowerChar);  

        if (index === -1) {  
            return char;
        }
        let newIndex = (index + shift) % alphabetLength;  
        if (newIndex < 0) {  
            newIndex += alphabetLength;   
        }  

        const newChar = alphabet[newIndex];  
        return isUpperCase ? newChar.toUpperCase() : newChar;  
    }).join('');  
}  
const encryptedPhrase = caesarCipher(phrase, shift);  
console.log(encryptedPhrase); 