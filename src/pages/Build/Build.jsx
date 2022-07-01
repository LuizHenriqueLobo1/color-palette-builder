import './Build.css';
import { useEffect, useState } from 'react';

export default function Build() {

  const [colors, setColors] = useState(generateColorArray());

  useEffect(() => {
    document.onkeydown = ({ code }) => {
      if(code === 'Space') setColors(generateColorArray());
    }
  }, []);

  function generateColorArray() {
    const colorArray = Array(5).fill('#FAFAFA');
    colorArray.forEach((_, index) => {
      colorArray[index] = '#'.concat(Math.floor(Math.random() * 16777215).toString(16).toUpperCase());
    });
    return colorArray;
  }

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
