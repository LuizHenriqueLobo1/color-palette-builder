import './MyPalettes.css';
import { useEffect, useState } from 'react';
import { getSavedPalettes } from '../../utils/utils.js';
import Palette from '../../components/Palette/Palette.jsx';
import { AiFillWarning } from 'react-icons/ai';

export default function MyPalettes() {

  const [palettes, setPalettes] = useState([]);

  useEffect(() => {
    setPalettes(getSavedPalettes());
  }, []);

  return (
    <div className='my-palettes-container'>
      <div className='my-palettes-content'>
        {
          palettes.length 
            ? palettes.map(palette => <Palette palette={ palette } />)
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
