

function Card(props){
 const {pokemon} = props;


 return (
    <>
        <div>
            
            <img src={pokemon.img}/>
            <h1>
                {pokemon.name}
            </h1>
            
        </div>
    </>
 )
}

export default Card;