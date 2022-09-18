import './Palette.css';
import { useState } from 'react';
import { IoMdTrash } from 'react-icons/io';
import { MdStar, MdStarBorder } from 'react-icons/md';
import { usePalettesContext } from '../../contexts/PalettesContext';
import { 
  deleteSavedPalette, 
  favoritePalette, 
  copyHexColor, 
  getPaletteOrderBy,
  savePaletteName
} from '../../utils/utils';

export default function Palette({ palette }) {
  
  const { setPalettes, filter, search } = usePalettesContext();
  const [ paletteName, setPaletteName ] = useState(palette.name ? palette.name : '');

  return (
    <div className='palette-container'>
      <div className='palette-header'>
        <div>
          <input
            className='palette-name'
            placeholder='Add a name to palette...'
            type='text'
            value={ paletteName }
            onChange={ 
              event => {
                setPaletteName(event.target.value);
                savePaletteName(event.target.value, palette);
                setPalettes(getPaletteOrderBy(filter, search));
              }
            }
          />
        </div>
        <div>
          <span 
            className='palette-action'
            onClick={ 
              () => {
                favoritePalette(palette);
                setPalettes(getPaletteOrderBy(filter, search));
              }
            }
          >
            {
              palette.favorite
                ? <MdStar className='icon'/>
                : <MdStarBorder className='icon'/>
            }
          </span>
          <span 
            className='palette-action' 
            onClick={ 
              () => {
                deleteSavedPalette(palette);
                setPalettes(getPaletteOrderBy(filter, search));
              }
            }
          >
            <IoMdTrash className='icon'/>
          </span>
        </div>
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
