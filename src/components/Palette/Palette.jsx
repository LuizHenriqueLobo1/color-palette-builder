import './Palette.css';
import { IoMdTrash } from 'react-icons/io';
import { getSavedPalettes, deleteSavedPalette, copyHexColor } from '../../utils/utils';

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
          <div 
            className='palette-color-content'
            onClick={ () => copyHexColor(palette.colors[0]) }
          >
            { palette.colors[0] }
          </div>
        </div>
        <div className='palette-color' style={{ background: palette.colors[1] }}>
          <div 
            className='palette-color-content'
            onClick={ () => copyHexColor(palette.colors[1]) }
          >
            { palette.colors[1] }
          </div>
        </div>
        <div className='palette-color' style={{ background: palette.colors[2] }}>
          <div 
            className='palette-color-content'
            onClick={ () => copyHexColor(palette.colors[2]) }
          >
            { palette.colors[2] }
          </div>
        </div>
        <div className='palette-color' style={{ background: palette.colors[3] }}>
          <div 
            className='palette-color-content'
            onClick={ () => copyHexColor(palette.colors[3]) }
          >
            { palette.colors[3] }
          </div>
        </div>
        <div className='palette-color palette-color-last' style={{ background: palette.colors[4] }}>
          <div 
            className='palette-color-content'
            onClick={ () => copyHexColor(palette.colors[4]) }
          >
            { palette.colors[4] }
          </div>
        </div>
      </div>
    </div>
  );
}
