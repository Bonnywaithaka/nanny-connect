const RgbToHex = (rgbColor) => {
  if (/^#[0-9A-F]{6}$/i.test(rgbColor)) return rgbColor;

  const rgb = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
    return `0${parseInt(x, 10).toString(16)}`.slice(-2);
  }
  return `#${hex(rgb[1])}${hex(rgb[2])}${hex(rgb[3])}`;
};

export default RgbToHex;
