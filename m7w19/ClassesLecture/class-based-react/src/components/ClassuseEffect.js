import { Component } from "react";
class ClassuseEffect extends Component {
    constructor() {
        super();
    }

    // I want a function to run once upon the initial render
    componentDidMount() {
        console.log("Hello there!")
    }

    render() { 
        return ( 
            <h1>This is how useEffect works in class based components</h1>
         );
    }
}
 
export default ClassuseEffect;