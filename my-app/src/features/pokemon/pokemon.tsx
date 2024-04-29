import React, { useEffect } from "react";
import { useGetPokemonByNameQuery } from "./pokemon.api";
import { useAppDispatch } from "../../app/hooks";
import { getCurrentPokemon, setCurrentPokemon } from "./pokemon.slice";
import { useSelector } from "react-redux";


export const Pokemon: React.FC = () => {
    const name = "charizard";
    const { isLoading, data, error } = useGetPokemonByNameQuery(name);
    const dispatch = useAppDispatch();
    const pokemon = useSelector(getCurrentPokemon);

    useEffect(() => {
        if (data != null) {
            dispatch(setCurrentPokemon(data));
        }
    }, [data]);

    return <>
        {isLoading && !data && <p>Loading...</p>}
        {data &&
            <div>
                <h3>{name}</h3>
                <img src={pokemon?.sprites.front_default} />
                <br />
                <strong>Abilities: </strong>
                <br />
                <ul>
                    {pokemon?.abilities.map(a => <li>{a.ability.name}</li>)}
                </ul>
            </div>}
    </>
        ;
}