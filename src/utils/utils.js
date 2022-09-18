export function generateColorArray() {
  const colorArray = Array(5).fill('#FAFAFA');
  colorArray.forEach((_, index) => {
    colorArray[index] = generateColor();
  });
  return colorArray;
}

function generateColor() {
  const color = '#'.concat(Math.floor(Math.random() * 16777215).toString(16).toUpperCase());
  return color.length === 7 ? color : color.concat('0'); 
}

export function getSavedPalettes() {
  return JSON.parse(localStorage.getItem('palettes')) || [];
}

export function saveNewPalette(palette) {
  const newPalette = {
    id: generateId(),
    colors: palette,
    favorite: false,
    name: ''
  };
  const palettes = [...getSavedPalettes(), newPalette];
  localStorage.setItem('palettes', JSON.stringify(palettes));
}

function generateId() {
  const palettes = getSavedPalettes();
  return palettes.length
    ? palettes[palettes.length - 1].id + 1
    : 0;
}

export function deleteSavedPalette(palette) {
  const palettes = getSavedPalettes();
  const targetPalette = getSpecificPalette(palettes, palette);
  palettes.splice(palettes.indexOf(targetPalette), 1);
  localStorage.setItem('palettes', JSON.stringify(palettes));
}

export function deleteAllSavedPalettes() {
  localStorage.setItem('palettes', JSON.stringify([]));
}

export function copyHexColor(color) {
  navigator.clipboard.writeText(color);
}

export function favoritePalette(palette) {
  const palettes = getSavedPalettes();
  const targetPalette = getSpecificPalette(palettes, palette);
  const targetPaletteIndex = palettes.indexOf(targetPalette); 
  palettes[targetPaletteIndex].favorite = !palettes[targetPaletteIndex].favorite; 
  localStorage.setItem('palettes', JSON.stringify(palettes));
}

export function getPaletteOrderBy(filter, search) {
  const palettes = filter === 'all' ? getSavedPalettes() : getFavoritesPalettes();
  if(search.length) {
    return palettes.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));
  }
  return palettes;
}

function getFavoritesPalettes() {
  return getSavedPalettes().filter(palette => palette.favorite);
}

function getSpecificPalette(palettes, palette) {
  return palettes.find(({ id }) => id === palette.id);
}

export function savePaletteName(name, palette) {
  const palettes = getSavedPalettes();
  const targetPalette = getSpecificPalette(palettes, palette);
  const targetPaletteIndex = palettes.indexOf(targetPalette);
  palettes[targetPaletteIndex].name = name;
  localStorage.setItem('palettes', JSON.stringify(palettes));
}
