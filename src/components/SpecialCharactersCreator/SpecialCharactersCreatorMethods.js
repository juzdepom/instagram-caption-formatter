export const generateSpecialCharactersDictionary = (original, specialChar) => {
    let o = original.trim()
    let sp = specialChar.trim()

    let originalArray = o.split("")
    let spArray = sp.split("")
    console.log(originalArray)
    console.log(spArray)

    let newArray = {}
    originalArray.forEach(( item , i) => {
        newArray[item] = spArray[i]
    })
    console.log(newArray)
    return newArray
}

