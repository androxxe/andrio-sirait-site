export const getUniqueValues = (array: Array<string>): Array<string> => {
  return array.filter((value, index, self) => self.indexOf(value) === index);
};
