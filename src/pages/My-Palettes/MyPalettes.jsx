import './MyPalettes.css';
import { useEffect, useState } from 'react';
import { getPaletteOrderBy, deleteAllSavedPalettes } from '../../utils/utils.js';
import { AiFillWarning } from 'react-icons/ai';
import { usePalettesContext } from '../../contexts/PalettesContext.jsx';
import Palette from '../../components/Palette/Palette.jsx';
import ConfirmationModal from '../../components/Confirmation-Modal/ConfirmationModal.jsx';

export default function MyPalettes() {

  const [openModal, setOpenModal] = useState(false);

  const {
    palettes,
    setPalettes,
    filter,
    setFilter
  } = usePalettesContext();

  useEffect(() => {
    setPalettes(getPaletteOrderBy(filter));
  }, [ filter ]);

  function deleteAllPalettes() {
    deleteAllSavedPalettes();
    setPalettes([]);
  }

  return (
    <>
      { 
        openModal && 
        <ConfirmationModal 
          setOpenModal={ setOpenModal }
          action={ deleteAllPalettes }
          title={ 'Confirmation' }
          description={ 'Are you sure you want to delete all palettes?' }
        />
      }
      <div className='my-palettes-container'>
        <div className='my-palettes-actions'>
          <div className='my-palettes-field'>
            <label>Show:</label>
            <select 
              className='my-palettes-actions-select'
              onChange={ (event) => setFilter(event.target.value) }
            >
              <option value="all">All</option>
              <option value="favorites">Favorites</option>
            </select>
          </div>
          <div className='my-palettes-field last-field'>
            <button 
              className='my-palettes-field-button'
              onClick={ () => setOpenModal(true) }
            >
              Delete All
            </button>
          </div>
        </div>
        <div className='my-palettes-content'>
          {
            palettes.length 
              ? palettes.map((palette, index) => <Palette key={ index } palette={ palette }/>)
              : <div className='my-palettes-warning'>
                  <h1>
                    <AiFillWarning className='icon'/>
                  </h1>
                  <h2>NO PALETTE SAVED!</h2>
                </div>
          }
        </div>
      </div>
    </>
  );
}
