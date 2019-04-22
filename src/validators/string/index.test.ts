import { 
  string,
  email,
  mongodbId,
  phone
} from './'

describe('Validating string', () => {
  test('with correct string', () => {    
    const testData = 'hello'
    expect(string('Must be string')(testData)).toBe(undefined)
  })
  test('with invalid string', () => {    
    const testData = 0
    expect(string('Must be string')(testData)).toBe('Must be string')
  })

  // email
  test('with correct email', () => {    
    const testData = 'hello@gmail.com'
    expect(email('Must be email')(testData)).toBe(undefined)
  })
  test('with invalid string', () => {    
    const testData = 0
    expect(email('Must be email')(testData)).toBe('Must be email')
  })

  // mongodbId
  test('with correct email', () => {    
    const testData = '5ac78bb346d772f9168a0fd0'
    expect(mongodbId('Must be a mongo db id')(testData)).toBe(undefined)
  })
  test('with invalid string', () => {    
    const testData = '5ac78bb346d772f9168a0'
    expect(mongodbId('Must be a mongo db id')(testData)).toBe('Must be a mongo db id')
  })

  // phone
  test('with correct email', () => {    
    const testData = '123-233-1234'
    expect(phone('Must be a phone number')(testData)).toBe(undefined)
  })
  test('with invalid string', () => {    
    const testData = '123-233-12'
    expect(phone('Must be a phone number')(testData)).toBe('Must be a phone number')
  })
})