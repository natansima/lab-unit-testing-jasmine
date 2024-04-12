describe("Function add", () => {
      it("should be defined", () => {
        expect(add).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(add.length).toBe(2);
      });
  
      it("should return the sum of the two numbers", () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(3, 4)).toEqual(7);
        expect(add(100, 47)).toEqual(147);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(add(1)).toEqual(undefined);
        expect(add()).toEqual(undefined);
        expect(add(undefined, 1)).toEqual(undefined);
      });
   // TEST - Iteration 1.6
it("should return undefined if any of the arguments is not a number", () => {
//I Invoke the function with different inputs and check the result expect ( add (1, "2") ). toEqual (undefined) ;
expect ( add (1, "2") ). toEqual (undefined);
expect ( add ("3", 4) ). toEqual (undefined) ;
expect ( add ("100","47") ).toEqual(undefined);
}) ;
}) ;
