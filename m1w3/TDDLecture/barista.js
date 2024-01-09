const barista = function(name, size, dairy, whipcream, syrups, iced, espressoShots){

    //grab the everything from the order
    //a default object, with a standard drink blueprint
    const defaultObject = {
        name: name,
        size: size,
        dairy: dairy,
        whipcream: whipcream,
        syrups: syrups,
        iced: iced,
        espressoShots: espressoShots
    }
    console.log(defaultObject)
    // for...in loop
    for(let keys in defaultObject){
        if(defaultObject[keys] === undefined){
            return `Arguement ${keys} is missing`
        }
    }
    //add each parameter to the corresponding key value pair
    //return that coffeeDrink
    console.log(defaultObject)
    return defaultObject
}

module.exports = barista;