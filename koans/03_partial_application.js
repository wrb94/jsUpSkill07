describe("Partial application", () => {
  describe("Implement partially applied sum(a, b) function", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // sum :: Number → Number → Number
    function sum(a, b) {
      if (b || b === 0) return a + b;
      return (c) => a + c;
    }
    /***************************************************************/

    test("sum returns a function after applying a first argument", () => {
      expect(typeof sum(2)).toEqual("function");
    });

    test("returns correct result", () => {
      expect(sum(2)(1)).toEqual(3);
    });

    test("both arguments can be applied within a first call", () => {
      expect(sum(2, 3)).toEqual(5);
    });
  });

  describe("Implement partially applied map(fn, list) function", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // map :: (a → b) → [a] → [b]
    function map(fn, list) {
      if (list && list.length) return list.map(fn);
      return (list) => list.map(fn);
    }
    /***************************************************************/

    test("sum returns a function after applying a first argument", () => {
      expect(typeof map(x => x * x)).toEqual("function");
    });

    test("returns correct result", () => {
      expect(map(x => x * x)([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
    });

    test("both arguments can be applied within a first call", () => {
      expect(map(x => x * x, [1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
    });
  });
});
