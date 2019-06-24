const createDogs = require('./create-dog.js');

describe('descibe the dog', () => {
  it('dog', () => {
    const dog = createDogs('bilbo', 7, '29lbs');
    expect(dog).toEqual({
      name: 'bilbo',
      age: 7,
      weight: '29lbs'
    });
  });
})