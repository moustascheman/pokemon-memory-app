import '../../styles/card.css';
import { FormatTitle } from '../../util/util';

function Card(props){
 const {pokemon, onclick} = props;


    function getTypeClass(typeName){
        return "typeIcon " + "type_" + typeName;
    }

 return (
    <>
        <div className='selectionCard' onClick={() => {onclick(pokemon)}}>
            
            <img src={pokemon.img}/>
            <div class="cardInfo">
            <p class="pokemonNumber">{'#'+pokemon.id}</p>
            <h4>{FormatTitle(pokemon.name)}</h4>

            <div class="types">
                {pokemon.types.map((typeObject) => (
                    <>
                        <span className={getTypeClass(typeObject.type.name)}>
                            {typeObject.type.name.toUpperCase()}
                        </span>
                    </>
                ))}
                
            </div>

        </div>

        </div>
    </>
 )
}

export default Card;