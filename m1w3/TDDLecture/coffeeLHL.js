function coffeeLighthouseLabs(name, size, dairy, sugar){
    // console.log(arguments.length)
    // return an object with the given key values
    // first establish an object
    // We need to find a way to check for all arguements, and if one is missing, we should return a message
    // if(!name || !size || !dairy || !sugar){
    if(arguments.length !== 4){
        return "Your order is invalid, please check your arguements, and try again.";
    }
    // if(!size){
    //     return "Your order is invalid, please check your arguements, and try again.";
    // }
    // if(!dairy){
    //     return "Your order is invalid, please check your arguements, and try again.";
    // }
    // if(!sugar){
    //     return "Your order is invalid, please check your arguements, and try again.";
    // }
    const arrayOfSize = ["small", "medium", "large"]
    if(!arrayOfSize.includes(size)){
        return "Your order size in invalid, please check your arguements, and try again.";
    }
    const coffeeOrder = {
        name: name,
        size: size,
        dairy: dairy,
        sugar: sugar //integer
    };
    return coffeeOrder;
}
// coffeeLighthouseLabs("Bryan", "small", "oat", 2)
module.exports = coffeeLighthouseLabs;