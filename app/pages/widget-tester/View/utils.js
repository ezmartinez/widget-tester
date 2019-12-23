const parseString = (string) => {
  const array = string.split(/\r?\n/);
  if (array[0].trim() !== '{') {
    throw new Error('invalid object');
  }

  if (string.indexOf('function') !== -1 || string.indexOf('=>') !== -1) {
    throw new Error('invalid object');
  }

  // eslint-disable-next-line
  return eval(`(${string})`);
};

module.exports = {
  parseString,
};
