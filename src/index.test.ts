import { sayHello } from "./index";

test('says "hello spencer"', () => {
  expect(sayHello("spencer")).toMatch("hello spencer");
});
