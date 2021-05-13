const toAmericanFloor = number => {
  if (number >= 13) return number-2;
  if (number > 0) return number-1
  return number;
}

export default toAmericanFloor;