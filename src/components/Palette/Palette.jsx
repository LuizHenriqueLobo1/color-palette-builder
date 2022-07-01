import './Palette.css';
import { IoMdTrash } from 'react-icons/io';
import { getSavedPalettes, deleteSavedPalette } from '../../utils/utils';

export default function Palette({ palette, setPalettes }) {
  return (
    <div className='palette-container'>
      <div className='palette-header'>
        <span 
          className='palette-delete' 
          onClick={ 
            () => {
              deleteSavedPalette(palette);
              setPalettes(getSavedPalettes()); 
            }
          }
        >
          <IoMdTrash className='icon'/>
        </span>
      </div>
      <div className='palette-content'>
        <div className='palette-color palette-color-first' style={{ background: palette.colors[0] }}>
          <div className='palette-color-content'>
            { palette.colors[0] }
          </div>
        </div>
        <div className='palette-color' style={{ background: palette.colors[1] }}>
          <div className='palette-color-content'>
            { palette.colors[1] }
          </div>
        </div>
        <div className='palette-color' style={{ background: palette.colors[2] }}>
          <div className='palette-color-content'>
            { palette.colors[2] }
          </div>
        </div>
        <div className='palette-color' style={{ background: palette.colors[3] }}>
          <div className='palette-color-content'>
            { palette.colors[3] }
          </div>
        </div>
        <div className='palette-color palette-color-last' style={{ background: palette.colors[4] }}>
          <div className='palette-color-content'>
            { palette.colors[4] }
          </div>
        </div>
      </div>
    </div>
  );
}