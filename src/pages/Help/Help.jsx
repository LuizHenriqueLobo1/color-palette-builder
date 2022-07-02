import './Help.css';
import { MdHelpCenter } from 'react-icons/md';

export default function MyPalettes() {
  return (
    <div className='help-container'>
      <div className='help-content'>
        <div className='help-card'>
          <div className='help-card-header'>
            <h1>
              <MdHelpCenter className='icon' style={{ color: '#292929' }} />
            </h1>
            <h2>How to change palette?</h2>
            <p>
              On the <b>Build</b> page, press <b>space</b> to generate a new palette.
            </p>
            <h2>
              How to save a palette?
            </h2>
            <p>
              On the <b>Build</b> page, there is a <b>Save Palette</b> button, click on it to save your palette and check in <b>My Palettes</b>.
            </p>
            <h2>
              How to delete a palette?
            </h2>
            <p>
              On the <b>My Palettes</b> page, there is a trash icon, click on it to delete the palette.
            </p>
          </div>
          <div className='help-card-footer'>
            <p className='help-card-footer-copyright'>
              &copy; Luiz Henrique Lobo - 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
