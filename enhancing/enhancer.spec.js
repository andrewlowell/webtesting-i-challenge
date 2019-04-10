const enhancer = require('./enhancer.js');
// test away!
test('repair durability to 100', () => {

  const oldItem = {
    name: "cape of flying death",
    durability: 34,
    enhancement: 10
  };
  const newItem = {
    name: "cape of flying death",
    durability: 100,
    enhancement: 10
  };

  expect(enhancer.repair(oldItem)).toEqual(newItem);

});

test('enhancement success less than 20', () => {

  const oldItem = {
    name: "cape of flying death",
    durability: 34,
    enhancement: 10
  };
  const newItem = {
    name: "cape of flying death",
    durability: 34,
    enhancement: 11
  };

  expect(enhancer.succeed(oldItem)).toEqual(newItem);

});

test('enhancement success 20 stays at 20', () => {

  const oldItem = {
    name: "cape of flying death",
    durability: 34,
    enhancement: 20
  };
  const newItem = {
    name: "cape of flying death",
    durability: 34,
    enhancement: 20
  };

  expect(enhancer.succeed(oldItem)).toEqual(newItem);

});

test('enhancement fail 18', () => {

  const oldItem = {
    name: "cape of flying death",
    durability: 34,
    enhancement: 18
  };
  const newItem = {
    name: "cape of flying death",
    durability: 24,
    enhancement: 17
  };

  expect(enhancer.fail(oldItem)).toEqual(newItem);

});

test('enhancement fail 15', () => {

  const oldItem = {
    name: "cape of flying death",
    durability: 34,
    enhancement: 16
  };
  const newItem = {
    name: "cape of flying death",
    durability: 24,
    enhancement: 16
  };

  expect(enhancer.fail(oldItem)).toEqual(newItem);

});

test('enhancement fail 14', () => {

  const oldItem = {
    name: "cape of flying death",
    durability: 34,
    enhancement: 14
  };
  const newItem = {
    name: "cape of flying death",
    durability: 29,
    enhancement: 14
  };

  expect(enhancer.fail(oldItem)).toEqual(newItem);

});

test('get that name son!', () => {

  const oldItem = {
    name: "cape of flying death",
    durability: 34,
    enhancement: 14
  };
  const newItem = {
    name: "[+14] cape of flying death",
    durability: 34,
    enhancement: 14
  };

  expect(enhancer.get(oldItem)).toEqual(newItem);

});