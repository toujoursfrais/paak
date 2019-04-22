import { array } from '../array'
import { number } from '../number'
import { object } from '../object'
import { string } from '../string'

describe('Validating array', () => {  
  test('with array of string with correct data', () => {
    const schema = string('Friend\'s name must be text')
    const testData = ['John', 'Alex']
  
    expect(array('Collection is expecting a string', schema)(testData)).toBe(undefined)
  })

  test('with array of string with incorrect data', () => {
    const schema = number('Friend\'s age must be number')
    const testData = ['John', 'Alex']
  
    expect(array('Collection is expecting a number', schema)(testData)).toBe('Friend\'s age must be number')
  })

  test('with array of object with incorrect data (additional key=>value)', () => {
    const schema = object(
      'Missing field',
      {
        firstName: [ string('First name must be text') ],
        lastName: [ string('Last name must be text') ],
      }
    )
  
    const testData =  {
      firstName: 'John',
      lastName: 'Smith',
      hello: 'there'
    }
  
    expect(array('Collection has something wrong', schema)(testData)).toBe('Collection has something wrong')
  })

  test('with array of object with incorrect data', () => {
    const schema = object(
      'Missing field',
      {
        firstName: [ string('First name must be text') ],
        lastName: [ string('Last name must be text') ],
      }
    )
    const testData = [
      {
        firstName: 'John',
        lastName: true,
      }
    ]
  
    expect(array('Collection has something wrong', schema)(testData)).toBe('Last name must be text')
  })

  test('Validating Array of object with valid and complexed data', () => {
    const schema = object(
      'Missing field',
      {
        firstName: [ string('First name must be text') ],
        lastName: [ string('Last name must be text') ],
        hello: [
          object(
            'Invalid hello',
            {
              my: {
                name: {
                  is: [ string('is must be text') ]
                }
              }
            }
          )
        ]
      }
    )
    const testData = [
      {
        firstName: 'John',
        lastName:'Smith',
        hello: {
          my: {
            name: {
              is: false
            }
          }
        }
      }
    ]
  
    expect(array('Collection has something wrong', schema)(testData)).toBe('is must be text')
  })

})