import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Contact from './Contact';
import PageNotFound from './PageNotFound';
import Blog from './Blog';
import AboutUs from './AboutUs';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='blog' element={<Blog />}></Route>
        <Route path='about' element={<AboutUs />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
