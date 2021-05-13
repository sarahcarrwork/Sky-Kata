import toAmericanFloor from "./index";

describe('Converting the lift floor', () => {
  it('should return zero for the ground floor', () => {
    expect(toAmericanFloor(0)).toStrictEqual(0);
  });

  it('should return zero for the first floor', () => {
    expect(toAmericanFloor(1)).toStrictEqual(0);
  })

  it("should return 4 for the 5th floor", () =>{
    expect(toAmericanFloor(5)).toStrictEqual(4);
  })

  it("should return 13 for the 15th floor", () =>{
    expect(toAmericanFloor(15)).toStrictEqual(13);
  })

  it("should return -3 for the -3rd floor", () =>{
    expect(toAmericanFloor(-3)).toStrictEqual(-3);
  })
});