export default function sortingByParam(obj, arr) {
  const ordedObj = [];
  const copyObj = { ...obj };
  const objectProto = {
    adress: 'Moscow',
  };
  Object.setPrototypeOf(copyObj, objectProto);
  const tempArr = [];

  arr.forEach((elem) => {
    if (Object.prototype.hasOwnProperty.call(copyObj, elem)) {
      ordedObj.push({ key: elem, value: obj[elem] });
      delete copyObj[elem];
    }
  });

  for (const key in copyObj) {
    if (Object.prototype.hasOwnProperty.call(copyObj, key)) {
      tempArr.push({ key, value: copyObj[key] });
    }
  }

  tempArr.sort((prev, next) => {
    if (prev.key < next.key) return -1;
      return '';
  });

  return ordedObj.concat(tempArr);
}
