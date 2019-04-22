import { object } from './'
import { string } from '../string'
import { array } from '../array'
import { required } from '../common'

describe('Validating object', () => {
  test('with correct object', () => {    
    const testData = {
      firstName: 'John',
      lastName: 'Smith',
      friends: [
        {
          firstName: 'Brad',
          lastName: 'Pitt'
        }
      ]
    }
    
    expect(object('Invalid object', {
      firstName: [string('First Name must be a text')],
      lastName: [string('Last Name must be a text')],
      friends: [
        array(
          'Some data in friends are not correct',
          object('Data in friends are not correct', {
            firstName: [string('First Name must be a text')],
            lastName: [string('Last Name must be a text')],
          })
        )
      ]
    })(testData)).toBe(undefined)
  })

  test('with incorrect object', () => {    
    const testData = 'john'
    
    expect(object('Invalid object', {
      firstName: [string('First Name must be a text')],
      lastName: [string('Last Name must be a text')],
      friends: [
        array(
          'Some data in friends are not correct',
          object('Data in friends are not correct', {
            firstName: [string('First Name must be a text')],
            lastName: [string('Last Name must be a text')],
          })
        )
      ]
    })(testData)).toBe('Invalid object')
  })

  test('with incorrect object (missing field)', () => {    
    const testData = {
      firstName: 'John',
      lastName: 'Smith' 
    }
    
    expect(object('Invalid object', {
      firstName: [string('First Name must be a text')],
      lastName: [string('Last Name must be a text')],
      friends: [
        array(
          'Some data in friends are not correct',
          object('Data in friends are not correct', {
            firstName: [string('First Name must be a text')],
            lastName: [string('Last Name must be a text')],
          })
        )
      ]
    })(testData)).toBe('Some data in friends are not correct')
  })

  test('with incorrect object (additional key in testData)', () => {    
    const testData = {
      firstName: 'John',
      lastName: 'Smith',    
      friends: [],
      interests: []
    }
    
    expect(object('Invalid object', {
      firstName: [string('First Name must be a text')],
      lastName: [string('Last Name must be a text')],    
    })(testData)).toBe('Invalid object (friends,interests)')
  })

})