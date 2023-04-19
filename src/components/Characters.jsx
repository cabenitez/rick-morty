// rfc + tab

import { Fragment } from "react";

export default function Characters(props) {
    
    const {characters, setCharacters} = props;
    
    const resetCharacters = () => {
        setCharacters(null);

    };

    console.log(characters);
    return (
    <div className="characters">
        <h1>Personajes</h1>
        
        <span className="back-home" onClick={resetCharacters}>volver</span>
        
        <div className="container-characters">
            {characters.map((character, index) =>(
                <div className="character-container" key={index}>
                    <div>
                        <img src={character.image} alt={character.name}/>
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>{character.status === 'Alive' ? (
                            <Fragment>
                                <span className="alive" />Vivo
                            </Fragment>
                        ) :(
                            <Fragment>
                                <span className="dead"/>Muerto
                            </Fragment>
                        )}</h6>
                        <p className="text-grey">Episodios: <span>{character.episode.length}</span></p>
                        <p className="text-grey">Especie: <span>{character.species}</span></p>
                    </div>
                </div>
            ))}
        </div>
    </div>);
}
