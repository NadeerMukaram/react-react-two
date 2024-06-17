import PropTypes from 'prop-types'

// props for passing data. read only.

function Student(props){

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
    
}

// for checking the types of props
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

// default props, if no data was given
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student