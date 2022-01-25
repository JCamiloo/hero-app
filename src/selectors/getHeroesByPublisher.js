import { HEROES } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not valid publisher`);
  }

  return HEROES.filter(hero => hero.publisher === publisher);
}
