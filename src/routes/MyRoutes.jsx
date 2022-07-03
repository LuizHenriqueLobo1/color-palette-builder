import { Routes, Route } from 'react-router-dom';
import Build from '../pages/Build/Build.jsx'; 
import MyPalettes from '../pages/My-Palettes/MyPalettes.jsx';
import Help from '../pages/Help/Help.jsx';
import NotFound from '../pages/Not-Found/NotFound.jsx';

export default function MyRoutes() {
  return (
    <Routes>
      <Route 
        path='/' 
        element={ <Build /> } 
      />
      <Route 
        path='/my-palettes'
        element={ <MyPalettes /> } 
      />
      <Route 
        path='/help' 
        element={ <Help /> } 
      />
      <Route 
        path='/*'
        element= { <NotFound /> }
      />
    </Routes>
  );
}
