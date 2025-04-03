import pokeball from '../assets/pokeball.svg'
import "../styles/loadingScreen.css"

function LoadingScreen(){

    return (
    <div className='loadingScreen'>
        <img className='pokeballIcon' src={pokeball}/>
        <h1 className='loadingtext'>
            Now Loading...
        </h1>
    </div>
    )

}

export default LoadingScreen