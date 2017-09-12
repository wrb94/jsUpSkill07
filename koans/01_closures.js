describe("Closures", () => {
  describe("Implement counter function", () => {

    /********************* YOUR IMPLEMENTATION *********************/

    // counter :: () → () → Number
    function counter() {
      let n = 0;
      return () => ++n;
    }

    /***************************************************************/

    test("returns counting function", () => {
      expect(typeof counter()).toEqual("function");
    });

    test("counts", () => {
      const count = counter();
      expect(count()).toEqual(1);
      expect(count()).toEqual(2);
      expect(count()).toEqual(3);
    });
  });

  // Now I recomend you go and solve 02_filter_map_reduce.js. Revisit this exercise after
  // you compleate filter function koans.

  describe("Implement a predicate function to drop not unique values", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // unique :: () → a → Boolean
    function unique() {
      const set = new Set();
      return (n) => {
        if (set.has(n)) return false;
        set.add(n);
        return true;
      }
    }
    /***************************************************************/

    test("keeps only first unique values dropping duplicates", () => {
      expect([1, 1, 2, 1].filter(unique())).toEqual([1, 2]);
      expect(["foo", "foz", "foo"].filter(unique())).toEqual(["foo", "foz"]);
    });
  });
});
