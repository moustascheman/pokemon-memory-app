import '../../styles/card.css';
import { FormatTitle } from '../../util/util';

function Card(props){
 const {pokemon, onclick} = props;


 return (
    <>
        <div className='selectionCard'>
            
            <img src={pokemon.img} onClick={() => {onclick(pokemon)}}/>
            <h1>
                {FormatTitle(pokemon.name)}
            </h1>

        </div>
    </>
 )
}

export default Card;