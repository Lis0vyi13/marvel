import './app.scss';
import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';

import Loader from '../loader/Loader';

const CharactersPage = lazy(() => import('../pages/CharactersPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SinglePageInfo = lazy(() => import('../singlePageInfo/SinglePageInfo'));
const Page404 = lazy(() => import('../page404/Page404'));

const App = () => {
  return (
    <Router>
      <div className='App'>
        <AppHeader />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/characters' element={<CharactersPage />} />
            <Route path='/comics' element={<ComicsPage />} />
            <Route
              path='/comics/:comicId'
              element={<SinglePageInfo type='comics' />}
            />
            <Route
              path='/characters/:charId'
              element={<SinglePageInfo type='char' />}
            />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};
export default App;
