export function generateColorArray() {
  const colorArray = Array(5).fill('#FAFAFA');
  colorArray.forEach((_, index) => {
    colorArray[index] = generateColor();
  });
  return colorArray;
}

function generateColor() {
  return '#'.concat(Math.floor(Math.random() * 16777215).toString(16).toUpperCase());
}

export function getSavedPalettes() {
  return JSON.parse(localStorage.getItem('palettes')) || [];
}

export function saveNewPalette(palette) {
  const newPalette = {
    id: generateId(),
    colors: palette
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
  const targetPalette = palettes.find(({ id }) => id === palette.id);
  palettes.splice(palettes.indexOf(targetPalette), 1);
  localStorage.setItem('palettes', JSON.stringify(palettes));
}

export function copyHexColor(color) {
  navigator.clipboard.writeText(color);
}