import { HeroList } from '../hero/HeroList';

export const MarvelScreen = () => {
  return (
    <div>
      <h1> Marvel </h1>
      <hr/>

      <HeroList publisher="Marvel Comics"/>
    </div>
  );
};
