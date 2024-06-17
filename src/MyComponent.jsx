import React, {useState} from "react";


function MyComponent(){
    
    // Using Use State

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployed] = useState(false);

    const [count, setCount] = useState(0);

    const updateName = () => {
        setName("Nzro");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setEmployed(!isEmployed);
    }



    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }



    // OnChange Function

    const [input, setInput] = useState("");

    function onChangeInput(event){
        setInput(event.target.value);
    }

    const [inputNumber, setNumber] = useState();

    function onChangeNumber(event){
        setNumber(event.target.value);
    }

    const [inputComment, setComment] = useState("");

    function onChangeComment(event){
        setComment(event.target.value);
    }

    const [inputSelect, setSelect] = useState("Jet");

    function onChangeSelect(event){
        setSelect(event.target.value);
    }

    
    const [inputShipping, setShipping] = useState("");

    function onChangeShipping(event){
        setShipping(event.target.value);
    }

    return( 
        <div>

            <br></br>

            <input value={input} onChange={onChangeInput}/>
            <p>Name: {input}</p>
           
            <input value={inputNumber} onChange={onChangeNumber} type="number"/>
            <p>Number: {inputNumber}</p>

            <textarea value={inputComment} onChange={onChangeComment} placeholder="Type here..."/>
            <p>Number: {inputComment}</p>

            <select value={inputSelect} onChange={onChangeSelect}>
                <option value="">Select</option>
                <option value="Jet">Jet</option>
                <option value="Car">Car</option>
                <option value="Plane">Plane</option>
            </select>
            <p>Number: {inputSelect}</p>
            
            <br></br>
            Number: Pick Up
            <input type="radio" value="Pick Up" onChange={onChangeShipping} checked={inputShipping === "Pick Up"}></input>
            <br></br>
            Number: Shipping
            <input type="radio" value="Shipping" onChange={onChangeShipping} checked={inputShipping === "Shipping"}></input>

            <p>{inputShipping}</p>

            <br></br>

            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            
            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>

            <div className="count-container">
                <p>{count}</p>           
                <button onClick={decreaseCount}>-</button>
                <button onClick={resetCount}>Reset Count</button>
                <button onClick={increaseCount}>+</button>
            </div>




        </div>

    );

}

export default MyComponent