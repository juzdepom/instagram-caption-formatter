import { bold, italic, bolditalic, typewriter } from './specialCharacters';

export const AddSpecialCharactersBetweenParagraphs = (text) => {
    let lines = text.split(`\n`)
    //there are new special paragraphs
    if(lines.length < 2 ){
        return text
    }
    //remove extra space at beginning and at end of each line
    lines.forEach((line, index) => {
        lines[index] = line.trim()
        //replace empty spaces with special character
        if(lines[index] === ""){
            lines[index] = "⠀" //this is a special space character that won't be ignored by Instagram
        }
    })

    let newText = lines.join(`\n`)
    return newText
}


export const AddSpecialCharacters = (text, marker, type) => {

    var specialCharacters = bold;
    if(type === "bold"){
        specialCharacters = bold;
    }else if(type === "italic"){
        specialCharacters = italic;
    } else if (type === "bolditalic") {
        specialCharacters = bolditalic;
    } else if (type === "typewriter") {
        specialCharacters = typewriter;
    } else {
        console.error(`type ${type} does not match any of our records `)
    }

    var newText = text
    //find all instances of string that are between the marker using RegEx
    // var regex = new RegExp(marker + "[a-z- A-Z1-9:./-]+" + marker, 'g')
    var regex = new RegExp(marker + ".*" + marker, 'g')

    //will return an array
    //e.g. newText = test BB this is bold BB and BB here BB 
    let matches = newText.match(regex)
    //e.g. matches = ["BBthis is boldBB", "BB here BB"]

    if (matches !== null) {
        matches.forEach((match) => {
            let string = match.replace(new RegExp(marker, 'g'), '')
            let array = string.split("")
            var specialCharString = ''
            array.forEach((char) => {
                let letter = (specialCharacters[char] === undefined) ? char : specialCharacters[char]
                specialCharString = specialCharString + letter
            })
            newText = newText.replace(match, specialCharString)
        })
    }
    
    return newText
}