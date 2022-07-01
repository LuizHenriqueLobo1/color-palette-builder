import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <h1 className='header-title'>
        Color Palette Builder
      </h1>
      <div className='header-anchors-container'>
        <Link className='header-anchor' to='/'>
          Build
        </Link>
        <Link className='header-anchor' to='/my-palettes'>
          My Palettes
        </Link>
        <Link className='header-anchor' to='/help'>
          Help
        </Link>
      </div>
    </div>
  );
}
