import * as paak from './'

describe('Validating date', () => {
  test('with correct date', () => {
    const date = '2019-04-21T05:42:42.068Z'
    
    expect(paak.date('Invalid date')(date)).toBe(undefined)
  })

  test('with incorrect date', () => {
    const date = 'hello world'
    
    expect(paak.date('Invalid date')(date)).toBe('Invalid date')
  })
})