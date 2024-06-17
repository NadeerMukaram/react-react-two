import PropTypes from 'prop-types'

// if props.isLoggedIn is true then display 
// "Welcome {props.username}" else "Log in to continue"

function UserGreeting(props){
    
    const welcome = <h2 className="login-successful">Welcome {props.username}</h2>
    const login = <h2 className="login-failed">Log in to continue</h2>

    return(
        props.isLoggedIn ? 
        welcome : 
        login
        
    );

}

UserGreeting.protoTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting