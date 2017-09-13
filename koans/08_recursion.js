describe("Recursion", () => {
  describe("Implement factorial function using recursion", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // fact :: Number → Number
    function fact(n) {
      return n ? n * fact(n - 1) : 1;
    }
    /***************************************************************/

    test("gives mathematicaly correct result", () => {
      expect([0, 1, 2, 3, 4, 5].map(fact)).toEqual([1, 1, 2, 6, 24, 120]);
    });
  });

  describe("Implement tail-optimized factorial function", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // fact :: Number → Number
    function fact(n) {
      return factRec(n, 1);
    }

    function factRec(n, accumulator) {
      return n ? factRec(n - 1, n * accumulator) : accumulator;
    }
    /***************************************************************/

    test("gives mathematicaly correct result", () => {
      expect([0, 1, 2, 3, 4, 5].map(fact)).toEqual([1, 1, 2, 6, 24, 120]);
    });
  });

  describe("Implement fibonacci function using recursion", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // fib :: Number → Number
    function fib(n) {
      return n > 1 ? fib(n - 1) + fib(n - 2) : n;
    }
    /***************************************************************/

    test("maps n-th element to it's value", () => {
      expect([0, 1, 2, 3].map(fib)).toEqual([0, 1, 1, 2]);
      expect([15, 20, 25, 30].map(fib)).toEqual([610, 6765, 75025, 832040]);
    });
  });

  describe("Implement tail-optimized fibonacci function", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // fact :: Number → Number
    function fib(n) {
      return fibRec(n, 0, 1);
    }

    function fibRec(n, a, b) {
      return n > 0 ? fibRec(n - 1, b, a + b) : a;
    }
    /***************************************************************/

    test("maps n-th element to it's value", () => {
      expect([0, 1, 2, 3].map(fib)).toEqual([0, 1, 1, 2]);
      expect([15, 20, 25, 30].map(fib)).toEqual([610, 6765, 75025, 832040]);
    });
  });
});
