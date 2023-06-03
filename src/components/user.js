//Functional Components
import React, {useEffect,useState} from "react";

const User = (props) => {
    //value
    //the function to update the state
    const [planet, setPlanet] = useState("Earth");

    useEffect(() => {
        setPlanet("Jupiter");
        console.log("Component Mounting");
    });

    console.log(planet);
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <h1>{planet}</h1>
        </div>
    );

};

export default User;























//State -> a set of data that an individual component holds
//export default User;


//LIFE CYCLE METHODS
//1.MOUNT -> The component is initially rendered in a DOM
/* 
   1.a Constructor
   1.b Render
   1.c ComponentDidMount<sideEffect>(get ecplore repos,activities)
*/
//2.UPDATE ->Component is being updated
/*
  2.a Constructor
  2.b shouldComponentUpdate(nextProp, nextState)//true or false value returned
  2.c render()
  2.d getSnapsotBeforeUpdate(prevProp, prevState)//returns true or false
  2.e componentDidUpdate()
 */
//3.UNMOUNT -> Component is removed from the DOM
/*componentWillUnmount
 */


//Class Components
/*
import React from "react";
class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            planet: "Earth"
        };

        console.log("constructor");//1.a
    }

    componentDidMount() {
        this.setState({planet: "Jupiter"});
        console.log("ComponentDidMount");//1.c
    }

    shouldComponentUpdate(nextProp, nextState) {
        console.log("shouldComponentUpdate");
        console.log({
            nextProp,
            nextState
        });
        return true;
    }

    getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log("getSnapshotBeforeUpdate");
        console.log({
            prevProp,
            prevState
        });
        return true;
    }

    componentDidUpdate(){
        console.log(this.state);
    }



    render() {//logic
        console.log("Render");//1.b
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <h4>{this.state.planet}</h4>
            </div>
        )
    }
}
*/

















//props(keyword) -> properties/parameters
//data that has been passed from one component to another
//i.e App -> user

