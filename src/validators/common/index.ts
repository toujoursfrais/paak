import VALIDATOR from '../type'

import { array } from '../array'
import { number } from '../number'
import { string } from '../string'

export const required = (error: string | boolean) => {
  return (value: any) => {
    if (value !== undefined) {
      return undefined
    }
    return error
  }
}
required.type = VALIDATOR

export const max = (error: string | boolean, length: number) => {
  return (value: any) => {

    if (!array(true)(value) || !string(true)(value)) {
      if (value.length <= length) {
        return undefined
      }
    } else if (!number(true)(value)) {
      if (value <= length) {
        return undefined
      }
    }  
    return error
  }
}
max.type = VALIDATOR

export const min = (error: string | boolean, length: number) => {
  return (value: any) => {
    
    if (!array(true)(value) || !string(true)(value)) {
      if (value.length >= length) {
        return undefined
      }
    } else if (!number(true)(value)) {
      if (value >= length) {
        return undefined
      }
    }

    return error
  }
}
min.type = VALIDATOR