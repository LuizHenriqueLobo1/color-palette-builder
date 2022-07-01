import './Build.css';
import { useEffect, useState } from 'react';
import { generateColorArray, saveNewPalette } from '../../utils/utils.js';
import { MdSave } from 'react-icons/md';

export default function Build() {

  const [colors, setColors] = useState(generateColorArray());

  useEffect(() => {
    document.onkeydown = ({ code }) => {
      if(code === 'Space') setColors(generateColorArray());
    }
  }, []);

  return (
    <div className='build-container'>
      <div className='build-color' style={{ background: colors[0] }}>
        <div className='build-color-content'>
          { colors[0] }
        </div>
      </div>
      <div className='build-color' style={{ background: colors[1] }}>
        <div className='build-color-content'>
          { colors[1] }
        </div>
      </div>
      <div className='build-color' style={{ background: colors[2] }}>
        <div className='build-color-content'>
          { colors[2] }
        </div>
        <button className='build-button-save' onClick={ () => saveNewPalette(colors) }>
          <MdSave className='icon' />
          <span>
            Save Palette
          </span>
        </button>
      </div>
      <div className='build-color' style={{ background: colors[3] }}>
        <div className='build-color-content'>
          { colors[3] }
        </div>
      </div>
      <div className='build-color' style={{ background: colors[4] }}>
        <div className='build-color-content'>
          { colors[4] }
        </div>
      </div>
    </div>
  );
}
