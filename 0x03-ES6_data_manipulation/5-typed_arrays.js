function createInt8TypedArray(length, position, value) {
  const buff = new ArrayBuffer(length);

  const dataView = new DataView(buff);

  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  dataView.setInt8(position, value);

  return dataView;
}

export default createInt8TypedArray;
