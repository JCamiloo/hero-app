import { HEROES } from '../data/heroes';

export const getHeroesByName = (name = '') => {
  console.log(name);
  if (name.length === 0) {
    return [];
  }

  name = name.toLowerCase();

  return HEROES.filter(hero => hero.superhero.toLowerCase().includes(name));
}