import './MyPalettes.css';
import { useEffect, useState } from 'react';
import { getSavedPalettes, getFavoritesPalettes } from '../../utils/utils.js';
import Palette from '../../components/Palette/Palette.jsx';
import { AiFillWarning } from 'react-icons/ai';

export default function MyPalettes() {

  const [palettes, setPalettes] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setPalettes(
      filter === 'all' 
        ? getSavedPalettes() 
        : getFavoritesPalettes()
    );
  }, [ filter ]);

  return (
    <div className='my-palettes-container'>
      <div className='my-palettes-actions'>
        Show:
        <select 
          className='my-palettes-actions-select'
          onChange={ (event) => setFilter(event.target.value) }
        >
          <option value="all" selected>All</option>
          <option value="favorites">Favorites</option>
        </select>
      </div>
      <div className='my-palettes-content'>
        {
          palettes.length 
            ? palettes.map((palette, index) => <Palette key={ index } palette={ palette } setPalettes={ setPalettes }/>)
            : <div className='my-palettes-warning'>
                <h1>
                  <AiFillWarning className='icon'/>
                </h1>
                <h2>NO PALETTE SAVED!</h2>
              </div>
        }
      </div>
    </div>
  );
}
