const { toLower, deburr, words, join, curry, compose, flow } = require("lodash/fp");

describe("Function composition", () => {
  describe("Given toLower, deburr, words, and join implement function to create a slug", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // slugify :: String -> String
    function slugify(str) {
      return join('-', words(deburr(toLower(str))));
    }
    /***************************************************************/

    test("changes title into a safe slug", () => {
      const result = slugify("River Café: 40 Years of Feasts and Firsts");
      expect(result).toEqual("river-cafe-40-years-of-feasts-and-firsts");
    });
  });

  describe("Compose toLower, deburr, words, and join using compose function", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // slugify :: String -> String
    const slugify = compose(toLower, deburr, join('-'), words);
    /***************************************************************/

    test("changes title into a safe slug", () => {
      const result = slugify("River Café: 40 Years of Feasts and Firsts");
      expect(result).toEqual("river-cafe-40-years-of-feasts-and-firsts");
    });
  });

  describe("Compose toLower, deburr, words, and join using flow function", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // slugify :: String -> String
    const slugify = flow(words, join('-'), deburr, toLower);
    /***************************************************************/

    test("changes title into a safe slug", () => {
      const result = slugify("River Café: 40 Years of Feasts and Firsts");
      expect(result).toEqual("river-cafe-40-years-of-feasts-and-firsts");
    });
  });
});

// BONUS: Make sure your first slugify implementation is using a point-free style
