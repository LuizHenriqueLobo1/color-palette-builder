import './Palette.css';

export default function Palette({ palette }) {
  return (
    <div className='palette-container'>
      <div className='palette-color palette-color-first' style={{ background: palette[0] }}>
        <div className='palette-color-content'>
          { palette[0] }
        </div>
      </div>
      <div className='palette-color' style={{ background: palette[1] }}>
        <div className='palette-color-content'>
          { palette[1] }
        </div>
      </div>
      <div className='palette-color' style={{ background: palette[2] }}>
        <div className='palette-color-content'>
          { palette[2] }
        </div>
      </div>
      <div className='palette-color' style={{ background: palette[3] }}>
        <div className='palette-color-content'>
          { palette[3] }
        </div>
      </div>
      <div className='palette-color palette-color-last' style={{ background: palette[4] }}>
        <div className='palette-color-content'>
          { palette[4] }
        </div>
      </div>
    </div>
  );
}
