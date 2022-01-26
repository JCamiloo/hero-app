import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/ui/NavBar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/hero/HeroScreen';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar/>

      <div className="container mt-5 mb-5">
        <Routes>
          <Route path="marvel" element={ <MarvelScreen/> }/>
          <Route path="dc" element={ <DcScreen/> }/>
          <Route path="search" element={ <SearchScreen/> }/>
          <Route path="hero/:id" element={ <HeroScreen/> }/>
          <Route path="/" element={ <MarvelScreen/> }/>
        </Routes>
      </div>
    </>
  );
};
