import React, { useState } from "react";
import PokeCard from "./PokeCard";
import "./style/ListPokemons.css"; // Asegúrate de importar el archivo CSS
import Pagination from "./Pagination.jsx";

const ListPokemons = ({ pokemons }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pokemosPerPage = 12;
  const countLength = pokemons?.length;
  const indexOfLastPost = Math.min(currentPage * pokemosPerPage, countLength);
  const indexOfFirstPost = Math.max(indexOfLastPost - pokemosPerPage, 0);
  const currentPosts = pokemons?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="list-pokemons">
        {currentPosts?.map((pokeInfo) => (
          <PokeCard key={pokeInfo.url} pokeInfo={pokeInfo} />
        ))}
      </div>
      <div>
        <Pagination
          pokemosPerPage={pokemosPerPage}
          totalPokemons={countLength}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
export default ListPokemons;
