import { HEROES} from '../data/heroes';

export const getHeroById = (id = '') => {
  return HEROES.find(hero => hero.id === id);
}
