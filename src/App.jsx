import './App.css';
import Header from './components/Header/Header.jsx';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes/MyRoutes';
import PalettesContextProvider from './contexts/PalettesContext.jsx';

function App() {
  return (
    <PalettesContextProvider>
      <BrowserRouter>
        <Header />
        <MyRoutes />
      </BrowserRouter>
    </PalettesContextProvider>
  );
}

export default App;
