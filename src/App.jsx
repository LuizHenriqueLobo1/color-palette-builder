import './App.css';
import Header from './components/Header/Header.jsx';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes/MyRoutes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
