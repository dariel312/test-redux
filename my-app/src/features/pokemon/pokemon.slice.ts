import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store";
import { pokemonApi } from "./pokemon.api";
import { PokemonVM } from "./pokemon.api";

export interface PokemonSliceState {
    currentPokemon?: PokemonVM;
}

const initialState: PokemonSliceState = {
    currentPokemon: undefined,
};

export const pokemonSlice = createAppSlice({
    name: "pokemon",
    initialState,
    reducers: create => ({
        setCurrentPokemon: create.reducer((state, payload: PayloadAction<PokemonVM>) => {
            console.log("SET POKEMON REDUCER RAN");
            state.currentPokemon = payload.payload;
        })
    }),
    selectors: {
        getCurrentPokemon: (state) => {
            return state.currentPokemon;
        }
    }
});

export const { setCurrentPokemon } = pokemonSlice.actions;

export const { getCurrentPokemon } = pokemonSlice.selectors;