import { HEROES } from '../data/heroes';

export const getHeroesByName = (name = '') => {
  name = name.toLocaleLowerCase();

  // return HEROES.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));

  return HEROES;
}