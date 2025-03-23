import pokeball from '../assets/pokeball.svg'

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