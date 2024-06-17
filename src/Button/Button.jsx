import styles from "./Button.module.css"

function Button(){

    let count = 0;

    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else
        {
            console.log(`${name} stop clicking me!`)
        }
    }


    const handleClick2 = (e) => e.target.textContent = "Ouch";

    return(
        <button className={styles.button} onDoubleClick={(e) => handleClick2(e)}>Click me! </button>
    );
    
}

export default Button