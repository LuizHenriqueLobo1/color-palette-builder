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
