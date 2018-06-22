const stringParser = (str, separator) => {
  const arr = str.split(separator);

  const object = {};

  arr.forEach(item => {
    const parsedItem = item.split('=').map(value => value.trim());
    object[parsedItem[0]] = parsedItem[1];
  })

  return object;
}

export default stringParser;