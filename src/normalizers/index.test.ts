import {
  phone,
  time
} from '.'

/**
 * Test here mimicks keyboard input
 */
describe('Normalizing', () => {  
  test('phone number', () => {
    expect(phone('')).toBe('') 
    expect(phone('123')).toBe('123') 
    expect(phone('1234')).toBe('123-4')
    expect(phone('123456 7890')).toBe('123-456-7890')
    expect(phone('123-456-7890')).toBe('123-456-7890')
  })

  test('time', () => {
    expect(time('')).toBe('') 
    expect(time('01')).toBe('01') 
    expect(time('01 2')).toBe('01:2')
    expect(time('01 23')).toBe('01:23')    
  })
})