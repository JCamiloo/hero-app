import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { query = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: query
  });

  const { searchText } = formValues;
  const heroesFiltered = useMemo(() => getHeroesByName(query), [query]);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`?query=${searchText}`);
  }

  return (
    <>
      <h1> Búsquedas </h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr/>

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              className="btn btn-outline-primary mt-1"
              type="submit"
            >
              Buscar...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4> Resultados </h4>
          <hr/>

          {
            (query === '')
            ? <div className="alert alert-info"> Buscar un héroe </div>
            : (heroesFiltered.length === 0) && 
              <div className="alert alert-danger"> No hay resultados: { query } </div>
          }

          {
            heroesFiltered.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      </div>
    </>
  );
};
