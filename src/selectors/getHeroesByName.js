import { HEROES } from '../data/heroes';

export const getHeroesByName = (name = '') => {
  if (name.length === 0) {
    return [];
  }

  name = name.toLowerCase();

  return HEROES.filter(hero => hero.superhero.toLowerCase().includes(name));
}