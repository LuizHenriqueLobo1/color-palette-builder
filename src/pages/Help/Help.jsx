import './Help.css';

export default function MyPalettes() {
  return (
    <div className='help-container'>
      <div className='help-content'>
        <div className='help-card'>
          <div className='help-card-header'>
            <h2 className='help-card-header-title'>How to use?</h2>
            <p>
              On the <b>Build</b> page, press <b>space</b> to generate a new palette.
            </p>
            <h2 className='help-card-header-title'>
              How to save a palette?
            </h2>
            <p>
              On the <b>Build</b> page, there is a <b>Save Palette</b> button,<br/> click on it to save your palette and check in <b>My Palettes</b>.
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
