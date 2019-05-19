import camelize from "..";

describe("camelize", () => {
  describe("string", () => {
    test("split by underscore", () => {
      const arg = "foo_bar_baz";
      const res = camelize(arg);
      expect(res).toEqual("fooBarBaz");
    });

    test("split by dot", () => {
      const arg = "foo.bar.baz";
      const res = camelize(arg);
      expect(res).toEqual("fooBarBaz");
    });

    test("split by dash", () => {
      const arg = "foo-bar-baz";
      const res = camelize(arg);
      expect(res).toEqual("fooBarBaz");
    });
  });

  describe("object", () => {
    test("depth 1", () => {
      const arg = {
        foo_bar_baz: 42,
      };
      const res = camelize(arg);
      expect(res).toEqual({ fooBarBaz: 42 });
    });
  });
});
