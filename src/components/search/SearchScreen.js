import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'querystring';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formValues, handleInputChange] = useForm({
    searchText: ''
  });

  const { searchText } = formValues;
  const heroesFiltered = getHeroesByName(searchText);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
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
