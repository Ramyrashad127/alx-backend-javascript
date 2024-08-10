export default function appendToEachArrayValue(array, appendString) {
  const Arr = [];
  for (const ele of array) {
    Arr.push(appendString + ele);
  }

  return Arr;
}
