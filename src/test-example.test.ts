const person = {
  isActive: true,
  age: 32,
}

describe('person', () => {
  test('person is defined', () => {
    expect(person).toBeDefined()
  })

  test('is active', () => {
    expect(person.isActive).toBeTruthy()
  })

  test('age limit', () => {
    expect(person.age).toBeLessThanOrEqual(32)
  })
})

export {}
// empty export to avoid warning: "cannot be compiled under '--isolatedModules' because it is considered a global script file. Add an import, export, or an empty 'export {}"
// https://www.typescriptlang.org/docs/handbook/2/modules.html#non-modules
