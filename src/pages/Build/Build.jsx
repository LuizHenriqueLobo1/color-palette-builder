import './Build.css';
import { useEffect, useState } from 'react';
import { generateColorArray, saveNewPalette, copyHexColor } from '../../utils/utils.js';
import { MdSave, MdLockOpen, MdLockOutline } from 'react-icons/md';

export default function Build() {

  const [colors, setColors] = useState(generateColorArray());
  const [lockedColors, setLockedColors] = useState([]);
  const [isActive, setIsActive] = useState(Array(5).fill(false));

  useEffect(() => {
    document.onkeydown = ({ code }) => {
      if(code === 'Space') {
        const colorsArray = generateColorArray();
        if(lockedColors.length) {
          lockedColors.forEach(({ index, color }) => {
            colorsArray[index] = color;
          });
        }
        setColors(colorsArray);
      }
    }
  }, []);

  const lockColor = (colorIndex) => {
    const tempLockedColors = lockedColors;
    const lockedColor = tempLockedColors.find(({ index }) => index === colorIndex); 
    if(lockedColor) {
      tempLockedColors.splice(tempLockedColors.indexOf(lockedColor), 1);
    } else {
      const newLockedColor = {
        index: colorIndex,
        color: colors[colorIndex]
      };
      tempLockedColors.push(newLockedColor);
    }
    setLockedColors(tempLockedColors);
    isActive[colorIndex] = !isActive[colorIndex];
    setIsActive([...isActive]);
  }

  return (
    <div className='build-container'>
      <div className='build-color' style={{ background: colors[0] }}>
        <div className='build-color-content'>
          <div onClick={ () => copyHexColor(colors[0]) }>
            { colors[0] }
          </div>
          <div className='build-color-locker' onClick={ () => lockColor(0) }>
            {
              isActive[0]
                ? <MdLockOutline className='icon'/>
                : <MdLockOpen className='icon'/>
            }
          </div>
        </div>
      </div>
      <div className='build-color' style={{ background: colors[1] }}>
        <div className='build-color-content'>
          <div onClick={ () => copyHexColor(colors[1]) }>
            { colors[1] }
          </div>
          <div className='build-color-locker' onClick={ () => lockColor(1) }>
            {  
              isActive[1]
                ? <MdLockOutline className='icon'/>
                : <MdLockOpen className='icon'/>
            }
          </div>
        </div>
      </div>
      <div className='build-color' style={{ background: colors[2] }}>
        <div className='build-color-content'>
          <div onClick={ () => copyHexColor(colors[2]) }>
            { colors[2] }
          </div>
          <div className='build-color-locker' onClick={ () => lockColor(2) }>
            {  
              isActive[2]
                ? <MdLockOutline className='icon'/>
                : <MdLockOpen className='icon'/>
            }
          </div>
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
          <div onClick={ () => copyHexColor(colors[3]) }>
            { colors[3] }
          </div>
          <div className='build-color-locker' onClick={ () => lockColor(3) }>
            {  
              isActive[3]
                ? <MdLockOutline className='icon'/>
                : <MdLockOpen className='icon'/>
            }
          </div>
        </div>
      </div>
      <div className='build-color' style={{ background: colors[4] }}>
        <div className='build-color-content'>
          <div onClick={ () => copyHexColor(colors[4]) }>
            { colors[4] }
          </div>
          <div className='build-color-locker' onClick={ () => lockColor(4) }>
            {  
              isActive[4]
                ? <MdLockOutline className='icon'/>
                : <MdLockOpen className='icon'/>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
