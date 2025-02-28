

function Card(props){
 const {pokemon, onclick} = props;


 return (
    <>
        <div>
            
            <img src={pokemon.img} onClick={() => {onclick(pokemon)}}/>
            <h1>
                {pokemon.name}
            </h1>

        </div>
    </>
 )
}

export default Card;