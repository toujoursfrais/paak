import {
  required,
  max,
  min
} from './'

describe('Validating common validators', () => {
  test('required with correct data', () => {
    const testData = 'hello world'
    
    expect(required('Required')(testData)).toBe(undefined)
  })

  test('required with incorrect data', () => {
    const testData = undefined
    
    expect(required('Required')(testData)).toBe('Required')
  })

  // min()
  test('min with correct number', () => {    
    expect(min('Must be greater than 5', 5)(5)).toBe(undefined)
  })

  test('min with correct array', () => {
    const testData = [0,1,2]
    expect(min('Array must be more than 3', 3)(testData)).toBe(undefined)
  })

  test('min with correct string', () => {
    const testData = 'hello world'
    expect(min('String must be more than 3 letters', 3)(testData)).toBe(undefined)
  })

  test('min with incorrect number', () => {    
    expect(min('Must be greater than 5', 5)(4)).toBe('Must be greater than 5')
  })

  test('min with incorrect array', () => {
    const testData = [0,1]
    expect(min('Array must be more than 3', 3)(testData)).toBe('Array must be more than 3')
  })

  test('min with incorrect string', () => {
    const testData = '12'
    expect(min('String must be more than 3 letters', 3)(testData)).toBe('String must be more than 3 letters')
  })

  // max()
  test('max with correct number', () => {    
    expect(max('Must be less than 5', 5)(5)).toBe(undefined)
  })

  test('max with correct array', () => {
    const testData = [0,1]
    expect(max('Array must be less than 3', 3)(testData)).toBe(undefined)
  })

  test('max with correct string', () => {
    const testData = 'ab'
    expect(max('String must be less than 3 letters', 3)(testData)).toBe(undefined)
  })

  test('max with incorrect number', () => {    
    expect(max('Must be less than 5', 5)(6)).toBe('Must be less than 5')
  })

  test('max with incorrect array', () => {
    const testData = [0,1,3,4]
    expect(max('Array must be less than 3', 3)(testData)).toBe('Array must be less than 3')
  })

  test('max with incorrect string', () => {
    const testData = '1234'
    expect(max('String must be less than 3 letters', 3)(testData)).toBe('String must be less than 3 letters')
  })

  
})