import React, {useState} from "react";


function UpdaterFunction(){
    
    // Using Updater Function
    // Used with multiple state updates and asynchronous fucntions

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decreaseCount = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const resetCount = () => {
        setCount(c => c = 0);
    }


    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});

    function handleYearChange(event) {
        setCar(c => ({...c, year: event.target.value}));
    }

    function handleMakeChange(event) {
        setCar(c => ({...c, make: event.target.value}));
    }

    function handleModelChange(event) {
        setCar(c => ({...c, model: event.target.value}));
    }



    const [foods, setFoods] = useState(["Mango", "Apple", "Coconut"]);

    function handleFoodChange(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i) => i !== index));
    }



    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCars = {year: carYear,
                        make: carMake,
                        model: carModel};

    setCars(c => [...c, newCars]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
    }

    function handleRemoveCar(index){
        setCars(cars.filter((_,i) => i !== index));
    }

    function handleCarYearChange(event){
        setCarYear(event.target.value);
    }

    function handlCareMakeChange(event){
        setCarMake(event.target.value);
    }

    function handleCarModelChange(event){
        setCarModel(event.target.value);
    }


    return( 
        <div>

        <button onClick={increaseCount} >+</button>
        <button onClick={decreaseCount}>-</button>
        <button onClick={resetCount}>reset</button>
        <h4>Count: {count}</h4>


        <br></br>

        <input type="number" value={car.year} onChange={handleYearChange}/>
        <input type="text" value={car.model} onChange={handleModelChange}/>
        <input type="text" value={car.make} onChange={handleMakeChange}/>

        <p>Your Favorite Car is: {car.year} {car.model} {car.make}</p>

        <br></br>

        <h3>List of Foods</h3>

        <ul>
            {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
        </ul>

        <input type="text" id="foodInput" placeholder="Enter your food name"></input>
        <button onClick={handleFoodChange}>Add Food</button>

        <br></br>
        <br></br>

        <h2>List of Cars</h2>
        <ul>
            {cars.map((car, index) => 
            <li key={index} onClick={() => handleRemoveCar(index)}>
                {car.year} {car.make} {car.model}
            </li>)}
        </ul>


        <input value={carYear} type="number" onChange={handleCarYearChange}/><br></br>
        <input value={carMake} type="text" onChange={handlCareMakeChange}/><br></br>
        <input value={carModel} type="text" onChange={handleCarModelChange}/><br></br>

        <button onClick={handleAddCar}>Add Car</button>
        </div>

    );

}

export default UpdaterFunction