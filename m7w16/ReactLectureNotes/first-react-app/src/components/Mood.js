// Take a name and a mood as props
// The name will be displayed as an h2
// depending on the mood that gets passed in
// A different string will be rendered
// function moodGetter(mood){
//     if(mood === "lazy"){
//         return(<p>I am feeling sooooo lazy, I don't feel like coding today</p>)
//     }
// }

// function Mood(props) {
function Mood({name, mood}) {
    // const surName= "Gomes"
    return ( 
        <>
        <h2>My name is {name}</h2>
        {/* Short circuiting for conditional rendering */}
        {/* {props.truthy && <h1>This is true!</h1>} */}
        {mood === "lazy" && <h3>I am feeling so lazy!</h3>}
        {mood === "happy" && <h3>What an amazing day it is today, I am so happy!</h3>}
        {mood === "mad" && <h3>😠😠😠</h3>}
        </>
     );
}

export default Mood;