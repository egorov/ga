describe('objectBinarySearch', () => {

  const search = require('../src/objectBinarySearch');
  const identifiers = [
    {
      id: 1,
      name: 'jack'
    },
    {
      id: 2,
      name: 'sara'
    },
    {
      id: 3,
      name: 'bruce'
    },
    {
      id: 4,
      name: 'frank'
    },
    {
      id: 5,
      name: 'joe'
    },
    {
      id: 6,
      name: 'harry'
    },
    {
      id: 7,
      name: 'george'
    },
    {
      id: 8,
      name: 'edward'
    },
    {
      id: 9,
      name: 'owen'
    },
    {
      id: 10,
      name: 'bob'
    },
    {
      id: 11,
      name: 'ingmar'
    },
    {
      id: 12,
      name: 'dolly'
    },
    {
      id: 13,
      name: 'wally'
    },
    {
      id: 14,
      name: 'jose'
    },
    {
      id: 15,
      name: 'dave'
    },
    {
      id: 16,
      name: 'lucy'
    },
    {
      id: 17,
      name: 'ana'
    },
    {
      id: 18,
      name: 'jesus'
    },
    {
      id: 19,
      name: 'caesar'
    },
    {
      id: 20,
      name: 'magda'
    }
  ];

  function compareIdentifiers(left, right) {
    if(left.id < right.id)
      return -1;

    if(left.id > right.id)
      return 1;

    return 0;
  }

  function compareNames(left, right) {
    if(left.name < right.name)
      return -1;

    if(left.name > right.name)
      return 1;

    return 0;
  }

  it('should return index', () => {

    for(let i = 0; i < identifiers.length; i++){

      const index = search(identifiers, {id: i + 1}, compareIdentifiers);

      expect(identifiers[index]).toEqual(identifiers[i]);
    }
  });

  it('should return -1', () => {

    for(let i = 0; i < identifiers.length; i++){

      const index = search(identifiers, {id: i + 55}, compareIdentifiers);

      expect(index).toEqual(-1);
    }
  });

  it('should return index', () => {

    const values = Array.from(identifiers);

    values.sort(compareNames);

    const names = values.map(item => item.name);

    for(let i = 0; i < names.length; i++){

      const index = search(values, {name: names[i]}, compareNames);

      expect(values[index].name).toEqual(names[i]);
    }
  });
});