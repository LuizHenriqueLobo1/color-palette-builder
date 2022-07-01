import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <h1 className='header-title'>
        Color Palette Builder
      </h1>
      <div class='header-anchors'>
        <span>
          Build
        </span>
        <span>
          My Palettes
        </span>
        <span>
          Help
        </span>
      </div>
    </div>
  );
}
