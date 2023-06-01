//Class Components
import React from "react";
class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            planet: "Earth"
        };

        console.log("constructor");
    }

    componentDidMount() {
        console.log("ComponentDidMount");
    }

    render() {//logic
        console.log("Render");
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <h4>{this.state.planet}</h4>
            </div>
        )
    }
}

//State -> a set of data that an individual component holds
export default User;

//LIFE CYCLE METHODS
//1.MOUNT -> The component is initially rendered in a DOM
/* 1.a Constructor
   1.b Render
   1.c ComponentDidMount<sideEffect>(get ecplore repos,activities)
*/
//2.UPDATE ->Component is being updated
//3.UNMOUNT -> Component is removed from the DOM














//Functional Components

// const User = (Props) => {
//     return (
//         <div>
//             <h1>{Props.name}</h1>
//             <p>{Props.description}</p>
//         </div>
//     );

// };

// export default User;

//props(keyword) -> properties/parameters
//data that has been passed from one component to another
//i.e App -> user

