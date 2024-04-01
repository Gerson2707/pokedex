import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import "./styles/PokemonDetailPage.css";
import Header from "./Header";

const PokemonDetailPage = () => {
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemon] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [name]);

  // Función para calcular el ancho de la barra de progreso
  const calcularAnchoBarra = (valor) => {
    // Calculamos el porcentaje en relación al valor máximo (150)
    const porcentaje = (valor / 150) * 100;
    // Limitamos el porcentaje máximo a 100
    return Math.min(porcentaje, 100) + "%";
  };

  return (
    <div className="">
      <Header />
      <div className="container__Pokedetail">
        <header
          className={`card__header__pokedetail bg-${pokemon?.types[0].type.name}`}
        >
          <img
            className="img__pokedetaiol"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>

        <div className="container__name">
          <hr />
          <h2 className="pokemon__name">{pokemon?.name}</h2>
          <hr />
        </div>

        <div className="container__details">
          <div className="container__peso">
            <h3>Peso</h3>
            <span>{pokemon?.weight}</span>
          </div>
          <div className="container__altura">
            <h3>Altura</h3>
            <span>{pokemon?.height}</span>
          </div>
        </div>

        <div className="container_characteristics">
          <div className="container__type">
            <h2>Tipo</h2>
            <div className="type__content ">
              {pokemon?.types.map((type) => (
                <div key={type.type.url} className={`color-${type.type.name}-type`}>
                  {type.type.name.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
          <div className="container__ability">
            <h2>Habilidades</h2>
            <div className="ability__content">
              {pokemon?.abilities.map((ability) => (
                <div key={ability.ability.url}>
                  {ability.ability.name.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="container__stat">
            <h2>Stats </h2>
            <hr />
            <img src="/pokeballgrey.png" alt="" />
          </div>

          {pokemon?.stats.map((stat) => (
            <div className="grafic__stats" key={stat.stat.url}>
              <div className="container__datagrafics">
                <h3 className="stat__title">{stat.stat.name.toUpperCase()}</h3>{" "}
                <span>{stat.base_stat}/150</span>{" "}
              </div>

              {/* Creamos el div contenedor de la barra de progreso */}
              <div className="barra-progreso-container">
                {/* Creamos el div hijo con el ancho calculado */}
                <div
                  className="barra-progreso"
                  style={{ width: calcularAnchoBarra(stat.base_stat) }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container__Pokedetail poke__stats">
        <div className="container__stat">
          <h2>Movements</h2>
          <hr />
          <img src="/pokeballgrey.png" alt="" />
        </div>

        <ul className="list__movements">
          {pokemon?.moves.map((move) => (
            <li key={move.move.url}>{move.move.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default PokemonDetailPage;
