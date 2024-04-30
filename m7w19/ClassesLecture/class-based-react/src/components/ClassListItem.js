import { Component } from "react";

class ClassListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <li key={this.props.id}>{this.props.alternate_title}</li>
         );
    }
}
 
export default ClassListItem;