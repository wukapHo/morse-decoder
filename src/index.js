const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const pattern = new RegExp(".{1,10}", "g");
    const arr = expr.match(pattern);
    let res = '';

    for (let item of arr) {
        let charMorse = '';

        for (let i = 0; i < item.length; i += 2) {
            if (item[i] === '*') {
                charMorse += ' ';
                break;
            } else if (item[i] === '0') {
                continue;
            } else if (item[i] === '1' && item[i + 1] === '0') {
                charMorse += '.';
            } else {
                charMorse += '-';
            }
        }
        
        if (charMorse === ' ') {
            res += ' ';
        } else {
            res += MORSE_TABLE[charMorse];
        }
    }
    return res;
}

module.exports = {
    decode
}