import profilePic from './assets/luffy.jpg'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="dp"></img>
            <h2 className='card-title'>Luffy</h2>
            <p className='card-text'>King of Pirates</p>
        </div>
        
    );
    
}

export default Card