import { Component } from "react";

class ClassCounter extends Component{
    // We need to increment state up by one
    // How do we use state in class based components?
    constructor(){
        super();
        // For state, we only have a getter, we have a global setState
        this.state = {count: 0}
        this.handleClick = this.handleClick.bind(this)
    }
    // For referencing
    // state = {
    //     count: 0
    // }

    handleClick(){
        // console.log("You have clicked this button", this.state.count);
        // setState((prev)=> prev + 1)
        // setState(state + 1)
        this.setState({count: this.state.count + 1 })
    }
    // useEffect(()=>{
        // This useEffect will run anytime this component is modified
    // })
    componentDidUpdate() {
        console.log("You clicked this button!")
    }
    componentWillUnmount(){
        console.log("You deleted me from the DOM!")
    }

    render(){
        return (
            <div>
              <h2>Amount of times the button has been clicked:{this.state.count} </h2>
              <button onClick={this.handleClick}>Click Me!</button>
            </div>
          );
    }
}

export default ClassCounter;