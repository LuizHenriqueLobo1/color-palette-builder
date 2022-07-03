import './Palette.css';
import { IoMdTrash } from 'react-icons/io';
import { MdStar, MdStarBorder } from 'react-icons/md';
import { getSavedPalettes, getFavoritesPalettes, deleteSavedPalette, favoritePalette, copyHexColor } from '../../utils/utils';

export default function Palette({ palette, setPalettes, filter }) {
  
  const updatePalettesView = () => {
    setPalettes(filter === 'all' ? getSavedPalettes() : getFavoritesPalettes());
  }
  
  return (
    <div className='palette-container'>
      <div className='palette-header'>
        <span 
          className='palette-action'
          onClick={ 
            () => {
              favoritePalette(palette);
              updatePalettesView();
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
              updatePalettesView();
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
