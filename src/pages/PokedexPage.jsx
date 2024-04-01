import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import ListPokemons from "../components/HomePage/PokedexPage/ListPokemons";
import SelectType from "../components/HomePage/PokedexPage/SelectType";
import "./styles/PokedexPage.css";
import Header from "./Header";

const PokedexPage = () => {
  const [pokeSearch, setPokeSearch] = useState("");
  const [typeSelect, setTypeSelect] = useState("allPokemons");

  const inputSearch = useRef();

  const trainerName = useSelector((store) => store.trainer);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  const [pokemons, getPokemos, getPokeByType] = useFetch(url);

  useEffect(() => {
    if (typeSelect === "allPokemons") {
      getPokemos();
    } else {
      getPokeByType(typeSelect);
    }
  }, [typeSelect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokeSearch(inputSearch.current.value.trim().toLowerCase());
  };

  const pokemonsFiltered = pokemons?.results.filter((poke) => {
    return poke.name.includes(pokeSearch);
  });

  return (
    <div>
      <Header />
      <div className="greeting">
        <p className="greeting-text">Welcome trainer {trainerName}<span className="greetin_text_span">, here you can find your favorite pokemon</span></p>
      </div>
      <div className="search-pokemon">
        <form onSubmit={handleSubmit}>
          <input className="search__input" type="text" ref={inputSearch} placeholder="Search your fav pokemon"/>
          <button className="button__search" >Search</button>
        </form>
        <SelectType setTypeSelect={setTypeSelect} />
      </div>
      
        <ListPokemons pokemons={pokemonsFiltered} />
    </div>
  );
};
export default PokedexPage; //2:13
