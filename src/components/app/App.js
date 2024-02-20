import './app.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import CharactersPage from '../pages/CharactersPage';
import ComicsPage from '../pages/ComicsPage';
import Page404 from '../page404/Page404';
import ComicInfo from '../comicInfo/ComicInfo';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <AppHeader />
        <Routes>
          <Route path='marvel/' element={<CharactersPage />} />
          <Route path='comics/' element={<ComicsPage />} />
          <Route path='comics/:comicId' element={<ComicInfo />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
