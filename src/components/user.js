import React from "react";
class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
            </div>
        )
    }
}


export default User;













//Class Components


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

