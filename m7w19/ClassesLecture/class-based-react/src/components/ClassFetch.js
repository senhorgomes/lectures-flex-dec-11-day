import { Component } from "react";
import ClassListItem from "./ClassListItem";

class ClassFetch extends Component {
    constructor() {
        super();

        this.state = {
            films: []
        }
    }
    // Make a fetch to a url
    // https://swapi-37eac-default-rtdb.firebaseio.com/movies.json
    // And display all the movies and their posters inside of this component
    // useEffect(()=> {
    //     fetch('https://swapi-37eac-default-rtdb.firebaseio.com/movies.json')
    //     .then((movies)=>movies.json())
    //     .then((data) => this.setState({films: data}))
    // }, [])
    componentDidMount() {
        fetch('https://swapi-37eac-default-rtdb.firebaseio.com/movies.json')
        .then((movies)=>movies.json())
        .then((data) => this.setState({films: data}))
    }
    render() {
        return (
            <section>
                <h2>All Star Wars Trilogies</h2>
                {this.state.films.length === 0 && <p>Loading...</p>}
                {this.state.films.length > 1 && 
                <ul>
                    {this.state.films.map((film) => 
                        <ClassListItem id={film.id} alternate_title={film.alternate_title}/>
                    )}
                </ul>
                }
            </section>
        );
    }
}

export default ClassFetch;