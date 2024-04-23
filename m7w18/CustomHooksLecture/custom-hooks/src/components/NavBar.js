import useStyle from "../hooks/useStyle";

function NavBar(props) {

    const coords = useStyle();
    console.log(coords)
    // rbg(0,0,0)
    // rbg(0,coords.x, coords.y)
    const style = {
        backgroundColor: `rgb(0, ${coords.x/4}, ${coords.y/4})`
    }
    return (
        <div style={style}>
            <header>
                <h1>Weather App</h1>
            </header>
            <div className="nav">
                <button onClick={()=> props.setSelectedCity("Montreal")}>Montreal</button>
                <button onClick={()=> props.setSelectedCity("Vancouver")}>Vancouver</button>
                <button onClick={()=> props.setSelectedCity("Toronto")}>Toronto</button>
                <button onClick={()=> props.setSelectedCity("Lisbon")}>Lisbon</button>
                <button onClick={()=> props.setSelectedCity("Texas")}>Texas</button>
            </div>
        </div>
    );
}

export default NavBar;